#include <iostream>
#include <vector>
#include <cstring> // for c-style string functions
#include <cctype>  //for character-based function
#include <string>
#include <cmath>

using namespace std;

void fofunctio(string a); // PROTOTYPE
void zeroArray(int numbers[], size_t size);
void dubleData(int *value);

void passByReference(int &num);

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
  cout << "AFTER " << endl;

  // PASS BY REFERENCE
  int mynum{25};
  passByReference(mynum);
  std::cout << "num passed by reference initial 25 now is " << mynum << std::endl;

  // POONTERS
  int fofofo{10};
  cout << fofofo << endl;
  cout << &fofofo << endl;

  int *pointerMy{nullptr};
  cout << pointerMy << endl;

  pointerMy = &fofofo;
  cout << pointerMy << endl;

  vector<string> names_{"jacek", "placek"};
  vector<string> *my_PointerV{nullptr};

  my_PointerV = &names_;

  cout << (*my_PointerV).at(0) << endl; // Jacek

  // DYNAMIC ALLOCATION EMORY
  int *int_pointer{nullptr};
  int_pointer = new int;

  cout << int_pointer << endl; // some adres
  *int_pointer = 100;
  cout << *int_pointer << endl; // 100
  delete int_pointer;           // need delete memory if new

  int vaL{20};
  dubleData(&vaL); // 40

  int *duble_pointer{nullptr};
  duble_pointer = &vaL;
  dubleData(duble_pointer); // 80

  // REFERENCE
  vector<string> arrayToChangeByReference{"123", "234", "345"};
  for (auto str : arrayToChangeByReference)
  {
    std::cout << str << " ";
  };

  for (auto &str : arrayToChangeByReference)
  {
    str = "New Value";
  };
  cout << "==== " << endl;

  for (auto str : arrayToChangeByReference)
  {
    std::cout << str << " ";
  };

  cout << "==== " << endl;

  int *Pointer_fo{nullptr};
  int foo_bar{12};
  Pointer_fo = &foo_bar;
  cout << "====" << Pointer_fo << endl;

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

void passByReference(int &num)
{
  num += 10;
};

void dubleData(int *value)
{
  *value *= 2;
};

void passByReferenceButCantChange(const int &num)
{
  // num += 10; //error
  cout << num << std::endl;
};