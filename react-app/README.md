## Table of Contents

- [Installation](#installation)
- [Test](#usage)
- [Troubleshoot](#troubleshoot)

## Installation

### Clone Repository and install packages

```sh
$ git clone https://github.com/SujeshShakya/single-spa-demo.git
$ cd single_spa
$ npm install
$ cd react-app
$ npm install
```

### Running local

1. Start the root config application

   ```sh
   $ cd ..
   $ npm run start --port 9000
   ```

2. Start the react-app application

   ```sh
   $ cd react-app
   $ npm run start
   ```

3. Application will be running in `http://localhost:9000`

## Test

### Running unit tests

```sh
$ cd react-app
$ npm run test
```
