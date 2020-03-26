function buildName(firstName, lastName) {
    return firstName + ' ' + lastName;
}
let buildName3 = buildName('Bob', 'Adams');
function buildNameOptional(firstName, lastName) {
    if (lastName) {
        return firstName + ' ' + lastName;
    }
    return firstName;
}
let buildNameOptional1 = buildNameOptional('Bob');
let buildNameOptional3 = buildNameOptional('Bob', 'Adams');
function buildNameDefault(firstName, lastName = 'Smith') {
    return firstName + ' ' + lastName;
}
let buildNameDefault1 = buildNameDefault('Bob');
let buildNameDefault2 = buildNameDefault('Bob', undefined);
let buildNameDefault4 = buildNameDefault('Bob', 'Adams');
function buildNameRest(firstName, ...restName) {
    return firstName + ' ' + restName.join(' ');
}
console.log(buildNameRest('Joseph', 'Samuel', 'Lucas', 'MacKinzie'));
