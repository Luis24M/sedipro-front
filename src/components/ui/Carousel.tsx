import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import AutoScroll from 'embla-carousel-auto-scroll';
import type { EmblaOptionsType } from 'embla-carousel';

interface CarouselProps<T> {
  data: T[];
  renderItem: (item: T) => React.ReactNode;
  basisClass?: string;
  loop?: boolean;
  isAutoScroll?: boolean;
}

export const Carousel = <T,>({ 
  data, 
  renderItem, 
  basisClass = "basis-full", 
  loop = true,
  isAutoScroll = false 
}: CarouselProps<T>) => {
  const plugins = isAutoScroll 
    ? [
        AutoScroll({ 
          speed: 1, 
          stopOnInteraction: false, 
          stopOnMouseEnter: true
        })
      ] 
    : [];

  const options: EmblaOptionsType = {
    loop,
    align: 'start',
    dragFree: true, 
  };

  const [emblaRef, emblaApi] = useEmblaCarousel(options, plugins);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const onSelect = useCallback((api: any) => {
    if (!api) return;
    setCanScrollPrev(api.canScrollPrev());
    setCanScrollNext(api.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect(emblaApi);
    emblaApi.on('reInit', onSelect);
    emblaApi.on('select', onSelect);
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <div className="relative group">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex touch-pan-y -ml-4 cursor-grab active:cursor-grabbing">
          {data.map((item, index) => (
            <div 
              key={index} 
              className={`flex-none pl-4 min-w-0 ${basisClass}`} 
            >
              {renderItem(item)}
            </div>
          ))}
        </div>
      </div>

      <button 
        onClick={scrollPrev}
        className={`absolute left-2 top-1/2 -translate-y-1/2 z-10 
                   bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg border border-neutral-100
                   text-primary-500 hover:bg-white hover:scale-110 transition-all duration-300
                   hidden md:block opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0
                   ${!canScrollPrev && !loop ? 'invisible' : ''}`}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
      </button>

      <button 
        onClick={scrollNext} 
        className={`absolute right-2 top-1/2 -translate-y-1/2 z-10 
                   bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg border border-neutral-100
                   text-primary-500 hover:bg-white hover:scale-110 transition-all duration-300
                   hidden md:block opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0
                   ${!canScrollNext && !loop ? 'invisible' : ''}`}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
      </button>
    </div>
  );
};