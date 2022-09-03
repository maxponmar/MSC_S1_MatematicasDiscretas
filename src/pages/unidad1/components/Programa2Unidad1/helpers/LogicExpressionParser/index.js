import LogicTree from "./tree";

function evaluate(expression, debug = true) {
  let result, table;
  try {
    table = new LogicTree(expression).makeTable().join("\n");
    result = {
      success: true,
      request: expression,
      table: table,
    };
  } catch (e) {
    result = {
      success: false,
      request: expression,
      error: debug ? e : "Invalid expression",
    };
  }
  return result;

  // return new LogicTree("q<->p").makeTable().join("\n");
}

export default evaluate;
