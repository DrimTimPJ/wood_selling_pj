interface WoodStatistics {
    name: string;
    isTrue: boolean;
  }
  
  interface WoodProps {
    _id:string
    image: string;
    name: string;
    statistics: WoodStatistics[];
  }

  type WoodInputData = Omit<WoodProps,'_id'>

export type {WoodProps,WoodInputData}