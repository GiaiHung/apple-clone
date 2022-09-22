/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['rb.gy', 'cdn.sanity.io', 'lh3.googleusercontent.com', 'www.gravatar.com', 'cdn-icons-png.flaticon.com', 'www.apple.com']
  }
}

module.exports = nextConfig
