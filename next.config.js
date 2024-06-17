/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
  reactStrictMode: true,
  env: process.env.API_URL,
  // async rewrites(){
  //   return [
  //     {
  //       source: '/img/:path*',
  //       destination: 'https://fakestoreapi.com/img/:path*'
  //     }
  //   ]
  // },
  images: {
    domains: ['fakestoreapi.com'],
  },
  // async redirects() {
  //   return [
  //     {
  //       source: '/product/1',
  //       destination: '/product/2',
  //       permanent: true,
  //     },
  //   ]
  // }
}

module.exports = nextConfig
