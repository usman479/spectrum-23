import { query } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";


export async function POST(request: NextRequest) {

    const {car_id,name,phone,rentalDate,returnDate} = await request.json();

    const res = await query({
        query:'insert into customers (cus_name,cus_phone) values(?,?)',
        values:[name,phone]
    })

    const res2 = await query({
        query:'select * from customers order by cus_id desc limit 1;',
        values:[]
    })

    const res3 = await query({
        query:'insert into rental (car_id,cus_id,rental_date,return_date) values(?,?,?,?)',
        values:[car_id!,res2[0].cus_id,rentalDate,returnDate]
    })

    
    // try{
        // const res = await query({
        //     query:'insert into car (car_make, car_model, car_variant, car_color, car_price, car_pic,car_location) values (?,?,?,?,?,?,?);',
        //     values:[make,model,variant,color,price, image,location]
        // })
        // console.log('here')
        return NextResponse.json(true);
        
    // } catch(e){
        
    //     return NextResponse.json(false);
    // }
}