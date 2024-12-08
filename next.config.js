const github = "static-preview-site/docs"

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  assetPrefix:  `/${github}/`,
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