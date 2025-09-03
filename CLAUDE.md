# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Important Instructions
- Never include self-references in commit messages (no "Generated with Claude Code" or similar)
- Do not add Co-Authored-By lines referencing Claude or AI assistants
- Keep commit messages professional and focused on the technical changes

## Project Overview

This is a React Native proof-of-concept application called WordToPDFPOC focused on PDF annotation capabilities. The project is located at `src/WordToPDFPOC/` and supports both iOS and Android platforms.

## Development Commands

### Installation
```bash
cd src/WordToPDFPOC
npm install
```

### iOS Setup (first time or after native dependency updates)
```bash
cd src/WordToPDFPOC
bundle install  # Install CocoaPods (first time only)
cd ios
bundle exec pod install  # Install iOS dependencies
```

### Running the Application
```bash
# Start Metro bundler
cd src/WordToPDFPOC
npm start

# Run on Android (separate terminal)
npm run android

# Run on iOS (separate terminal) 
npm run ios
```

### Code Quality
```bash
# Run linter
npm run lint

# Run tests
npm test

# Run a specific test
npm test -- __tests__/App.test.tsx
```

## Project Architecture

### Technology Stack
- **React Native**: 0.81.1
- **React**: 19.1.0
- **TypeScript**: 5.8.3
- **Testing**: Jest with React Native preset
- **Linting**: ESLint with React Native config

### Project Structure
- `App.tsx`: Main application entry point using React Native's NewAppScreen template
- `android/`: Android-specific native code (Kotlin-based)
- `ios/`: iOS-specific native code (Swift-based)
- `__tests__/`: Test files following Jest conventions
- Platform-specific configuration in `app.json`

### Key Development Notes
- Node.js version requirement: >=20
- The app uses `react-native-safe-area-context` for safe area handling
- TypeScript configuration extends `@react-native/typescript-config`
- Fast Refresh is enabled for hot reloading during development