import { query } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";




export async function GET(req:NextRequest){
    const {searchParams} = req.nextUrl;
    const {car_id} = {car_id:searchParams.get('car_id')}


    const res = await query({
        query:'select max(return_date) return_date from rental where car_id = ?;',
        values:[car_id!]
    })

    return NextResponse.json(res[0])
}