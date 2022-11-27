#include <iostream>
#include <string>
#include <iomanip>
#include <limits>
#include <cmath>
// for strings
using namespace std;

int main()
{
  std::cout << "C is alphabetic?" << std::isalpha('C') << std::endl;

  std::cout << "is blank?" << std::isblank(' ') << std::endl;

  std::cout << "is islower?" << std::islower('l') << std::endl;

  std::cout << "is isupper?" << std::isupper('L') << std::endl;

  char anyDigit[]{"jacek placek 12"};
  for (auto character : anyDigit)
  {
    if (std::isdigit(character))
    {
      std::cout << "character" << character << std::endl;
    }
  }

  return 0;
}

// 13:09