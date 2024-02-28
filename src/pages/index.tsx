import Image from "next/image";
import { Inter } from "next/font/google";
import Curve from "@/components/Layout/Curve";
import Steps from "@/components/Layout/Stairs";
import Cards from "@/components/Layout/Cards";

const inter = Inter({
  weight: ["400", "500", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function Home() {
  return (
    <main className={`${inter.variable}`}>
      {/* <Curve backgroundColor={"#B0AD98"}> */}
      <Cards>
        <section className="p-10 flex flex-col justify-center  min-h-screen text-black">
          <div className="pb-8">
            {" "}
            <h1 className="font-inter text-[72px]">Home</h1>
          </div>

          <div className="font-inter gap-10 flex ">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              imperdiet nibh sit amet velit dignissim, non tempus nisl
              pellentesque. Praesent sagittis magna sit amet ex blandit, id
              pharetra lectus feugiat. Praesent sit amet congue ipsum, in
              ultrices neque. In dapibus in purus vitae dignissim. Quisque
              molestie ullamcorper elementum. Sed sodales erat augue. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet
              quis lectus vitae venenatis. Aliquam erat volutpat. Nulla maximus
              sodales nibh dapibus congue. Integer nec pharetra felis, quis
              commodo elit. Fusce et aliquet neque. Vivamus leo diam, pharetra
              ut lorem eu, suscipit egestas ipsum. Aenean mauris ligula, laoreet
              ut volutpat sit amet, convallis et turpis.
            </p>
            <p>
              Quisque molestie ullamcorper elementum. Sed sodales erat augue.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              aliquet quis lectus vitae venenatis. Aliquam erat volutpat. Nulla
              maximus sodales nibh dapibus congue. Integer nec pharetra felis,
              quis commodo elit. Fusce et aliquet neque. Vivamus leo diam,
              pharetra ut lorem eu, suscipit egestas ipsum. Aenean mauris
              ligula, laoreet ut volutpat sit amet, convallis et turpis.
            </p>
          </div>
        </section>
      </Cards>
      {/* </Curve> */}
    </main>
  );
}
