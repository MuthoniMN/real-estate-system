"use client"

export default function UnauthenticatedError() {
    return (
        <main className="w-full h-full flex flex-col items-center justify-center">
            <h1>Something went wrong</h1>
            <p>Please try again later</p>
        </main>
    )
}