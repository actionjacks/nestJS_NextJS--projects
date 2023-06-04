import re

pattern = r'lorem\ee'
patter2 = r"foo"

foo_at_start = r"foo_loremipsum"
# default match if text start whit pattern2 (foo)
# print(re.match(patter2, foo_at_start))

# ---------------------------------
fo_in_middle = r"_lore_foo_mipsum"

if re.match(r'.*' + patter2 + r'.*', fo_in_middle):
    print('match')
# search equivalent s
if re.search(patter2, fo_in_middle):
    print('match')

return_all_foo = r'foo_sssqwidhqwdfoodqwdqdfooqwdqwdqgoofoo'
print(re.findall(patter2, return_all_foo))

# ---------------------------------
text4 = r"loremloremfooloremlorem"
where_is_foo = re.search(patter2, text4)
if where_is_foo:
    print(where_is_foo.start())  # return index start
    print(where_is_foo.end())  # end index
    print(where_is_foo.span())  # end and start index

# -------------------------------
replace_text_found = re.sub(patter2, '###', return_all_foo)
print(replace_text_found)


def is_valid_email(email):
    pattern = r'^[\w\.-]+@[\w\.-]+\.\w+$'
    return re.match(pattern, email) is not None


'''
  ^ oznacza początek łańcucha.
  [\w\.-]+ oznacza jeden lub więcej znaków alfanumerycznych (\w), kropkę (\.) lub myślnik (\-), co odpowiada części lokalnej adresu e-mail (przed znakiem @).
  @ oznacza dosłowne wystąpienie znaku @.
  [\w\.-]+ oznacza jeden lub więcej znaków alfanumerycznych (\w), kropkę (\.) lub myślnik (\-), co odpowiada części domenowej adresu e-mail (po znaku @).
  \. oznacza dosłowne wystąpienie znaku ..
  \w+ oznacza jeden lub więcej znaków alfanumerycznych, co odpowiada części rozszerzenia domeny (np. .com, .net, .org).
  $ oznacza koniec łańcucha.
'''
print(is_valid_email('actionjacks22@gmail.com'))

# -----------------------------
check_1 = re.match('^ko.$', 'kot')
'''
  ^ oznacza początek łańcucha.
  ko oznacza dosłowne wystąpienie liter "ko".
  . oznacza dowolny pojedynczy znak.
  $ oznacza koniec łańcucha.
'''
print(check_1)

check_2 = re.match('^[Kk]o.$', 'kot')  # True
'''
  [Kk] oznacza dopasowanie do jednego z dwóch znaków: "K" lub "k".
'''

check_3 = re.match('^[A-Za-z]o.$', '-ot')  # False
'''
  [A-Za-z] oznacza dopasowanie do jednej litery alfabetu, zarówno małej jak i wielkiej.
'''

check_4 = re.match('^[^A-Za-z]o.$', '-ot')  # True
'''
  [^A-Za-z] oznacza dopasowanie do jednego znaku, który nie jest literą alfabetu (zarówno małą, jak i wielką).
'''
check_5 = re.match('^[^A-Za-z]{2,5}o.$', '--ot')  # True
'''
  [^A-Za-z] oznacza dopasowanie do jednego znaku, który nie jest literą alfabetu (zarówno małą, jak i wielką).
  {2,5} oznacza, że poprzedzający element (czyli [^A-Za-z]) musi występować od 2 do 5 razy.
'''
