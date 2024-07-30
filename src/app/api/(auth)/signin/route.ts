import { NextRequest, NextResponse } from "next/server";
import axios, { isAxiosError } from "axios"
export async function POST(req: NextRequest, res: NextResponse) {
    try {
        const { email, password } = await req.json()
        const { data, status } = await axios.post(`${process.env.BACKEND_URL}api/v1/auth/signin`, {
            email, password
        });
        const response = NextResponse.json({
            status: data.status,
            message: data.message
        }, { status });
        if (data.status) {
            response.cookies.set("token", data?.token, {
                httpOnly: true,
                secure: true,
            })
            return response
        }
        return response;
    } catch (error) {
        if (isAxiosError(error)) {
            console.log(error);
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