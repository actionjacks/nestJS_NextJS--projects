#include <iostream>
#include <string>
#include <iomanip>
#include <limits>
#include <cmath>
#include <cstring>
#include <concepts>
#include <type_traits>
using namespace std;

// pass by pointer
void say_age(int *age);

int main(int argc, char **argv)
{
  int age{12};
  // age 12
  say_age(&age);
  // say_age(age);by reference - reference to orginal value
  // age 13

  // lambda function
  auto mylambdafunv = [](float a_, float b_)
  {
    return (std::abs(a_) < std::abs(b_));
  };
  mylambdafunv(true, false);

  []()
  {
    std::cout << "declare and call" << std::endl;
  }();

  [](int a_, int b_) -> int
  {
    return a_ + b_;
  }(2, 4);

  // capture variable inside func
  // variable is copy or capture by reference change val
  //  [&abc, &bcd]() -> int
  int abc = 2;
  int bcd = 12;
  [abc, bcd]() -> int // can spec return type
  {
    return abc + bcd;
  }();

  // access all variiable by value in body lambda func
  // or all by reference [&]
  [=]()
  {
    return abc + bcd;
  }();

  // capture by reference
  int c{32};
  [&c]()
  {
    return ++c;
  }();

  auto lambdaFuncAceptAllByReference = [&]()
  {
    return ++c;
  }();

  return 0;
}

void say_age(int *age)
// void say_age(int& age)by reference
{
  ++(*age);
  //++age; by reference orginal val will be modyf
  std::cout << "age : " << *age << std::endl;
  // age 13
}

// overload
int say_age2(int a, int b)
{
  return a + b;
}

double say_age2(double a, double b)
{
  return a + b;
}

// template blueprint
template <typename T>
T maximumFunc(T a, T b);

template <typename T>
const T &maximumFunc2(const T &a, const T &b); // pass as reference

// template specialization
template <typename T>
T maximumFunc3(T a, T b);

template <>
const char *maximumFunc3<const char *>(const char *a, const char *b);

int someFunc()
{
  std::cout << "use func blueprint" << maximumFunc(12, 12) << std::endl; // to use params need same same type
  std::cout << "use func blueprint" << maximumFunc(1.23, 12.23) << std::endl;

  maximumFunc<int>(1, 2);
  maximumFunc<int>(1.2, 2.2); // make conversion doubles to int
  maximumFunc<double>(1, 2.2);

  return 0;
}

template <typename T>
T maximumFunc(T a, T b)
{
  return (a > b) ? a : b;
}

// pass as reference
template <typename T>
const T &maximumFunc2(const T &a, const T &b)
{
  return (a > b) ? a : b;
}

// template specialization
// now can pas int, doouble, char, strings
template <>
const char *maximumFunc3<const char *>(const char *a, const char *b)
{
  return (std::strcmp(a, b) > 0) ? a : b;
};

/**
 * concept
 */
template <typename T>
// integral variable cant be double type
requires std::integral<T> // can use function if will satisfy concept
                          // requires std::is_integral_v<T> - custom concept
    T addFunc(T a, T b)
{
  return a + b;
}
// same
template <std::integral T>
T addUsingConcept(T a, T b)
{
  return a + b;
}
// or
auto addUsingConcept2(std::integral auto a, std::integral auto b)
{
  return a + b;
}
// or
template <typename T>
T addUsingConcept3(T a, T b) requires std::integral<T>
{
  return a + b;
}

/**
 * custom concept
 */
template <typename T>
concept MyIntegral = std::is_integral_v<T>;
// or
template <typename T>
concept Multipliable = requires(T a, T b)
{
  (a * b);
};
// or
template <typename T>
concept Incrementable = requires(T a)
{
  a += 1;
  ++a;
  a++;
};

// using custom conept
template <typename T>
requires Multipliable<T>
    T add_usingMyConcept(T a, T *b)
{
  return a + b;
};

template <Multipliable T>
T add_usingMyConcept(T a, T *b)
{
  return a + b;
};

auto add_usingMyConcept(Multipliable auto a, Multipliable auto b)
{
  return a + b;
};

template <typename T>
T add_function2(T a, T b) requires MyIntegral<T>
{
  return a + b;
};

/***
 *  REQUIREMENT
 */
template <typename U>
concept TinyType = requires(U u)
{
  sizeof(U) <= 4;          // simple requirement : only check syntax
  requires sizeof(U) <= 4; // nested requirement checks the if the expression is true
};

template <typename T>
concept Addable_ = requires(T a, T b)
{
  {
    a + b
  }
  noexcept->std::convertible_to<int>; // compound requrement
  // check if a+b is valid syntax and result is converible to int
};

template <typename T>
concept TinyType_ = requires(T t)
{
  sizeof(T) <= 4;
  requires sizeof(T) <= 4;
};

template <typename T>
T myFunctUsingTinyType_ConceptAndIntegral2(T t) requires std::integral<T> && TinyType_<T>
{
  std::cout << "value" << srd::endl;
};

template <typename T>
T myFunctUsingTinyType_ConceptAndIntegral(T t) requires std::integral<T> && requires(T t)
{
  sizeof(T) <= 4;
  requires sizeof(T) <= 4;
}
{
  std::cout << "value" << srd::endl;
  return (2 * t);
};
