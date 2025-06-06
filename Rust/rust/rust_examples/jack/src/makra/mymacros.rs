macro_rules! log_action {
    ($name:ident) => {
        fn $name() {
            println!("Action: {}", stringify!($name));
        }
    };
}

/*
    Po tym kodzie mamy automatycznie dwie funkcje:

    fn create_user() {
        println!("Action: create_user");
    }

    fn delete_user() {
        println!("Action: delete_user");
}

*/

macro_rules! html {
    (<$tag:ident> $text:expr </$tag_end:ident>) => {
        format!("<{0}>{1}</{0}>", stringify!($tag), $text)
    };
}

macro_rules! suma {
    ( $( $x:expr ),* ) => {
        {
            let mut wynik = 0;
            $(
                wynik += $x;
            )*
            wynik
        }
    };
}

fn main() {
    log_action!(create_user);
    log_action!(delete_user);

    create_user(); // -> Action: create_user
    delete_user(); // -> Action: delete_user

    let page = html!(<h1> "Witaj!" </h1>);
    println!("{}", page); // -> <h1>Witaj!</h1>

    println!("{}", suma!(1, 2, 3)); // -> 6
    println!("{}", suma!(5, 10, 15, 20)); // -> 50
}
