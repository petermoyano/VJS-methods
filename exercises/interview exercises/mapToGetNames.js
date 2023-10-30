// write code to get array of names from given array of users
// get Back only active users
// sort users by age descending 

const users = [
  {
    id: 1,
    name: "Jack",
    isActive: true,
    age: 20,
  },
  {
    id: 2,
    name: "John",
    isActive: false,
    age: 18,
  },
  {
    id: 3,
    name: "Peter",
    isActive: true,
    age: 30,
  },
];

const getNames1 = (users) => {
  return users.map((user) => {
    return user.name;
  });
};

function getNames2(users) {
  const names = [];
  for (let i = 0; i < users.length; i++) {
    names.push(users[i].name);
  }
  return names;
}

const getNames3 = (users) => {
  const names = [];
  users.forEach((user) => names.push(user.name));
  return names;
};

function getNames4(users) {
  return users
    .filter((user) => user.isActive === true)
    .map((user) => user.name);
}

function getNames5(users) {
  return users.sort((a, b) => a.age - b.age);
}
console.log(getNames1(users));
console.log(getNames2(users));
console.log(getNames3(users));
console.log(getNames4(users));
console.log(getNames5(users));