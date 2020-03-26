function loggingIdentity(arg) {
    console.log(arg.length);
    return arg;
}
loggingIdentity('3');
loggingIdentity({ length: 1 });
