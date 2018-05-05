# WebAssembly with C and Webpack

## Getting Started

### Dependencies
1. `brew install cmake`
2. Install [Xcode](https://itunes.apple.com/us/app/xcode/id497799835)
3. `brew install python@2` (May not be needed)

### Get (and compile) the toolchain
1. `git clone https://github.com/juj/emsdk.git`
2. `cd emsdk`
3. This can take a while: `./emsdk install --build=Release sdk-incoming-64bit binaryen-master-64bit`
4. `./emsdk activate --global --build=Release sdk-incoming-64bit binaryen-master-64bit`
5. `source ./emsdk_env.sh`

### Running
1. `npm run watch`

### Building
1. `npm run build:dev`
2. `npm run build:prod`
