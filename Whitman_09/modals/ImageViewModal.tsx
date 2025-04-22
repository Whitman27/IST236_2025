
import React from "react";
import {
  Modal,
  View,
  Button,
  Image,
  StyleSheet,
  Text,
  StyleProp,
  ViewStyle,
  TextStyle,
  ImageStyle,
} from "react-native";

// Define the type for props
interface ImageViewModalProps {
  isVisible: boolean;
  imageUrl: string;
  description: string;
  onClose: () => void;
}

// Functional component for displaying an image with description in a modal
const ImageViewModal: React.FC<ImageViewModalProps> = ({
  isVisible,
  imageUrl,
  description,
  onClose,
}) => {
  return (
    <View style={styles.container}>
      <Modal visible={isVisible} animationType="slide" transparent={false}>
        <View style={styles.modalContainer}>
          <Image style={styles.image} source={{ uri: imageUrl }} />
          <View style={styles.descriptionContainer}>
            <Text style={styles.description}>{description}</Text>
          </View>
          <Button title="Return to Countries" onPress={onClose} />
        </View>
      </Modal>
    </View>
  );
};

export default ImageViewModal;

// StyleSheet for styling the components
const styles = StyleSheet.create({
  container: {
    // ViewStyle properties
    flex: 1,
    padding: 16,
  },
  modalContainer: {
    // ViewStyle properties
    backgroundColor: 'white',
    borderRadius: 8,
  },
  image: {
    // ImageStyle properties
    width: '100%',
    height: 200,
  },
  descriptionContainer: {
    // ViewStyle properties
    padding: 12,
  },
  description: {
    // TextStyle properties
    fontSize: 16,
    color: '#333',
  },
});
