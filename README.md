# Kasma SSO (Single Sign-On)

Kasma SSO is the authentication and authorization frontend for the Kasma Mega Platform. Built with Astro and React, it provides a secure, modern interface for user authentication, session management, and multi-tenant access control.

## 🚀 Core Features

- **Multi-Tenant Authentication**: Supports tenant-based authentication with JWT tokens for secure access to the Kasma ecosystem.
- **Session Management**: Handles user sessions, token refresh, and secure logout across all connected Kasma services.
- **Modern UI**: Built with Astro, React, and Tailwind CSS for a fast, responsive user experience.
- **shadcn/ui Components**: Pre-configured with shadcn/ui for consistent, accessible UI components.
- **Type-Safe**: Full TypeScript support with strict configuration.

## 🛠️ Tech Stack

- **Framework**: Astro 6.x with React integration
- **Language**: TypeScript 5.x
- **Styling**: Tailwind CSS 4.x
- **UI Components**: shadcn/ui (base-vega style)
- **Icons**: Lucide React & Lucide Static
- **Package Manager**: Yarn (Node.js >= 22.12.0)

## 📁 Project Structure

```text
fe-kasma-sso/
├── public/              # Static assets
├── src/
│   ├── components/      # UI components (Astro & React)
│   │   ├── ui/          # shadcn/ui components
│   │   └── templates/   # Page templates
│   ├── layouts/         # Layout components
│   ├── pages/           # Route pages (index.astro, login.astro)
│   ├── lib/             # Utility functions
│   └── styles/          # Global CSS
├── astro.config.mjs     # Astro configuration
├── components.json      # shadcn/ui configuration
├── tsconfig.json        # TypeScript configuration
└── package.json
```

## 🚦 Authentication Flow

The SSO follows the Kasma authentication pattern:

1. **Login**: User authenticates with credentials → JWT token issued
2. **Token Storage**: Access token stored securely for API requests
3. **API Access**: Token sent via `Authorization: Bearer <token>` header
4. **Gateway Validation**: Kasma Gateway validates JWT and injects `X-User-ID` header
5. **Session Expiry**: Automatic token refresh or redirect to login

## 🐳 Running the Project

### Development

```bash
# Install dependencies
yarn install

# Start development server
yarn dev
```

The application will be available at `http://localhost:4321`.

### Build for Production

```bash
# Build the application
yarn build

# Preview the build
yarn preview
```

## 🔗 Integration with Kasma Ecosystem

| Service | Purpose | Connection |
| :--- | :--- | :--- |
| Kasma Gateway | Auth validation, token verification | `POST /api/v1/auth/login` |
| Kasma Backend | User data, tenant context | Via Gateway with JWT |
| Kasma Media | User avatars, profile media | Via Gateway with JWT |

## 📝 Environment Variables

Create a `.env` file in the project root:

```env
# API Configuration
PUBLIC_API_URL=http://localhost:80

# Add other environment variables as needed
```

> **Note**: Do not expose `.env` variables or secrets in this document. Please refer to your internal security guidelines for production deployment credentials.

## 🎨 UI Components

This project uses shadcn/ui with the `base-vega` style preset. Available components include:

- Accordion, Alert Dialog, Button, Card
- Dialog, Dropdown Menu, Form, Input
- Navigation Menu, Popover, Select, Tabs
- Tooltip, and more...

Run the following to add new components:

```bash
yarn shadcn add <component-name>
```

## 📄 License

Part of the Kasma Mega Platform.
