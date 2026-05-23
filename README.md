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
├── public/              # Static assets (favicons, etc.)
├── src/                 # Main application source code
│   ├── components/      # Reusable UI components (Astro & React)
│   │   ├── ui/          # shadcn/ui components
│   │   └── custom/      # Custom components specific to Kasma SSO
│   ├── layouts/         # Layout components for consistent page structure
│   ├── pages/           # Astro pages (define routes)
│   ├── lib/             # Utility functions and shared logic
│   └── styles/          # Global CSS and Tailwind directives
├── astro.config.mjs     # Astro configuration file
├── components.json      # shadcn/ui configuration file
├── tsconfig.json        # TypeScript configuration file
└── package.json         # Project dependencies and scripts
```

## 🚦 Authentication Flow

The SSO follows the Kasma authentication pattern:

1. **Login**: User authenticates with credentials to the Kasma Gateway, receiving a JWT token upon successful validation.
2. **Token Storage**: The access token is securely stored for subsequent API requests, typically in `localStorage` or `sessionStorage` (with appropriate security measures).
3. **API Access**: The stored token is sent with every API request via the `Authorization: Bearer <token>` header to the Kasma Gateway.
4. **Gateway Validation**: The Kasma Gateway intercepts and validates the JWT. Upon successful validation, it injects an `X-User-ID` header into the request before forwarding it to the target backend service (e.g., Kasma Backend, Kasma Media).
5. **Session Expiry**: The system handles automatic token refresh mechanisms. If the refresh token is invalid or expired, the user is redirected to the login page for re-authentication.

## 🐳 Running the Project

All commands are run from the root of the project, from a terminal:

```bash
# Install dependencies
yarn install

# Start development server
yarn dev

# Build your production site to `./dist/`
yarn build

# Preview your build locally, before deploying
yarn preview

# Add new shadcn/ui components
yarn shadcn add <component-name>
```

The development application will be available at `http://localhost:4321`.

## 🔗 Integration with Kasma Ecosystem

Kasma SSO interacts with various core Kasma services:

| Service         | Purpose                                     | Connection Example                    |
| :-------------- | :------------------------------------------ | :------------------------------------ |
| Kasma Gateway   | Central API gateway, auth validation        | `POST /api/v1/auth/login` (via Gateway) |
| Kasma Backend   | User data, tenant context, core business logic | Via Gateway with authenticated JWT  |
| Kasma Media     | User avatars, profile media storage         | Via Gateway with authenticated JWT  |
| Kasma Noti      | Real-time notifications and alerts          | Via Gateway with authenticated JWT  |
| Kasma Socket    | Real-time communication (chat, live updates) | Via Gateway with authenticated JWT  |
| Kasma Search    | Indexing and searching user/tenant data     | Via Gateway with authenticated JWT  |

## 📝 Environment Variables

Create a `.env` file in the project root to configure essential settings:

```env
# API Configuration
PUBLIC_API_URL="http://localhost:80" # URL of the Kasma Gateway

# Add other environment variables as needed
```

> **Note**: Do not expose `.env` variables or secrets in this document. Please refer to your internal security guidelines for production deployment credentials.

## 🎨 UI Components

This project leverages [shadcn/ui](https://ui.shadcn.com/) with the `base-vega` style preset for a consistent and accessible user interface.
Available components include:

- Accordion, Alert, Alert Dialog, Button, Card
- Carousel, Collapsible, Command, Dialog, Dropdown Menu
- Form, Hover Card, Input, Input OTP, Input Group
- Item, Navigation Menu, Popover, Progress, Radio Group
- Select, Separator, Slider, Switch, Tabs, Toggle, Tooltip, Video, and more...

To add new components, use the shadcn CLI:

```bash
yarn shadcn add <component-name>
```

## 📄 License

Part of the Kasma Mega Platform.
