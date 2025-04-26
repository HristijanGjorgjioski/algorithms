type BinaryNode<T> = {
  value: T;
  left: BinaryNode<T>;
  right: BinaryNode<T>;
};

export default function compare_binary_trees(
  a: BinaryNode<number> | null,
  b: BinaryNode<number> | null
): boolean {
  if (a === null && b === null) {
    return true;
  }

  if (a === null || b === null) {
    return false;
  }

  if (a.value !== b.value) {
    return false;
  }

  return (
    compare_binary_trees(a.left, b.left) &&
    compare_binary_trees(a.right, b.right)
  );
}
