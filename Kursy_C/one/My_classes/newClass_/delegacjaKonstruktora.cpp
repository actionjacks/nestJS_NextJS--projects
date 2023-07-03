class MyClass
{
public:
  int x;
  int y;

  MyClass() : MyClass(0, 0)
  {
    // Konstruktor delegujący przekazuje inicjalizację do innego konstruktora
  }

  MyClass(int xValue, int yValue) : x(xValue), y(yValue)
  {
    // Konstruktor wykonujący właściwą inicjalizację
  }
};