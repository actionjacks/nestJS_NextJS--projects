import unittest
import error


class TestCap(unittest.TestCase):
    def test_one_word(self):
        text = 'foo'
        result = error.cap_text(text)
        self.assertEqual(result, 'Foo')


if __name__ == '__main__':
    unittest.main()
