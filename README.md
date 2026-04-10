# KatebTech Business

Reusable Layout document templates,  header, Navbar and Hero components.

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
- [Module Documentation](#module-documentation)
  - [Business Card Templates](#business-card-templates)
  - [Letterhead Templates](#letterhead-templates)
  - [Shared Branding Blocks](#shared-branding-blocks)
- [Usage](#usage)
- [Development](#development)
- [Documentation Rule](#documentation-rule)
- [Export Philosophy](#export-philosophy)

## Purpose

This package contains reusable layouts templates and branding components used across Kateb Tech projects.

It is intended for:

- Navbar
- Footer
- Various Hero section 
- Home page components


It is not intended for:

- low-level shared utilities
- primitive UI components
- app-specific business logic
- full website page sections
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
pnpm add @katebtech/business@git+ssh://git@github.com/Bazrahimi/katebtech-layout.git#main
```