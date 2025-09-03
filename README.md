# PDF Annotations POC

A React Native proof-of-concept application demonstrating PDF viewing and annotation capabilities using the Nutrient SDK (formerly PSPDFKit). The app displays an Enterprise Products SEC 10-K filing and allows users to highlight text, add comments, and save annotations.

## Features

- 📄 PDF document viewing
- 🖍️ Text highlighting and selection
- 💬 Comment annotations
- 💾 Save annotations to document
- 🎨 Full annotation toolbar with multiple tools (ink, shapes, text, etc.)
- 📱 Android support (iOS ready but requires Mac for building)

## Prerequisites

Before you begin, ensure you have the following installed:

### Required
- **Node.js**: Version 20 or higher
- **Java Development Kit (JDK)**: Version 17-20
- **Android Studio**: Latest stable version
- **Android SDK**: API Level 34
- **Git**: For cloning the repository

### For Windows Users
- Enable long path support if you encounter path length issues
- PowerShell or Command Prompt

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/ericburcham/pdf-annotations.git
cd pdf-annotations
```

### 2. Navigate to the React Native App

```bash
cd src/WordToPDFPOC
```

### 3. Install Dependencies

```bash
npm install
```

## Android Setup

### Environment Variables

The application requires proper Android environment variables. You can set them manually or use the provided scripts.

#### Option 1: Manual Setup

Set the following environment variables:
- `ANDROID_HOME`: Path to your Android SDK (typically `C:\Users\[username]\AppData\Local\Android\Sdk` on Windows)
- `JAVA_HOME`: Path to JDK 17 (e.g., `C:\Program Files\Java\jdk-17.0.2`)

Add to PATH:
- `%JAVA_HOME%\bin`
- `%ANDROID_HOME%\platform-tools`
- `%ANDROID_HOME%\emulator`
- `%ANDROID_HOME%\tools`
- `%ANDROID_HOME%\tools\bin`

#### Option 2: Use Setup Script (Windows)

Create a `set_env.bat` file in `src/WordToPDFPOC`:

```batch
@echo off
set ANDROID_HOME=C:\Users\[username]\AppData\Local\Android\Sdk
set JAVA_HOME=C:\Program Files\Java\jdk-17.0.2
set PATH=%JAVA_HOME%\bin;%ANDROID_HOME%\platform-tools;%ANDROID_HOME%\emulator;%PATH%
```

Run this before starting the app.

## Running the Application

### 1. Start an Android Emulator

Open Android Studio and start an Android Virtual Device (AVD), or connect a physical Android device with USB debugging enabled.

### 2. Start Metro Bundler

In the first terminal:

```bash
cd src/WordToPDFPOC
npm start
```

### 3. Run on Android

In a second terminal:

```bash
cd src/WordToPDFPOC
npx react-native run-android
```

## Usage

Once the app is running:

1. **View PDF**: The Enterprise Products 10-K filing will be displayed automatically
2. **Select Text**: Tap and hold on text to select it
3. **Highlight**: After selecting text, choose the highlight tool from the toolbar
4. **Add Comments**: Use the note/comment tool in the annotation toolbar
5. **Draw**: Use ink tools to draw on the PDF
6. **Save**: Annotations are saved automatically or use the save button

## Project Structure

```
pdf-annotations/
├── assets/
│   └── 10-K.pdf                 # Sample PDF document
├── src/
│   └── WordToPDFPOC/            # React Native application
│       ├── android/             # Android-specific code
│       ├── ios/                 # iOS-specific code
│       ├── App.tsx              # Main app component
│       ├── PDFViewer.tsx        # PDF viewer component
│       └── package.json         # Dependencies
├── CLAUDE.md                    # Development guidelines
└── README.md                    # This file
```

## Troubleshooting

### Common Issues

#### Build fails with "SDK location not found"
- Ensure `ANDROID_HOME` is set correctly
- Create `local.properties` in `android/` with: `sdk.dir=C:\\Users\\[username]\\AppData\\Local\\Android\\Sdk`

#### "adb is not recognized"
- Add Android SDK platform-tools to your PATH
- Restart your terminal after setting environment variables

#### Path too long errors (Windows)
- Move the project to a shorter path (e.g., `C:\RN\pdf-annotations`)
- Enable Windows long path support

#### Java version errors
- Ensure JDK 17 is installed and `JAVA_HOME` points to it
- Check with: `java -version`

## Technology Stack

- **React Native**: 0.81.1
- **TypeScript**: 5.8.3
- **Nutrient SDK**: Latest version for React Native
- **Android SDK**: API 34
- **Minimum Android SDK**: API 24

## License

This is a proof-of-concept project for demonstration purposes.

## Notes

- The Nutrient SDK is running in trial/evaluation mode
- For production use, you'll need a Nutrient license from [nutrient.io](https://www.nutrient.io)
- iOS support requires macOS with Xcode for building

## Contributing

This is a POC project, but feel free to fork and experiment!

## Support

For issues with:
- **Nutrient SDK**: Visit [Nutrient Documentation](https://www.nutrient.io/guides/react-native/)
- **React Native**: Check [React Native Documentation](https://reactnative.dev/docs/getting-started)