//API to return list of products from database.
import nc from 'next-connect';
import Product from '../../../models/Product';
import db from '../../../utils/db'

const handler = nc();

handler.get(async(req,res) => {
    await db.connect();
    const products = await Product.find({}); //return all products without any filter
    await db.disconnect();
    res.send(products);
})
export default handler;