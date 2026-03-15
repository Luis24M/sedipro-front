import React from "react";
import { Carousel } from "@/components/ui/Carousel";
import type { Partner } from "@/Interfaces/partner.interface";

interface AliadosCarouselProps {
  partners: Partner[];
}

const chunkArray = <T,>(array: T[], size: number): T[][] => {
  const result: T[][] = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
};

const PartnerCard = ({ partner }: { partner: Partner }) => {
  const handleImgError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const img = e.currentTarget;
    img.style.display = "none";
    const fallback = img.nextElementSibling as HTMLElement | null;
    if (fallback) {
      fallback.style.display = "flex";
    }
  };

  return (
    <a
      href={partner.websiteUrl}
      target="_blank"
      rel="noopener noreferrer"
      title={partner.name}
      className="flex items-center justify-center p-4 rounded-xl opacity-60 hover:opacity-100 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 cursor-pointer select-none bg-white"
    >
      <img
        src={partner.logoUrl}
        alt={partner.name}
        className="h-14 w-auto max-w-[160px] object-contain pointer-events-none"
        loading="lazy"
        onError={handleImgError}
      />
      <span
        className="text-center text-[13px] font-semibold text-neutral-500 px-2"
        style={{ display: "none" }}
      >
        {partner.name}
      </span>
    </a>
  );
};

export const AliadosCarousel = ({ partners }: AliadosCarouselProps) => {
  const safePartners = partners ?? [];
  const mobileSlides = chunkArray(safePartners, 2);

  return (
    <>
      {/* Mobile: 2 logos por slide */}
      <div className="block sm:hidden">
        <Carousel
          data={mobileSlides}
          basisClass="basis-full"
          isAutoScroll
          renderItem={(partnersGroup) => (
            <div className="flex flex-row items-center justify-center gap-6 px-4 h-32">
              {partnersGroup.map((partner) => (
                <div key={partner.id} className="w-[140px]">
                  <PartnerCard partner={partner} />
                </div>
              ))}
            </div>
          )}
        />
      </div>

      {/* Tablet / Desktop */}
      <div className="hidden sm:block">
        <Carousel
          data={safePartners}
          basisClass="basis-1/3 md:basis-1/4 lg:basis-1/5"
          isAutoScroll
          renderItem={(partner) => (
            <div className="flex items-center justify-center h-28 px-4">
              <PartnerCard partner={partner} />
            </div>
          )}
        />
      </div>
    </>
  );
};