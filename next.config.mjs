/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: {
      displayName: false,
      ssr: true,
    },
  }
};

export default nextConfig;
