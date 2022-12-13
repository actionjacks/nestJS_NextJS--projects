#include <iostream>
#include <string>
#include <iomanip>
#include <limits>
#include <cmath>

using namespace std;
// pointer with pointer equivalent of zero is nullptr
int main()
{
  /**
   * pointer store an address in memory
   */
  int *p_number{};

  int int_var{43};
  int *p_int{&int_var}; // adress of operator (&)

  // declare and initialize pointer
  int *p_number{}; // nullptr initialize
  int *p_number2{nullptr};
  double *p_fractional_number{};

  int x = 4;
  int *pX = &x;
  // int is type
  // * is modyfier of type
  // pX variable name
  // & adress of
  // x is variable
  int y = *pX; // point to this address in memory and get value
  // the thing pointed to by

  /**
   * get value from pointer
   */
  int *pointer{nullptr};
  int int_data_{44};
  pointer = &int_data_; // now pointer point of adress of variable int_data_

  std::cout << "value : " << *pointer << std::endl;

  char *pointer_char{nullptr};   // deklaruje pointera ii wskazuje na nic
  char int_data_char{'A'};       // zmiena ktora jest znakiem
  pointer_char = &int_data_char; // pointer wskazuje adres zmiennej int_data_char
  delete pointer_char;           // reseting reference
  pointer_char = nullptr;

  int *pointer_int_2 = new int{21};

  return 0;
}

/**
 * stack and scope
 */
void dupa()
{
  int local_var{33};                // die after func execute
  int *local_var_pointer = new int; // no die after func

  if (local_var_pointer != nullptr)
  {
    return; // void
  }
  return; // void
}

void exceptionMechanism()
{
  for (size_t i{}; i < 100; i++)
  {
    try
    {
      int *lots_of_int3{new int[10000]};
    }
    catch (std::exception &ex)
    {
      std::cout << "cought exeption" << ex.what() << std::endl;
    }
  }
  // or
  for (size_t i{}; i < 100; i++)
  {
    // nothrow if fail value will be nullptr
    int *lots_of_ints12{new (std::nothrow) int[10000]};

    if (lots_of_ints12 == nullptr)
    {
      // faild
    }
    else
    {
      // succeeded
    }
  }

  int *pointer_to_check{};
  if (!(pointer_to_check == nullptr))
  {
    // god
  }
  else
  {
    // bad
  }
  // ten sam zapis
  if (pointer_to_check)
  {
    // god
  }
  else
  {
    // bad
  }
}
/**
 * POINTER AND REFERENCE
 */
int incremetator(int x)
{
  // zwraca kopie zmiennej
  return ++x;
}
int incremetator_(int *x)
{
  // mutuje zmienną
  return ++(*x);
}
void dupa()
{
  int *mypointer_;
  int var = 7;

  mypointer_ = &var; // pointer is adress in memory of var
  cout << "adres wskaznika" << mypointer_ << endl;

  cout << "vartość wskaznika" << *mypointer_ << endl;

  int &referece = var; // reference is value of var
} // reference get one time
// pointer can change
