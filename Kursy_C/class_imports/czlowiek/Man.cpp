#include <iostream>
#include <string>
#include "Man.h"

Man::Man(std::string name_) : name(name_){
                                  // name = name_; - mozna tak albo po :
                              };
void Man::Greeting(){

};

Man::Man(std::string name)
{
  // this to slowo kluczowe odwolujace sie do obiektu
  // w tym kontekscie dis bedzie Man
  this->name = name;
  // lub
  (*this).name = name;
};