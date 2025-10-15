# TypeScript & React + TypeScript Review Notes

**Date:** October 10, 2025  
**Goal:** Review key TypeScript and React + TypeScript concepts covered today.

---

## Type Narrowing with `"in"` Operator

The `"in"` operator acts as a type guard in TypeScript. It checks whether an object contains a specific property. Inside the if block, TypeScript automatically narrows the type of the object to include that property.

```ts
if ("id" in pizzaObj) {
  menu.push(pizzaObj);
  console.log("Add New Pizza Menu", menu);
} else {
  const newPizza = {
    id: pizzaId++,
    name: pizzaObj.name,
    price: pizzaObj.price,
  };
  menu.push(newPizza);
  console.log("Add New Pizza Menu", menu);
  return;
}
```

## Global Variables and Increment Behavior

When using the post-increment operator (`++`), the current value is used first, then the variable is incremented. This is particularly useful with global counters.

```ts
addNewPizza({ id: pizzaId++, name: "Red Horse Pizza", price: 100 });
```

`pizzaId` is a global variable that increments after each use, so subsequent calls will automatically use the incremented IDs.

## Generics in TypeScript

Generics allow you to create reusable components and functions that can work with any data type while keeping type safety. They help you avoid using `any` and ensure compile-time type checking.

```ts
function identity<T>(value: T): T {
  return value;
}

const numberValue = identity<number>(42);
const stringValue = identity<string>("Hello");
```

**Why use Generics?**

- Helps you avoid `any`
- Makes your functions and components reusable
- Ensures type inference and compile-time checking

## Error: JSX Syntax Not Allowed

**Issue:** "This syntax is not allowed when 'erasableSyntaxOnly' is enabled."

This happens when you use JSX (`<Component />`) in a TypeScript file (`.ts`) instead of a TSX file (`.tsx`). TypeScript with `--erasableSyntaxOnly` doesn't support JSX.

**Fix:**

1. Rename the file to `.tsx`
2. Ensure `tsconfig.json` allows JSX:

```json
{
  "compilerOptions": {
    "jsx": "react-jsx"
  }
}
```

## Submitting Values with onSubmit

Use `React.FormEvent<HTMLFormElement>` to type the form submission event. Always call `e.preventDefault()` to prevent page reload.

```tsx
function FormExample() {
  const [value, setValue] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <button type="submit">Submit</button>
    </form>
  );
}
```

**Key Points:**

- The `onSubmit` event type is `React.FormEvent<HTMLFormElement>`
- Always call `e.preventDefault()` to stop page reload
- Manage input data via `useState`

## Typing onChange Events

Use `React.ChangeEvent<HTMLInputElement>` for input onChange events. The `e.target.value` is strongly typed as a string.

```tsx
<input
  type="text"
  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  }}
/>
```

## Typing onChange as a Prop

When passing onChange as a prop, define its type in your component's props interface for full IntelliSense support.

```tsx
type InputProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function TextInput({ value, onChange }: InputProps) {
  return <input value={value} onChange={onChange} />;
}
```

Usage:

```tsx
<TextInput value={name} onChange={(e) => setName(e.target.value)} />
```

## Event Type Reference

| Use Case          | Type                                     |
| ----------------- | ---------------------------------------- |
| Input onChange    | `React.ChangeEvent<HTMLInputElement>`    |
| Textarea onChange | `React.ChangeEvent<HTMLTextAreaElement>` |
| Select onChange   | `React.ChangeEvent<HTMLSelectElement>`   |
| Form onSubmit     | `React.FormEvent<HTMLFormElement>`       |

## Summary

- **"in" operator** → acts as a type guard
- **pizzaId++** → increments global variable after use
- **Generics** → enable reusable, type-safe logic
- **TSX requirement** → JSX can only exist in `.tsx` files
- **onSubmit typing** → `React.FormEvent<HTMLFormElement>`
- **onChange typing** → `React.ChangeEvent<HTMLInputElement>`
- **tsconfig.json** → always properly configure for React JSX
