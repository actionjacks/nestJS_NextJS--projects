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

    std::cout << "this is memory adress of current objrct" << std::endl;
  };
  ~Dog(); // Destructor declared after run constructor relase memory
  // or
  // ~Dog(){
  //   delete dog_age;
  // }

public:
  void set_dog_name(std::string_view dog_name)
  {
    this->dog_name = dog_name; // THIS - pointer
  }

  void set_dog_age(int dog_age)
  {
    *(this->dog_age) = dog_age;
  }
  // reutrn pointer
  Dog *set_dog_name_calUsingChain(std::string_view dog_name)
  {
    this->dog_name = dog_name; // THIS - pointer
    return this;
  }
  // return pointer
  Dog *set_dog_age_callUsingChain(int dog_age)
  {
    *(this->dog_age) = dog_age;
    return this; // current object
  }
  // return reference
  Dog &set_dog_name_calUsingChain_(std::string_view dog_name)
  {
    this->dog_name = dog_name; // THIS - pointer
    return *this;
  }
  // return reference
  Dog &set_dog_age_callUsingChain_(int dog_age)
  {
    *(this->dog_age) = dog_age;
    return *this; // current object
  }

  void some_func()
  {
    Dog *p_dog = new Dog("jacke", "some pies", 12);
    delete p_dog; // free up memory space
  }

private:
  std::string dog_name;
  std::string dog_breed;
  int *dog_age = nullptr;
};

int someFunction()
{
  Dog dog("weq", "weq", 12);

  dog.set_dog_age(12);
  dog.set_dog_name("ewwe");

  dog.set_dog_name_calUsingChain("jjaja")->set_dog_age_callUsingChain(12);

  dog.set_dog_name_calUsingChain_("sadads").set_dog_age_callUsingChain_(12);

  return 0;
};

class PrivateClass
{
  std::string name = "DUPA"; // private by default
};

struct PublicCalss
{
  std::string name; // public by default
};

/**
 * extennds
 */
class Person
{
public:
  Person();
  Person(std::string &first_name_param, std::string &last_name_param); // & = use reference
  ~Person();

  std::string get_first_name() const
  {
    return first_name;
  }

private:
  std::string first_name = "Jacek";
  std::string last_name = "dupa";
};

// protected public private class specifier
// class Player : (public - base class specifier) Person

class Player : public Person // publiczne dziedziczenie mozna kozystac z metod i zmiennuch zadeklarowanych jako publiczne w klasie rodzica
{
public:
  Player();
  Player(std::string_view game_param);

private:
  std::string m_game = "none";

  // protected - daje dostep do paramsow rodzica ale nie daje dostepu poza klasa
protected:
  std::string last_name = "nadpisze dupa";
};

class ParentClass
{
  // ParentClass();
  // ~ParentClass();

public:
  int addNumber(int number1, int number2)
  {
    return number1 + number2;
  }
  // oveload
  int addNumber(int number1, int number2, int number3)
  {
    return number1 + number2 + number3;
  }
};

class ChildClass : private ParentClass
{
  // ChildClass() = default;
  // ~ChildClass();

public:
  using ParentClass::addNumber;
};

int useMyClasses()
{

  Player jacekPlayer("Fallout");
  jacekPlayer.get_first_name();

  ParentClass ParentClass;
  ParentClass.addNumber(2, 1);

  ChildClass childClass;
  childClass.addNumber(12, 2, 2); // jesli metoda addnumber z klasy rodzica jest privat nie mozna jej wskrzesic usywając   using ParentClass::addNumber;

  return 0;
};

/**
 * constructor call from parenClass
 */
using namespace std;
class A1Class
{
  A1Class() = default;

public:
  A1Class()
  {
    cout << "Constructor of the base class A1 \n";
  };
  A1Class(int id = 0) : m_id{id} {};

private:
  int m_id{};
};

class A2Class
{
public:
  A2Class(int val)
  {
    cout << "Constructor of the base class A2 \n";
  }
};

class A_3Class : public A1Class, virtual A2Class
{
public:
  A_3Class(double cost = 0.0, int id = 0) : A1Class({id}),
                                            A2Class({id}), // call constructor iheritance
                                            m_cost{cost}
  {
    cout << "Constructor of the derived class S \n";
  }

private:
  double m_cost;
};

class Dupa_
{

public:
  Dupa_() = default;
  Dupa_(int val) : some_val{val} // same
  {
    some_val = val; // as this
  };

public:
  int some_val = 0;
};

class Dupa_from_dupa : public Dupa_
{
  Dupa_from_dupa() = default;

public:
  Dupa_from_dupa(
      std::string_view stringval,
      int val)
  {
    Dupa_from_dupa::Dupa_(val);
  }

public:
  std::string_view val = "";
};

class Main__
{

public:
  Main__() = default;
  Main__(int val, int val2, int val3){};

protected:
  int valFromMain__ = 12;
};

class UseMain__ : public Main__
{
public:
  UseMain__();
  UseMain__()
  {
    Main__::valFromMain__; // get value from parent class
  };

public:
  using Main__::Main__; // to wywoła konstruktor z Main__

public:
  Main__::valFromMain__; // get value from parent class
};

void funcToUseClass_()
{
  UseMain__ useMain__(1, 2, 3); // wywoluje konstruktor z Main__
};

/**
 * Polimorhism
 */
class Shape
{
public:
  Shape() = default;
  Shape(const std::string_view &description){};
  ~Shape(){};

  // virtual - dynamic binding
  virtual void draw() const
  {
    std::cout << "Shape::draw() called. Drawing" << m_description << std::endl;
  };

  virtual void draw2() const
  {
    std::cout << "Circle draw() called" << std::endl;
  };

protected:
  std::string m_description = "";
};

class Oval : public Shape
{
public:
  Oval() = default;
  Oval(double x_radius,
       double y_radius,
       const std::string_view &description)
      : Shape(description),
        m_x_radius{x_radius},
        m_y_radius{y_radius} {}
  ~Oval(){};

  // virtual - dynamic binding (override - upewnia sie że klasy dziedziczace maja metode ktora musi zostac nadpisana)
  virtual void draw() const override
  {
    std::cout << "Oval::draw() called. Drawing"
              << m_description << "with m_x_radius :"
              << m_x_radius << "and y radius"
              << m_y_radius
              << std::endl;
  };

  virtual void draw2() const override
  {
    std::cout << "Circle draw() called" << m_description << "with radius" << get_x_rad() << std::endl;
  };

protected:
  double get_x_rad() const
  {
    return m_x_radius;
  };

  double get_y_rad() const
  {
    return m_y_radius;
  };

private:
  double m_x_radius = 0.0;
  double m_y_radius = 0.0;
};

class Circle : public Oval
{
public:
  Circle() = default;
  Circle(double radius,
         const std::string_view &description)
      : Oval(radius, radius, description){};
  ~Circle(){};

  // virtual - dynamic binding
  virtual void draw() const override
  {
    std::cout << "Circle draw() called" << m_description << "with radius" << get_x_rad() << std::endl;
  };
  // keyword final zapewnia że na tym etapie konczy sie nadpisywanie metody draw2
  void draw2() const override final
  {
    std::cout << "Circle draw() called" << m_description << "with radius" << get_x_rad() << std::endl;
  };

  void circle_only()
  {
    std::cout << "Circle draw() called"
              << "with radius" << m_speeeed << std::endl;
  }

private:
  double m_speeeed = 123;
};

void draw_shape(Shape *s)
{
  s->draw();
};
// or
void draw_shape_referebce(const Shape &s_r)
{
  s_r.draw();
};

void funcccccc()
{
  Shape shape1("Shape1");
  Oval oval1(2.0, 3.5, "Oval1");
  Circle circle(3.0, "Circle1");

  Shape *shape_pointer = &shape1;

  shape_pointer->draw(); // pointer is Shape type
  // so call method from shape class if method is virtual is dynamic binding
  // pointer nie bedzie patrzyl na typ tylko na to co wskazuje
  // drawing bedzie wywoływany z obiektu na ktory wskazuje
  shape_pointer = &oval1;
  shape_pointer->draw();

  shape_pointer = &circle;
  shape_pointer->draw();

  Circle circle_collection[]{
      circle, Circle(10.0, "Circle2"), Circle(20.0, "Circle3")};

  Oval oval_collection[]{
      oval1, Oval(22.3, 41.2, "Oval1")};

  // dzikie temu że metody w klasach maja oznaczenie virtual
  draw_shape(&shape1); // &-use value reference
  draw_shape_referebce(shape1);

  // array need be pointer to store references (values)
  Shape *shapeCollections[]{&shape1, &oval1, &circle}; //!!!!

  for (Shape *s_pointer : shapeCollections)
  {
    s_pointer->draw();
  }
};

void draw_circle(const Circle &circle)
{
  circle.draw();
};
// 1:03:51
