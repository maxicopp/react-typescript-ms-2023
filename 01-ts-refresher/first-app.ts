let userName = 'Max';
const API_KEY = '123';

// userName = 95;
userName = 'Max';

let userAge = 27;

let isValid = true;

// string, number, boolean

type StringOrNumber = string | number;

let userID: StringOrNumber = 'abc123';
userID = 123;

// userID = true;
// let user: object;

type User = {
  name: string;
  age: number;
  isAdmin: boolean;
  id: string | number;
};

let user: User;

// user = 'Max';

user = {
  name: 'Max',
  age: 27,
  isAdmin: true,
  id: 'abc', // 123
};

// user = {};

// let hobbies: Array<string>;
let hobbies: string[];

hobbies = ['Sports', 'Cooking', 'Reading'];
// hobbies = [1, 2, 3];

function add(a: number, b: number): number {
  const result = a + b;
  return result;
}

type AddFn = (a: number, b: number) => number;

function calculate(a: number, b: number, calcFn: AddFn) {
  calcFn(a, b);
}

calculate(2, 3, add);

interface Credentials {
  password: string;
  email: string;
}

let creds: Credentials;

creds = {
  password: '123',
  email: 'max@me.com',
};

class AuthCredentials implements Credentials {
  password: string;
  email: string;
  userName: string;
}

function login(credentials: Credentials) {}

// login(creds);
login(new AuthCredentials());
