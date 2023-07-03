#include <iostream>
#include <vector>

using std::cin; // std - standard namespaces
using std::cout;
using std::endl;
using std::string;
using std::vector;

#include "myClass.h"

// CLASS IMPLEMENTATION outside  class
MyClass::MyClass(){};
MyClass::MyClass(int someInt) : myInt{someInt} {};
MyClass::~MyClass(){};

void MyClass::SOMECLASSMETHOD()
{
  cout << "LOREM LOREM" << myInt << endl;
};