import { useState, useEffect, useRef } from "react";

export default function RecomendacionesCarousel({ categories, autoplay = 6000 }) {
  const [catIndex, setCatIndex] = useState(0);
  const [slideIndex, setSlideIndex] = useState(0);
  const autoplayRef = useRef(null);
  const touchStartX = useRef(null);
  const directionRef = useRef("next");

  const currentCat = categories[catIndex];
  const slidesCount = currentCat.images.length;

  useEffect(() => setSlideIndex(0), [catIndex]);

  useEffect(() => {
    if (!autoplay) return;
    autoplayRef.current = setInterval(() => handleNext(), autoplay);
    return () => clearInterval(autoplayRef.current);
  }, [catIndex, slidesCount, autoplay]);

  function handlePrev() {
    directionRef.current = "prev";
    setSlideIndex((s) => (s - 1 + slidesCount) % slidesCount);
    resetAutoplay();
  }

  function handleNext() {
    directionRef.current = "next";
    setSlideIndex((s) => (s + 1) % slidesCount);
    resetAutoplay();
  }

  function resetAutoplay() {
    if (!autoplay) return;
    clearInterval(autoplayRef.current);
    autoplayRef.current = setInterval(() => handleNext(), autoplay);
  }

  function onTouchStart(e) {
    touchStartX.current = e.touches[0].clientX;
  }

  function onTouchEnd(e) {
    if (touchStartX.current == null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (dx > 50) handlePrev();
    else if (dx < -50) handleNext();
    touchStartX.current = null;
  }

  return (
    <section aria-label="Carrusel de recomendaciones" className="space-y-10">
      <div className="flex flex-wrap justify-center gap-5">
        {categories.map((c, i) => (
          <button
            key={c.key}
            onClick={() => setCatIndex(i)}
            className={`px-6 py-3 rounded-full text-base font-semibold transition-all duration-300 ${
              i === catIndex
                ? "bg-green-600 text-white shadow-xl scale-105"
                : "bg-gray-100 text-gray-800 hover:bg-gray-200"
            }`}
          >
            {c.title}
          </button>
        ))}
      </div>
      <div
        className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-black/10 shadow-2xl border border-gray-200"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div className="relative h-[500px] sm:h-[600px] md:h-[700px]">
          {currentCat.images.map((img, i) => {
            const isActive = i === slideIndex;
            const isPrev =
              (i === (slideIndex - 1 + slidesCount) % slidesCount && directionRef.current === "next") ||
              (i === (slideIndex + 1) % slidesCount && directionRef.current === "prev");

            return (
              <img
                key={i}
                src={img.src}
                alt={img.alt || `${currentCat.title} ${i + 1}`}
                className={`absolute inset-0 h-full w-full object-cover rounded-[2rem] transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]
                ${isActive ? "opacity-100 scale-100 z-20" : "opacity-0 scale-105 z-10"}
                ${isPrev ? "translate-x-0" : "translate-x-0"}`}
                style={{
                  transform: isActive
                    ? "translateX(0)"
                    : directionRef.current === "next"
                    ? "translateX(15%)"
                    : "translateX(-15%)",
                }}
              />
            );
          })}
        </div>
        {currentCat.images[slideIndex].caption && (
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent px-10 py-8 rounded-b-[2rem] z-30">
            <p className="text-white text-xl sm:text-2xl font-semibold drop-shadow-lg">
              {currentCat.images[slideIndex].caption}
            </p>
          </div>
        )}
        <button
          onClick={handlePrev}
          aria-label="Anterior"
          className="absolute left-8 top-1/2 -translate-y-1/2 z-30 rounded-full bg-white/90 hover:bg-white p-6 text-5xl font-bold text-gray-800 shadow-xl transition transform hover:scale-110"
        >
          ‹
        </button>
        <button
          onClick={handleNext}
          aria-label="Siguiente"
          className="absolute right-8 top-1/2 -translate-y-1/2 z-30 rounded-full bg-white/90 hover:bg-white p-6 text-5xl font-bold text-gray-800 shadow-xl transition transform hover:scale-110"
        >
          ›
        </button>
      </div>
    </section>
  );
}
