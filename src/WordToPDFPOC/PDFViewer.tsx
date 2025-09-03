import React, { useRef, useEffect } from 'react';
import {
  View,
  Button,
  StyleSheet,
  Alert,
  Platform,
  Text,
  SafeAreaView,
  ScrollView,
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

  const handleAddHighlight = () => {
    if (pdfRef.current) {
      // Add a highlight annotation programmatically
      const annotation = {
        type: 'highlight',
        pageIndex: 0,
        boundingBox: { left: 100, top: 100, width: 200, height: 50 },
        color: '#FFFF00',
        opacity: 0.5,
      };
      
      pdfRef.current.addAnnotation(annotation);
      Alert.alert('Success', 'Highlight annotation added to page 1');
    }
  };

  const handleAddComment = () => {
    if (pdfRef.current) {
      // Add a text/comment annotation
      const annotation = {
        type: 'note',
        pageIndex: 0,
        boundingBox: { left: 300, top: 200, width: 32, height: 32 },
        contents: 'This is an important section of the 10-K filing that requires further review.',
        subject: 'Review Note',
        color: '#FF0000',
      };
      
      pdfRef.current.addAnnotation(annotation);
      Alert.alert('Success', 'Comment annotation added to page 1');
    }
  };

  const handleSaveAnnotations = async () => {
    if (pdfRef.current) {
      try {
        const annotations = await pdfRef.current.getAllUnsavedAnnotations();
        console.log('Unsaved annotations:', annotations);
        await pdfRef.current.save();
        Alert.alert('Success', 'Annotations saved successfully');
      } catch (error) {
        Alert.alert('Error', 'Failed to save annotations');
        console.error(error);
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Enterprise Products 10-K Filing</Text>
        <Text style={styles.subtitle}>PDF Annotation Demo with Nutrient</Text>
      </View>
      
      <View style={styles.buttonContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <Button title="Add Highlight" onPress={handleAddHighlight} color="#4CAF50" />
          <View style={styles.buttonSpacer} />
          <Button title="Add Comment" onPress={handleAddComment} color="#2196F3" />
          <View style={styles.buttonSpacer} />
          <Button title="Save Annotations" onPress={handleSaveAnnotations} color="#FF9800" />
        </ScrollView>
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
          }}
          fragmentTag="PDF1"
          style={styles.pdfView}
          onAnnotationsChanged={(event: any) => {
            console.log('Annotations changed:', event);
          }}
          onAnnotationTapped={(event: any) => {
            console.log('Annotation tapped:', event);
            Alert.alert('Annotation Tapped', `Type: ${event.annotation.type}`);
          }}
          onDocumentLoaded={(event: any) => {
            console.log('Document loaded:', event);
          }}
        />
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Tap and hold to highlight text. Use toolbar for more annotation options.
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
  buttonContainer: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  buttonSpacer: {
    width: 10,
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