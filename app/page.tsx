import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-background-primary">
      <Header/>
      <Hero/>
      <VideoExplanation/>
      <Pricing/>
      <FAQ/>
    </div>
  );
}
