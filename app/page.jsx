import Image from "next/image";
import home_bird from '@/public/img/home_bird.png'

export default function Home() {
  return (
    <div className="container flex flex-col md:flex-row gap-5 h-[calc(100vh-4rem)]">
      <div className="basis-full flex flex-col justify-center md:basis-2/3">
        <p className="special-word text-xs">Blogging Platform</p>
        <h1 className="pb-5">
          The World's <span className="special-word">Best</span><br /> Blogging Platform
        </h1>

        <p>Where Imagination Meets Information , A promise that creativity and knowledge intersect within our blog</p>


      </div>

      <div className="w-screen  md:block basis-1/3">
        <Image 
          src={home_bird}
          alt="Home bird"
          sizes="100vw"
          className="w-full h-auto"
        />
      </div>
    </div>
  );
}
