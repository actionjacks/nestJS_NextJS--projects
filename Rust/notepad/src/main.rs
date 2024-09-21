fn main() {
    let mut input_value = String::new();
    println!("Enter some text: ");
    std::io::stdin()
        .read_line(&mut input_value)
        .expect("Failed to read line");
    println!("{}", input_value);
}
