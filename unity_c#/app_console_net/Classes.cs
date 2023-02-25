using System.Text;
using System.Threading.Tasks;

namespace Classesmy
{
  class App
  {
    //  ENUM
    enum MayEnum
    {
      name1,
      name2,
      name3
    }

    enum MayEnum2
    {
      name1 = 12,
      name2 = 13,
      name3 = 14
    }
    static void Main(string[] args)
    {
      // useEnum 
      MayEnum myenum = MayEnum.name1;

      MayEnum2 myenum2 = MayEnum2.name1;
      Console.WriteLine((int)myenum2);//12

      MayEnum2 myenum3 = (MayEnum2)12;
      Console.WriteLine(myenum3);// name1

      Mars mars = new Mars("mars");

      IMyinterface atakl = (IMyinterface)mars;
      atakl.Attack(12);

      Point2D point1;
      point1.x = 10;
      point1.y = 12;

      Point2D point2 = new Point2D(); // x = 0, y = 0
    }
    // INTERFACE
    interface IMyinterface
    {
      void Attack(int value);
    }
    interface IMyinterface2
    {
      void Attack(int value);
    }

    abstract class SpaceObject
    {
      public string name { get; set; }
      public void SpaceMoveRotate()
      {
        Console.WriteLine($"{name} space object");
      }

      public abstract void Dupa();
    }

    abstract class Planet : SpaceObject
    {
      void PlanetMethod()
      {
        Console.WriteLine("form planet");
      }
      public Planet() { }
      public Planet(string name)
      {
        this.name = name;
      }

      public virtual void Move()
      {
        Console.WriteLine("from planet");
      }
    }

    class Mars : Planet, IMyinterface, IMyinterface2
    {
      public Mars() : base() { }
      public Mars(string name) : base(name) { }

      void IMyinterface.Attack(int value)
      {
        throw new NotImplementedException();
      }
      void IMyinterface2.Attack(int value)
      {
        throw new NotImplementedException();
      }

      public override void Dupa()
      {
        throw new NotImplementedException();
      }

      // new public void Move() // zakrywam metode z planety
      // {
      //   Console.WriteLine("from Mars");
      // }
      public override void Move()
      {
        // base.Move();
        Console.WriteLine("from Mars");
      }
    }

    // structures !!!
    struct Point2D
    {
      public int x;
      public int y;
      public double distanceFromTheCenter()
      {
        return Math.Round(Math.Sqrt(Math.Pow(x, 2) + Math.Pow(y, 2)), 1);
      }
    }

    struct Point3d
    {
      public int x;
      public int y;

      public Point3d(int x, int y)
      {
        this.x = x;
        this.y = y;
      }
    }
  }
}