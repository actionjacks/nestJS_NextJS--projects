import re

# (444)-555-55
# r'(\d\d\d)-\d\d\d=\d\d' d-digit
valid_phone = f'\d{3}-\d{3}-\d{4}'

re.search(r'cat|dog', 'cat')  # cat or dog
re.findall(r'.at', 'cat ewef hat dw2 sat fo')  # [cat hat sat]

re.findall(r'[^|.?]+', 'exclude? !!! lorem .')  # remove ! . ?

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

check_6 = re.match('^!|\.', '!ot')  # True
'''
  ^! oznacza dopasowanie do znaku ! na początku łańcucha.
  | to operator alternatywy, który oznacza "lub".
  \. oznacza dosłowne wystąpienie kropki ..
'''

check_group = re.match(r'(foo)-(foo)', 'foo-foo-foo')
if check_group:
    print(check_group.groups())

check_group_label = re.match(r'(?P<first>foo)-(foo)', 'foo-foo-foo')
if check_group:
    print(check_group.groups())
    print(check_group_label.group('first'))

match_custom_email = r'^([A-Za-z0-9]+|[A-Za-z0-9][A-Za-z0-9\.-]+[A-Za-z0-9])@([A-Za-z0-9]+|[A-Za-z0-9-\.]+[A-Za-z0-9])\.[A-Za-z0-9]+$'

'''
  ^ oznacza początek łańcucha.
  ([A-Za-z0-9]+|[A-Za-z0-9][A-Za-z0-9\.-]+[A-Za-z0-9]) to fragment wyrażenia, który odpowiada za sprawdzanie poprawności części lokalnej adresu e-mail (przed znakiem "@"). Ten fragment może składać się z jednego lub więcej znaków alfanumerycznych [A-Za-z0-9]+, lub zaczynać się od znaku alfanumerycznego, a następnie zawierać dodatkowe znaki, takie jak kropka lub myślnik [A-Za-z0-9][A-Za-z0-9\.-]+[A-Za-z0-9].
  @ oznacza dosłowne wystąpienie znaku "@", który oddziela część lokalną od domeny.
  ([A-Za-z0-9]+|[A-Za-z0-9-\.]+[A-Za-z0-9]) to fragment wyrażenia, który odpowiada za sprawdzanie poprawności części domenowej adresu e-mail (po znaku "@"). Ten fragment może składać się z jednego lub więcej znaków alfanumerycznych [A-Za-z0-9]+, lub zawierać dodatkowe znaki, takie jak kropka, myślnik lub kropka w środku [A-Za-z0-9-\.]+[A-Za-z0-9].
  \. oznacza dosłowne wystąpienie kropki, która oddziela domenę od rozszerzenia.
  [A-Za-z0-9]+ oznacza jedno lub więcej wystąpień znaków alfanumerycznych, które stanowią rozszerzenie domeny.
  $ oznacza koniec łańcucha.
'''


'''

Character	Description	Example Pattern Code	Exammple Match
  \d	A digit	file_\d\d	file_25
  \w	Alphanumeric	\w-\w\w\w	A-b_1
  \s	White space	a\sb\sc	a b c
  \D	A non digit	\D\D\D	ABC
  \W	Non-alphanumeric	\W\W\W\W\W	*-+=)
  \S	Non-whitespace	\S\S\S\S	Yoyo

+	Occurs one or more times	Version \w-\w+	Version A-b1_1
  {3}	Occurs exactly 3 times	\D{3}	abc
  {2,4}	Occurs 2 to 4 times	\d{2,4}	123
  {3,}	Occurs 3 or more	\w{3,}	anycharacters
  \*	Occurs zero or more times	A\*B\*C*	AAACC
  ?	Once or none	plurals?	plural
'''
