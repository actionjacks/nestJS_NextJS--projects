class Node:
    def __init__(self, data):
        self.data = data
        self.next = None


class LinkedList:
    def __init__(self):
        self.head = None

    def is_empty(self):
        return self.head is None

    def append(self, data):
        new_node = Node(data)
        if self.is_empty():
            self.head = new_node
        else:
            current = self.head
            while current.next:
                current = current.next
            current.next = new_node

    def prepend(self, data):
        new_node = Node(data)
        new_node.next = self.head
        self.head = new_node

    def delete(self, data):
        if self.is_empty():
            return

        if self.head.data == data:
            self.head = self.head.next
            return

        current = self.head
        while current.next:
            if current.next.data == data:
                current.next = current.next.next
                return
            current = current.next

    def search(self, data):
        current = self.head
        while current:
            if current.data == data:
                return True
            current = current.next
        return False

    def display(self):
        elements = []
        current = self.head
        while current:
            elements.append(current.data)
            current = current.next
        print(elements)


linked_list = LinkedList()
linked_list.append(1)
linked_list.append(2)
linked_list.append(3)
linked_list.display()  # [1, 2, 3]

linked_list.prepend(0)
linked_list.display()  # [0, 1, 2, 3]

linked_list.delete(2)
linked_list.display()  # [0, 1, 3]

print(linked_list.search(1))  # True
print(linked_list.search(4))  # False


class LinkedList2:
    def __init__(self):
        self.head = None

    def is_empty(self):
        return self.head is None

    def append(self, data):
        new_node = Node(data)
        if self.is_empty():
            self.head = new_node
        else:
            current = self.head
            while current.next:
                current = current.next
            current.next = new_node

    def prepend(self, data):
        new_node = Node(data)
        new_node.next = self.head
        self.head = new_node

    def delete(self, data):
        if self.is_empty():
            return

        if self.head.data == data:
            self.head = self.head.next
            return

        current = self.head
        while current.next:
            if current.next.data == data:
                current.next = current.next.next
                return
            current = current.next

    def search(self, data):
        current = self.head
        while current:
            if current.data == data:
                return True
            current = current.next
        return False

    def display(self):
        elements = []
        current = self.head
        while current:
            elements.append(current.data)
            current = current.next
        print(elements)

    def insertion_sort(self):
        if self.is_empty() or self.head.next is None:
            return

        sorted_head = None
        current = self.head

        while current:
            next_node = current.next
            sorted_head = self.sorted_insert(sorted_head, current)
            current = next_node

        self.head = sorted_head

    def sorted_insert(self, head, node):
        if head is None or node.data <= head.data:
            node.next = head
            return node

        current = head
        while current.next and current.next.data < node.data:
            current = current.next

        node.next = current.next
        current.next = node

        return head


linked_list2 = LinkedList2()
linked_list2.append(5)
linked_list2.append(3)
linked_list2.append(8)
linked_list2.append(1)
linked_list2.append(2)

print("Przed sortowaniem:")
linked_list2.display()  # Wyjście: [5, 3, 8, 1, 2]

linked_list2.insertion_sort()

print("Po sortowaniu:")
linked_list2.display()  # Wyjście: [1, 2, 3, 5, 8]
