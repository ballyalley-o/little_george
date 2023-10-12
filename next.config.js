/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
    serverComponentsExternalPackages: ['mongoose'],
  },
  images: {
    domains: ['m.media-amazon.com'],
  },
  resolve: {
    alias: {
      '@globals': './globals.css',
    },
  },
}

module.exports = nextConfig
