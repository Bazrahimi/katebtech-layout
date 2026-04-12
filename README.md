ure.

# KatebTech Layout

Reusable layout components for Kateb Tech website projects.

This package contains shared layout-level components that can be reused across multiple websites, including footers, navbars, hero sections, and homepage sections.

## Table of Contents

- [Purpose](#purpose)
- [Installation](#installation)
  - [Development](#development-installation)
  - [Production](#production-installation)
- [Scope](#scope)
  - [Included](#included)
  - [Excluded](#excluded)
- [Design Principles](#design-principles)
- [Folder Structure](#folder-structure)
- [Usage](#usage)
- [Development](#development)
- [Documentation Rule](#documentation-rule)
- [Export Philosophy](#export-philosophy)

## Purpose

This package provides reusable layout components used across Kateb Tech projects.

It is intended for:

- footer components
- navbar components
- hero sections
- homepage layout sections

It is not intended for:

- low-level shared utilities
- primitive UI components
- app-specific business logic
- full page implementations
- database or server logic

## Installation

### Development Installation

Install dependencies:

```bash
pnpm install
```

Run typecheck:

```bash
pnpm typecheck
```

Build the Package

```bash
pnpm build
```

## Production Installation

Remove the old package version

```bash
pnpm remove @katebtech/layout
```

Install the package into the app project:

```bash
pnpm add @katebtech/layout@git+ssh://git@github.com/Bazrahimi/katebtech-layout.git#main
```

```bash
pnpm add @katebtech/layout@git+ssh://git@ssh.github.com:443/Bazrahimi/katebtech-layout.git#main
```
