interface WoodStatistics {
    name: string;
    isTrue: boolean;
  }
  
  interface WoodProps {
    image: string;
    name: string;
    statistics: WoodStatistics[];
  }

export type {WoodProps}