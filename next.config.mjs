/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: "/react-portfolio",
  output: "export",  // <=== enables static exports
  webpack: (config, { isServer }) => {
    // Add a rule to handle PDF files
    config.module.rules.push({
      test: /\.(pdf)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            publicPath: '/_next/',
            name: 'static/media/[name].[hash].[ext]',
          },
        },
      ],
    });

    if (!isServer) {
      // Ensure that the file-loader is applied to the client as well
      config.resolve.fallback.fileSystem = false;
    }

    return config;
  },
};


export default nextConfig;
