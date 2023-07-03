#ifndef MYCLASS_H
#define MYCLASS_H // preprocessor guard

// class prototype DEFINICTION
class MyClass
{
private:
  int myInt{};

public:
  // constructor - oerload
  MyClass();
  MyClass(int someInt);
  ~MyClass(); // destructor

  void SOMECLASSMETHOD();
};
#endif