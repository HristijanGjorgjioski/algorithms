class LNode<T> {
  data: T;
  next: LNode<T> | null = null;

  constructor(data: T) {
    this.data = data;
  }
}

export class LinkedList<T> {
  head: LNode<T> | null = null;

  append(data: T): void {
    const newNode = new LNode(data);

    if (this.head === null) {
      //list is empty
      this.head = newNode;
      return;
    }
    // list has elements
    let current = this.head;
    while (current.next !== null) {
      current = current.next;
    }
    current.next = newNode;
    return;
  }

  remove(data: T): void {
    if (this.head === null) return;

    if (this.head.data === data) {
      this.head = this.head.next;
      return;
    }

    let current: LNode<T> | null = this.head;
    let previous: LNode<T> | null = null;

    while (current !== null && current.data !== data) {
      previous = current;
      current = current.next;
    }

    if (current === null) {
      console.log("Node not found.");
      return;
    }

    if (previous !== null) {
      previous.next = current.next;
    }
  }

  display(): void {
    let current = this.head;
    const values: T[] = [];

    while (current !== null) {
      values.push(current.data);
      current = current.next;
    }
    console.log(values.join(" -> "));
  }

  find(data: T): LNode<T> | null {
    let current = this.head;
    if (!current) {
      return null;
    }
    if (current.data === data) {
      return current;
    }

    while (current !== null) {
      if (current.data === data) {
        return current;
      }
      current = current.next;
    }
    return null;
  }
}
