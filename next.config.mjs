/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.externals.push("pino-pretty", "lokijs", "encoding");

    // Grab the existing rule that handles SVG imports
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.('.svg'),
    )

    config.module.rules.push(
      {
        test: /\.svg$/i,
        type: 'asset',
        resourceQuery: /url/, // *.svg?url
      },
      // Convert all other *.svg imports to React components
      {
        test: /\.svg$/i,
        resourceQuery: { not: /url/ }, // exclude if *.svg?url
        use: [{ loader: '@svgr/webpack', options: { icon: true, dimensions: false, replaceAttrValues: { '#fff': 'currentColor' } } }],
      },
    )

    // Modify the file loader rule to ignore *.svg, since we have it handled now.
    fileLoaderRule.exclude = /\.svg$/i

    return config
  },
};

export default nextConfig;
