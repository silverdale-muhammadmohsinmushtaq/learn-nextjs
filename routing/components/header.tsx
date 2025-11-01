import Link from "next/link";

const Navbarpage = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 z-20 flex items-center justify-between px-8 py-6 bg-black/50 backdrop-blur-sm">
            <Link href="/" className="text-white text-lg font-medium">Home</Link>
            <div className="flex gap-4">
                <Link href="/performance" className="text-white text-lg font-medium">Performance</Link>
                <Link href="/reliability" className="text-white text-lg font-medium">Reliability</Link>
            </div>
        </nav>
    );
}

export default Navbarpage;