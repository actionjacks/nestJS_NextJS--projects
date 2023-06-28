#include <iostream>
#include <vector>

using std::cin; // std - standard namespaces
using std::cout;
using std::endl;
using std::vector;

int main()
{
  int myNumber;
  const int canChangeT{3};

  cout << "HELO WORLD _ enter number" << endl;

  int fo = {12}; // unsigned - moze przyjmowac tylko NIEujemne wartości
  // unsigned int fo2 = {-1}; //Error

  // cin >> myNumber; // INPUT console

  cout << myNumber << endl;
  cout << "\n new line" << endl; // Escape char \n

  // Arrays
  int arrayInt[]{1, 2, 3, 4};
  int arrayInt2[1]{1};

  cout << arrayInt[2] << endl;
  cout << endl;

  int arrayInt3[][4]{
      {0, 3, 4, 5},
      {1, 2, 3, 4}}; // arrayInt3[0][0] => 0

  //  VECTORS dynamic Array
  vector<int> vectorArray = {22, 1, 32};
  vectorArray.push_back(1);
  vectorArray.push_back(2);

  cout << vectorArray[2] << endl;
  cout << endl;
  cout << vectorArray.at(0) << endl;
  cout << vectorArray.size() << endl;

  // conversion
  auto fooNum = {2 * 5.2}; // doouble

  double fooNum2 = {2.2};

  auto result2 = static_cast<int>(fooNum2);

  cout << result2 << " statuc_cast" << endl;
  cout << endl;

  // int a = 5;
  // int b = 10;

  // auto result = a <=> b;

  // if (result < 0)
  // {
  //   std::cout << "a < b" << std::endl;
  // }
  // else if (result == 0)
  // {
  //   std::cout << "a == b" << std::endl;
  // }
  // else
  // {
  //   std::cout << "a > b" << std::endl;
  // }

  // LOOP
  for (int i{0}, j{1}; i <= 5; ++i) // kilka warunkow idw aeau
  {
    std::cout << i << std::endl;
  };

  int scoo[]{10, 20, 30};

  for (int sc : scoo)
  {
    std::cout << sc << std::endl;
  };

  for (auto var : {2, 3, 4, 5})
  {
    std::cout << var << std::endl;
  };

  std::vector<std::vector<int>> vector_2d{
      {1, 2, 3},
      {4, 5, 3},
      {2, 5, 6}};

  for (auto vec : vector_2d)
  {
    for (auto val : vec)
    {
      std::cout << val << " Vector_2d" << std::endl;
    }
    cout << endl;
  };

  return 0;
}
