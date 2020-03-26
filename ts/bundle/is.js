function isString(s) {
    return typeof s === 'string';
}
function toUpperCase(x) {
    if (isString(x)) {
        x.toUpperCase();
    }
}
