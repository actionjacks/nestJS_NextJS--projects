#include "classcylinder.h"

Cylinder::Cylinder()
{
  double base_radius = 2.0;
  double height = 2.0;
};

double Cylinder::volume()
{
  return piValue * base_radius * base_radius * height;
};