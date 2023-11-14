"use client"

const Footer = () => {
    return (
        <div className="flex items-center justify-between w-full fixed bottom-0 top-auto bg-slate-600">
            <h1 className="ml-20">Logo</h1>
            <div className="flex items-center gap-10 justify-end mr-20">
                <h2>Home</h2>
                <h2>About</h2>
                <h2>Products</h2>
                <h2>Derpinstein</h2>
            </div>
        </div>
    )
}

export default Footer