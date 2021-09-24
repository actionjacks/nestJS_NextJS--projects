import Header from "../../components/Header";
import Image from "next/image";

function Checkout() {
  return (
    <div className="bg-gray-100">
      <Header />

      <main className="lg:flex max-w-screen-2xl mx-auto">
        <div className="flex-grow m-5 shadow-sm">
          <Image
            src="https://www.games-workshop.com/resources/touts/2021-02-06/AOSLP-Scenery-Header-2021-02-06-EN-bm.jpg"
            width={1020}
            height={150}
            objectFit="contain"
          />
          <div className="flex flex-col p-5 space-y-10 bg-white">
            <h1 className="text-3xl border-b pb-4">Shooping Basket</h1>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Checkout;
