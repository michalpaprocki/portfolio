/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "ts", "tsx"],
  webpack: {
    module: {
      rules: [{ test: /\.css$/i, use: ["style-loader", "css-loader"] }],
    },
  },
};

module.exports = nextConfig;
