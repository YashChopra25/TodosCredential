import { cookies } from "next/headers"
import jwt, { JwtPayload } from "jsonwebtoken"
interface decodedType extends JwtPayload {
    name: String,
    email: String,
    id: String,
}
export const GetTokenData = () => {
    const TOKEN = cookies().get("token")
    if (!TOKEN) {
        return { token: null, decoded: null }
    }
    const decoded:any= jwt.verify(TOKEN?.value, process.env.SECRET_KEY!);
    return { token: TOKEN, decoded }
}