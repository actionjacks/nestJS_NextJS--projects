#include <iostream>
#include <string>
#include <iomanip>
#include <limits>
#include <cmath>

using namespace std;
int main()
{

  const size_t COUNT{10};
  // size_T
  for (size_t j{}; j < COUNT; ++j)
  {
    std::cout << "lotrem" << j << std::endl;
  }

  for (unsigned int i = 10; i < 10; ++i)
  {
    //
  }

  for (int i = 10; i < 10; ++i)
  {
    //
  }

  const unsigned int COUTER = 10;
  unsigned int literator = 0;

  // while loop
  while (literator < COUTER)
  {
    std::cout << "dupa" << std::endl;
    ++literator;
  }

  // do while loop
  do
  {
    std::cout << "dupa" << std::endl;
    ++literator;
  } while (literator < COUTER);

  // ARRAYs
  int scores[10];
  int scores__[] = {1, 2, 3, 4, 5, 6, 7, 8, 9}; // no need assign =
  string scores__2[]{"1", "2", "3"};            // no need assign =

  scores[5] = 12;
  // array lenght
  for (int i = 0; i < sizeof(scores); ++i)
  {
    std::cout << "scores" << scores[i] << std::endl;
  }

  return 0;
}

// 8:15