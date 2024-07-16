/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
      return [
        {
          // Matching all static assets with these extensions
          source: '/:all*(svg|jpg|png|webp)',
          headers: [
            {
              key: 'Cache-Control',
              value: 'public, max-age=31536000, immutable', // 1 year cache, immutable
            },
          ],
        },
      ];
    },
  };
  
  export default nextConfig;