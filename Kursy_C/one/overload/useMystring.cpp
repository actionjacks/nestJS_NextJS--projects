#include <iostream>
#include "Mystring.h"

using namespace std;

int main()
{
  Mystring empty;
  Mystring jack{"Jack"};

  Mystring stooge{jack}; // copy construcotr

  empty.display();
  jack.display();
  stooge.display();

  Mystring a{"Hello"};
  Mystring b;
  b = a;

  b = "This is a test";

  return 0;
}