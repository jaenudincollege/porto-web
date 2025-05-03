import Image from "next/image";
import Link from "next/link";
import myImg from "@/public/jaenudin.jpeg";

const HeroSection = () => {
  return (
    <section className="mt-10">
      <div className="mx-auto grid max-w-7xl grid-cols-1 grid-rows-2 justify-items-center gap-y-8 px-4 md:grid md:grid-cols-2 lg:px-0">
        <div className="row-start-2 row-end-2 place-items-center justify-items-center space-y-4 md:row-start-1 md:justify-items-start md:self-center">
          <h1 className="text-4xl md:text-5xl lg:text-7xl">
            Hi, i&apos;m{" "}
            <span className="font-bold text-sky-400 hover:text-sky-700">
              Jaenudin
            </span>
          </h1>

          <div className="text-center text-lg md:text-left lg:text-xl">
            <p>
              I build scalable apps with React, Node.js, Express, MongoDB &
              PostgreSQL. From interfaces to APIs, I deliver polished,
              production-ready code.
            </p>
          </div>

          <Link
            href="/project"
            className="cta inline-block rounded-full px-6 py-3"
          >
            See My Work
          </Link>
        </div>
        <Image
          src={myImg}
          alt="Jaenudin Firdaus"
          className="w-[300px] rounded-full md:w-[350px] lg:w-[400px]"
        />
      </div>
    </section>
  );
};

export default HeroSection;
