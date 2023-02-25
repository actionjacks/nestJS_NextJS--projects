using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Diagnostics; // diagnostyka programu
using System.Globalization;

namespace App2
{
  class Program
  {
    static void Main(string[] args)
    {
      // variables
      var aut = ""; //1, 2.3

      int nu = 1;
      int num22 = 2;
      nu += num22;
      num22++;
      num22--;

      float nu2 = 1.1f;
      double num3 = 1232.123;

      string name = "12";
      char oneChar = '1';

      bool zmi = true;

      //Array's
      int[] mojaarrahy = new int[300];//tablica z 300 elementami
      string[] mojearray2 = { "dup", "ds", "423423" };

      Console.WriteLine(mojaarrahy[0]);

      for (int i = 0; i < mojearray2.Length; i++)
      {
        Console.WriteLine(mojearray2[i]);
      }

      int[,] arraj2d = new int[2, 3];//[[1,3,4], [2,4,8]]
      for (int i = 0; i < arraj2d.GetLongLength(0); i++)
      {
        for (int j = 0; j < arraj2d.GetLength(1); j++)
        {
          Console.WriteLine(arraj2d[i, j]);
        }
      }

      int[][] tabs = new int[2][];
      // Initialize the elements.
      tabs[0] = new int[5] { 1, 3, 5, 7, 9 };
      tabs[1] = new int[4] { 2, 4, 6, 8 };

      // Display the array elements.
      for (int i = 0; i < tabs.Length; i++)
      {
        System.Console.Write("Element({0}): ", i);

        for (int j = 0; j < tabs[i].Length; j++)
        {
          System.Console.Write("{0}{1}", tabs[i][j], j == (tabs[i].Length - 1)
          ? ""
          : " ");
        }
        System.Console.WriteLine();
      }

      //RZUTOWANIE - konwersja
      float dup = 12.3f;
      int dup_ = (int)dup; // 12

      string inp = "12";
      int res = int.Parse(inp); // 12
      string res2 = res.ToString(); // "12"

      //list
      ArrayList listmy = new ArrayList();
      listmy.Add(2);
      listmy.Add("dupa");
      //get list lenght
      Console.WriteLine(listmy.Count);
      Console.WriteLine(listmy[1]); // 'dupa'

      foreach (var item in listmy)
      {
        Console.WriteLine(item);
      }

      // Dictionary key value
      Dictionary<int, string> dictionary = new Dictionary<int, string>();
      dictionary.Add(1, "sraka"); // key is unique

      foreach (var item in dictionary)
      {
        Console.WriteLine("{0} : {1}", item.Key, item.Value);
      }

      // console
      string user_input = Console.ReadLine();
      Console.WriteLine(user_input);

      if (Console.ReadKey().Key == ConsoleKey.D1)
      {
        Console.WriteLine("1 wisniete!");
      }

      Console.WriteLine("Hello, World!");

      string xs = "12";
      string ys = "12";

      int x = int.Parse(xs);
      int y = int.Parse(ys);

      for (int i = 0; i < y; i++)
      {
        for (int o = 0; o < x; o++)
        {
          Console.Write("-");
        }
        Console.WriteLine("");
      }
      Console.ReadKey();
      // random
      Random rndom = new Random();
      //range
      int randomNumber = rndom.Next(1, 11);
      // instrukcje przerwani
      int a = 0;
      while (true)
      {
        if (a > 10)
        {
          break;
        }
        a++;
        Console.WriteLine(a);
      }

      // while(true) {
      // }

      for (int i = 0; i < 20; i++)
      {
        if (i % 2 == 1)
        {
          continue;
        }
        Console.WriteLine(i);
      }

      static string textGenerator(string text, params object[] args)
      {
        for (int i = 0; i < args.Length; i++)
        {
          text = text.Replace("#" + i, args[i].ToString());
        }
        return text;
      }

      textGenerator("lreomere#0", 12, "12313");

      static string StringCocnat(int homay)
      {
        StringBuilder stringBuilder = new StringBuilder();
        for (int i = 0; i < homay; i++)
        {
          stringBuilder.Append(i);
        }
        return stringBuilder.ToString();
      }

      int dupa = 10;
      Console.WriteLine($"{dupa}");

      var cultur = CultureInfo.GetCultures(CultureTypes.AllCultures);
      foreach (var item in cultur)
      {
        Console.WriteLine($"{item.Name}--{item.NumberFormat}");
      }
      // do 
      // {1
      // } while (true);

      // etykiety
      // etykieta1:
      //   Console.Write("Etykieta1");
      //   goto etykieta3;

      // etykieta2:
      //   Console.Write("Etykieta2");
      //   goto etykieta3;

      // etykieta3:
      //   goto etykieta1;
      // };

      // Queue && Stack2
      Queue<int> queue = new Queue<int>();//get value from top
      queue.Enqueue(1);
      queue.Enqueue(1);
      queue.Enqueue(1);
      Console.WriteLine(queue.Peek()); //get first element from queue dont delete
      Console.WriteLine(queue.Dequeue()); //get and remove from queue

      Stack<int> stack = new Stack<int>(); // get val from bootomm
      stack.Push(1);
      stack.Push(1);
      stack.Push(1);
      Console.WriteLine(stack.Peek()); //get first element from queue dont delete
      Console.WriteLine(stack.Pop()); //get and remove from stacl

      // porownanie obiektow
      Car poloniez = new Car("poloniez", 12003);
      Car poloniez2 = new Car("poloniez", 12003);
      Car poloniez3 = new Car("kupa", 123);
      Car poloniez4 = new Car("dupa", 99);
      Car poloniez5 = new Car("michal", 77);

      Console.WriteLine(poloniez.Equals(poloniez2)); // true

      //sortowanie 
      List<Car> mycarList = new List<Car>();
      mycarList.Add(poloniez);
      mycarList.Add(poloniez2);
      mycarList.Add(poloniez3);
      mycarList.Add(poloniez4);
      mycarList.Add(poloniez5);

      mycarList.Sort();
      mycarList.Sort(new AutoComparer());

      // functions
      static void addd__(int num) // orginalne dane nie ulegną mutacji
      {
        num++;// !!!!!! = tablice jako argument staja sie wskaznikami wiec dane beda mutowane
      }

      static void addd2__(ref int num) //orginalna zmienna zostanie zmieniona, ulegnie mutacji
      {
        num++;
      }

      static void addd3__(out int num) //orginalna zmienna zostanie zmieniona, ulegnie mutacji
      {
        num = 4;
        num++;
      }

      int aaaaaa = 4;

      addd__(aaaaaa); //nie zmutuje zmiennej aaaaa
      addd2__(ref aaaaaa); //zmutuje wskaznikiem (referencja)

      int aaaaaaa;
      // addd3__(aaaaaaa) //brak inicalizowanej wartoscie bląd // out przyjmie jako parametr funkcji zmienna nie zadeklarowana,
      // wymaga aby w funkcji nastapila deklaracja przekazanej zmiennej
      addd3__(out aaaaaaa);//nie ma bledu w funckji trzeba przyposac ta zmienna

      MyFirsrtrClass jacke = new MyFirsrtrClass("jj");
      Console.WriteLine(jacke.name);

      Console.WriteLine(MyFirsrtrClass2.name); //STATIC

    }
  }

  class MyFirsrtrClass
  {
    public string name = "brak";

    public static void greeting()
    {
      // Console.WriteLine($"{name}");
    }
    // constructior i przeciazenie
    public MyFirsrtrClass()
    {

    }
    public MyFirsrtrClass(string newName)
    {
      name = newName;
    }

    //SETER GETTTER
    public int wiek { get; set; } // default seter getter

    private int myPrivProperty;
    public int myProperty
    {
      get { return myPrivProperty; }
      set { myProperty = value; }
    }

    // desctructor
    ~MyFirsrtrClass()
    {

    }
  }

  static class MyFirsrtrClass2 //static mozna wywolac bez tworzenia obiektu, mutowalne zmienne
  {
    static public string name = "brak";
  }

  //to sort nen methods inherited from IComparable
  class AutoComparer : IComparer<Car>
  {
    public int Compare(Car? x, Car? y)
    {
      if (x?.year < y?.year)
      {
        return 1;
      }
      else if (x?.year == y?.year)
      {
        return 0;
      }
      else
      {
        return -1;
      }
    }
  }

  class Car : IComparable
  {
    public string value = "";
    public int year = 0;
    public Car(string name, int year)
    {
      this.value = name;
      this.year = year;
    }

    public override bool Equals(object obj)
    {
      return base.Equals(obj);
    }

    public bool Equals(Car car)
    {
      return car.value == this.value && car.year == this.year;
    }

    public int CompareTo(object obj)
    {
      var arg = (Car)obj;
      if (year < arg.year)
      {
        return 1;
      }
      else if (year == arg.year)
      {
        return 0;
      }
      else
      {
        return -1;
      }
    }
  };
}


