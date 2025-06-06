

// 👇 self = bieżący moduł (utils::math)
pub fn dupa(a: i32, b: i32) {
    let wynik = super::add(a, b);
    println!("Wynik: {}", wynik);
}

// ✅ Test
#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_dupa() {
        // W testach wystarczy, że wywołamy — sprawdzimy, czy nie ma panic.
        dupa(5, 7);
    }
}