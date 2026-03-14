import React, { useState } from "react";
import { Carousel } from "@/components/ui/Carousel";
import type { Reconocimiento } from "@/Interfaces/reconocimiento.interface";

interface ReconocimientosCarouselProps {
  reconocimientos: Reconocimiento[];
}

const ReconocimientoCard = ({ item }: { item: Reconocimiento }) => {
  const [expanded, setExpanded] = useState(false);

  const handleImgError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const img = e.currentTarget;
    img.style.display = "none";
    const fallback = img.nextElementSibling as HTMLElement | null;
    if (fallback) {
      fallback.style.display = "flex";
    }
  };

  return (
    <article
      className="bg-neutral-100 rounded-2xl overflow-hidden flex flex-row transition-all duration-500 w-full"
      style={{
        boxShadow: "0px 2px 8px 0px rgba(127, 89, 248, 0.08)",
        minHeight: "220px",
      }}
    >
      {/* Imagen izquierda — se estira con la card */}
      <div className="w-[38%] flex-shrink-0 relative overflow-hidden bg-primary-100 self-stretch">
        <img
          src={item.imagen}
          alt={item.titulo}
          className="w-full h-full object-cover"
          loading="lazy"
          onError={handleImgError}
        />
        <span
          className="absolute inset-0 items-center justify-center text-5xl"
          style={{ display: "none" }}
        >
          🏆
        </span>
      </div>

      {/* Contenido derecho */}
      <div className="flex flex-col justify-start p-5 flex-1 min-w-0">
        <h3 className="font-bold text-[15px] leading-snug text-neutral-1000 mb-1 line-clamp-3">
          {item.titulo}
        </h3>

        <p className="text-[12px] text-neutral-600 mb-3">{item.fecha}</p>

        {/* Descripción truncada o completa */}
        <p
          className={`text-[13px] text-neutral-800 leading-relaxed transition-all duration-300 ${
            expanded ? "" : "line-clamp-4"
          }`}
        >
          {item.descripcion}
        </p>

        {/* Botón Ver más / Ver menos */}
        <button
          onClick={() => setExpanded((prev) => !prev)}
          className="mt-3 self-start text-[13px] font-semibold text-primary-500 hover:text-primary-700 transition-colors duration-200 underline underline-offset-2 cursor-pointer"
        >
          {expanded ? "Ver menos" : "Ver más"}
        </button>
      </div>
    </article>
  );
};

export const ReconocimientosCarousel = ({
  reconocimientos,
}: ReconocimientosCarouselProps) => {
  const safeItems = reconocimientos ?? [];

  return (
    <div className="max-w-[1096px] mx-auto pt-8 px-8 pb-24">
      {/* Desktop / Tablet */}
      <div className="hidden md:block">
        <Carousel
          data={safeItems}
          basisClass="basis-[580px]"
          loop={true}
          isAutoScroll={false}
          renderItem={(item) => (
            <div className="w-[540px] mr-6">
              <ReconocimientoCard item={item} />
            </div>
          )}
        />
      </div>

      {/* Mobile: lista vertical */}
      <div className="flex flex-col gap-6 md:hidden">
        {safeItems.map((item, index) => (
          <ReconocimientoCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
};