# WebAssembly with C/C++ and Webpack - Super Simple

## What this is for

**This starter is great if you have a few functions or a class you want to bring from c/c++ into js.** It uses [cpp-wasm-loader](https://github.com/Kobzol/cpp-wasm-loader) to load our c code in js, which works great for a few files/classes, but it does not support the linking of multiple files together, which rules out a lot of functionality. It supports **hot reload for c/c++ files**, which my other starter does not.

## Getting Started

### Dependencies

1. `brew install cmake`
2. Install [Xcode](https://itunes.apple.com/us/app/xcode/id497799835)
3. `brew install python@2` (May not be needed)
4. `npm install`

### Get (and compile) the emscripten toolchain

1. `git clone https://github.com/juj/emsdk.git`
2. `cd emsdk`
3. This can take a while: `./emsdk install --build=Release sdk-incoming-64bit binaryen-master-64bit`
4. `./emsdk activate --global --build=Release sdk-incoming-64bit binaryen-master-64bit`
5. `source ./emsdk_env.sh`

### Ensure that webpack can find your emcc executable

In `/build/webpack.common.js`, ensure that emccPath is a valid path to a emcc executable, if you installed the emscripten toolchain in your home directory, it should already be correct.

### Running

1. `npm run start`

### Building

1. `npm run build:dev`
2. `npm run build:prod`

## Resources

* [Webassembly.org](http://webassembly.org/)
* [Emscripten](http://kripken.github.io/emscripten-site/) is used for compiling c/c++ to Webassembly.
* [cpp-wasm-loader](https://github.com/Kobzol/cpp-wasm-loader) is the webpack loader for c and c++ files.
