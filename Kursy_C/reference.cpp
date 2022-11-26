#include <iostream>
#include <string>
#include <iomanip>
#include <limits>
#include <cmath>

using namespace std;

int main()
{
  int int_values{3};

  const int &reference_int_values_cant_modify{3};

  int &reference_to_int_values{int_values}; // references, can modyfy

  int *pointer_to_int_values{&int_values}; // pointer
  /**
   * modify throught changes reflect to original variable
   * changes reflect event in references
   */

  return 0;
}