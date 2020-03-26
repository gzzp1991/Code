function identityNumber(arg) {
    return arg;
}
function identityStr(arg) {
    return arg;
}
function identity(arg) {
    return arg;
}
const outputNumber = identity(1);
console.log(outputNumber);
const outputStr = identity('1');
console.log(outputStr);
function loggingIdentity1(arg) {
    return arg;
}
function loggingIdentity2(arg) {
    console.log(arg.length);
    return arg;
}
function loggingIdentity3(arg) {
    console.log(arg.length);
    return arg;
}
