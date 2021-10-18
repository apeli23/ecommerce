// seed data to feed product model
import nc from 'next-connect';
import Product from '../../models/Product';
import db from '../../utils/db'
import data from '../../utils/data'

const handler = nc();

handler.get(async(req,res) => {
    await db.connect();
    await Product.deleteMany(); //deletes all records in product model
    await Product.insertMany(data.products);//insert document / array of products
    await db.disconnect();
    res.send({message: 'seeded successfully'});
})
export default handler;