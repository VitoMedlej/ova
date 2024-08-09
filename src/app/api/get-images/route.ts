import client from '@/database/mongodb';
import type {NextApiResponse}
from 'next';
import {NextResponse} from 'next/server'
import {type NextRequest} from 'next/server'

export async function GET(req : NextRequest, res : NextApiResponse) {
try {

    const Imgs = await client
        .db("OVA")
        .collection("Images");
    
        
    const Images = await Imgs
    .find({})
    .limit(20)
    .toArray()

 


    if (!Images) {
        return NextResponse.json({success: false});
    }

    return NextResponse.json({
        success: true,
        data: {
            Images
        }
    });
}

catch (error) {
    console.log('error get-Images: ', error);

}
}


export const dynamic = 'force-dynamic'
