using System.Text;
using System.Threading.Tasks;

namespace Exeptions
{
  class MyApp
  {
    static void myApmain()
    {
      try
      {
        Console.WriteLine("wyniik" + MyDivision(0));
      }
      catch (DivideByZeroException e)
      {
        Console.WriteLine("Dzielisz przez 0 wybychło");
      }
      catch (Exception e)
      {
        Console.WriteLine("Dzielisz przez 0 wybychło" + e.Message);
      }
    }

    public static float MyDivision(int a)
    {
      if (a == 5)
      {
        throw new MyCustomExeption();
      }
      return 10 / a;
    }

    // cusotm exeption
    class MyCustomExeption : Exception
    {

    }
  }
}

