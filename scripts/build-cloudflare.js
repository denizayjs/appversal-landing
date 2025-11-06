#!/usr/bin/env node

/**
 * Build script wrapper for Cloudflare Pages
 * This script temporarily modifies package.json to prevent OpenNext
 * from detecting and recursively calling the build script
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const packageJsonPath = path.resolve(__dirname, '..', 'package.json');
const packageJsonBackupPath = path.resolve(__dirname, '..', 'package.json.backup');

try {
  // Read original package.json
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
  const originalBuildScript = packageJson.scripts.build;
  
  // Create backup
  fs.writeFileSync(packageJsonBackupPath, JSON.stringify(packageJson, null, 2));
  
  // Temporarily change build script to next build to prevent recursion
  packageJson.scripts.build = 'next build';
  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
  
  console.log('Building with OpenNext for Cloudflare...');
  
  // Run OpenNext build
  execSync('bunx opennextjs-cloudflare build', {
    stdio: 'inherit',
    cwd: path.resolve(__dirname, '..'),
  });
  
  // Restore original package.json
  fs.writeFileSync(packageJsonPath, JSON.stringify(JSON.parse(fs.readFileSync(packageJsonBackupPath, 'utf8')), null, 2));
  fs.unlinkSync(packageJsonBackupPath);
  
  console.log('✓ Build completed successfully');
} catch (error) {
  // Restore package.json on error
  if (fs.existsSync(packageJsonBackupPath)) {
    const backup = JSON.parse(fs.readFileSync(packageJsonBackupPath, 'utf8'));
    fs.writeFileSync(packageJsonPath, JSON.stringify(backup, null, 2));
    fs.unlinkSync(packageJsonBackupPath);
  }
  console.error('✗ Build failed:', error.message);
  process.exit(1);
}

