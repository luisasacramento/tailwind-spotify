import {
  Home as HomeIcon,
  Search,
  Library,
  ChevronLeft,
  ChevronRight,
  Play,
  Shuffle,
  SkipBack, 
  SkipForward,
  Repeat,
  Mic2,
  LayoutList,
  Laptop2,
  Volume,
  Maximize2
} from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <aside className="w-72 bg-zinc-950 p-6">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full" />
            <div className="w-3 h-3 bg-yellow-500 rounded-full" />
            <div className="w-3 h-3 bg-green-500 rounded-full" />
          </div>
          <nav className="space-y-5 mt-10">
            <a
              href=""
              className="flex items-center gap-3 text-sm font-semibold text-zinc-200"
            >
              <HomeIcon />
              Home
            </a>
            <a
              href=""
              className="flex items-center gap-3 text-sm font-semibold text-zinc-200"
            >
              <Search />
              Search
            </a>
            <a
              href=""
              className="flex items-center gap-3 text-sm font-semibold text-zinc-200"
            >
              <Library />
              Your Library
            </a>
          </nav>

          <nav className="mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-3">
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              recovery
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              JUSTENNNN
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Chase#Atlantic
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              disney s2
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              The Weekend
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Violetta - Todas las Musicas
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Best of 2024
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Mix de PK
            </a>
          </nav>
        </aside>

        <main className="flex-1 p-6">
          <div className="felx items-center gap-3">
            <button className="rounded-full bg-black/40 p-1">
              <ChevronLeft />
            </button>
            <button className="rounded-full bg-black/40 p-1">
              <ChevronRight />
            </button>
          </div>
          <h1 className="font-semibold text-3xl mt-10">Good Afternoon</h1>
          <div className="grid grid-cols-3 gap-4 mt-4">
            <a className="bg-white/5 group flex items-center gap-4 rounded overflow-hidden hover:bg-white/10">
              <Image
                src="/Album.png"
                width={104}
                height={104}
                alt="Capa da álbum"
              />
              <strong> Believe</strong>
              <button className="w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a className="bg-white/5 group flex items-center gap-4 rounded overflow-hidden hover:bg-white/10">
              <Image
                src="/Album.png"
                width={104}
                height={104}
                alt="Capa da álbum"
              />
              <strong> Believe</strong>
              <button className="w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a className="bg-white/5 group flex items-center gap-4 rounded overflow-hidden hover:bg-white/10">
              <Image
                src="/Album.png"
                width={104}
                height={104}
                alt="Capa da álbum"
              />
              <strong> Believe</strong>
              <button className="w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a className="bg-white/5 group flex items-center gap-4 rounded overflow-hidden hover:bg-white/10">
              <Image
                src="/Album.png"
                width={104}
                height={104}
                alt="Capa da álbum"
              />
              <strong> Believe</strong>
              <button className="w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a className="bg-white/5 group flex items-center gap-4 rounded overflow-hidden hover:bg-white/10">
              <Image
                src="/Album.png"
                width={104}
                height={104}
                alt="Capa da álbum"
              />
              <strong> Believe</strong>
              <button className="w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a className="bg-white/5 group flex items-center gap-4 rounded overflow-hidden hover:bg-white/10">
              <Image
                src="/Album.png"
                width={104}
                height={104}
                alt="Capa da álbum"
              />
              <strong> Believe</strong>
              <button className="w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
          </div>

          <h2 className="font-semibold text-2xl mt-10">
            Made for Luisa Santos
          </h2>
          <div className="grid grid-cols-5 gap-4 mt-4">
            <a className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
              <Image
                src="/Album.png"
                className="w-full"
                width={120}
                height={120}
                alt="Capa da álbum"
              />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-500">Justin Bieber, Kid Laroi</span>
            </a>
            <a className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
              <Image
                src="/Album.png"
                className="w-full"
                width={120}
                height={120}
                alt="Capa da álbum"
              />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-500">Justin Bieber, Kid Laroi</span>
            </a>
            <a className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
              <Image
                src="/Album.png"
                className="w-full"
                width={120}
                height={120}
                alt="Capa da álbum"
              />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-500">Justin Bieber, Kid Laroi</span>
            </a>
            <a className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
              <Image
                src="/Album.png"
                className="w-full"
                width={120}
                height={120}
                alt="Capa da álbum"
              />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-500">Justin Bieber, Kid Laroi</span>
            </a>
            <a className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
              <Image
                src="/Album.png"
                className="w-full"
                width={120}
                height={120}
                alt="Capa da álbum"
              />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-500">Justin Bieber, Kid Laroi</span>
            </a>
            
          </div>
        </main>
      </div>
      <footer className="bg-zinc-800 border-t border-zinc-700 p-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
        <Image
                src="/Album.png"
                width={56}
                height={56}
                alt="Capa da álbum"
              />
              <div className="flex flex-col gap-1">
                <strong className="font-normal">Take you</strong>
                <span className="text-xs text-zinc-400">Justin Bieber</span>
              </div>
        
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-6">
            <Shuffle size={20} className="text-zinc-200" />
            <SkipBack size={20} className="text-zinc-200" />
            <button className="w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-white text-black">
                <Play />
              </button>
              <SkipForward size={20} className="text-zinc-200"/>
          <Repeat size={20} className="text-zinc-200"/>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-zinc-400">0:31</span>
            <div className="h-1 rounded-full w-96 bg-zinc-600">
              <div className="bg-zinc-200 w-40 h-1 rounded-full"></div>

            </div>
            <span className="text-xs text-zinc-400">2:31</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Mic2 size={20}/>
          <LayoutList size={20}/>
          <Laptop2 size={20}/>
          <div className="flex items-center gap2">
            <Volume size={20} />
            <div className="h-1 rounded-full w-24 bg-zinc-600">
              <div className="bg-zinc-200 w-10 h-1 rounded-full"></div>

            </div>
          </div>
          <Maximize2 size={20}/>


        </div>
      </footer>
    </div>
  );
}
