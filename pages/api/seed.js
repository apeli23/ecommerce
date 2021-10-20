// seed data to feed product model
import nc from 'next-connect';
import Product from '../../models/Product';
import db from '../../utils/db'
import data from '../../utils/data'
import User from '../../models/User';

const handler = nc();

handler.get(async(req,res) => {
    await db.connect();
    await User.deleteMany(); //deletes all records in user model
    await User.insertMany(data.users);//insert document / array of users
    await Product.deleteMany(); //deletes all records in product model
    await Product.insertMany(data.products);//insert document / array of products
    await db.disconnect();
    res.send({message: 'seeded successfully'});
});
export default handler;