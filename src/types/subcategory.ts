export type Subcategory = {
  id: number;
  name: string;
  icon: string;
};

export interface SubcategoryProps {
  subcategories: Subcategory[];
  activeId?: number | null;
  onSelect?: (id: number) => void;
}
