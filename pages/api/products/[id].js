// Implement API for '/api/product[id]'
import nc from 'next-connect';
import Product from '../../../models/Product';
import db from '../../../utils/db'
import Product from '../../../../models/Product';
import db from '../../../../utils/db';

const handler = nc();

handler.get(async(req,res) => {
    await db.connect();
    const product = await Product.findById(req.query.id); //return all products without any filter
    await db.disconnect();
    res.send(product);
})
export default handler;