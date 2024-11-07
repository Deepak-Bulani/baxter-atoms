## How to Contribute

### A. Code Cleanliness

1. Ensure that you've installed the recommended VSCode extensions. This will enable your linter for the project's source files. Css is linted via stylelint. Everything else is linted via eslint.

2. Remove unused files and lines from the codebase. Version control will track these, so there's no need to comment them out and leave them in the code.

### B. Project Strucutre

1. components/: This directory hosts all the React components.

2. pages/: This will have all the pages which will be developed in the application.

3. hooks/: Shared hooks used across the entire application

4. services/: This contains all the common services used inside the project. Services could be Api wrapper and data maipulation.

5. assets/: Assets folder should contain all the static files such as images, fonts, etc.

6. config/: Holds the app specific configuration variables. Please, do not store any secret keys here.

7. utils/: Utility functions for a specific feature.

8. constants/: Contains all the constant being used in the project.

9. app/: Application layer root files. This folder will contain: app.tsx, global.css, routes.

Every component/file should be wrapped up in the folder of that particular component:

```
├── components
          ├── Button
                ├── button.jsx
                └── button.css
```

### C. Style Guidelines

1. Lint via stylelint.

2. Prefer tailwindcss classes over custom classes. This cuts down on the amount of CSS to maintain.

3. Avoid underscores wherever possible. They're cumbersome to type and offer no real benefit. Use a single dash `-` between words in CSS class names.

4. Avoid BEM. Prefer locally-scoped css for each component.

### D. Best Practices

1. Naming convention

   - All folder names should follow small case.
   - Component names should follow Pascal Case.
   - Variable/Functions name should follow camelCase

1. Clean Code

   - Avoid unnecessary `div` in the HTML.

   - Avoid inline styling.
   - Place code as close to where it's relevant as possible. Variables and functions should be declared close to their usage (if mentioned in same file).

   - Comments can be extremely helpful,but too much comments can create noise. Stale comments should be deleted as they can be misleading.

   - Keep functions small and easier to understand.

   - Limit the number of arguments pass to any function. If required, pass it as object argument with object destructuring syntax.

   - Avoid flag based logic in a single function. Example:
     ❌

     ```js
     const makeBooking = (customer, isPremium) => {
       if (isPremium) {
         // logic for premium booking
       } else {
         // logic for regular booking
       }
     };
     ```

     ✅

     ```js
     const makeRegularBooking = (customer) => {
       // logic for regular booking
     };

     const makePremiumBooking = (customer) => {
       // logic for premium booking
     };
     ```

   - Use verb while naming any function. Maintain consistency on it:
     ❌

     ```js
     getArticles();
     fetchUsers();
     retrievePages();
     ```

     ✅

     ```js
     getArticles();
     getUsers();
     getPages();
     ```

   - Avoid passing closures to an event.
     ❌

     ```js
     <input
       type="text"
       value={model.name}
       onChange={(e) => {
         model.name = e.target.value;
       }}
     />
     ```

     ✅

     ```js
     <input type="text" value={model.name} onChange={this.handleChange} />
     ```

   - Avoid multiline conditional rendering in JSX. Extract that logic into sub components
   - When several components reflect the same changing data lift shared state up to a common ancestor

### E. Pull Requests

1. Keep pull requests small and self-contained. Ideally, PR's should contain UP TO 10 modified files. Anything larger than a 10-file PR should be split into smaller PR's to make reviewing easier.

2. Make sure all the hooks and linting are run before your raise a PR.

### F. Assets

1. Store all assets like images and videos in `/src/assets`.

### G. Development

1. Always keep your browser's developer console open while developing. React will emit useful error messages depending on the context.
