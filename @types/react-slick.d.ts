declare module 'react-slick' {
    import { Component } from 'react';
  
    export interface Settings {
      // Add more settings as needed
      dots?: boolean;
      infinite?: boolean;
      speed?: number;
      slidesToShow?: number;
      slidesToScroll?: number;
      // Add other settings according to the documentation
    }
  
    export class Slider extends Component<Settings> {}
    export default Slider;
  }
  