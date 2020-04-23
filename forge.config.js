module.exports = {
  packagerConfig: {
    icon: 'public/assets/logo.ico',
  },
  makers: [
    {
      name: '@electron-forge/maker-squirrel',
      config: {
        name: 'Tugarin',
        authors: 'slavikse',
        setupExe: 'Tugarin.exe',
        setupIcon: 'public/assets/logo.ico',
      },
    },
  ],
  plugins: [
    [
      '@electron-forge/plugin-webpack',
      {
        mainConfig: 'webpack.config.js',
        renderer: {
          entryPoints: [
            {
              html: './public/index.html',
              js: './src/app.js',
              name: 'main_window',
            },
          ],
        },
      },
    ],
  ],
};
