import { NextResponse } from "next/server";

const data = [
    {
        "user_id": "43",
        "user_type": "Buyer",
        "username": "3295723985y",
        "password": "password",
        "email": "09237594825Y",
        "phone": "3u509832y58",
        "name": "3295723985y",
        "address": "tuergheoui",
        "profile_picture": "https://res.cloudinary.com/dhzdzjgtd/image/upload/v1682049358/SneakerStreet/users/default-logo_q2acc9.jpg"
    },
    {
        "user_id": "48",
        "user_type": "Buyer",
        "username": "Mac",
        "password": "password",
        "email": "4545",
        "phone": "4545",
        "name": "455",
        "address": "4545",
        "profile_picture": "https://res.cloudinary.com/dhzdzjgtd/image/upload/v1682049358/SneakerStreet/users/default-logo_q2acc9.jpg"
    },
    {
        "user_id": "42",
        "user_type": "Buyer",
        "username": "464684",
        "password": "password",
        "email": "6646546",
        "phone": "464684",
        "name": "464684",
        "address": "646468",
        "profile_picture": "https://res.cloudinary.com/dhzdzjgtd/image/upload/v1682049358/SneakerStreet/users/default-logo_q2acc9.jpg"
    },
    {
        "user_id": "67",
        "user_type": "Buyer",
        "username": "",
        "password": "password",
        "email": "",
        "phone": "",
        "name": "",
        "address": "",
        "profile_picture": null
    },
    {
        "user_id": "2",
        "user_type": "Admin",
        "username": "mac1",
        "password": "macintushar",
        "email": "macintushar@nike.com",
        "phone": "9154825132",
        "name": "Mac",
        "address": "123, Nike Ave., Portlad, Oregon, 97001",
        "profile_picture": "https://res.cloudinary.com/dhzdzjgtd/image/upload/v1682049358/SneakerStreet/users/default-logo_q2acc9.jpg"
    },
    {
        "user_id": "1",
        "user_type": "Admin",
        "username": "tushar1",
        "password": "tushar",
        "email": "tushar1@adidas.com",
        "phone": "89185453416",
        "name": "Tushar",
        "address": "Adidas Ave, Hamburg Germany",
        "profile_picture": "https://res.cloudinary.com/dhzdzjgtd/image/upload/v1682049358/SneakerStreet/users/default-logo_q2acc9.jpg"
    }
]

export async function GET(request: Request) {
    return NextResponse.json({ data });
}   

export async function POST(request: Request) {
    return NextResponse.json({ data });
}   
