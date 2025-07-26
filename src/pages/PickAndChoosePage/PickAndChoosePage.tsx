import ProductCatalog from "@/components/ProductCatalog/ProductCatalog";
import productData from "@/data/fakeProducts.json";
import { subcategories } from "@/data/mockData";

const PickAndBuyPage: React.FC = () => {
  return (
    <ProductCatalog
      title="Pick & Buy"
      products={productData}
      subcategories={subcategories}
    />
  );
};

export default PickAndBuyPage;
