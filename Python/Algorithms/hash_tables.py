class HashTable:
    def __init__(self, size):
        self.size = size
        self.table = [[] for _ in range(size)]

    def _hash(self, key):
        return hash(key) % self.size

    def insert(self, key, value):
        hash_value = self._hash(key)
        bucket = self.table[hash_value]
        for i, (existing_key, existing_value) in enumerate(bucket):
            if existing_key == key:
                bucket[i] = (key, value)
                break
        else:
            bucket.append((key, value))

    def delete(self, key):
        hash_value = self._hash(key)
        bucket = self.table[hash_value]
        for i, (existing_key, _) in enumerate(bucket):
            if existing_key == key:
                del bucket[i]
                break

    def search(self, key):
        hash_value = self._hash(key)
        bucket = self.table[hash_value]
        for existing_key, existing_value in bucket:
            if existing_key == key:
                return existing_value
        return None


hash_table = HashTable(10)
hash_table.insert("apple", 5)
hash_table.insert("banana", 7)
hash_table.insert("orange", 3)

print(hash_table.search("apple"))  # Wyjście: 5
print(hash_table.search("banana"))  # Wyjście: 7
print(hash_table.search("orange"))  # Wyjście: 3

hash_table.delete("banana")
print(hash_table.search("banana"))  # Wyjście: None
