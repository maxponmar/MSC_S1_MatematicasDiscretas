export class UnbalancedParentheses extends Error {
  constructor(message, fileName, lineNumber) {
    super(message, fileName, lineNumber);
    this.name = "UnbalancedParentheses";
  }
}
export class MissingTruthValue extends Error {
  constructor(message, fileName, lineNumber) {
    super(message, fileName, lineNumber);
    this.name = "MissingTruthValue";
  }
}
export class OperatorMismatch extends Error {
  constructor(message, fileName, lineNumber) {
    super(message, fileName, lineNumber);
    this.name = "OperatorMismatch";
  }
}
export class MissingValue extends Error {
  constructor(message, fileName, lineNumber) {
    super(message, fileName, lineNumber);
    this.name = "MissingValue";
  }
}
export class ValueError extends Error {
  constructor(message, fileName, lineNumber) {
    super(message, fileName, lineNumber);
    this.name = "ValueError";
  }
}
