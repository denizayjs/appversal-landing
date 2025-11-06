# Cloudflare Pages Deployment

This project is configured to deploy to Cloudflare Pages using OpenNext.

## Build Configuration

The project uses `@opennextjs/cloudflare` to transform Next.js builds for Cloudflare Workers compatibility.

### Build Commands

- **`npm run build`** - Generates OpenNext build for Cloudflare (creates `.open-next/` directory)
- **`npm run build:next`** - Standard Next.js build (for local development)
- **`npm run deploy`** - Builds and deploys to Cloudflare Pages

### Cloudflare Pages Settings

In your Cloudflare Pages dashboard, ensure the following settings:

**Build command:**
```bash
npm run build
```

**Deploy command:**
```bash
npx wrangler deploy
```

### How It Works

1. `npm run build` runs `npx @opennextjs/cloudflare build`
2. This internally runs `next build` and transforms the output
3. Generates `.open-next/worker.js` - the Cloudflare Workers entry point
4. Wrangler deploys using the configuration in `wrangler.toml`

### Troubleshooting

**Error: "The entry-point file at '.open-next/worker.js' was not found"**

This means the build command didn't run the OpenNext transformation. Ensure you're using `npm run build` (not `next build` directly).

**Build Cache Issues**

If you encounter build cache problems, you can disable caching in Cloudflare Pages settings or clear the cache manually.

## Configuration Files

- **`wrangler.toml`** - Cloudflare Workers configuration
- **`open-next.config.ts`** - OpenNext configuration
- **`package.json`** - Build scripts configuration
