import { query } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";


export async function POST(request: NextRequest) {

    const {make,model,variant,price,image ,color,location} = await request.json();
    
    // try{
        const res = await query({
            query:'insert into car (car_make, car_model, car_variant, car_color, car_price, car_pic,car_location) values (?,?,?,?,?,?,?);',
            values:[make,model,variant,color,price, image,location]
        })
        console.log('here')
        return NextResponse.json(true);
        
    // } catch(e){
        
    //     return NextResponse.json(false);
    // }
}