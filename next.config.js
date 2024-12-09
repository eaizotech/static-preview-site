const SITE_BASE_PATH = "/static-preview-site"
const isProd = process.env.NODE_ENV === 'production';

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  // assetPrefix: `${SITE_BASE_PATH}`,
  // basePath: `${SITE_BASE_PATH}`,
  trailingSlash: true,
  output: 'export',
  distDir: 'docs'

  // Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
  // trailingSlash: true,

  // Optional: Prevent automatic `/me` -> `/me/`, instead preserve `href`
  // skipTrailingSlashRedirect: true,

  // Optional: Change the output directory `out` -> `dist`
  // distDir: 'dist',
}

module.exports = nextConfig