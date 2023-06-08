/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: "build",
};

module.exports = {
  optimizeFonts: false,
  
  images: {unoptimized: true,
  domains: [
    'images.unsplash.com', 'plus.unsplash.com'
  ]
}}
