# emscripten-opencv

Or how to use opencv as a dependency in WebAssembly (wasm) code.
This repository is an attempt at doing very basic image tasks like:

- Decoding an image into a Mat.
- Doing some matrix processing.
- Exposing matrix data back to JavaScript.

## Setup

You need to have [emscripten][emscripten] installed and accessible (source the shell scripts).
You also need [OpenCV][opencv] source code to be able to compile its wasm version.
Adapt the `CMakeLists.txt` to the location of your OpenCV directory.

[emscripten]: https://emscripten.org/index.html
[opencv]: https://opencv.org/

## Activate Emscripten in the shell

You can add some code to your shell config file.
Personally I just run the following (fish shell) when I need it.

```
source ~/programs/emsdk/emsdk_env.fish
```

## Build OpenCV.js

OpenCV.js is the name of the Emscripten build of OpenCV.
In our case, we are building it for WebAssembly (wasm).

```
python ./platforms/js/build_js.py build_wasm --build_wasm
```

> PS: You can modify the `build_js.py` file to enable/disable modules.

## Building this example with Emscripten

```
mkdir build
cd build
emconfigure cmake ..
emmake make
```

## Running the example in the browser

After building the example, just deploy a static http server at the root of this repository.

```
python -m http.server 8080
```

Then open your localhost page, and look at the dev tools console.
