#include <cmath>
#include "classcylinder.h"

class Square
{
private:
  int height = 20;
  // getters
public:
  int get_base_height()
  {
    return height;
  }
  // setters
  void set_base_height(int newHeight)
  {
    Cylinder cylinder;
    height = newHeight;
  }
};