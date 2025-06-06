use std::fmt;

mod costamPlik;
mod loremlorem;
mod mymodule;
mod utils;
mod generic;

use loremlorem::math::add; // importujemy funkcję add z modułu loremlorem
use utils::dupa;

use crate::utils::dupa::dupa; // importujemy funkcję dupa z modułu utils

struct Point {
    x: i32,
    y: i32,
}

impl Point {
    // Associated function - konstruktor
    fn new(x: i32, y: i32) -> Point {
        Point { x, y }
    }
}

impl Point {
    // metoda, która zwraca odległość od początku układu (0,0)
    fn distance_from_origin(&self) -> f64 {
        ((self.x.pow(2) + self.y.pow(2)) as f64).sqrt()
    }
}

struct Counter {
    count: i32,
}

impl Counter {
    fn new() -> Counter {
        Counter { count: 0 }
    }

    // metoda, która zwiększa licznik o 1
    fn increment(&mut self) {
        self.count += 1;
    }

    // metoda, która zwraca aktualną wartość
    fn get_count(&self) -> i32 {
        self.count
    }
}

fn greet(name: Option<&str>) {
    match name {
        Some(n) => println!("Hello, {}!", n),
        None => println!("Hello, stranger!"),
    }
}

fn make_adder(x: i32) -> impl Fn(i32) -> i32 {
    move |y| x + y
}

struct Person {
    name: String,
    age: u8,
}

// Implementujemy trait Display dla Person
impl fmt::Display for Person {
    // Definiujemy metodę fmt, która mówi, jak wyświetlić Person
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        // write! działa podobnie do println!, ale zapisuje do formattera f
        write!(f, "{} is {} years old", self.name, self.age)
    }
}

fn apply_twice<F>(func: F, x: i32) -> i32
where
    F: Fn(i32) -> i32,
{
    func(func(x))
}

fn main() {
    let p = Point::new(10, 20); // wywołanie associated function
    println!("Point: ({}, {})", p.x, p.y);
    println!("Distance from origin: {}", p.distance_from_origin()); // wywołanie metody

    let mut counter = Counter::new(); // tworzenie instancji licznika
    counter.increment(); // zwiększenie licznika
    counter.increment(); // zwiększenie licznika
    println!("Counter value: {}", counter.get_count()); // wyświetlenie wartości licznika

    greet(Some("Alice")); // wywołanie funkcji z argumentem
    greet(None); // wywołanie funkcji bez argumentu

    let x = 5;
    let closure = || println!("x = {}", x);
    closure();

    let numbers = vec![1, 3, 5, 8, 11];
    let has_even = numbers.iter().any(|&x| x % 2 == 0);
    println!("eeee: {:?}", numbers.iter());

    let p = Person {
        name: "Alice".to_string(),
        age: 30,
    };

    println!("{}", p);

    let result = apply_twice(|n| n + 3, 5); // wywołanie funkcji z closure
    // (5 + 3) + 3 = 11
    println!("{}", result);

    costamPlik::hello(); // wywołanie funkcji z innego pliku

    mymodule::costam::fromMyModule(); // wywołanie funkcji z modułu

    let result_ = add(2, 3);
    println!("result_ {}", result_);

    dupa(1, 2);

    #[cfg(target_os = "linux")] // kod będzie kompilowany tylko na systemie Linux
    fn tylko_na_linuxie() {
        println!("Jestem na Linuxie");
    }
    tylko_na_linuxie();

    generic::genericExamples::get_first_example(); // wywołanie przykładu z generics
    generic::genericExamples::print_pair_example(); // wywołanie przykładu z generics
    generic::genericExamples::wrapper_example(); // wywołanie przykładu z generics
    generic::genericExamples::printable_example(); // wywołanie przykładu z traitami
}
