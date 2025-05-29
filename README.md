# Test Project

A test project built with React, TypeScript, and Vite to demonstrate and test various features and configurations.

## Commit Message Guidelines

This project uses [Conventional Commits](https://www.conventionalcommits.org/) to standardize commit messages. This helps automate versioning and changelog generation.

### Commit Format

```
<type>(<scope>): <description>

[optional body]

[optional footer]
```

### Commit Types

- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation changes
- `style`: Changes that do not affect the meaning of the code (formatting, missing semicolons, etc)
- `refactor`: Code changes that neither fix bugs nor add features
- `perf`: Performance improvements
- `test`: Adding or fixing tests
- `build`: Changes to build system or dependencies
- `ci`: Changes to CI configuration
- `chore`: Other changes that don't modify src or test files
- `revert`: Reverts a previous commit

### Examples

```
feat: add user authentication
```

```
fix(auth): resolve login token validation issue
```

```
docs: update installation instructions
```

```
style: format code according to standards
```

### Rules

1. Type must be lowercase
2. Description must be lowercase
3. Don't use a period at the end of the description
4. Maximum line length is 100 characters
5. If there's a body, it must start with a blank line
6. If there's a footer, it must start with a blank line

### Commit Validation

Before each commit, the commit message is automatically validated against these rules. If the message doesn't comply with the rules, the commit will be rejected.

To manually validate a commit message, use:

```bash
npx commitlint --edit
```

## Setup Instructions

### Prerequisites

- Node.js (Latest LTS version recommended)
- npm or yarn package manager

### Installation

1. Clone the repository:

```bash
git clone [repository-url]
cd work-finder-app
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Start the development server:

```bash
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues
- `npm run format` - Format code with Prettier
- `npm run typecheck` - Run TypeScript type checking

## Project Structure

```
src/
├── components/     # Reusable UI components
├── features/       # Feature-specific components and logic
├── hooks/         # Custom React hooks
├── layouts/       # Layout components
├── lib/           # Utility functions and configurations
├── pages/         # Page components
├── provider/      # Context providers
├── routes/        # Route configurations
├── App.tsx        # Main application component
├── main.tsx       # Application entry point
└── index.css      # Global styles
```

## Implementation Details

### Routing

The application uses `react-router-dom` for routing. Routes are organized in the `routes` directory, providing a clean and maintainable way to handle navigation.

### State Management

- React Context API is used for global state management
- Local component state is managed using React hooks
- Form state is handled using `react-hook-form` with Zod validation

### Components

The application follows a component-based architecture:

- UI components are built using Radix UI primitives
- Styling is done with Tailwind CSS
- Components are organized by feature and reusability
- Custom hooks are used for shared logic

### Key Technologies

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Radix UI
- React Router
- React Hook Form
- Zod
- ESLint & Prettier for code quality

### Development Tools

- ESLint for code linting
- Prettier for code formatting
- Husky for git hooks
- TypeScript for type safety
- Vite for fast development and building

## Husky Setup and Usage

### Initial Setup

1. Install Husky:

```bash
npm install husky --save-dev
```

2. Enable Git hooks:

```bash
npm run prepare
```

### Available Git Hooks

The following Git hooks are configured:

- `pre-commit`: Runs linting and formatting checks before each commit
- `commit-msg`: Validates commit messages using commitlint

### Testing Husky

1. Make some changes to your code
2. Try to commit without proper formatting:

```bash
git add .
git commit -m "test: testing husky"
```

Husky will prevent the commit if there are any linting or formatting issues.

### Manual Testing

To test Husky hooks manually:

```bash
# Test pre-commit hook
npx husky run .husky/pre-commit

# Test commit-msg hook
npx husky run .husky/commit-msg
```

### Troubleshooting

If Husky hooks are not working:

1. Ensure Git hooks are enabled:

```bash
git config core.hooksPath .husky
```

2. Check if hooks are executable:

```bash
chmod +x .husky/*
```

3. Verify Husky installation:

```bash
npx husky --version
```
