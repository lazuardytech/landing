# AGENTS.md

This document describes the key technologies ("agents") used in this project and how they are integrated and utilized.

---

## Next.js

**Purpose:**
Next.js is the React framework powering this project. It provides server-side rendering, static site generation, API routes, and advanced routing capabilities.

**Usage in this project:**

- The application is structured using the Next.js `app` directory for routing and page management.
- API routes (if any) are handled via the `/api` directory or server components.
- Configuration is managed in `next.config.mjs`.
- Middleware is implemented in `middleware.js` for request handling and route protection.

**References:**

- [Next.js Documentation](https://nextjs.org/docs)

---

## Tailwind CSS

**Purpose:**
Tailwind CSS is a utility-first CSS framework used for rapid UI development with a consistent design system.

**Usage in this project:**

- Tailwind is configured and imported globally, allowing utility classes to be used throughout all components and pages.
- Customization is possible via the Tailwind config file (typically `tailwind.config.js` or similar).
- Responsive design and dark mode are handled using Tailwind's built-in utilities.

**References:**

- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

---

## shadcn/ui

**Purpose:**
shadcn/ui is a collection of accessible, customizable React components built on top of Radix UI and styled with Tailwind CSS.

**Usage in this project:**

- UI components such as buttons, dialogs, forms, and more are imported from shadcn/ui.
- Components are customized using Tailwind utility classes to match the project's branding and design requirements.
- shadcn/ui ensures accessibility and consistency across the UI.

**References:**

- [shadcn/ui Documentation](https://ui.shadcn.com/)

---

## Formspark

**Purpose:**
Formspark is a form backend service that handles form submissions without requiring a custom backend.

**Usage in this project:**

- Forms are connected to Formspark endpoints for handling submissions (e.g., contact forms, newsletter signups).
- Integration is typically done by setting the form `action` attribute to the Formspark endpoint and using the `POST` method.
- No server-side code is required for basic form handling, reducing complexity and maintenance.

**References:**

- [Formspark Documentation](https://formspark.io/docs/)

---

## Summary

This project leverages Next.js for its robust React-based framework, Tailwind CSS for efficient styling, shadcn/ui for high-quality UI components, and Formspark for simple, serverless form handling. Together, these tools enable rapid development of modern, performant, and maintainable web applications.
