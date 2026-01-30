# Compease

A modern compensation management platform built with Nuxt 3, Vue 3, TypeScript, and MongoDB.

## Features

- 🌐 **Internationalization (i18n)** - Support for English, French, and German
- 🔐 **Authentication** - Sign in and Sign up functionality
- 📊 **MongoDB Integration** - Scalable database for user data
- 🚀 **Heroku Ready** - Configured for easy deployment

## Tech Stack

- **Frontend**: Nuxt 3, Vue 3, TypeScript
- **Backend**: Nitro (Nuxt Server)
- **Database**: MongoDB with Mongoose
- **Styling**: Custom CSS
- **i18n**: @nuxtjs/i18n
- **State Management**: Pinia

## Getting Started

### Prerequisites

- Node.js >= 18.0.0
- MongoDB (local or Atlas)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/madc0w/compease.git
cd compease
```

2. Install dependencies:

```bash
npm install
```

3. Create environment file:

```bash
cp .env.example .env
```

4. Update `.env` with your MongoDB connection string:

```
MONGODB_URI=mongodb://localhost:27017/compease
```

### Development

Start the development server:

```bash
npm run dev
```

The app will be available at `http://localhost:3000`

### Build

Build for production:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

## Deployment to Heroku

### Prerequisites

- Heroku CLI installed
- MongoDB Atlas account (for cloud database)

### Steps

1. Create a new Heroku app:

```bash
heroku create your-app-name
```

2. Add MongoDB Atlas addon or set up your own MongoDB Atlas cluster:

```bash
heroku config:set MONGODB_URI="mongodb+srv://<user>:<password>@<cluster>.mongodb.net/compease"
```

3. Deploy:

```bash
git push heroku main
```

### Environment Variables

Set these on Heroku:

- `MONGODB_URI` - Your MongoDB connection string
- `NODE_ENV` - Set to `production`

## Project Structure

```
compease/
├── assets/
│   └── css/
│       └── main.css          # Global styles
├── components/
│   ├── Footer.vue            # Footer component
│   ├── Header.vue            # Header with navigation
│   └── LanguageSwitcher.vue  # Language selector dropdown
├── layouts/
│   └── default.vue           # Default layout
├── locales/
│   ├── en.json               # English translations
│   ├── fr.json               # French translations
│   └── de.json               # German translations
├── pages/
│   ├── index.vue             # Landing page
│   └── auth/
│       ├── signin.vue        # Sign in page
│       └── signup.vue        # Sign up page
├── server/
│   ├── api/
│   │   └── health.get.ts     # Health check endpoint
│   ├── models/
│   │   └── User.ts           # User model
│   ├── plugins/
│   │   └── mongodb.ts        # MongoDB connection plugin
│   └── utils/
│       └── mongodb.ts        # Database utilities
├── app.vue                    # App entry point
├── nuxt.config.ts            # Nuxt configuration
├── package.json              # Dependencies
├── Procfile                  # Heroku process file
└── tsconfig.json             # TypeScript configuration
```

## Language Support

The app supports:

- 🇬🇧 English (default)
- 🇫🇷 French
- 🇩🇪 German

Language is determined by:

1. User's saved preference (if signed in)
2. Browser locale
3. Falls back to English

Users can manually switch languages using the dropdown in the header.

## License

MIT
