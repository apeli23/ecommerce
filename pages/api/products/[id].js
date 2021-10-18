//implememt api for `/api/product/[id]`
import nc from 'next-connect';
import Product from '../../../models/Product';
import db from '../../../utils/db'

const handler = nc();

handler.get(async(req,res) => {
    await db.connect();
    //Get the id in the URL
    const product = await Product.findById(req.query.id);
    await db.disconnect();
    res.send(product);
})
export default handler;