import { useState } from 'react'
import { useLocation } from "react-router-dom";
import styles from './SizeGuidePage.module.scss'
import ClothingTable from './sizeComponents/ClothingTable'
import ShoesTable from './sizeComponents/ShoesTable';
import BabyBoxes from './sizeComponents/BabyBoxes';
import Breadcrumbs from '@/components/Breadcrumbs/Breadcrumbs';
import DiaperTable from './sizeComponents/DiaperTable';
import HatsTable from './sizeComponents/HatsTable';

const shopForBabyBoxes = [
  { id: 1, name: 'Green NewBorn Box', price: 250, img: '../../../public/images/preview/1-2.png' },
  { id: 2, name: 'First Months Box', price: 250, img: '../../../public/images/preview/1-2.png' },
  { id: 3, name: 'Starter Baby Kit', price: 250, img: '../../../public/images/preview/1-2.png' },
];


const SizeGuidePage = () => {
  const [activeTab, setActiveTab] = useState('clothing')
  const location = useLocation();
  // ловимо то, що передали з ProductPage
  const { productId, productName, category, subcategory } = location.state || {};
  return (
    <>
    <div className={styles.breadcrumbsInner}>
      <Breadcrumbs // відображення сайз-гайд сторінки в навігації
        category={category}
        subcategory={subcategory}
        productName={productName}
        productId={productId} 
        current="Size Guide"
      />
    </div>
    <section className={styles.size}>
      <div className={styles.size__inner}>
      <div className={styles.size__head}>
        <h2>Size Guide for Baby Products</h2>
        <p>
        Find the perfect size for your little one — from clothing and shoes to diapers and accessories.
        </p>
      </div>
      <div className={styles.size__tabs}>
        <button type="button" 
        className={`${styles.size__tab} ${activeTab === 'clothing' ? styles.active : ''}`}
        onClick={() => setActiveTab('clothing')}
        >
          Clothing
        </button>
        <button type="button"
        className={`${styles.size__tab} ${activeTab === 'Shoes' ? styles.active : ''}`}
        onClick={() => setActiveTab('Shoes')}
        >
          Shoes
        </button>
        <button type="button" 
        className={`${styles.size__tab} ${activeTab === 'Diaper' ? styles.active : ''}`}
        onClick={() => setActiveTab('Diaper')}
        >
          Diaper
        </button>
        <button type="button" 
        className={`${styles.size__tab} ${activeTab === 'Hats' ? styles.active : ''}`}
        onClick={() => setActiveTab('Hats')}
        >
          Hats & Accessories
        </button>
      </div>

        {activeTab === 'clothing' && <ClothingTable/> }
        {activeTab === 'Shoes' && <ShoesTable/>}
        {activeTab === 'Diaper' && <DiaperTable/>}
        {activeTab === 'Hats' && <HatsTable/>}

        <div className={styles.content}>
          <div className={styles.content__measure}>
            <h2>How to Measure Your Baby</h2>
            <ul>
              <li>
                Height: From top of the head to the heel, while baby is lying flat.
              </li>
              <li>
                Weight: Use a baby scale or visit your pediatrician.
              </li>
              <li>
                Foot length: Measure heel to toe with a soft ruler or printable guide.</li>
              <li>
                Head circumference: Wrap a soft tape measure around the widest part of the head.
              </li>
            </ul>
          </div>
          <div className={styles.content__tips}>
            <h2>Quick Tips</h2>
            <ul>
              <li>
                Babies grow fast! When in doubt, size up.
              </li>
              <li>
                Check product descriptions for fit details (slim fit, roomy, adjustable).
              </li>
              <li>
                Consider shrinkage after washing.
              </li>
            </ul>
          </div>
        </div>
        <BabyBoxes items={shopForBabyBoxes}/>
        </div>
    </section>
    </>
  )
}

export default SizeGuidePage