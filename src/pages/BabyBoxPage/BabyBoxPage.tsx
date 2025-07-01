import ProductCatalogPage from "../ProductPage/ProductPage";
import { subcategories } from "@/data/mockData";
import productData from "@/data/fakeProducts.json";

const PickAndBuyPage: React.FC = () => {
  return (
    <ProductCatalogPage
      title="Baby Box"
      products={productData}
      subcategories={subcategories}
    />
  );
};

export default PickAndBuyPage;