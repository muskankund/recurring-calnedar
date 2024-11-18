This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Task: Build a reusable date picker component in React that allows users to select recurring dates, similar to the feature in the TickTick app.

Technical Requirements:

Framework: Next.js

Styling: Tailwind CSS (or any CSS framework you're comfortable with)

State Management: Choose a modern state management library like Zustand, Jotai, or React Context API.

Development Environment: Use a cloud-based IDE like CodeSandbox, StackBlitz, Gitpod, or GitHub Codespaces.

Functionality:

Recurring Options: Users should be able to select different recurring patterns:

Daily

Weekly

Monthly

Yearly

Customization: Allow users to fine-tune the recurrence:

Every X days/weeks/months/years

Specific days of the week

The nth day of the month (e.g., the second Tuesday)

Visual Preview: Display the selected recurring dates on a mini calendar within the date picker.

Date Range: Allow users to set a start and (optional) end date for the recurrence.

Code Structure:

Break down the component into smaller, reusable parts (e.g., recurrence options, date picker, preview).

Write clean, well-documented code.

Testing:

Write unit tests for individual component logic.

Include at least one integration test to ensure the entire component works together as expected.