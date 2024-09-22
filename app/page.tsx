import FlowerCanvas from "@/components/FlowerCanvas";
import Image from "next/image";
import { IoMenu, IoSearchOutline, IoCartOutline } from "react-icons/io5";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f4f1ea] text-[#2c3e2d] font-serif">
      <div className="w-full h-screen overflow-hidden">
        <div className="p-0 m-0 w-screen h-full">
          <FlowerCanvas />
        </div>
      </div>

      <header className="border-b border-[#a3b18a]">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <button className="text-[#3a5a40] hover:text-[#588157] inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
              <IoMenu className="h-6 w-6" />
            </button>
            <div className="h-[50px] w-[200px] aspect-auto relative">
              <Image src='/logo.png' fill className="object-cover" alt="Marjorie Logo" />
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="text-[#3a5a40] hover:text-[#588157] inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
              <IoSearchOutline className="h-5 w-5" />
            </button>
            <button className="text-[#3a5a40] hover:text-[#588157] inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
              <IoCartOutline className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="mb-16 text-center">
          <h2 className="text-4xl mb-4 font-light text-[#3a5a40]">&quot;I&apos;m doing good, I&apos;m on some new shit&quot;</h2>
          <p className="text-lg mb-8 text-[#344e41]">Discover our latest floral arrangements inspired by nature&apos;s poetry.</p>
          <button className="bg-[#588157] hover:bg-[#3a5a40] text-white inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">Shop Now</button>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: "Cardigan Bouquet", price: "$45", image: "https://placehold.co/600x400/png?text=Cardigan+Bouquet" },
            { name: "Exile Arrangement", price: "$55", image: "https://placehold.co/600x400/png?text=Exile+Arrangement" },
            { name: "Betty's Blooms", price: "$40", image: "https://placehold.co/600x400/png?text=Betty's+Blooms" },
          ].map((product) => (
            <div key={product.name} className="text-center flex flex-col items-center">
              <Image src={product.image} alt={product.name} className="object-cover mb-4" width={400} height={300} />
              <h3 className="text-xl mb-2 text-[#3a5a40]">{product.name}</h3>
              <p className="text-lg mb-4 text-[#344e41]">{product.price}</p>
              <button className="border border-[#588157] text-[#588157] hover:bg-[#588157] hover:text-white inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
                Add to Cart
              </button>
            </div>
          ))}
        </section>

        <section className="mt-16 text-center">
          <h2 className="text-2xl mb-4 text-[#3a5a40]">&quot;You drew stars around my scars&quot;</h2>
          <p className="mb-8 text-[#344e41]">Subscribe to our newsletter for exclusive offers and floral inspiration.</p>
          <form className="flex max-w-md mx-auto">
            <input type="email" placeholder="Your email address" className="mr-2 bg-white border-[#a3b18a] focus:border-[#588157] flex h-10 w-full rounded-md border border-input px-3 py-2 text-sm ring-offset-gray file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" />
            <button type="submit" className="bg-[#588157] hover:bg-[#3a5a40] text-white inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">Subscribe</button>
          </form>
        </section>
      </main>

      <footer className="border-t border-[#a3b18a] mt-12 bg-[#dad7cd]">
        <div className="container mx-auto px-4 py-6 text-center text-sm text-[#344e41]">
          <p>&copy; 2023 Folklore Flowers. All rights reserved.</p>
          <p className="mt-2">&quot;I had a marvelous time ruining everything&quot;</p>
        </div>
      </footer>
    </div>
  );
}
