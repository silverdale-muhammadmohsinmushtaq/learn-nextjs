import Image from "next/image";
import hero from "public/hero.jpg";

const Heropage = () => {
    return (
        <div className="relative h-screen">
            <div className="absolute inset-0">
                <Image src={hero} alt="hero" fill style={{ objectFit: "cover" }} />
            </div>
            {/* Text Overlay */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
                <h1 className="text-white text-6xl md:text-7xl lg:text-8xl font-bold text-center px-4">
                    Professional Gym Trainer
                </h1>
            </div>
        </div>
    );
}

export default Heropage;