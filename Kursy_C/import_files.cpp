#include <iostream>
#include <string>
#include <iomanip>
#include <limits>
#include <cmath>
#include "declaration_import.h" // Preprocessor

// func declaration - before func call
int max(int a, int b);

using namespace std;
int main()
{
  int a_ = 3;
  int b_ = 4;

  std::cout << max(a_, b_) << std::endl;

  int result_fun_from_import = function_to_import(a_, b_);

  return 0;
}

// func definition
int max(int a, int b)
{
  if (a > b)
    return a;
  else
    return b;
}