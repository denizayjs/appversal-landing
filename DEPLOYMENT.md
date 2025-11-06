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

**IMPORTANT:** Update your Cloudflare Pages build settings to prevent infinite build loops.

In your Cloudflare Pages dashboard, update the following settings:

**Build command:**

```bash
bun run build:cloudflare
```

**OR:**

```bash
npm run build:cloudflare
```

**⚠️ Do NOT use `bun run build`** - This will cause an infinite recursion because OpenNext will detect and call the `build` script, which calls OpenNext again.

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

If you see the build command repeating infinitely (like `bun x opennextjs-cloudflare build` calling itself), this means:

1. **The `build` script in `package.json` must be `next build`** (NOT `opennextjs-cloudflare build`)
2. **Cloudflare Pages must use `build:cloudflare` as the build command** (NOT `build`)
3. The `build:cloudflare` script runs OpenNext, which will detect the `build` script and call `next build` directly, preventing recursion

**Current correct setup:**

- `package.json` → `"build": "next build"`
- `package.json` → `"build:cloudflare": "bunx opennextjs-cloudflare build"`
- Cloudflare Pages → Build command: `bun run build:cloudflare`

**Build Cache Issues**

If you encounter build cache problems, you can disable caching in Cloudflare Pages settings or clear the cache manually.

## Configuration Files

- **`wrangler.toml`** - Cloudflare Workers configuration
- **`open-next.config.ts`** - OpenNext configuration
- **`package.json`** - Build scripts configuration
