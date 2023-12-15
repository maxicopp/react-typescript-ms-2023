let userName = 'Max';

// userName = 95;
userName = 'Max';

let userAge = 27;

let isValid = true;

// string, number, boolean

let userID: string | number = 'abc123';
userID = 123;

// userID = true;
// let user: object;
let user: {
  name: string;
  age: number;
  isAdmin: boolean;
  id: string | number;
};

// user = 'Max';

user = {
  name: 'Max',
  age: 27,
  isAdmin: true,
  id: 'abc', // 123
};

// user = {};
