import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
    try {
        cookies().delete("token")
        return NextResponse.json({ status: true, message: "Logout Successfull" })
    } catch (error) {
        return NextResponse.json({
            status: false,
            message: "Failed to Logout"
        })
    }
}