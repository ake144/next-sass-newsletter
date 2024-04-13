/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [ {
         hostname: 'images.aceternity.com'
      },
      {hostname: '"aceternity.com"'},
      {hostname: 'pixabay.com'},
      {hostname: 'source.unsplash.com'},
      {hostname:'unsplash.com'},
      {hostname:'assets.aceternity.com'}
    ]
    },
  };
  
  export default nextConfig;
  