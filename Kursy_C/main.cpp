#include <iostream>
#include <string>
#include <iomanip>
#include <limits>
#include <cmath>

// https://en.cppreference.com/w/cpp/language/operator_precedence
// parameter passed this way are scoped localy in fun
// inside the func are acrually COPIES of the arguments
int addNumbers(int arg1, int arg2)
{
  return arg1 + arg2;
}

using namespace std;
int main()
{
  string jacek = "jajc";
  auto loool = "od";

  int first_num = {13};
  int sec_num = {4};
  int sum = addNumbers(first_num, sec_num);

  std::cout << "lol" << std::endl;
  std::cout << "SUMA" << sum << std::endl;

  // w8 for input  local variable
  std::string name;
  std::cout << "enter name : " << std::endl;
  /*
    to store multiple variables
    std::cin >> name >> age;
  */
  std::cin >> name;
  std::cout << "U name is: " << name << std::endl;

  int variable{};                     // initialize zero
  int variavle2{variable + variable}; // 0 + 0
  // int variable3{2.9};                 // warrning or error  output is 2
  int variable3_3(2.9); // output 2
  int variabe_1(1);
  int variable_2 = 1;

  std::cout << "sizeof variable_2 : " << sizeof(variable_2) << std::endl; // bite size

  unsigned int only_positive = 1;
  // unsigned int only_positive = -1; // Error only positive numbers (unsigned keyword)

  float variable_fl = 2.2;
  std::cout << std::setprecision(20); // control the precision from std::cout
  std::cout << "number flot : " << variable_fl << std::endl;

  bool red_light{true};

  if (red_light == true)
  {
    std::cout << "stop" << std::endl;
  }

  char character{'j'}; // print j
  char value_ = 65;    // ASCII character code for 'A'

  auto some_val{12}; // quess type

  // prefix sufix
  int val_a_ = 1;
  int val_b_ = 10;
  ++val_a_; // 2
  --val_b_; // 9
  // or val_b_++, val_b_--

  int val_c = 10;
  val_c += 5;
  val_c -= 5;
  val_c *= 1;
  val_c %= 1; // modulo
  val_c /= 2;

  // != , == , <= , >=, > , <, && , || and or
  if (val_a_ == val_b_) // compare
  {
    val_a_ = 12;
  }

  std::cout << std::boolalpha; // make bool show instead 1/0
  std::cout << "number < number2" << (val_a_ < val_b_) << std::endl;

  std::cout << "not" << !val_a_ << std::endl;

  //<limits>
  std::cout << "min of short" << std::numeric_limits<short>::min() << "max of short"
            << std::numeric_limits<short>::max() << std::endl;

  double sav_ = -500;
  std::cout << "abs of sav_" << std::abs(sav_) << std::endl;

  // switch
  const int Dupa{10};
  int useDupa{Dupa};

  enum TTool
  {
    pen,
    eraser
  };

  TTool p = pen;

  switch (p)
  {
  case pen:

    break;

  default:
    break;
  }

  // terner operation
  int a_ = 34;
  int b_ = 12;
  int max{};

  max = a_ > b_ ? b_ : a_;
  // or
  int speed{max ? 300 : 140};

  return 0;
}
// 7:41