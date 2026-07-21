import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'logos.hunter.io',
        port: ''
      },
      {
        protocol: 'https',
        hostname: 'www.google.com',
        port: ''
      }
    ]
  }
}

export default nextConfig
