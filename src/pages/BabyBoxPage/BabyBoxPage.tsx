import ProductCatalog from "@/components/ProductCatalog/ProductCatalog";
import { subcategories } from "@/data/mockData";
import mockProducts from "@/data/mockProducts";

const PickAndBuyPage = () => {
  return (
    <ProductCatalog
      title="Baby Box"
      products={mockProducts}
      subcategories={subcategories}
    />
  );
};

export default PickAndBuyPage;
