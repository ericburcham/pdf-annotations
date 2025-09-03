import React, { useRef, useEffect } from 'react';
import {
  View,
  StyleSheet,
  Platform,
  Text,
  SafeAreaView,
  NativeModules,
} from 'react-native';
import NutrientView from '@nutrient-sdk/react-native';

const Nutrient = NativeModules.Nutrient;

const PDFViewer = () => {
  const pdfRef = useRef<any>(null);

  useEffect(() => {
    // Set license key (null for trial/evaluation)
    if (Nutrient && Nutrient.setLicenseKey) {
      Nutrient.setLicenseKey(null);
    }
  }, []);

  const DOCUMENT = Platform.OS === 'ios' 
    ? '10-K.pdf' 
    : 'file:///android_asset/10-K.pdf';

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Enterprise Products 10-K Filing</Text>
        <Text style={styles.subtitle}>PDF Annotation Demo with Nutrient</Text>
      </View>

      <View style={styles.pdfContainer}>
        <NutrientView
          ref={pdfRef}
          document={DOCUMENT}
          configuration={{
            scrollDirection: 'vertical',
            pageTransition: 'scrollContinuous',
            showThumbnailBar: 'scrollable',
            pageMode: 'single',
            thumbnailBarMode: 'scrollable',
            spreadFitting: 'fit',
            // Enable annotation tools
            editableAnnotationTypes: [
              'highlight',
              'strikeOut', 
              'underline',
              'squiggly',
              'note',
              'text',
              'ink',
              'square',
              'circle',
              'line',
              'arrow',
            ],
            // UI Configuration
            showPageNumberOverlay: true,
            showPageLabels: true,
            showDocumentLabel: true,
            invertColors: false,
            showAnnotationMenuItems: true,
            // Auto-save annotations
            autosaveEnabled: true,
          }}
          fragmentTag="PDF1"
          style={styles.pdfView}
          onAnnotationsChanged={(event: any) => {
            console.log('Annotations changed:', event);
          }}
          onAnnotationTapped={(event: any) => {
            console.log('Annotation tapped:', event);
          }}
          onDocumentLoaded={(event: any) => {
            console.log('Document loaded:', event);
          }}
          onDocumentSaved={(event: any) => {
            console.log('Document saved:', event);
          }}
        />
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Use the toolbar to highlight, add comments, and annotate. Changes are saved automatically.
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    padding: 15,
    backgroundColor: '#1976D2',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  subtitle: {
    fontSize: 14,
    color: 'white',
    opacity: 0.9,
    marginTop: 4,
  },
  pdfContainer: {
    flex: 1,
  },
  pdfView: {
    flex: 1,
  },
  footer: {
    padding: 10,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  footerText: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
  },
});

export default PDFViewer;