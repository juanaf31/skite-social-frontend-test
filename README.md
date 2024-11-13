# Skite Social Frontend Test

A scalable web application built with Nuxt 3 and TypeScript, showcasing best practices in modern frontend development. This project emphasizes modularity and maintainability. Designed to meet performance and UX requirements, it serves as an example of using TypeScript with Vue.js for a production-ready web solution.

## Table of Contents

1. [Overview](#overview)
2. [Features](#features)
3. [Tech Stack](#tech-stack)
4. [Getting Started](#getting-started)
5. [Usage](#usage)
6. [Project Structure](#project-structure)

---

## Overview

This project is built with [Nuxt 3](https://nuxt.com/) and [TypeScript](https://www.typescriptlang.org/), providing a modern setup for developing a performant and fully typed Vue application. It includes server-side rendering (SSR) capabilities, auto-imports, TypeScript support, and more.

## Features

- **TypeScript** support with strict typing
- **Auto-imported components** and utilities
- **State management** with Pinia
- **API routes** using Nuxt 3's built-in API features
- **ESLint** and **Prettier** for code quality and formatting

## Tech Stack

- **Framework**: Nuxt 3
- **Language**: TypeScript
- **State Management**: Pinia
- **Linting**: ESLint, Prettier
- **Styling**: Tailwind CSS
- **UI Component**: [shadcn-nuxt](https://www.shadcn-vue.com/docs/installation/nuxt)

## Getting Started

### Prerequisites

- Node.js (>=20.0.0)
- npm (>=10.0.0) or Yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/juanaf31/skite-social-frontend-test.git
   cd your-project
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

   or

   ```bash
   yarn install
   ```

### Running the Development Server

Start the local development server:

```bash
npm run dev
```

or

```bash
yarn dev
```

Visit http://localhost:3000 to view the project in development mode.

## Usage

### Project Structure

```bash
.
├── assets/         # Uncompiled assets (e.g., images, css, icons)
├── components/     # Vue components
├── composables/    # Reusable composable functions
├── constant/       # Constant (e.g., dummy data)
├── layouts/        # Layout components
├── middleware/     # Route middleware
├── pages/          # Page components for routing
├── public/         # Static files
├── stores/         # Pinia stores
├── model/          # TypeScript types and interfaces
└── nuxt.config.ts  # Nuxt configuration file
```
