# gw2bot-site

> The website of [GW2Bot by Maselkov](https://github.com/Maselkov/GW2Bot).
> 
> [gw2bot.info](https://gw2bot.info/)

## Build Setup

This project uses [Flask](http://flask.pocoo.org/) for backend and [Vue.js](https://vuejs.org/) with [Webpack template](https://github.com/vuejs-templates/webpack) for frontend.

### Prerequisites

- Download and install [Python](https://www.python.org/downloads/)
- Download and install latest LTS version of [Node](https://nodejs.org/en/download/)
- [Enable corepack to use yarn](https://yarnpkg.com/getting-started/install)

### Installation

``` bash
#Install backend dependencies, requires Python
pip install -r requirements.txt

# Install frontnend dependencies, requires Node
yarn install
```

### Run / Build

``` bash
# Serve with hot reload at localhost:8080
yarn run dev

# Build to ./dist for production with minification
yarn run build

# Build for production and view the bundle analyzer report
yarn run build --report

# See the production build in action at localhost:5000
py gw2botsite.py
```
