// Імпортуємо модулі html-webpack-plugin і path 
// і визначаємо змінні для ціх модулів HtmlWebpackPlugin і path відповідно.
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const FileManagerPlugin = require('filemanager-webpack-plugin');
// Зміна для CSS
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// !Змінна для мінімізації зображень
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
// цей запис означає, що всі параметри цього файлу розміщуються в об'єкті, 
// який експортується як модуль за замовчуванням.
module.exports = {
  // Налавштування точок входу та виходу
  entry: path.join(__dirname, 'src', 'index.js'),
    output: {
      path: path.join(__dirname, 'dist'),
      filename: 'index.[contenthash].js',
      // Налаштування для картинок. Зображення будуть зберігатися у папці images
      assetModuleFilename: path.join('images', '[name].[contenthash][ext]'),
    },
     // Створили об'єкт module, для якого задали правило rules
    // Тут для всіх модулів (читай, файлів) з розширенням .js
    // webpack буде застосовувати плагін 
    // ?babel- loader. 
    // Правило не діє каталог 
    // ?node_modules,
    // що вказується у властивості 
    // ?module.rules.exclude.
    module: {
      rules: [
      // !Правила для шрифтів
      {
       test: /\.(woff2?|eot|ttf|otf)$/i,
          type: 'asset/resource',
          generator: {
            filename: path.join('fonts', '[name].[contenthash][ext]'),
          }
     },
      // Правила для зображень
      {
       test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
        {
        // svg переносяться у папку icons
        test: /\.svg$/,
        type: 'asset/resource',
        generator: {
          filename: path.join('icons', '[name].[contenthash][ext]'),
        },
       },
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/,
            },
            // Правило для перетворення pug файлів
            {
              test: /\.pug$/,
              loader: 'pug-loader',
            },
            // ! Привило для файлів Sass
            {
              test: /\.(scss|css)$/,
              use: [
                // 'style-loader',
                // ! Замінемо 'style-loader'
                MiniCssExtractPlugin.loader,
                'css-loader', 'postcss-loader', 'sass-loader'],
            }

    ],
    },
   
    //   Для плагіна html-webpack-plugin створюється екземпляр new HtmlWebpackPlugin 
        // з двома заданими властивостями: 
        // template – шлях до вхідного файлу та 
        // filename – ім'я вихідного файлу.
  plugins: [
    new HtmlWebpackPlugin({
    //  template: path.join(__dirname, 'src', 'template.html'),
        // Замість html використовуємо pug
        template: path.join(__dirname, 'src', 'template.pug'),
      filename: 'index.html',
    }),
       // Підключаємо плагін для очищення
        new FileManagerPlugin({
       events: {
         onStart: {
           delete: ['dist'],
        },
      },
        }),
        // !Плагін для CSS 
        new MiniCssExtractPlugin({
      filename: '[name].css',     }),
    ],
     //  watchFiles вказує на каталог src, за якими вестиметься спостереження і у випадку, 
        // якщо в каталозі відбудуться зміни, 
        // веб- сервер автоматично зробить складання проекту і перезавантажить сторінку браузера.
        // port вказує порт, на якому буде працювати веб-сервер, за замовчуванням - localhost:8080
    devServer: { 
    watchFiles: path.join(__dirname, 'src'),
     port: 9000,
  },
    // !Налаштування оптимізації зображень
    optimization: {
     minimizer: [
      new ImageMinimizerPlugin({
        minimizer: {
          implementation: ImageMinimizerPlugin.imageminMinify,
           options: {
             plugins: [
               ['gifsicle', { interlaced: true }],
               ['jpegtran', { progressive: true }],
               ['optipng', { optimizationLevel: 5 }],
              ['svgo', { name: 'preset-default' }],
             ],
           },
         },
       }),
    ],
  },
};