import client from '@/database/mongodb';
import { ObjectId } from 'mongodb';
import type { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server'
import { type NextRequest } from 'next/server'

export  async function POST(req: NextRequest, res: NextApiResponse) {
  // const order = req?.body.get('order')'
  try {

  const {order} = await req.json()
  if (req.method === 'POST') {
    // Process a POST request
    if (!order) return NextResponse.json({success:false})
       const insertReq = await client.db("OVA").collection("Orders").insertOne(order);
       if (insertReq.acknowledged) {         
        console.log('insertReq.acknowledged: ', insertReq.acknowledged);
          // Update stock values for each product in the order
          for (const product of order?.products) {
            const { _id, qty } = product;
            
            if (isNaN(Number(qty)) || Number(qty) <= 0) {
              return NextResponse.json({ success: false, message: 'Invalid quantity for product' });
            }

            // Assuming you have a collection named "Products" with stock information
            const updateStockReq = await client.db("OVA").collection("Products").updateOne(
           
              { _id: new ObjectId(`${_id}`) },
              { $inc: { stock: -Number(qty) } }
              );
    
            if (!updateStockReq.acknowledged) {
              return NextResponse.json({ success: false, message: 'Failed to update stock values' });
            }
          }
         return NextResponse.json({success:true});
        }
  }


}
  catch(e) {
    console.log('e: ', e);

  }
 

return NextResponse.json({success:false});

}