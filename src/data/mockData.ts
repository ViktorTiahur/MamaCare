import baby_care from '../assets/icons/baby-care.png'
import cleaning from '../assets/icons/cleaning.png'
import clothing from '../assets/icons/clothing.png'
import feeding from '../assets/icons/feeding.png'
import for_mama from '../assets/icons/for-mama.png'
import postpartum from '../assets/icons/postpartum.png'
import toys from '../assets/icons/toys.png'

export const subcategories = [
  { id: 1, name: 'Postpartum', icon: postpartum },
  { id: 2, name: 'Baby Care', icon: baby_care },
  { id: 3, name: 'Cleaning', icon: cleaning },
  { id: 4, name: 'Clothing', icon: clothing },
  { id: 5, name: 'For Mama', icon: for_mama },
  { id: 6, name: 'Feeding', icon: feeding },
  { id: 7, name: 'Toys', icon: toys },
];

export const products = [
  {
    id: 101,
    name: 'Box Name',
    price: 250,
    image: '/images/item1.png',
    subcategoryId: 1,
  },
  {
    id: 102,
    name: 'Box Name',
    price: 250,
    image: '/images/item2.png',
    subcategoryId: 2,
  },
  // додай ще товари
];
