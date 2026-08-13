

import { useEffect, useRef } from "react";
import { PageFlip } from "page-flip";


export const BookScreen = () => {
  const bookRef = useRef<HTMLDivElement>(null);
  const pageFlipRef = useRef<InstanceType<typeof PageFlip> | null>(null);

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
