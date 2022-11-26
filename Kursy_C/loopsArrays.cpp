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
  string scores__3[]{"1", "2", "3"};            // no need assign =

  scores[5] = 12;
  // array lenght
  for (int i = 0; i < std::size(scores); ++i)
  {
    std::cout << "scores" << scores[i] << std::endl;
  }

  for (size_t i{0}; i < std::size(scores); ++i)
  {
    std::cout << "scores" << scores[i] << std::endl;
  }

  int SUM_2 = {0};
  for (int element : scores__)
  {
    SUM_2 += element;
  }

  int count_1_2[]{1, 2, 4, 5, 6};
  int counter_array_1 = std::size(count_1_2); // get array size
  // or
  int counter_array_2 = sizeof(count_1_2) / sizeof(count_1_2[0]);

  for (auto i : count_1_2)
  {
    std::cout << "scores" << count_1_2[i] << std::endl;
  }

  char message_hello[5]{'h', 'e', 'l', 'l', 'o'};
  // string literal
  char message44[] = "lorem";
  std::cout << "message44" << message44 << std::endl;

  /**
   * dynamic allocation arrays
   */
  size_t size{10};

  // salaries array will contain garbage values
  double *p_salaries{new double[size]};
  // all values initialized to 0
  int *p_students{new (std::nothrow) int[size]{}};
  // allocating memory space for an array
  // of size double vars first 5 will be initalized 1,2,3,4,5 rest will be 0
  double *p_scores{new (std::nothrow) double[size]{1, 2, 3, 4, 5}};

  // releasing memory
  delete[] p_salaries;
  p_salaries = nullptr;
  delete[] p_salaries;
  p_students = nullptr;
  delete[] p_salaries;
  p_scores = nullptr;

  int scores_[10]{1, 2, 3, 4, 5, 6, 7, 8, 9, 10}; // lives on the stack

  // dynamic no size cant loop
  int *p_scores_22 = new int[10]{1, 2, 3, 4, 5, 6, 7, 8, 9, 10}; // dynamic array

  return 0;
}