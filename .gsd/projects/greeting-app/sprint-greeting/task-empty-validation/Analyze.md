# Technical & DOM Analysis

## 1. DOM Elements & Accessible Hierarchy
- Container: Root page at `/`
- Submit control: `screen.getByRole('button', { name: 'Greet' })`
- Alert element: `screen.getByRole('alert')` filtered by text `'Enter a name first.'`

## 2. Dependencies & Preconditions
- Base URL reachable at `/`.
- Empty input field.
