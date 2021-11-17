import nc from 'next-connect';
import Order from '../../../models/Order';
import { isAuth } from '../../../utils/auth';
import db from '../../../utils/db';
import { onError } from '../../../utils/error';


const handler = nc({onError,});

console.log("orders posting...")
// console.log("isAuth", isAuth)
// handler.use(isAuth);
handler.post(async (req, res) => {
  
  console.log("req_bearer ==>", req.headers.authorization)
  await db.connect()
  const newOrder = new Order({
    ...req.body,
  });
    console.log("newOrder", newOrder);

  const order = await newOrder.save();
  res.status(201).send(order);
    console.log("order")
})

export default handler;