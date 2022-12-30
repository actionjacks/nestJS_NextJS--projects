#include <iostream>
using namespace std;

template <typename T>
T sum(T a, T b)
{
  return a + b;
};

int main()
{

  sum<int>(2, 4.4);

  return 0;
};