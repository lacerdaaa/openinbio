import Image from "next/image";
import Hero from "./components/landing-page/hero";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto border"> Hello World
      <Hero/>
      {/* <Header/>
      <VideoExplanation/>
      <Pricing/>
      <FAQ/> */}
    </div>
  );
}
