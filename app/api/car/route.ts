import { query } from "@/lib/db";
import { NextRequest,NextResponse } from "next/server";

export async function GET(req:NextRequest){

    const {searchParams} = req.nextUrl;
    const {car_id} = {car_id:searchParams.get("car_id")}

    let res;
    if(!car_id){
         res = await query({
            query:'select * from car;',
            values:[]
        })
    } else {
         res = await query({
            query:'select * from car where car_id = ?;',
            values:[car_id!]
        })
    }


    return NextResponse.json(res); 
}


export async function DELETE(req:NextRequest){
    const {searchParams} = req.nextUrl;
    const {car_id} = {car_id:searchParams.get("car_id")};

    try{
        const res = await query({
            query:`delete from car where car_id = ?`,
            values:[car_id!]
        })
        return NextResponse.json(true);
    } catch(e) {
        return NextResponse.json(false);

    }
}