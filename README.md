[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg?style=flat-square)](https://www.gnu.org/licenses/gpl-3.0) [![](https://img.shields.io/badge/gitmoji-%20😜%20😍-FFDD67.svg?style=flat-square)](https://gitmoji.dev) [![](https://img.shields.io/badge/KITSU-hello-orange?style=flat-square&logo=Kitsu)](https://kitsu.docs.apiary.io/#)

![](https://miro.medium.com/max/2800/1*K_GsJOj3T2ATvSVtT-YWEA.png)

## TABLE OF CONTENT

1. [Demo](#demo)
1. [Description](#description)
1. [Installation](#installation)
1. [Packages](#packages)
1. [NPM Scripts](#scripts)
1. [Conventions](#conventions)
1. [Ext. data](#external-data)
1. [Changelog](#change-log)

## DEMO

[HEROKU DEPLOYED](https://progressive-web-apps-2021.herokuapp.com/)

## DESCRIPTION

[@cmda-minor-web progressive-web-app-2021](https://github.com/cmda-minor-web/progressive-web-apps-2021)

Web-App-From-Scratch turned into a Progressive Web App (PWA). Using build scripts and enhancements to make the application faster and easier accessible for devices or places where the internet isn't as reliable.

| Shorthand | Meaning                 |
| :-------- | :---------------------- |
| **FOIT**  | Flash of Invisible Text |
| **TTFB**  | Time To First Byte      |
| **TTI**   | Time to Interactive     |

### Service Worker

The caching strategy for this small application would be **Cache First, network fallback**. The PWA first loads the cached CSS, HTML, and JS, if possible bypassing the network. If the content isn't available the service worker returns a response from the network.

This is ideal for this use case as the application has resources that rarely change _(Think about resources such as images and text)_.

| Before sw                    | After sw                     |
| ---------------------------- | ---------------------------- |
| **42** requests              | **53** requests              |
| **1.0** MB transferred       | **1.3** kB transferred       |
| **1.2** MB resources         | **1.9** MB resources         |
| Finish: **1.96** s           | Finish: **1.25** s           |
| DOMContentLoaded: **750** ms | DOMContentLoaded: **128** ms |
| Load: **902** ms             | Load: **220** ms             |

<sub>(Statistics are taken from heroku via Chrome Dev Tools, no throttle, desktop)</sub>

### Must Haves

The following enhancements have been done to make the responses as small as possible.

- Compress responses with compression middleware.
- Minify CSS
- Minimize amount of network requests by loading static files locally such as fonts and images.

### Could Haves

This project could benefit more from the following features/ optimalisations.

- Using the prerendered variant with the service worker to optimalize download sizes even further.
  - Issue is tha the paths aren't the same for the heroku deployed variant. This causes the serviceworker to error and thus not register anything in the cache [static served variant](https://progressive-web-apps-2021-one.vercel.app/).
- Caching the detailpages and images
  - Currently it doesn't cache the detailpages and thus not update the cache to potentionally navigate through the application.
  - Images that are requested over the network aren't cached on fetch.

## INSTALLATION

1. Git clone the project in your preferred folder and way

```ZSH
git clone https://github.com/dewarian/progressive-web-apps-2021.git
```

2. Run the install with the preferred package manager

```ZSH
npm install
# or yarn
yarn
```

3. Open project in preferred editor and have fun 🎉
   **Extra** `npm start` to run the project in the browser.
   _Replace npm with yarn if you prefer yarn_.

## PACKAGES

The node application uses a handful of packages to either render the application or to build the application to share.

**Dependencies**
Dependencies that the application needs to function.

- [Express](http://expressjs.com/) A minimalistic unopinionated web framework for Node.js
- [EJS](https://ejs.co/) 'Embedded JavaScript Templating' template language of choice.
- [Node-fetch]() Node version of the fetch web-API.
- [Compression](https://www.npmjs.com/package/compression) Nodejs Middleware, compresses response bodies based on options given.

**DevDependencies**
Dependencies used for development and aren't needed for the finished product.

- [Clean-CSS](https://www.npmjs.com/package/clean-css) CSS optimizer for Node.
- [Copy](https://www.npmjs.com/package/copy) Node command to run `cp` command across all systems.
- [Eslint + config / plugin](https://github.com/eslint/eslint) Linting that watches code patterns, and enforces those.
- [Mkdirp](https://www.npmjs.com/package/mkdirp) `mkdir` for Node.
- [Nodemon](https://www.npmjs.com/package/nodemon) Package that automatically restarts node.
- [NPM-run-all](https://www.npmjs.com/package/npm-run-all) Running scripts parallel or sequential, allows for cleaner scripts.
- [Prettier](https://github.com/prettier/prettier) Opinionated code formatter, enforces consistent code style.
- [Rimraf](https://www.npmjs.com/package/rimraf) Node command to run `rm -rf`.

## SCRIPTS

The project uses a few steps to build the application or to clean the application before building.
|Keyword|What does it do?|
|--|--|
|`start`|Start the application with nodemon.|
|`pretty`|Stylizes the code for readability.|
|`lint`|Checks the application for code style issues, adheres [google-style-guide](https://google.github.io/styleguide/jsguide.html).|
|`cleanup`|First runs `lint` then `pretty`.|
|`prebuild`|Deletes dist folder, creates new dist folder.|
|`build`|Run all scripts prefixed with build:\*\* .|
|`build:css`|Runs script in [build-css](https://github.com/dewarian/progressive-web-apps-2021/blob/master/scripts/build-css.js). Minifies and concatenates stylesheets.|
|`build:html`|Runs script in [build-html](https://github.com/dewarian/progressive-web-apps-2021/blob/master/scripts/build-html.js). Prerenders html pages.|
|`build:static`|Runs script in [build-static](https://github.com/dewarian/progressive-web-apps-2021/blob/master/scripts/build-static.js). Copy static files to the dist folder. E.g. fonts, images, JS and JSON files.|

## CONVENTIONS

- [Gitmojis](https://gitmoji.dev/)
- Linting (Google format)

## EXTERNAL DATA

[Kitsu api](https://kitsu.docs.apiary.io/) An JSON:API api that allows you to track upcoming anime, keep a list and more. specifically used to show current and past titles.

## CHANGE LOG

**13-03-2021**

- [:memo: Update readme based on feedback](https://github.com/dewarian/progressive-web-apps-2021/commit/22c48f2f7061ce916967437ca1173a0617370d7a)

**12-03-2021**

- [:rocket: :poop: Attempt on deploying (failed)]()
- [:wrench: Update tooling with ext. script](https://github.com/dewarian/progressive-web-apps-2021/commit/7c0a915fe29f321d3d589df83293c041d684369e)

**09-03-2021**

- [:lipstick: Setup styling](https://github.com/dewarian/progressive-web-apps-2021/commit/312b4c04809b5621dabf046acaa7473b0b4a36fa)
- [:wrench: Update tooling](https://github.com/dewarian/progressive-web-apps-2021/commit/cb42c32c6d39c240f139f40d1fe639bcf22a3998)
- [:bento: Setup templating](https://github.com/dewarian/progressive-web-apps-2021/commit/588e08a92d62f47d6d9c1083144d4f121ae2086c)
- [:poop: Add API call](https://github.com/dewarian/progressive-web-apps-2021/commit/0561afd1fcb7bf6aaae7e0c84c2a50f2f9f9a149)

**08-03-2021**

- [:see_no_evil: Setup gitignore](https://github.com/dewarian/progressive-web-apps-2021/commit/a53aff9d139808daf73cb38509354b0de364a469)
- [:fire: remove school boilerplate](https://github.com/dewarian/progressive-web-apps-2021/commit/65f5d11e9511ec301fcfb136f176d1e1238c9ed8)
- [:memo: Add base of readme](https://github.com/dewarian/progressive-web-apps-2021/commit/206aa586f8ef8ed85192f86f9017b384c0b34699)

## RESOURCES

https://shields.io/  
https://simpleicons.org/?q=kitsu
https://maskable.app/editor
