#include <iostream>

// Klasa bazowa (superklasa)
class Shape
{
protected:
  int width;
  int height;

public:
  Shape(int w, int h) : width(w), height(h)
  {
    std::cout << "Konstruktor Shape: width = " << width << ", height = " << height << std::endl;
  }
};

// Klasa pochodna (podklasa)
class Rectangle : public Shape
{
public:
  Rectangle(int w, int h) : Shape(w, h)
  {
    std::cout << "Konstruktor Rectangle: width = " << width << ", height = " << height << std::endl;
  }
};

int main()
{
  Rectangle rectangle(5, 10);
  return 0;
}
