#include <iostream>

namespace Animals
{
  int count = 10;

  void printCount()
  {
    std::cout << "Number of animals: " << count << std::endl;
  }
}

namespace Cars
{
  int count = 5;

  void printCount()
  {
    std::cout << "Number of cars: " << count << std::endl;
  }
}

int main()
{
  Animals::printCount(); // Wywołanie funkcji z przestrzeni nazw Animals
  Cars::printCount();    // Wywołanie funkcji z przestrzeni nazw Cars

  return 0;
}