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
