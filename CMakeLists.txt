cmake_minimum_required( VERSION 3.1 )
project( HelloCV )

# Use C++ 11 by default
set( CMAKE_CXX_STANDARD 11 )

# Set Release as default build type
if(NOT CMAKE_BUILD_TYPE)
    set(CMAKE_BUILD_TYPE Release)
endif(NOT CMAKE_BUILD_TYPE)

# Does not work
# find_package( OpenCV REQUIRED PATHS third-party/opencv-4.1.0/build_wasm NO_DEFAULT_PATH)

# Needed for opencv2/opencv.hpp
include_directories( third-party/opencv-4.1.0/include )

# Needed by opencv.hpp for opencv2/opencv_modules.hpp
include_directories( third-party/opencv-4.1.0/build_wasm )

# Needed by opencv_modules.hpp for every module
file( GLOB opencv_include_modules "third-party/opencv-4.1.0/modules/*/include" )
include_directories( ${opencv_include_modules} )

# Our hello world executable
add_executable( hello hello.cpp )

# Link to opencv.js precompiled libraries
file( GLOB opencv_js "third-party/opencv-4.1.0/build_wasm/lib/*.a" )
target_link_libraries( hello ${opencv_js} )

# Specify linker arguments
# set_target_properties( hello PROPERTIES LINK_FLAGS "-s DEMANGLE_SUPPORT=1 --preload-file assets --bind" )
set_target_properties( hello PROPERTIES LINK_FLAGS "-s DEMANGLE_SUPPORT=1 --bind" )
