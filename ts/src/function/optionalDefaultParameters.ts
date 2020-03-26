function buildName(firstName: string, lastName: string) {
  return firstName + ' ' + lastName;
}
// let buildName1 = buildName("Bob"); // error, too few parameters
// let buildName2 = buildName("Bob", "Adams", "Sr."); // error, too many parameters
let buildName3 = buildName('Bob', 'Adams'); // ah, just right

function buildNameOptional(firstName: string, lastName?: string) {
  if (lastName) {
    return firstName + ' ' + lastName;
  }
  return firstName;
}
let buildNameOptional1 = buildNameOptional('Bob'); // works correctly now
// let buildNameOptional2 = buildNameOptional('Bob', 'Adams', 'Sr.'); // error, too many parameters
let buildNameOptional3 = buildNameOptional('Bob', 'Adams'); // ah, just right

function buildNameDefault(firstName: string, lastName = 'Smith') {
  return firstName + ' ' + lastName;
}
let buildNameDefault1 = buildNameDefault('Bob'); // works correctly now, returns "Bob Smith"
let buildNameDefault2 = buildNameDefault('Bob', undefined); // still works, also returns "Bob Smith"
// let buildNameDefault3 = buildNameDefault('Bob', 'Adams', 'Sr.'); // error, too many parameters
let buildNameDefault4 = buildNameDefault('Bob', 'Adams'); // ah, just right

function buildNameRest(firstName: string, ...restName: string[]) {
  return firstName + ' ' + restName.join(' ');
}
console.log(buildNameRest('Joseph', 'Samuel', 'Lucas', 'MacKinzie'));
