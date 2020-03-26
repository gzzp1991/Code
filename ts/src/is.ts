function isString(s: any): s is string {
  return typeof s === 'string';
}

function toUpperCase(x: unknown) {
  if (isString(x)) {
    x.toUpperCase(); // ⚡️ x is still of type unknown
  }
}
