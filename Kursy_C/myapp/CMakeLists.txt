cmake_minimum_required(VERSION 3.10)
project(myapp)
add_executable(${PROJECT_NAME} src/main.cpp)

set(CMAKE_CXX_STANDARD 20)

include(FetchContent)
FetchContent_Declare(
  googletest
  URL https://github.com/google/googletest/archive/03597a01ee50ed33e9dfd640b249b4be3799d395.zip
)

# For Windows: Prevent overriding the parent project's compiler/linker settings
set(gtest_force_shared_crt ON CACHE BOOL "" FORCE)
FetchContent_MakeAvailable(googletest)

enable_testing()

# nazwa (nazwa projekty-ut), sciezka to pliku z testami
add_executable(${PROJECT_NAME}-ut
  src/tests.cpp
)
target_link_libraries(${PROJECT_NAME}-ut
  GTest::gtest_main
)

include(GoogleTest)
gtest_discover_tests(${PROJECT_NAME}-ut)