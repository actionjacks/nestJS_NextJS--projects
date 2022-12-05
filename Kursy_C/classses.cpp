#include <iostream>
#include <cmath>
#include <string_view>

class Cylinder
{
private:
  double base_radius = 1.0;
  double height = 1.0;
  double piValue = M_PI;

  // constructor
public:
  // Cylinder() = default; -- call when no passing params constructor
  Cylinder(); // default constructor
  Cylinder()
  {
    double base_radius = 2.0;
    double height = 2.0;
  };
  Cylinder(double base_radius_, double height_)
  {
    base_radius = base_radius_;
    height = height_;
  };
  double
  volume()
  {
    return piValue * base_radius * base_radius * height;
  }
};

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
    height = newHeight;
  }
};

/**
 * using class
 */
int fo()
{
  Cylinder cylinder1(1.2, 3.2);
  std::cout << "get cilinder" << cylinder1.volume() << std::endl;

  Cylinder *p_cylinder1 = &cylinder1;
  std::cout << "get cilinder by pointer" << (*p_cylinder1).volume() << std::endl;
  // or better
  std::cout << "get cilinder by pointer" << p_cylinder1->volume() << std::endl;

  Cylinder *p_cylinder2 = new Cylinder(100, 2);
  std::cout << "get cilinder by pointer" << p_cylinder2->volume() << std::endl;

  delete p_cylinder2;
  return 0;
};

/**
 * Destructors - relase memory
 */
class Dog
{
public:
  Dog(); // default constructor
  Dog(std::string_view name_param, std::string_view breed_param, int age_param)
  {
    dog_name = name_param;
    dog_breed = breed_param;

    dog_age = new int;
    *dog_age = age_param;
  }
  ~Dog(); // Destructor declared after run constructor relase memory
  // or
  // ~Dog(){
  //   delete dog_age;
  // }

private:
  std::string dog_name;
  std::string dog_breed;
  int *dog_age = nullptr;
};

// 22:05