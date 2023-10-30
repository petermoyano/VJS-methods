// write code to get array of names from given array of users

const users = [
    {
        id: 1,
        name: "Jack",
        isActive: true,
    },
    {
        id: 2,
        name: "John",
        isActive: false,
    },
    {
        id: 3,
        name: "Peter",
        isActive: true,
    },
];

const getNames = (users) => {
    return users.map((user) => {
        return user.name;
    });
};

function getNames2(users) {
    const names = [];
    for (let i = 0; i < users.length; i = i + 1) {}
}

console.log(getNames(users));
