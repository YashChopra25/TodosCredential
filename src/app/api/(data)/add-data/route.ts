import { NextRequest, NextResponse } from "next/server";
import axios, { isAxiosError } from "axios"
import { GetTokenData } from "@/lib/GetToken";
export async function POST(req: NextRequest, res: NextResponse) {
    try {
        const Tododata = await req.json()
        const { decoded, token } = GetTokenData()
        if (!token || !decoded) {
            return NextResponse.json({ status: false, message: "Unauthorized" })
        }
        const { data, status } = await axios.post(`${process.env.BACKEND_URL}/api/v1/add-data`, { ...Tododata, addedBy: decoded.id });

        console.log(data)
        const response = NextResponse.json({
            status: data.status,
            message: data.message,
            data: data.data
        }, { status });
        if (data.status) {
            return response
        }
        return response;
    } catch (error) {
        if (isAxiosError(error)) {
            const message = (error.response?.data?.message) || "Something went wrong"
            return NextResponse.json({
                status: false,
                message,
            }, { status: 403 });
        }
        return NextResponse.json({
            status: false,
            error: error,
            message: "Something went wrong while Signin"
        }, { status: 500 });
    }
}