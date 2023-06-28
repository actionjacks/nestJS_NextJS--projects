#include <iostream>
#include <vector>
#include <cstring> // for c-style string functions
#include <cctype>  //for character-based function
#include <string>
#include <cmath>

using namespace std;

void fofunctio(string a); // PROTOTYPE
void zeroArray(int numbers[], size_t size);

int main()
{
  char initialName[20]{"fofofofo"};
  char toCopy[20]{};

  cout << "__ " << strlen(initialName) << endl; // print char lenght

  strcpy(toCopy, initialName); // copy initialName to toCopy
  strcat(initialName, "@");    // conncatenate initialName and a @
  strcat(toCopy, initialName); // concatenate initialName and toCopy

  string fo{"fo1"};
  string fo2{"fo2"};

  string sentence{};
  sentence = fo + fo2;
  cout << sentence << endl;

  string s1{"jacek placel"};
  for (int c : s1)
    cout << c << endl;

  cout << s1.substr(0, 4) << endl; // jace

  int numberToZeros[]{1, 2, 3, 4, 5};
  int size = sizeof(numberToZeros) / sizeof(numberToZeros[0]);

  for (int i = 0; i < size; i++)
  {
    std::cout << numberToZeros[i] << " ";
  }
  std::cout << "BEFORE " << std::endl;

  zeroArray(numberToZeros, 5);

  for (int i = 0; i < size; i++)
  {
    std::cout << numberToZeros[i] << " ";
  }
  std::cout << "AFTER " << std::endl;

  return 0;
}

void fofunctio(string value){
    // SOME FUNC
};

void zeroArray(int numbers[], size_t size)
{
  for (size_t i{0}; i < size; i++)
  {
    numbers[i] = 0;
  }
}