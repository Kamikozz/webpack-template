<div align="center">
  <img width="200" height="200" src="https://webpack.js.org/assets/icon-square-big.svg">
  <h1>Webpack Template</h1>
  <p align="right">based on <a href="https://www.youtube.com/playlist?list=PLkCrmfIT6LBQWN02hNj6r1daz7965GxsV" target="_blank">YouTube Guide in Russian</a>
  </p>
</div>

# **Packages:**
## **Webpack4:**
- `webpack`
- `webpack-cli`
- `webpack-dev-server` - to serve & auto-reload webpack
- `webpack-merge` - to split configuration into dev/prod config files

## **Eslint:**
- `eslint`
- `eslint-loader` - webpack eslint loader
- `eslint-plugin-import` - to show what sort of dependency do we have dev/prod in package.json
- `eslint-config-airbnb-base` - airbnb preset for eslint

## **Babel:**
- `@babel/core` 
- `@babel/preset-env`
- `babel-loader`
>  As of Babel 7.4.0, this package has been deprecated in favor of directly including core-js/stable (to polyfill ECMAScript features) and regenerator-runtime/runtime (needed to use transpiled generator functions) https://babeljs.io/docs/en/babel-polyfill/#usage-in-node-browserify-webpack
- `core-js`
- `regenerator-runtime`

## **Css:**
- `css-loader`
- `mini-css-extract-plugin`
- `style-loader`

## **Sass:**
- `sass-loader`
- `node-sass`

## **Postcss:**
- `css-mqpacker` - to process media queries (grouping of media queries)
- `autoprefixer` - to perform browser compatibility
- `cssnano` - to compress the css code + removes comments
- `postcss-loader`

## **HTML:**
- `html-webpack-plugin` - to insert 'styles.css' & 'scripts.js' into html tags automatically

## **Other files:**
- `file-loader` - to process other files (eg. images, .png, .gif)
- `copy-webpack-plugin` - just to copy files with directories from -> to

## **Other plugins/tools:**
- `clean-webpack-plugin` - to clean the `/dist` folder before each build

## **Source Maps:**
- allows to see exactly the same filename as the development *(not app.js, but script.js)*
```js
{
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        port: 8081,
        overlay: true,
    },
    plugins: [
        new Webpack.SourceMapDevToolPlugin({
            filename: '[file].map',
        })
    ]
}
```

---

## Build Setup:

``` bash
# Download repository:
git clone https://github.com/kamikozz/webpack-template webpack-template

# Go to the app:
cd webpack-template

# Install dependencies:
# 1. from package.json (with the given versions)
npm install
# 2. with newest versions
npm install --save-dev @babel/core @babel/preset-env autoprefixer babel-eslint babel-loader clean-webpack-plugin copy-webpack-plugin core-js css-loader css-mqpacker cssnano eslint eslint-config-airbnb-base eslint-loader eslint-plugin-import file-loader html-webpack-plugin mini-css-extract-plugin node-sass path postcss-loader regenerator-runtime sass-loader style-loader webpack webpack-cli webpack-dev-server webpack-merge

# Server with hot reload at http://localhost:8081/
npm run dev

# Output will be at dist/ folder
npm run build
```

## Project Structure:

* `src/index.html` - main app HTML
* `src/assets/scss` - put custom app SCSS styles here. Don't forget to import them in `index.js`
* `src/assets/css` - the same as above but CSS here. Don't forget to import them in `index.js`
* `src/assets/img` - put images here. Don't forget to use correct path: `assets/img/some.jpg`
* `src/js` - put custom app scripts here
* `src/index.js` - main app file where you include/import all required libs and init app
* `src/components` - folder with custom `.vue` components
* `src/store` - app store for vue
* `static/` - folder with extra static assets that will be copied into output folder

<div align="center">
  <h2>Settings:</h2>
</div>

## Main const:
Easy way to move all files.
Default:
``` js
const PATHS = {
  // Path to main app dir
  src: path.join(__dirname, '../src'),
  // Path to Output dir
  dist: path.join(__dirname, '../dist'),
  // Path to Second Output dir (js/css/fonts etc folder)
  assets: 'assets/'
}
```
## Customize:
Change any folders:
``` js
const PATHS = {
  // src must be src
  src: path.join(__dirname, '../src'),
  // dist to public
  dist: path.join(__dirname, '../public'),
  // assets to static
  assets: 'static/'
}
```

## Import Another libs:
1. Install libs
2. Import libs in `./index.js`
``` js
// React example
import React from 'react'
// Bootstrap example
import Bootstrap from 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
```

## Import only SASS or CSS libs:
1. Install libs
2. Go to `/assets/scss/utils/libs.scss`
3. Import libs in node modules
``` scss
// Sass librarys example:
@import '../../node_modules/spinners/stylesheets/spinners';
// CSS librarys example:
@import '../../node_modules/flickity/dist/flickity.css';
```

## Import js files:
1. Create another js module in `./js/` folder
2. Import modules in `./js/index.js` file
``` js
// another js file for example
import './common.js'
```

## HTML Dir Folder:
#### Default:
* .html dir: `./src`
* Configurations: in `./build/webpack.base.conf.js`
``` js
const PAGES_DIR = PATHS.src
```
**Usage:**
All files must be created in the `./src` folder.
Example:
``` bash
./src/index.html
./src/about.html
```

#### Change HTML Default Dir Folder:
Example for `./src/pages`:
1. Create folder for all html files in `./src`. Be like: `./src/pages`
2. Change `./build/webpack.base.conf.js` const PAGES_DIR:
``` js
// Old path
// const PAGES_DIR = PATHS.src

// Your new path
const PAGES_DIR = `${PATHS.src}/pages`
```
3. Rerun webpack dev server


**Usage:**
All files must be created in the `./src/pages` folder.
Example:
``` bash
./src/pages/index.html
./src/pages/about.html
```

## Create Another HTML Files:
#### Default: 
Automatic creation any html pages:
1. Create another html file in `./src` (main folder)
2. Open new page `http://localhost:8081/about.html` (Don't forget to RERUN dev server)
See more - [commit](https://github.com/vedees/webpack-template/commit/249e3ae3b4973a7300f271045178f9f5f431bb89)

#### Second method:
Manual (not Automaticlly) creation any html pages (Don't forget to RERUN dev server and COMMENT lines above)
1. Create another html file in `./src` (main folder)
2. Go to `./build/webpack.base.conf.js`
3. Comment lines above (create automaticlly html pages)
4. Create new page in html:
``` js
    new HtmlWebpackPlugin({
      template: `${PAGES_DIR}/index.html`,
      filename: './index.html',
      inject: true
    }),
    new HtmlWebpackPlugin({
      template: `${PAGES_DIR}/another.html`,
      filename: './another.html',
      inject: true
    }),
```
5. Open new page `http://localhost:8081/about.html` (Don't forget to RERUN dev server)

#### Third method: (BEST)
Сombine the first method and the second.
Example:
``` js
    ...PAGES.map(page => new HtmlWebpackPlugin({
      template: `${PAGES_DIR}/${page}`,
      filename: `./${page}`
    })),
    new HtmlWebpackPlugin({
      template: `${PAGES_DIR}/about/index.html`,
      filename: './about/index.html',
      inject: true
    }),
    new HtmlWebpackPlugin({
      template: `${PAGES_DIR}/about/portfolio.html`,
      filename: './about/portfolio.html',
      inject: true
    }),
```

## Add Fonts:

Сhoose one of the ways:
1. Handle menthod,
2. Use mixin;

### Handle:
Add @font-face in `/assets/scss/utils/fonts.scss`:

``` scss
// Example with Helvetica
@font-face {
  font-family: "Helvetica-Base";
  src: url('/assets/fonts/Helvetica/Base/Helvetica-Base.eot'); /* IE9 Compat Modes */
  src: url('/assets/fonts/Helvetica/Base/Helvetica-Base.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('/assets/fonts/Helvetica/Base/Helvetica-Base.woff') format('woff'), /* Pretty Modern Browsers */
       url('/assets/fonts/Helvetica/Base/Helvetica-Base.ttf')  format('truetype'), /* Safari, Android, iOS */
       url('/assets/fonts/Helvetica/Base/Helvetica-Base.svg') format('svg'); /* Legacy iOS */
}
```

Add vars for font in `/assets/scss/utils/vars.scss`:

``` scss
$mySecontFont : 'Helvetica-Base', Arial, sans-serif;
```

### Or with mixin:
By default template support only modern format fonts: .woff, .woffs;

If ypu need svg or more formaths use another mixin in `src/assets/scss/utils/mixin.scss`

**Usage:**
1. Put your font to `src/assets/fonts/FOLDERNAME/FONTNAME`.
FOLLOW: Files Required: 
Example: `.woff, .woffs` formats;
2. Go to `fonts.scss`;
3. Use mixin
Example: `@include font-face("OpenSans", "../fonts/OpenSans/opensans");`,
Example 2: `@include font-face("OpenSans", "../fonts/OpenSans/opensansItalic", 400, italic);`.

## License
[MIT](./LICENSE)

Copyright (c) 2020
