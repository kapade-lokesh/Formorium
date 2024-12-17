# Custom Button Component

A customizable button component built with **React** and **TailwindCSS**. This component supports various variants, colors, and sizes, with options for full-width buttons, disabled states, and custom styles.

---

## Table of Contents

1.  [Installation](#installation)
2.  [Props](#props)
3.  [Variants](#variants)
4.  [Colors](#colors)
5.  [Sizes](#sizes)
6.  [Additional Features](#additional-features)
7.  [Usage Examples](#usage-examples)
8.  [Customization](#customization)

---

## Installation

To use this button component, ensure you have **React** and **TailwindCSS** set up in your project.

1.  Install TailwindCSS (skip if already installed):

    ```bash
    npm install -D tailwindcss postcss autoprefixer
    npx tailwindcss init
    ```

2.  Install **PropTypes** for type checking (optional):

    ```bash
    npm install prop-types
    ```

3.  Add the `Button` component to your project.

---

## Props

The Button component accepts the following props:

| Prop Name   | Type                                     | Default     | Description                                         |
| ----------- | ---------------------------------------- | ----------- | --------------------------------------------------- |
| `children`  | `node` (Required)                        | -           | Content inside the button (text, icons, etc.).      |
| `className` | `string`                                 | `""`        | Custom classes to extend or override styles.        |
| `variant`   | `"solid"`, `"outline"`, `"text"`         | `"solid"`   | Defines the style variant of the button.            |
| `onClick`   | `function`                               | `undefined` | Function to handle click events.                    |
| `disabled`  | `bool`                                   | `false`     | Disables the button when set to `true`.             |
| `color`     | `"red"`, `"blue"`, `"green"`, `"yellow"` | `undefined` | Sets the button color.                              |
| `size`      | `"sm"`, `"md"`, `"lg"`                   | `"sm"`      | Defines the button size.                            |
| `fullwidth` | `bool`                                   | `false`     | Makes the button span the full width of its parent. |

---

## Variants

The button component supports **3 variants**:

1.  **Solid** (default): A filled button with a background color.
2.  **Outline**: Transparent background with a border.
3.  **Text**: Transparent button with colored text and hover effects.

### Example

```jsx
<Button variant="solid" color="blue">Solid Button</Button>
<Button variant="outline" color="red">Outline Button</Button>
<Button variant="text" color="green">Text Button</Button>
```

---

## Colors

You can apply different colors to buttons using the `color` prop.

| Color    | Solid Style               | Outline Style                       | Text Style       |
| -------- | ------------------------- | ----------------------------------- | ---------------- |
| `red`    | `bg-[#f50538] text-white` | `border-red-500 text-red-500`       | `text-[#f50538]` |
| `blue`   | `bg-[#3d4b91] text-white` | `border-blue-500 text-blue-500`     | `text-[#3d4b91]` |
| `green`  | `bg-[#72b043] text-white` | `border-green-500 text-green-500`   | `text-[#72b043]` |
| `yellow` | `bg-[#f8cc1b] text-black` | `border-yellow-400 text-yellow-400` | `text-[#f8cc1b]` |

---

## Sizes

The button supports **3 sizes**:

- `sm` (small): Compact button.
- `md` (medium): Default size.
- `lg` (large): Larger button.

### Example

```jsx
<Button size="sm">Small Button</Button>
<Button size="md">Medium Button</Button>
<Button size="lg">Large Button</Button>
```

---

## Additional Features

### Disabled Button

Use the `disabled` prop to disable the button.

```jsx
<Button disabled>Disabled Button</Button>
```

---

### Full Width Button

Make the button span the full width of its container using the `fullwidth` prop.

```jsx
<Button fullwidth>Full Width Button</Button>
```

---

### Custom Class Name

You can pass custom styles using the `className` prop.

```jsx
<Button className="shadow-lg font-bold">Custom Button</Button>
```

---

## Usage Examples

### Solid Blue Button

```jsx
<Button variant="solid" color="blue" size="md">
  Solid Blue Button
</Button>
```

### Outline Red Button

```jsx
<Button variant="outline" color="red" size="lg">
  Outline Red Button
</Button>
```

### Text Green Full-Width Button

```jsx
<Button variant="text" color="green" fullwidth>
  Full Width Green Text Button
</Button>
```

### Disabled Yellow Button

```jsx
<Button variant="solid" color="yellow" disabled>
  Disabled Yellow Button
</Button>
```

---

## Customization

You can easily extend this component:

1.  **Add New Variants**:
    Extend the `variantStyles` object to define new button styles.

2.  **Add More Colors**:
    Update the `colorStyles` object with new color entries.

3.  **Tailwind Configuration**:
    Adjust TailwindCSS configuration for additional design tokens.

---

## Conclusion

This button component is reusable, flexible, and easy to customize. By leveraging TailwindCSS and React, it provides a clean, scalable solution for buttons in your projects.

---
