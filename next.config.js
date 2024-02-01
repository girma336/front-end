/** @type {import('next').NextConfig} */
const hosturl = process.env.NEXT_PUBLIC_ASSETS;
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: hosturl,
        port: "",
        pathname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
