module.exports = {
  plugins: [
    ["postcss-import", {}],
    ["postcss-preset-env", {
      browsers: "last 2 versions"
    }],
    ["postcss-custom-media", {}],
    ["autoprefixer", {}],
    // Add PurgeCSS here
    process.env.NODE_ENV === 'production' ? [
      '@fullhuman/postcss-purgecss',
      {
        content: ['./src/**/*.html', './src/**/*.js', './src/**/*.vue'], // Adjust based on your project
        defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
        safelist: [/^custom-/, /^dynamic-/], // Add safelisted classes here
      }
    ] : false
  ].filter(Boolean)
};
