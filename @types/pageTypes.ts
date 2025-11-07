// Create a new file: types/pageTypes.ts

export interface BlockType {
    blockId: string;
    isBlockEnabled: boolean;
    [key: string]: any;
  }
  
  export interface SEOValues {
    title?: string;
    description?: string;
    keywords?: string[];
  }
  
  export interface PageSettings {
    blocks?: BlockType[];
    seo?: SEOValues;
    [key: string]: any;
  }
  
  export interface PageProps {
    uiSettings: {
      [key: string]: PageSettings;
    };
  }