#!/usr/bin/env node

import { existsSync } from "fs";
import { join } from "path";

console.log("🔍 Verifying Vercel deployment setup...\n");

const checks = [
  {
    name: "vercel.json exists",
    check: () => existsSync("vercel.json"),
    fix: "Run the setup script to create vercel.json",
  },
  {
    name: "API handler exists",
    check: () => existsSync("api/index.ts"),
    fix: "Create api/index.ts file",
  },
  {
    name: "Build directory exists",
    check: () => existsSync("dist/spa"),
    fix: "Run npm run build to create build files",
  },
  {
    name: "Package.json has build script",
    check: () => {
      try {
        const pkg = JSON.parse(
          require("fs").readFileSync("package.json", "utf8"),
        );
        return pkg.scripts && pkg.scripts.build;
      } catch {
        return false;
      }
    },
    fix: "Add build script to package.json",
  },
];

let allPassed = true;

checks.forEach(({ name, check, fix }) => {
  const passed = check();
  const status = passed ? "✅" : "❌";
  console.log(`${status} ${name}`);

  if (!passed) {
    console.log(`   Fix: ${fix}`);
    allPassed = false;
  }
});

console.log("\n" + "=".repeat(50));

if (allPassed) {
  console.log("🎉 Ready for Vercel deployment!");
  console.log("\nNext steps:");
  console.log("1. Install Vercel CLI: npm i -g vercel");
  console.log("2. Login: vercel login");
  console.log("3. Deploy: vercel");
} else {
  console.log("❌ Some checks failed. Please fix the issues above.");
  process.exit(1);
}
