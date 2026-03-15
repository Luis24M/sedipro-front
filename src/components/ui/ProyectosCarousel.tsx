import React, { useState } from "react";
import { Carousel } from "./Carousel";

interface ProyectosCarouselProps {
  proyectos: Proyecto[];
}

const ProyectoCard = ({ item }: { item: Proyecto }) => {
  const [expanded, setExpanded] = useState(false);

  const handleImgError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const img = e.currentTarget;
    img.style.display = "none";
    const fallback = img.nextElementSibling as HTMLElement | null;
    if (fallback) fallback.style.display = "flex";
  };

  return (
    <article className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col">
      {/* Imagen */}
      <div className="w-full h-[200px] overflow-hidden relative bg-primary-100 flex-shrink-0">
        <img
          src={item.image_url}
          alt={item.title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          loading="lazy"
          onError={handleImgError}
        />
        <span
          className="absolute inset-0 items-center justify-center text-5xl text-neutral-400"
          style={{ display: "none" }}
        >
          📁
        </span>
      </div>

      {/* Contenido */}
      <div className="p-6 flex flex-col flex-1">
        {/* Título */}
        <h3 className="font-bold mb-1 text-[18px] text-neutral-1000 leading-snug">
          {item.title}
        </h3>

        {/* Director */}
        <p className="mb-3 text-[13px] font-semibold text-primary-500">
          {item.season}
        </p>

        {/* Descripción */}
        <p
          className={`text-[14px] text-neutral-800 leading-relaxed transition-all duration-300 ${
            expanded ? "" : "line-clamp-3"
          }`}
        >
          {item.description}
        </p>

        {/* Botón Ver más / Ver menos */}
        <button
          onClick={() => setExpanded((prev) => !prev)}
          className="mt-2 self-start text-[13px] font-semibold text-primary-500 hover:text-primary-700 transition-colors duration-200 underline underline-offset-2 cursor-pointer"
        >
          {expanded ? "Ver menos" : "Ver más"}
        </button>

        {/* Tags */}
        {/* <div className="flex flex-wrap gap-2 mt-4">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] font-medium bg-primary-50 text-primary-600 px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div> */}
      </div>
    </article>
  );
};

export const ProyectosCarousel: React.FC<ProyectosCarouselProps> = ({
  proyectos,
}) => {
  const safeItems = proyectos ?? [];

  return (
    <div className="max-w-[1096px] mx-auto pt-8 px-8 pb-24">
      {/* Desktop / Tablet */}
      <div className="hidden md:block">
        <Carousel
          data={safeItems}
          basisClass="basis-[360px]"
          loop={true}
          isAutoScroll={true}
          renderItem={(item) => (
            <div className="w-[320px] mr-6">
              <ProyectoCard item={item} />
            </div>
          )}
        />
      </div>

      {/* Mobile: lista vertical */}
      <div className="flex flex-col gap-6 md:hidden">
        {safeItems.map((item, index) => (
          <ProyectoCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
};