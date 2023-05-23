# Forge Angular

An Angular adapter library for the Tyler Forge™ Web Components library.

## Problem

Web Components, more specifically custom elements are not compatible with Angular by default. This requires us to use `CUSTOM_ELEMENTS_SCHEMA` within
our Angular modules to tell Angular not to throw errors when it comes across an HTML element that it doesn't recognize. The problem with this is that
we lose some type safety and useful error messages with these elements as we're developing.

### Solution

The purpose of this library is to make using Forge Web Components in Angular a seamless experience. It provides `ControlValueAccessor` directives
to enable usage of constructs like `formControlName`, `formControl`, and `ngModel`, as well as auto-generated proxy (wrapper) components for
every `<forge-*>` element in the Forge component library.

To elaborate on the proxy components, these are Angular components that target the element names for every Forge custom HTML element. This allows Angular
to provide strict type safety for properties and events as well as intelligent code completion and useful error messages. Each component is exported
from its own Angular module to allow for opting in to include only specific components that your Angular application is using.

> This enables developers to be able to remove their usage of `CUSTOM_ELEMENTS_SCHEMA` when using Forge.

## Version Compatibility

| `@tylertech/forge-angular`  | Angular              | Forge
| ----------------------------| ---------------------| --------
| `^3.0.0`                    | `^16.0.0`            | `^2.0.0`
| `^2.0.0`                    | `>=13.3.0 < 16.0.0`  | `^2.0.0`

## Getting started

While this library is not _required_ to use Forge with Angular, it is highly recommended. Follow these steps to get started:

1. Install the latest version of Forge components: `npm install @tylertech/forge`
    - This is the library that contains the framework-agnostic Web Components.
2. Install the latest version of this Forge Angular adapter library using the version compatibility table above: `npm install @tylertech/forge-angular`
3. Reference the Forge global stylesheet in your `styles.scss` file: `@use '@tylertech/forge/dist/forge.css';`
    - You can also include this file through the `angular.json` file if desired as well.
4. Add the `forge-typography` class to your `<body>` element in `index.html`.
    - This sets up the Forge typography across your application.
5. To use a Forge component, you will import the Angular module from `@tylertech/forge-angular` for each component you are using. Ex. `ForgeButtonModule`
    - This tells Angular about each Forge component you are using, and allows for strict typing that you wouldn't normally get without this library.
