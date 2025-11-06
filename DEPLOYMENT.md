# Cloudflare Pages Deployment

This project is configured to deploy to Cloudflare Pages using OpenNext.

## Build Configuration

The project uses `@opennextjs/cloudflare` to transform Next.js builds for Cloudflare Workers compatibility.

### Build Commands

- **`npm run build`** - Standard Next.js build (prevents recursion with OpenNext)
- **`npm run build:cloudflare`** - Generates OpenNext build for Cloudflare (creates `.open-next/` directory)
- **`npm run build:next`** - Standard Next.js build (for local development)
- **`npm run deploy`** - Builds and deploys to Cloudflare Pages

### Cloudflare Pages Settings

In your Cloudflare Pages dashboard, ensure the following settings:

**Build command:**
```bash
npm run build:cloudflare
```

**OR:**
```bash
bun run build:cloudflare
```

**Deploy command:**
```bash
npx wrangler deploy
```

### How It Works

1. `npm run build:cloudflare` runs `bunx opennextjs-cloudflare build`
2. OpenNext uses the `buildCommand` from `open-next.config.ts` to run `bunx next build` directly (avoiding recursion)
3. OpenNext transforms the Next.js output for Cloudflare compatibility
4. Generates `.open-next/worker.js` - the Cloudflare Workers entry point
5. Wrangler deploys using the configuration in `wrangler.toml`

### Troubleshooting

**Error: "The entry-point file at '.open-next/worker.js' was not found"**

This means the build command didn't run the OpenNext transformation. Ensure you're using `npm run build:cloudflare` or `bun run build:cloudflare` (not `next build` directly).

**Infinite Build Loop**

If you see the build command repeating infinitely, ensure that:
- The `build` script in `package.json` is set to `next build` (not `opennextjs-cloudflare build`)
- Cloudflare Pages uses `build:cloudflare` as the build command
- The `open-next.config.ts` has `buildCommand: "bunx next build"` configured

**Build Cache Issues**

If you encounter build cache problems, you can disable caching in Cloudflare Pages settings or clear the cache manually.

## Configuration Files

- **`wrangler.toml`** - Cloudflare Workers configuration
- **`open-next.config.ts`** - OpenNext configuration
- **`package.json`** - Build scripts configuration
