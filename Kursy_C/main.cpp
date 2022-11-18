#include <iostream>
#include <string>
#include <iomanip>
// https://en.cppreference.com/w/cpp/language/operator_precedence
int addNumbers(int arg1, int arg2)
{
  return arg1 + arg2;
}

int main()
{
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
  return 0;
}
// 5:23