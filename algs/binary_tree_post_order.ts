type BinaryNode<T> = {
  value: T;
  left: BinaryNode<T>;
  right: BinaryNode<T>;
};

function walk(curr: BinaryNode<number> | null, path: number[]): number[] {
  if (!curr) {
    return path;
  }

  // recurse
  walk(curr.left, path);

  // recurse
  walk(curr.right, path);

  // pre
  path.push(curr.value);

  // post
  return path;
}

export default function post_order_search(head: BinaryNode<number>): number[] {
  return walk(head, []);
}
