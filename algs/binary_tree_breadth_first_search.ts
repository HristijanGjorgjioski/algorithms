type BinaryNode<T> = {
  value: T;
  left: BinaryNode<T> | null;
  right: BinaryNode<T> | null;
};

export default function binary_tree_breadth_first_search(
  head: BinaryNode<number>,
  needle: number
): boolean {
  const q: (BinaryNode<number> | null)[] = [head];

  while (q.length) {
    const curr = q.shift() as BinaryNode<number> | undefined | null;
    if (!curr) {
      continue;
    }

    // search
    if (curr?.value === needle) {
      return true;
    }

    q.push(curr.left);
    q.push(curr.right);
  }

  return false;
}
