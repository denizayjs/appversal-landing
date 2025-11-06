# Cloudflare Pages Deployment

This project is configured to deploy to Cloudflare Pages using OpenNext.

## Build Configuration

The project uses `@opennextjs/cloudflare` to transform Next.js builds for Cloudflare Workers compatibility.

### Build Commands

- **`npm run build`** - OpenNext build for Cloudflare (automatically prevents recursion via wrapper script)
- **`npm run build:cloudflare`** - Direct OpenNext build (alternative method)
- **`npm run build:next`** - Standard Next.js build (for local development)
- **`npm run deploy`** - Builds and deploys to Cloudflare Pages

### Cloudflare Pages Settings

**Build command:**

```bash
bun run build
```

**OR:**

```bash
npm run build
```

The `build` script uses a wrapper (`scripts/build-cloudflare.js`) that temporarily modifies `package.json` to prevent infinite recursion. This allows Cloudflare Pages to use the standard `build` command while still generating the `.open-next/` directory needed for deployment.

**Deploy command:**

```bash
npx wrangler deploy
```

### How It Works

1. `npm run build` runs `scripts/build-cloudflare.js` wrapper script
2. The wrapper temporarily changes `package.json` `build` script to `next build` to prevent recursion
3. Wrapper runs `bunx opennextjs-cloudflare build`
4. OpenNext detects the `build` script and calls `next build` (no recursion because it's been temporarily changed)
5. OpenNext transforms the Next.js output for Cloudflare compatibility
6. Generates `.open-next/worker.js` - the Cloudflare Workers entry point
7. Wrapper restores original `package.json`
8. Wrangler deploys using the configuration in `wrangler.toml`

### Troubleshooting

**Error: "The entry-point file at '.open-next/worker.js' was not found"**

This means the build command didn't run the OpenNext transformation. Ensure you're using `npm run build` (which uses the wrapper script) or `npm run build:cloudflare`.

**Infinite Build Loop**

If you see the build command repeating infinitely, check that:

1. The `build` script in `package.json` is set to `node scripts/build-cloudflare.js`
2. The wrapper script (`scripts/build-cloudflare.js`) exists and is executable
3. Cloudflare Pages is using `bun run build` or `npm run build` as the build command

The wrapper script automatically prevents recursion by temporarily modifying `package.json` before running OpenNext.

**Build Cache Issues**

If you encounter build cache problems, you can disable caching in Cloudflare Pages settings or clear the cache manually.

## Configuration Files

- **`wrangler.toml`** - Cloudflare Workers configuration
- **`open-next.config.ts`** - OpenNext configuration
- **`package.json`** - Build scripts configuration
- **`scripts/build-cloudflare.js`** - Build wrapper script that prevents recursion
