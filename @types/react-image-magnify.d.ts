declare module 'react-image-magnify' {
    import { Component } from 'react';
  
    interface ImageMagnifyProps {
      enlargedImageContainerStyle?: React.CSSProperties;
      enlargedImageStyle?: React.CSSProperties;
      smallImage: {
        alt: string;
        isFluidWidth?: boolean;
        src: string;
      };
      largeImage: {
        src: string;
        width: number;
        height: number;
      };
      // Add more props as needed
    }
  
    export default class ReactImageMagnify extends Component<ImageMagnifyProps> {}
  }
  