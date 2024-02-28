import Cards from "@/components/Layout/Cards";
import Curve from "@/components/Layout/Curve";
import Steps from "@/components/Layout/Stairs";
import Head from "next/head";

export default function ContactPage({}: {}) {
  return (
    <>
      <Head>
        <title>Contact</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Curve backgroundColor="#cec2d6"> */}
      <Cards>
        <section className="p-10 flex flex-col justify-center  min-h-screen text-black">
          <div className="pb-8">
            {" "}
            <h1 className="font-inter text-[72px]">Contact</h1>
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
    </>
  );
}
