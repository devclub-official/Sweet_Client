import {
  ImageLibraryOptions,
  launchImageLibrary,
} from 'react-native-image-picker';

class ImagePicker {
  private static instance: ImagePicker;

  private constructor() {}

  private imageGalleryOption: ImageLibraryOptions = {
    mediaType: 'photo',
  };
  public static getInstance(): ImagePicker {
    if (!ImagePicker.instance) {
      ImagePicker.instance = new ImagePicker();
    }
    return ImagePicker.instance;
  }
  async getImage(option?: ImageLibraryOptions) {
    try {
      const image = await launchImageLibrary({
        ...this.imageGalleryOption,
        ...option,
      });

      return image.assets || [];
    } catch (e) {
      throw e;
    }
  }
}

export const imagePicker = ImagePicker.getInstance();
