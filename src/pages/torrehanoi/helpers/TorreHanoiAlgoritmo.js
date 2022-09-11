export default function TOH(n, A, B, C) {
  if (n > 0) {
    TOH(n - 1, A, C, B);
    console.log(`Move from ${A} to ${C}\n`);
    TOH(n - 1, B, A, C);
  }
}
