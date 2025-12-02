import Button from '@/components/Button/Button';
import styles from '../SizeGuidePage.module.scss'

interface boxItem {
  id: number,
  name: string,
  price: number,
  img: string,
}

interface RecommendedBoxesProps {
  items: boxItem[];
}

const BabyBoxes: React.FC<RecommendedBoxesProps> = ({ items }) => {
  return (
    <div className={styles.boxes}>
      <h2 className={styles.boxes__title}>
        Shop for BabyBoxes!
      </h2>
      <div className={styles.boxes__items}>
        {items.map(box => (
          <div key={box.id} className={styles.boxes__box}>
            <img src={box.img} alt={box.name} />
            <p>{box.name}</p>
            <p>${box.price}</p>
            <Button
              onClick={() => console.log("add", box.id)}
              className={styles.addButton}
            >
              +
            </Button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BabyBoxes