export interface technologiesDataType {
  id: number;
  name: string;
  category: string;
  description: string;
  icon: string;
  mobile_icon: string;
  rating: number;
  difficulty: string;
  badge: string;
}

export interface technologiesProps {
  technologies_info: Promise<technologiesDataType[]>;
}
