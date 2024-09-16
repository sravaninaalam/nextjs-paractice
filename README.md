
1)TEMPLATE
        ---In Next.js, the template.js (or more commonly template.tsx in TypeScript projects) is part of the framework's app directory which is introduced as a new feature in Next.js 13 for handling layouts and dynamic rendering. This file allows you to define templates that dynamically wrap or structure the layout of specific routes.

        Here’s a breakdown of the use and where to use template.js:

        Purpose of template.js in Next.js

        ==>Dynamic Layouts: The template.js file is used to define dynamic layouts. Unlike the layout.js file, which is shared across different pages, the template.js file can provide dynamic behavior, meaning it re-renders based on props, data, or route changes.
        =>Isolated Rendering: Every time the component re-renders, it doesn’t reuse the template from cache like layout.js. This is beneficial for pages that need to be re-rendered on the server or when specific props or data change.
        =>Dynamic Data: If you have components that rely on changing data (like fetching data from an API), templates allow that dynamic behavior, while layouts remain static across different pages.
        Key Differences Between template.js and layout.js
        layout.js is meant for static layouts, meaning it renders once and persists across navigation.
        template.js is used for dynamic layouts that can change on every render, depending on the page’s data or route.

        ==>you can use both layout.js and template.js at the same level. They complement each other, with layout.js being static and template.js being dynamic, providing a flexible structure for pages and routes