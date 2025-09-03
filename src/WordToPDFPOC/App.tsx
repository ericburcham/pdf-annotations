/**
 * Enterprise Products PDF Annotation POC
 * Demonstrates PDF viewing and annotation capabilities using Nutrient/PSPDFKit
 */

import React from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import PDFViewer from './PDFViewer';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <PDFViewer />
    </SafeAreaProvider>
  );
}

export default App;
