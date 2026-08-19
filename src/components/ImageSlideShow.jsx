import { useState } from "react";

function ImageSlideshow({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  function nextImage() {
    setCurrentIndex((currentIndex + 1) % images.length);
  }

  function previousImage() {
    setCurrentIndex(
      (currentIndex - 1 + images.length) % images.length
    );
  }

  return (
    <div className="relative overflow-hidden rounded-lg bg-slate-200">
      <img
        src={images[currentIndex]}
        alt={`CB Building project ${currentIndex + 1}`}
        className="h-[450px] w-full object-cover"
      />

      {/* Previous */}
      <button
        onClick={previousImage}
        className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/60 px-4 py-3 text-xl text-cb-white hover:bg-black/80"
        aria-label="Previous image"
      >
        ←
      </button>

      {/* Next */}
      <button
        onClick={nextImage}
        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/60 px-4 py-3 text-xl text-cb-white hover:bg-black/80"
        aria-label="Next image"
      >
        →
      </button>

      {/* Image counter */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-black/60 px-4 py-2 text-sm text-cb-white">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
}

export default ImageSlideshow;