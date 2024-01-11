export { default } from "next/middleware"

export const config = { matcher: ["/admin/:path", "/admin/:path*", "/client/:path", "/client/:path*", "/agents/:path", "/agents/:path*"] }