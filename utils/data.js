import Image from 'next/image';
import Heels from '../public/heels.jpg';
import Jordans from '../public/images/jordans.jpg';

const data = {
    products: [
        {
            name:'Nike',
            slug:'nike-shoes',
            category: 'Shoes',
            image: '/images/nike.jpg',
            price: 30,
            brand: 'Nike',
            rating: 4.5,
            numReviews: 10,
            countInStock: 20,
            description: 'The popular Nike shoes'
        },
        {
            name:'Jordans',
            slug:'jordans-shoes',
            category: 'Shoes',
            image: '/images/jordans.jpg',
            price: 50,
            brand: 'Jordans',
            rating: 4.5,
            numReviews: 10,
            countInStock: 20,
            description: 'Amazing Jordans'
        },
        {
            name:'Timber',
            slug:'timber-shoes',
            category: 'Shoes',
            image: '/images/timberland.jpg',
            price: 60,
            brand: 'Timberland',
            rating: 4.5,
            numReviews: 10,
            countInStock: 20,
            description: 'Original Timber shoes'
        },
        {
            name:'Diamond Heels',
            slug:'diamond-heels',
            category: 'Shoes',
            image: '/images/heels.jpg',
            price: 70,
            brand: 'Diamond Heels',
            rating: 4.5,
            numReviews: 10,
            countInStock: 20,
            description: 'Diamond heels are forever'
        },
        {
            name:'Pants',
            slug:'keller_sport-pants',
            category: 'Tops',
            image: '/images/pants.jpg',
            price: 70,
            brand: 'Keller sports',
            rating: 4.5,
            numReviews: 10,
            countInStock: 20,
            description: 'cool keller pants'
        },
        {
            name:'T-shirt',
            slug:'blue t-shirt',
            category: 'Coats',
            image: '/images/tshirt.jpg',
            price: 70,
            brand: 'Gildan',
            rating: 4.5,
            numReviews: 10,
            countInStock: 20,
            description: 'Awesome Gildan tops'
        },
            
    ]
};
export default data;