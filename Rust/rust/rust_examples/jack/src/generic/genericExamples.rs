use std::marker::PhantomData;

fn get_first<T>(list: &[T]) -> Option<&T> {
    list.first()
}

pub fn get_first_example() {
    let numbers = vec![1, 2, 3, 4, 5];
    if let Some(first) = get_first(&numbers) {
        println!("Pierwszy element: {}", first);
    } else {
        println!("Lista jest pusta");
    }

    let strings = vec!["a", "b", "c"];
    if let Some(first) = get_first(&strings) {
        println!("Pierwszy element: {}", first);
    } else {
        println!("Lista jest pusta");
    }
}
//---------------------
fn print_pair<T, U>(a: T, b: U)
where
    T: std::fmt::Display,
    U: std::fmt::Debug,
{
    println!("a = {}, b = {:?}", a, b);
}

pub fn print_pair_example() {
    print_pair(42, "Hello");
    print_pair("World", vec![1, 2, 3]);
}
//---------------------
struct Wrapper<T> {
    value: T,
}

impl<T> Wrapper<T> {
    fn new(value: T) -> Self {
        Wrapper { value }
    }

    fn get(&self) -> &T {
        &self.value
    }
}

pub fn wrapper_example() {
    let int_wrapper = Wrapper::new(42);
    println!("Wartość w int_wrapper: {}", int_wrapper.get()); // Wyświetli 42

    let string_wrapper = Wrapper::new("Hello, world!");
    println!("Wartość w string_wrapper: {}", string_wrapper.get()); // Wyświetli "Hello, world!"
}
//---------------------
trait Printable<T> {
    fn print(&self, value: T);
}

struct Logger;

impl Printable<i32> for Logger {
    fn print(&self, value: i32) {
        println!("int: {}", value);
    }
}

pub fn printable_example() {
    let logger = Logger;
    logger.print(42); // Wyświetli "int: 42"

    // Można również zdefiniować inne implementacje dla innych typów
    // np. Printable<String> dla Logger, jeśli zajdzie taka potrzeba
}
//---------------------
struct UserId(u32);
struct ProductId(u32);

impl UserId {
    fn value(&self) -> u32 {
        self.0
    }
}

impl ProductId {
    fn value(&self) -> u32 {
        self.0
    }
}

fn get_user_orders(user_id: UserId) {
    println!("Pobieram zamówienia użytkownika o ID: {}", user_id.value());
}

fn get_product_details(product_id: ProductId) {
    println!("Szczegóły produktu o ID: {}", product_id.value());
}
//---------------------
struct MyType<T> {
    _marker: PhantomData<T>,
}
impl<T> MyType<T> {
    fn new() -> Self {
        MyType {
            _marker: PhantomData,
        }
    }

    fn do_something(&self) {
        println!("Doing something with MyType");
    }
}
pub fn my_type_example() {
    let my_type: MyType<i32> = MyType::new();
    my_type.do_something(); // Wyświetli "Doing something with MyType"
}
//---------------------

struct Id<T> {
    value: u32,
    _marker: PhantomData<T>,
}

struct User;
struct Post;

fn delete_post(post_id: Id<Post>) {
    println!("Usunięto post o id {}", post_id.value);
}

fn main() {
    let user_id = Id::<User> {
        value: 1,
        _marker: PhantomData,
    };

    let post_id = Id::<Post> {
        value: 2,
        _marker: PhantomData,
    };

    // delete_post(user_id); // ⛔ Błąd: expected `Id<Post>`, found `Id<User>`
    delete_post(post_id);     // ✅
}