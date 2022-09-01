export default function checkParanthesis(str) {
  let brackets = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") {
      brackets.push(str[i]);
    } else if (str[i] === ")") {
      if (brackets[brackets.length - 1] === "(") brackets.pop();
      else brackets.push("#");
    }
  }
  return brackets.length;
}
