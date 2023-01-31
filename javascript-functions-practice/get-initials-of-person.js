/* exported getInitialsOfPerson */

function getInitialsOfPerson(person) {
  var initials = person.firstName[0] + person.lastName[0];
  return initials;
}
