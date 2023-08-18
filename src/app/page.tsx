import Image from "next/image";
import Footer from "@/components/Footer";
import Card from "@/components/Card";
import AboutSection from "@/components/AboutSec";
import Work from "@/components/Work";
export default function Home() {
  return (
    <main className="bg-gradient-to-b from-violet-500 to-fuchsia-500">
      {/* hero section */}

      <section className="lg:p-16 sm:p-5 ">
        <div className=" bg-hero-pattern bg-no-repeat bg-cover lg:rounded-[30px] bg-no-repeat bg-center grid  max-w-screen-xl sm:px-1 px-4 py-8 mx-auto  sm:gap-2 lg:gap-8 xl:gap-0 lg:py-16 sm:grid-cols-12 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7 sm:p-3 lg:p-20 text-center lg:text-left ">
            <h1 className="max-w-2xl sm:max-w-xl mb-4 lg:pt-3 pt-20 font-extrabold tracking-tight leading-none text-4xl  md:text-5xl  xl:text-6xl dark:text-white">
              <span className="font-extrabold text-transparent   bg-clip-text bg-gradient-to-r from-fuchsia-500 to-violet-500">
                {" "}
                NFTATIVE <br />
              </span>{" "}
              WHERE{" "}
              <span className="font-extrabold text-transparent  bg-clip-text bg-gradient-to-r from-fuchsia-500 to-violet-500">
                {" "}
                ART AND <br></br> SPACE
              </span>{" "}
              COLLIDE
            </h1>
            <p className="max-w-2xl mb-6 font-light text-white lg:mb-8 md:text-lg lg:text-xl ">
              Discover the Universe in NFT Form - Explore NFTATIVEs Space-Themed
              Collection
            </p>

            <a
              href="#"
              className="inline-flex items-center justify-center px-10 py-4 text-base font-medium text-center text-white border w-auto rounded-lg px-24 py-4 w-62 mx-6 bg-gradient-to-r from-pink-500 to-indigo-500"
            >
              Explore NFTs
            </a>
          </div>
          <div className="p-16 hidden lg:mt-0 lg:col-span-5 lg:flex ">
            <div className="p-4  border rounded-lg bg-indigo-500 opacity-75">
              <img src="/image.png" alt="mockup" />
            </div>
          </div>
        </div>
      </section>

      <Card />
      <AboutSection />

      <Work />
      {/* footer */}
      <Footer />
    </main>
  );
}
