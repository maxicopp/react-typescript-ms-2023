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

// type Admin = {
//   permissions: string[];
// };

// type AppUser = {
//   userName: string;
// };

// type AppAdmin = Admin & AppUser;

// let admin: AppAdmin;

// admin = {
//   permissions: ['read', 'write'],
//   userName: 'Max',
// };

interface Admin {
  permissions: string[];
}

interface AppUser {
  userName: string;
}

interface AppAdmin extends Admin, AppUser {}

let admin: AppAdmin;

admin = {
  permissions: ['read', 'write'],
  userName: 'Max',
};

type Role = 'admin' | 'user' | 'editor';

let role: Role;

role = 'user';
role = 'admin';
role = 'editor';
// role = 'other';

function performAction(action: string | number, role: Role) {
  if (role === 'admin' && typeof action === 'string') {
    console.log('Perform admin action');
  }
}

let roles: Array<Role>;

roles = ['admin', 'user'];

type DataStorage<T> = {
  storage: T[];
  add: (data: T) => void;
};

const textStorage: DataStorage<string> = {
  storage: ['Max'],
  add: (data: string) => {
    textStorage.storage.push(data);
  },
};

const userStorage: DataStorage<User> = {
  storage: [
    {
      name: 'Max',
      age: 27,
      isAdmin: true,
      id: 'abc',
    },
  ],
  add: (data: User) => {
    userStorage.storage.push(data);
  },
};

function merge<T, U>(a: T, b: U) {
  return { ...a, ...b };
}

const newUser = merge({ name: 'Max' }, { age: 27 });

newUser.age;
newUser.name;
