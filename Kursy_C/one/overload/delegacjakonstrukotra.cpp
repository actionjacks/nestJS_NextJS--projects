class MyClass
{
private:
  int value1;
  int value2;

public:
  MyClass(int v1, int v2) : value1(v1), value2(v2)
  {
    // Inne inicjalizacje
  }

  MyClass(int v) : MyClass(v, 0)
  {
    // Delegowanie konstruktora z jednym argumentem
  }

  MyClass() : MyClass(0)
  {
    // Delegowanie konstruktora bez argumentów
  }
};