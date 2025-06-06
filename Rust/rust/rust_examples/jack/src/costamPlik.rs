use std::ops::Add;

#[derive(Debug, Clone, PartialEq)]
struct Pointer {
    x: i32,
    y: i32,
}

pub fn hello() {
    println!("Hello from costamPlik!");
}

fn create_pointer(x: i32, y: i32) -> Pointer {
    Pointer { x, y }
}

pub fn create_and_print_pointer() {
    let p1 = create_pointer(10, 20);
    let p2 = create_pointer(30, 40);

    println!("Pointer 1: {:?}", p1);
    println!("Pointer 2: {:?}", p2);

    if p1 == p2 {
        println!("Pointers are equal");
    } else {
        println!("Pointers are not equal");
    }
}

trait Animal {
    fn speak(&self);
}

struct Dog;
impl Animal for Dog {
    fn speak(&self) {
        println!("Woof!");
    }
}

fn get_animal() -> Box<dyn Animal> {
    Box::new(Dog)
}

pub fn demonstrate_animal() {
    let animal = get_animal(); // Tutaj funkcja zwraca wskaźnik na obiekt implementujący Animal, ale nie musi ujawniać dokładnego typu.
    animal.speak(); // Outputs: Woof!
}

struct Point {
    x: i32,
    y: i32,
}

impl Add for Point {
    type Output = Self;

    fn add(self, other: Self) -> Self {
        Point {
            x: self.x + other.x,
            y: self.y + other.y,
        }
    }
}

#[derive(Clone)]
struct Counter {
    count: u32,
}

impl Iterator for Counter {
    type Item = u32;

    fn next(&mut self) -> Option<Self::Item> {
        self.count += 1;
        if self.count <= 5 {
            Some(self.count)
        } else {
            None
        }
    }
}

trait A {
    fn hello(&self);
}

// Supertrait
trait B: A {
    fn greet(&self) {
        // możemy użyć metody z traitu A!
        self.hello();
        println!("...and welcome from B!");
    }
}

struct MyStruct;

// implementujemy trait A
impl A for MyStruct {
    fn hello(&self) {
        println!("Hello from A");
    }
}

// implementujemy trait B — musimy też mieć A!
impl B for MyStruct {}

fn main() {
    hello();
    create_and_print_pointer();
    demonstrate_animal();

    let p1 = Point { x: 1, y: 2 };
    let p2 = Point { x: 3, y: 4 };
    let p3 = p1 + p2; // użycie operatora +
    println!("Point after addition: ({}, {})", p3.x, p3.y);

    let counter = Counter { count: 0 };
    let clonet_counter = counter.clone(); // Klonowanie licznika

    for value in counter {
        println!("Counter value: {}", value); // Outputs: 1, 2, 3, 4, 5
    }

    let s = MyStruct;
    s.greet(); // działa dzięki temu, że B: A
}
