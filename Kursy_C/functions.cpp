#include <iostream>
#include <string>
#include <iomanip>
#include <limits>
#include <cmath>

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
  [abc, bcd]() -> int
  {
    return abc + bcd;
  }();

  // access all variiable by value in body lambda func
  // or all by reference [&]
  [=]()
  {
    return abc + bcd;
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

// 17:40