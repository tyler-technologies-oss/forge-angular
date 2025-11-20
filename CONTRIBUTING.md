# Contributing to Forge Angular

Thank you for your interest in contributing to Forge Angular! This document provides guidelines and information for contributors.

## Table of Contents

- [Development Setup](#development-setup)
- [Building the Library](#building-the-library)
- [Running the Demo Application](#running-the-demo-application)
- [Testing](#testing)
- [Release Process](#release-process)
- [Commit Message Guidelines](#commit-message-guidelines)

## Development Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/tyler-technologies-oss/forge-angular.git
   cd forge-angular
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Verify your setup**
   ```bash
   npm run build
   npm test
   ```

## Building the Library

Build the `@tylertech/forge-angular` library for production:

```bash
npm run build
```

This compiles the library located in `projects/forge-angular/` and outputs the distributable files to `dist/forge-angular/`.

For development with watch mode:

```bash
npm run watch
```

## Running the Demo Application

The repository includes a demo application that showcases the Forge Angular components. To run it:

```bash
npm start
```

This will:
1. Build the library
2. Start the Angular development server
3. Open your browser to the demo application

The demo app is useful for:
- Testing components during development
- Seeing live examples of component usage
- Manual testing of new features

## Testing

Run the test suite:

```bash
npm test
```

This executes the Jasmine/Karma test suite for the library.

## Release Process

This repository uses [`auto`](https://www.npmjs.com/package/auto) to manage releases automatically. Releases are triggered when a pull request is merged into the `main` branch with the appropriate semantic versioning label.

### How Releases Work

1. **Semantic Versioning Labels**: Add one of these labels to your pull request:
   - `major` - Breaking changes (e.g., 6.0.0 → 7.0.0)
   - `minor` - New features, backward compatible (e.g., 6.0.0 → 6.1.0)
   - `patch` - Bug fixes, backward compatible (e.g., 6.0.0 → 6.0.1)

2. **Skip Release**: To prevent a release, add the `skip-release` label alongside any semantic version label.

3. **Automatic Publishing**: When the PR is merged to `main`, `auto` will:
   - Calculate the new version based on the label
   - Update the changelog
   - Create a git tag
   - Publish to npm
   - Create a GitHub release

### Angular Version Support

**Important**: This library follows Angular's support policy and maintains compatibility with the **current and current-1 versions of Angular**.

For example:
- When Angular 21 is the current version, the library supports Angular 20 and 21
- When Angular 22 is released, the library will drop support for Angular 20 and support Angular 21 and 22

When releasing a new major version that drops support for an older Angular version:
- `auto` automatically creates a version branch for the previous major version (e.g., `v6` branch when releasing `v7.0.0`)
- This allows critical bug fixes to be backported to the older version if needed

### Example: Patch Release Flow

1. Create your pull request with your changes
2. In the GitHub UI, add the `patch` label to your PR (found in the right-hand sidebar)
3. Do **not** include the `skip-release` label if you want this PR to trigger a release
4. Get your PR reviewed and approved
5. Merge the PR into `main`
6. `auto` will automatically publish the new version

### Example: Major Release Flow

1. Create your pull request with breaking changes
2. Add the `major` label to your PR
3. Ensure your PR description clearly documents the breaking changes
4. Get your PR reviewed and approved
5. Merge the PR into `main`
6. `auto` will:
   - Create a version branch for the previous major version (e.g., `v6`)
   - Publish the new major version (e.g., `v7.0.0`)

## Commit Message Guidelines

This project uses [Conventional Commits](https://www.conventionalcommits.org/) for commit messages. This standard is enforced via `commitlint`.

### Format

```
<type>(<scope>): <subject>
```

### Types

- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation only changes
- `style`: Changes that don't affect code meaning (white-space, formatting, etc.)
- `refactor`: Code change that neither fixes a bug nor adds a feature
- `perf`: Performance improvements
- `test`: Adding or correcting tests
- `chore`: Changes to build process or auxiliary tools

### Examples

```
feat(button): add support for icon-only buttons
fix(text-field): resolve focus state issue
docs(readme): update installation instructions
chore(deps): update to forge 3.12.0
```

### Why This Matters

- Conventional commits enable `auto` to automatically generate changelogs
- They help determine the semantic version bump automatically
- They provide a clear, standardized project history

## Questions or Issues?

If you have questions or encounter issues:
- Check existing [GitHub Issues](https://github.com/tyler-technologies-oss/forge-angular/issues)
- Create a new issue with a detailed description
- Reach out to the maintainers

Thank you for contributing to Forge Angular!
