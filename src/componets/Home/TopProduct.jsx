import Lists from "../../data/MAIN/Lists";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function TopProduct() {
  return (
    <main className="flex">
      <section className="w-full h-auto p-3 flex flex-col bg-zinc-900 border-[1px] border-neutral-700">
        <div className="font-bold ml-3 p-2 mb-5">Top Products</div>
        <section className="grid grid-cols-2 lg:grid-cols-4 place-items-center overflow-hidden gap-4">
          {Lists.map((p) => (
            <div
              key={p.id}
              className=" flex gap-2 mb-2 flex-col rounded h-60 w-full md:w-full lg:h-72 lg:w-auto relative bg-slate-900 overflow-hidden"
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
              <div className=" absolute top-3 left-3 text-sm">
                <p className="bg-green-900 font-medium p-2 text-xs rounded-sm">
                  Top Product
                </p>
              </div>
              <div className="bg-black bg-opacity-50 w-full  p-2 flex flex-col gap-3 absolute bottom-0">
                <div className="w-full flex flex-col text-sm items-center">
                  <p className="font-bold">{p.name}</p>
                </div>
                <div className="flex flex-col gap-1 h-full text-sm">
                  <Link to={p.link}>
                    <button className="w-full">See More</button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </section>
      </section>
    </main>
  );
}

export default TopProduct;
