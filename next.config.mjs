/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "s3-alpha-sig.figma.com",
        port: "",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/dzpgkq215/image/upload/**",
      },
    ],
    images:{
      domains: ['s3-alpha-sig.figma.com', 'res.cloudinary.com']
    }
  },
};

export default nextConfig;
