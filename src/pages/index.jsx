import { Button } from "@nextui-org/react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="flex flex-col min-h-full sm:min-h-screen max-w-full">
      <section className="relative overflow-hidden flex-grow">
        <div className="relative z-20 mx-auto max-w-screen-sm flex flex-col justify-center items-center h-full text-center text-white">
          <h1 className="text-4xl sm:text-8xl mt-24 mb-2">STAR WARS</h1>
          <p className="text-lg sm:text-4xl font-semibold mb-4">
            Find your favorite character
          </p>
          <Button color="secondary" variant="shadow" className="font-semibold">
            <Link to="characters">✨Find them✨</Link>
          </Button>
        </div>
      </section>
      <video muted autoPlay loop className="fixed top-0 left-0 w-full h-full object-cover z-0">
        <source src="/public/videos/bg-home.mp4" type="video/mp4" />
      </video>
      <div className="bg-black opacity-50 mix-blend-overlay absolute top-0 left-0 w-full h-full object-cover z-10"></div>
    </div>
  );
};

export default Index;


