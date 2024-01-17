/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        formats: ['image/avif', 'image/webp'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: `${process.env.IMAGE_PROVIDER_BASEURL}`,
                port: '',
            }
        ]
    }
}

module.exports = nextConfig
