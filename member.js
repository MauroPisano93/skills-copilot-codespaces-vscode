function skillsMember() {
  var member = {
    name: 'John',
    skills: ['JavaScript', 'React', 'Node'],
    age: 22,
    greet: function () {
      console.log(`Hello, my name is ${this.name}`);
    },
  };
  return member;
}