import products from "../../data/MAIN/products";
import CountdownApp from "../Countdown";
import { useMemo } from "react";
import PurchasedButton from "../Template/PurchasedButton";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function Flashdeals() {
  const shuffledProducts = useMemo(
    () => products.sort(() => 0.2 - Math.random()),
    []
  );
  const productsToShow = useMemo(
    () => shuffledProducts.slice(0, 5),
    [shuffledProducts]
  );

  return (
    <main className="bg-zinc-900 w-full h-auto p-3 flex flex-col border-[1px] border-neutral-700">
      <section className="flex gap-2  h-auto items-center p-3 mb-3">
        <div className="font-bold h-full p-2">Flashdeal</div>
        <div className="p-2 h-full text-orange-600 bg-black bg-opacity-40 text-sm font-semibold">
          <CountdownApp />
        </div>
      </section>
      <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 grid-rows-1 place-items-center gap-3">
        {productsToShow.map((p) => (
          <div
            key={p.id}
            className="flex mb-2 flex-col rounded h-56 md:h-72 lg:h-80 w-full relative bg-slate-900 gap-3 items-center overflow-hidden"
          >
            <figure className="object-cover h-full w-full hover:scale-105 duration-300 ease-in-out">
              <LazyLoadImage
                src={p.img}
                className="object-cover h-full w-full"
                height="100%"
                width="100%"
                effect="blur"
                placeholderSrc={p.img}
              />
            </figure>
            <div className="absolute top-3 left-3 text-sm">
              <p className="bg-blue-950 font-medium p-2 text-xs rounded-sm">
                {p.off}% off
              </p>
            </div>
            <div className="bg-black bg-opacity-50 w-full  p-2 flex flex-col gap-3 absolute bottom-0">
              <div className="w-full flex flex-col text-sm">
                <p className="font-bold">{p.name}</p>
                <div className="flex gap-2">
                  <p className="line-through text-red-300">$ {p.price}</p>
                  <p className="">
                    $ {(p.price - (p.price * p.off) / 100).toFixed(2)}
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-1 h-full text-sm">
                <PurchasedButton product={p} />
              </div>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}

export default Flashdeals;
