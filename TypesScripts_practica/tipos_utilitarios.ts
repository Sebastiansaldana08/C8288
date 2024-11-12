// Pick

interface User {
    id: number;
    name: string;
    email: string;
  }
  
  type UserPreview = Pick<User, 'id' | 'name'>;
  
  const user: UserPreview = { id: 1, name: 'Sebastián' };

// Record

type UserNamesById = Record<number, string>;

const users: UserNamesById = {
  1: 'Sebastián',
  2: 'Andrea',
  3: 'Luis'
};

// Partial
interface IUser {
    id: number;
    name: string;
    email: string;
  }
  
  type PartialUser = Partial<IUser>;
  
  const partialUser: PartialUser = { name: 'Sebastián' };

// Required

type RequiredUser = Required<PartialUser>;

const user: RequiredUser = { id: 1, name: 'Sebastián', email: 'sebastian@example.com' };


// Omit

type UserWithoutEmail = Omit<IUser, 'email'>;

const user: UserWithoutEmail = { id: 1, name: 'Sebastián' };


// Readonly

type ReadonlyUser = Readonly<PartialUser>;

const user: ReadonlyUser = { id: 1, name: 'Sebastián', email: 'sebastian@example.com' };


// Extract & Exclude

type MessageType = "info" | "error" | "warning";
type CriticalMessage = Extract<MessageType, "error" | "warning">;  // "error" | "warning"

type NonCriticalMessage = Exclude<MessageType, "error" | "warning">;  // "info"


// NonNullable

type Name = string | null | undefined;
type NonNullableName = NonNullable<Name>;  // Solo acepta string, no null o undefined

// Promise

type PromiseResult<T> = T extends Promise<infer U> ? U : never;

async function fetchData(): Promise<string> {
  return "Hello, World!";
}

type ResultType = PromiseResult<ReturnType<typeof fetchData>>;  // "Hello, World!"

// Non-null assertion operator

let value: string | null | undefined;

const nonNullValue: string = value!;  // Error: Type 'null | undefined' is not assignable to type'string'.ts(2322)

// Non-null assertion operator with optional chaining

value = "Hello, World!";

const nonNullValueWithOptional chaining: string = value?.trim();  // "Hello, World!"

// Non-null assertion operator with nullish coalescing

value = null;

const nonNullValueWithNullishCoalescing: string = value?? "Default Value";  // "Default Value"

// Non-null assertion operator with optional chaining and nullish coalescing

value = undefined;

const nonNullValueWithOptionalChainingAndNullishCoalescing: string = value?.trim()?? "Default Value";  // "Default Value"

// Non-null assertion operator with spread operator

value = "Hello, World!";

const nonNullValueWithSpreadOperator: string = [...value].join("");  // "Hello, World!"

// Non-null assertion operator with template literals

value = "Hello, World!";

const nonNullValueWithTemplateLiteral: string = `Non-null value: ${value}`;  // "Non-null value: Hello, World!"

// Non-null assertion operator with conditional type

type NonNullableValue<T> = T extends null | undefined? never : T;

const nonNullValueWithConditionalType: NonNullableValue<string | null | undefined> = value;  // string | null | undefined

// Non-null assertion operator with type guards 

function isString(value: unknown): value is string {
  return typeof value === "string";
}

if (isString(value)) {
  const nonNullValueWithTypeGuard: string = value;  // string
}

// Non-null assertion operator with type assertions

const nonNullValueWithTypeAssertion: string = value as string;  // string

