import Image from 'next/image';
import Heels from '../public/heels.jpg';
import Jordans from '../public/images/jordans.jpg';

const data = {
    products: [
        {
            name:'Nike',
            category: 'Shoes',
            image: 'https://4.imimg.com/data4/UQ/OC/ANDROID-42692862/product-500x500.jpeg',
            price: 30,
            brand: 'Nike',
            rating: 4.5,
            numReviews: 10,
            countInStok: 20,
            description: 'The popular Nike shoes'
        },
        {
            name:'Jordans',
            category: 'Shoes',
            image: 'https://sneakernews.com/wp-content/uploads/2015/11/last-chance-eminem-air-jordan-4-carhartt-01.jpg',
            price: 50,
            brand: 'Jordans',
            rating: 4.5,
            numReviews: 10,
            countInStok: 20,
            description: 'Amazing Jordans'
        },
        {
            name:'Timber',
            category: 'Shoes',
            image: 'https://footwearnews.com/wp-content/uploads/2019/01/timberland-field-trekker.jpg?w=700&h=437&crop=1&resize=700%2C437',
            price: 60,
            brand: 'Timberland',
            rating: 4.5,
            numReviews: 10,
            countInStok: 20,
            description: 'Original Timber shoes'
        },
        {
            name:'Heels',
            category: 'Shoes',
            image: 'https://i.pinimg.com/originals/18/c2/e6/18c2e61fa96ddf0ef0232d3bc8d77091.jpg',
            price: 70,
            brand: 'Diamond Heels',
            rating: 4.5,
            numReviews: 10,
            countInStok: 20,
            description: 'Diamond heels are forever'
        },
        {
            name:'Polo neck',
            category: 'Tops',
            image: 'https://image.keller-sports.com/storage/products/F0/51/F051F3273A319B03C84CF7593CC91A870Fb0.600x600.jpg',
            price: 70,
            brand: 'Diamond Heels',
            rating: 4.5,
            numReviews: 10,
            countInStok: 20,
            description: 'Diamond heels are forever'
        },
        {
            name:'Trench Coat',
            category: 'Coats',
            image: 'https://imgs.michaels.com/MAM/assets/1/726D45CA1C364650A39CD1B336F03305/img/53FB11247AD448EE80E1A1FBC4A4EC53/10093633_r.jpg?fit=inside|1024:1024',
            price: 70,
            brand: 'Diamond Heels',
            rating: 4.5,
            numReviews: 10,
            countInStok: 20,
            description: 'Diamond heels are forever'
        },
            
    ]
};
export default data;