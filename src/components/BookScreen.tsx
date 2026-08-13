

import { useEffect, useRef } from "react";
import { PageFlip } from "page-flip";

import Draggable from "react-draggable";
import DraggableItem from "./DragItem";

export const BookScreen = () => {
  const bookRef = useRef<HTMLDivElement>(null);
  const pageFlipRef = useRef<PageFlip | null>(null);

  useEffect(() => {
    if (!bookRef.current) return;

    // Prevent double initialization in React StrictMode
    if (pageFlipRef.current) return;

    const pageFlip = new PageFlip(bookRef.current, {
      width: 400,
      height: 500,
      autoSize: false,
      showCover: true,
      drawShadow: true,
      maxShadowOpacity: 0.5,
      usePortrait: false,
      startPage: 0,
    });

    pageFlipRef.current = pageFlip;

    // Find pages before any mutations
    const pages = bookRef.current.querySelectorAll(".book-page");
    if (pages.length > 0) {
      pageFlip.loadFromHTML(pages);
    }

    return () => {
      // In strict mode, we skip destroy to keep the DOM stable, 
      // or we handle it gracefully.
    };
  }, []);

  return (
    <div ref={bookRef}>
      {/* Front Cover */}
      <div
        className="book-page bg-blue-700 text-white"
        data-density="hard"
        style={{ width: 200, height: 700 }}
      >
        <img
          // src="/frontr.png"
          src="/pages/front.png"
          alt="Front Cover"
          draggable={false}
          className="absolute inset-0 w-full h-full object-contain scale-130 translate-x-3 pointer-events-none select-none"
        ></img>

        <div className="flex h-full items-center justify-center text-5xl font-bold"></div>
      </div>

      {/* Page 1 */}
      <div
        className="  book-page bg-amber-50 text-black"
        style={{ width: 600, height: 500 }}
      >
        {/* <div className="flex h-full items-center justify-center text-4xl">
          Page 1
        </div> */}

        <img
          src="/pages/left.jpg"
          alt="Front Cover"
          draggable={false}
          className="absolute inset-0 w-full h-full object-contain  pointer-events-none select-none"
        ></img>

        <img
          src="/elements/fwine.png"
          alt="Front Cover"
          draggable={false}
          className="absolute inset-0 w-full h-full object-contain  -rotate-12  -translate-x-34 -translate-y-33 scale-35   "
        ></img>

        {/* <img
      src="/elements/stamp.png"
        alt="Front Cover" 
    draggable={false}
     className="absolute inset-0 w-full h-full object-contain  -rotate-12  -translate-x-20 translate-y-30 scale-40   "
        ></img>  */}

        <img
          src="/elements/side3.png"
          alt="Front Cover"
          draggable={false}
          className="absolute inset-0 w-full h-full object-contain   -translate-x-23 -translate-y-14 scale-78   "
        ></img>

        <img
          src="/elements/mouse.png"
          alt="Front Cover"
          draggable={false}
          className="absolute inset-0 w-full h-full object-contain   z-50 translate-x-20 translate-y-46 scale-55   "
        ></img>

        <img
          src="/elements/butter.png"
          alt="Front Cover"
          draggable={false}
          className="absolute inset-0 w-full h-full object-contain scale-45 rotate-30  -translate-x-28 translate-y-32 "
        ></img>

        <img
          src="/Vani/scrap_book/image00001.jpeg"
          alt="Front Cover"
          draggable={false}
          className="absolute inset-0 w-full h-full object-contain scale-25 rotate-10 translate-x-13 -translate-y-23"
        ></img>

        <img
          src="/elements/frame10.png"
          alt="Front Cover"
          draggable={false}
          className="absolute inset-0 w-full h-full object-contain scale-65 rotate-10  translate-x-14 -translate-y-20 "
        ></img>

        <img
          src="/elements/text1.png"
          alt="Front Cover"
          draggable={false}
          className="absolute inset-0 w-full h-full object-contain scale-45   translate-x-10 translate-y-15 "
        ></img>
      </div>

      {/* Page 2 */}
      <div
        className="relative overflow-hidden book-page bg-amber-50 text-black"
        style={{ width: 600, height: 500 }}
      >
        {/* <div className="flex h-full items-center justify-center text-4xl">
          Page 2
        </div> */}
        <img
          src="/pages/right.jpg"
          alt="Front Cover"
          draggable={false}
          className="absolute inset-0 w-full h-full object-contain  pointer-events-none select-none"
        ></img>

        <img
          src="/elements/paper.png"
          alt="Front Cover"
          draggable={false}
          className="absolute inset-0 w-full h-full object-contain rotate-90 shadow-black   translate-x-18 translate-y-38  scale-50   "
        ></img>

        <img
          src="/elements/starB.png"
          alt="Front Cover"
          draggable={false}
          className="absolute inset-0 w-full h-full object-contain shadow-black  -rotate-50 -translate-x-17 translate-y-30  scale-50   "
        ></img>

        <img
          src="/Vani/scrap_book/image00002.jpeg"
          alt="Front Cover"
          draggable={false}
          className="absolute inset-0 w-full h-full object-contain shadow-black rotate-20  translate-x-19 -translate-y-22  scale-22   "
        ></img>

        <img
          src="/Vani/scrap_book/image00003.jpeg"
          alt="Front Cover"
          draggable={false}
          className="absolute inset-0 w-full h-full object-contain shadow-black rotate-20  translate-x-26 -translate-y-43  scale-22   "
        ></img>

        <img
          src="/Vani/scrap_book/image00004.jpeg"
          alt="Front Cover"
          draggable={false}
          className="absolute inset-0 w-full h-full object-contain shadow-black rotate-20  translate-x-11 translate-y-1  scale-22   "
        ></img>

        <img
          src="/elements/frame9.png"
          alt="Front Cover"
          draggable={false}
          className="absolute inset-0 w-full h-full object-contain shadow-black rotate-12  translate-x-18 -translate-y-20  scale-80   "
        ></img>

        <img
          src="/elements/text2.png"
          alt="Front Cover"
          draggable={false}
          className="absolute inset-0 w-full h-full object-contain shadow-black rotate-0 -translate-x-13 -translate-y-40  scale-60   "
        ></img>

        <img
          src="/elements/kit.png"
          alt="Front Cover"
          draggable={false}
          className="absolute inset-0 w-full h-full object-contain shadow-black rotate-0 -translate-x-13 -translate-y-16  scale-60   "
        ></img>
      </div>

      {/* Page 3 */}
      <div
        className="relative overflow-hidden book-page bg-amber-50 text-black"
        style={{ width: 600, height: 500 }}
      >
        {/* <div className="flex h-full items-center justify-center text-4xl">
          Page 3
        </div> */}

        <img
          src="/pages/left.jpg"
          alt="Front Cover"
          draggable={false}
          className="absolute inset-0 w-full h-full object-contain pointer-events-none select-none"
        />

        {/* Lyrics */}
        <img
          src="/elements/billa6.png"
          alt="Lyrics"
          draggable={false}
          className="absolute inset-0 w-full h-full object-contain scale-55 rotate-1 -translate-x-30 -translate-y-10"
        />

        {/* Wine */}
        <img
          src="/elements/side1.png"
          alt="Wine"
          draggable={false}
          className="absolute inset-0 w-full h-full object-contain scale-50 rotate-180 -translate-x-26 translate-y-31"
        />

        {/* Tape */}
        <img
          src="/elements/starem.png"
          alt="Tape"
          draggable={false}
          className="absolute inset-0 w-full h-full object-contain scale-16 -rotate-18 translate-x-18 -translate-y-56 z-20"
        />

        <div
          className="absolute overflow-hidden z-30"
          style={{
            width: '28%',
            height: '30%',
            top: '8%',
            left: '34%',
            transform: 'rotate(18deg)',
          }}
        >
          <img
            src="/Vani/scrap_book/image00006.jpeg"
            alt="Frame"
            draggable={false}
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
          />
        </div>

        {/* Photo Frame (Main Focus) */}
        <img
          src="/elements/frame11.png"
          alt="Frame"
          draggable={false}
          className="absolute inset-0 w-full h-full object-contain scale-75 rotate-18 translate-x-10 -translate-y-11 z-30"
        />

        {/* Recorder */}
        <img
          src="/elements/moon.png"
          alt="Recorder"
          draggable={false}
          className="absolute inset-0 w-full h-full object-contain scale-34 -rotate-14 -translate-x-20 translate-y-30 z-40"
        />

        <img
          src="/elements/fits.png"
          alt="Recorder"
          draggable={false}
          className="absolute inset-0 w-full h-full object-contain scale-44 -rotate-14 -translate-x-30 -translate-y-50 z-40"
        />

        {/* Vinyl Disk */}
        <img
          src="/elements/note1.png"
          alt="Disk"
          draggable={false}
          className="absolute inset-0 w-full h-full object-contain scale-68 -rotate-7 z-50 translate-x-14 translate-y-38 "
        />

        {/* Old Paper */}
        <img
          src="/elements/lovetape.png"
          alt="Old Paper"
          draggable={false}
          className="absolute inset-0 w-full h-full object-contain scale-19 rotate-0 z-50 translate-x-10 translate-y-24"
        />
      </div>

      {/* Page 4 */}
      <div
        className="relative overflow-hidden book-page bg-amber-50 text-black"
        style={{ width: 600, height: 500 }}
      >
        <img
          src="/pages/right.jpg"
          alt="Front Cover"
          draggable={false}
          className="absolute inset-0 w-full h-full object-contain pointer-events-none select-none"
        />

        <img
          src="/elements/side2.png"
          alt="Disk"
          draggable={false}
          className="absolute inset-0 w-full h-full object-contain scale-68  rotate-0 z-50 translate-x-16 translate-y-23 "
        />

        <img
          src="/elements/billa.png"
          alt="Disk"
          draggable={false}
          className="absolute inset-0 w-full h-full object-contain scale-38  rotate-0 z-50 -translate-x-14 -translate-y-28 "
        />

        <img
          src="/elements/boqey.png"
          alt="Disk"
          draggable={false}
          className="absolute inset-0 w-full h-full object-contain scale-48  rotate-0 z-50 -translate-x-14 translate-y-28 "
        />

        <img
          src="/Vani/scrap_book/image00014.jpeg"
          alt="Disk"
          draggable={false}
          className="absolute inset-0 w-full h-full object-contain scale-32  rotate-0 z-50 translate-x-19 -translate-y-32 "
        />

        <div
          className="absolute overflow-hidden z-50"
          style={{
            width: '28%',
            height: '30%',
            top: '5%',
            left: '55%',
          }}
        >
          <img
            src="/Vani/scrap_book/image00015.jpeg"
            alt="Photo"
            draggable={false}
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
          />
        </div>

        <img
          src="/frames/frame5.png"
          alt="Disk"
          draggable={false}
          className="absolute inset-0 w-full h-full object-contain scale-68  rotate-0 z-50 translate-x-18 -translate-y-28 "
        />

        <img
          src="/elements/miss.png"
          alt="Disk"
          draggable={false}
          className="absolute inset-0 w-full h-full object-contain scale-48  rotate-18 z-50 translate-x-28 translate-y-4 "
        />
      </div>

      {/* Page 5 */}
      <div
        className="relative overflow-hidden book-page bg-amber-50 text-black"
        style={{ width: 600, height: 500 }}
      >
        <img
          src="/pages/left.jpg"
          alt="Front Cover"
          draggable={false}
          className="absolute inset-0 w-full h-full object-contain pointer-events-none select-none"
        />

        <img
          src="/elements/side4.png"
          alt="Disk"
          draggable={false}
          className="absolute inset-0 w-full h-full object-contain scale-68  rotate-0 z-50 -translate-x-22 translate-y-23 "
        />

        <img
          src="/elements/disk.png"
          alt="Disk"
          draggable={false}
          className="absolute inset-0 w-full h-full object-contain scale-68  rotate-0 z-50 -translate-x-50 -translate-y-15 "
        />

        <img
          src="/elements/disk.png"
          alt="Disk"
          draggable={false}
          className="absolute inset-0 w-full h-full object-contain scale-68  rotate-0 z-50 -translate-x-50 -translate-y-15 "
        />

        <img
          src="/elements/billa5.png"
          alt="Disk"
          draggable={false}
          className="absolute inset-0 w-full h-full object-contain scale-68  rotate-0 z-50 translate-x-19 translate-y-33 "
        />

        <img
          src="/Vani/scrap_book/image00016.jpeg"
          alt="Disk"
          draggable={false}
          className="absolute inset-0 w-full h-full object-contain scale-26  -rotate-11 z-50 translate-x-4 -translate-y-12 "
        />

        <img
          src="/Vani/scrap_book/image00017.jpeg"
          alt="Disk"
          draggable={false}
          className="absolute inset-0 w-full h-full object-contain scale-26  rotate-11 z-50 translate-x-16 -translate-y-40 "
        />

        <img
          src="/elements/frame8.png"
          alt="Disk"
          draggable={false}
          className="absolute inset-0 w-full h-full object-contain scale-68  rotate-0 z-50 translate-x-10 -translate-y-25 "
        />

        <img
          src="/elements/twoStar.png"
          alt="Disk"
          draggable={false}
          className="absolute inset-0 w-full h-full object-contain scale-38  rotate-0 z-50 -translate-x-14 translate-y-20 "
        />

        <img
          src="/elements/text3.png"
          alt="Disk"
          draggable={false}
          className="absolute inset-0 w-full h-full object-contain scale-48  rotate-0 z-50 -translate-x-22 -translate-y-48 "
        />
      </div>

      {/* Page 6 */}
      <div
        className="relative overflow-hidden book-page bg-amber-50 text-black"
        style={{ width: 600, height: 500 }}
      >
        <img
          src="/pages/right.jpg"
          alt="Front Cover"
          draggable={false}
          className="absolute inset-0 w-full h-full object-contain pointer-events-none select-none"
        />

        <img
          src="/elements/side5.png"
          alt="Disk"
          draggable={false}
          className="absolute inset-0 w-full h-full object-contain scale-78  rotate-0 z-50 translate-x-22 translate-y-14 "
        />

        <img
          src="/elements/text4.png"
          alt="Disk"
          draggable={false}
          className="absolute inset-0 w-full h-full object-contain scale-58  rotate-0 z-50 -translate-x-6 -translate-y-40 "
        />


        <img
          src="/Vani/scrap_book/image00018.jpeg"
          alt="Disk"
          draggable={false}
          className="absolute inset-0 w-full h-full object-contain scale-28  -rotate-4 z-50 -translate-x-18 -translate-y-16 "
        />

        <img
          src="/Vani/scrap_book/image00020.jpeg"
          alt="Disk"
          draggable={false}
          className="absolute inset-0 w-full h-full object-contain scale-27  rotate-10 z-50 -translate-x-11 translate-y-13 "
        />

        <img
          src="/elements/frame7.png"
          alt="Disk"
          draggable={false}
          className="absolute inset-0 w-full h-full object-contain scale-68  rotate-0 z-50 -translate-x-14 translate-y-1 "
        />

        <img
          src="/elements/billa4.png"
          alt="Disk"
          draggable={false}
          className="absolute inset-0 w-full h-full object-contain scale-58  rotate-0 z-50 -translate-x-17 translate-y-40 "
        />
      </div>

      {/* Page 7 */}
      <div
        className="relative overflow-hidden book-page bg-amber-50 text-black"
        style={{ width: 600, height: 500 }}
      >
        <img
          src="/pages/left.jpg"
          alt="Page 7 Background"
          draggable={false}
          className="absolute inset-0 w-full h-full object-contain pointer-events-none select-none"
        />
        <img
          src="/Vani/scrap_book/image00082.jpeg"
          alt="Polaroid"
          draggable={false}
          className="absolute inset-0 w-full h-full object-contain scale-32 rotate-6 z-50 translate-x-12 -translate-y-10"
        />
        <img
          src="/elements/frame6.png"
          alt="Frame"
          draggable={false}
          className="absolute inset-0 w-full h-full object-contain scale-68 rotate-6 z-50 translate-x-12 -translate-y-10"
        />
        <img
          src="/elements/kit.png"
          alt="Decal"
          draggable={false}
          className="absolute inset-0 w-full h-full object-contain scale-50 -rotate-12 z-50 -translate-x-15 translate-y-30"
        />
      </div>

      {/* Page 8 */}
      <div
        className="relative overflow-hidden book-page bg-amber-50 text-black"
        style={{ width: 600, height: 500 }}
      >
        <img
          src="/pages/right.jpg"
          alt="Page 8 Background"
          draggable={false}
          className="absolute inset-0 w-full h-full object-contain pointer-events-none select-none"
        />
        <img
          src="/Vani/scrap_book/image00001.jpeg"
          alt="Polaroid"
          draggable={false}
          className="absolute inset-0 w-full h-full object-contain scale-32 -rotate-6 z-50 -translate-x-12 -translate-y-10"
        />
        <img
          src="/elements/frame3.png"
          alt="Frame"
          draggable={false}
          className="absolute inset-0 w-full h-full object-contain scale-68 -rotate-6 z-50 -translate-x-12 -translate-y-10"
        />
        <img
          src="/elements/moon.png"
          alt="Decal"
          draggable={false}
          className="absolute inset-0 w-full h-full object-contain scale-40 rotate-15 z-50 translate-x-20 translate-y-25"
        />
      </div>

      {/* Back Cover */}
      <div
        className="relative overflow-hidden book-page bg-blue-700 text-white"
        data-density="hard"
        style={{ width: 600, height: 500 }}
      >
        {/* <div className="flex h-full items-center justify-center text-5xl font-bold">
          Back Cover
        </div> */}
        <img
          // src="/frontr.png"
          src="/pages/back.png"
          alt="Front Cover"
          draggable={false}
          className="absolute inset-0 w-full h-full object-contain scale-130 translate-x-3 pointer-events-none select-none"
        ></img>
      </div>
    </div>
  );
}
