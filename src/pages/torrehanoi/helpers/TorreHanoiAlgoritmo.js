export default function TOH(n, A, B, C, resultStateSetter) {
  if (n > 0) {
    TOH(n - 1, A, C, B, resultStateSetter);
    resultStateSetter((oldState) => {
      return [...oldState, { from: A, to: B }];
    });
    // console.log(`Mover disco desde ${A} to ${C}\n`);
    TOH(n - 1, B, A, C, resultStateSetter);
  }
}
