export interface technologiesDataType {
  name: string;
  web_icon: string;
  mobile_icon: string;
  badge: string;
  description: string;
  category: string;
  difficulty: string;
  rating: number;
}

export interface technologiesProps {
  technologies_info: Promise<technologiesDataType[]>;
}
