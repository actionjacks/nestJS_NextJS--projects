function solve(s) {
  let lowercase = 0;
  let upercase = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i].toLowerCase()) {
      lowercase++;
    } else {
      upercase++;
    }
  }
  if (lowercase === upercase || lowercase > upercase) {
    return s.toLowerCase();
  } else {
    return s.toUpperCase();
  }
}
// return console.log(/[a-z]/.test(s)); //sprawdza czy wszystkie sa male literki
console.log(solve("aabSS"));
