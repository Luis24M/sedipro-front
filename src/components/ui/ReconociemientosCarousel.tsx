import React from 'react';
import { Carousel } from './Carousel';

const iconMap: Record<string, string> = {
  copa: "🏆",
  medalla: "🏅",
  estrella: "⭐",
};

export const ReconocimientosCarousel: React.FC<{ reconocimientos: any[] }> = ({ reconocimientos }) => {
  return (
    <div className="max-w-[1096px] mx-auto pt-8 px-8 pb-24">
      {/* Carousel en tablet y desktop */}
      <div className="hidden md:block">
        <Carousel
          data={reconocimientos}
          basisClass="basis-[376px]"
          loop={true}
          isAutoScroll={true}
          renderItem={(item) => (
            <div className="w-[280px] mr-24">
              <article
                className="bg-neutral-100 rounded-2xl p-6
                           hover:shadow-lg hover:-translate-y-1 transition-all duration-300
                           w-full h-[280px] flex flex-col items-start"
              >
                {/* Icono */}
                <div className="mb-4">
                  <span className="text-5xl">{iconMap[item.icono] ?? "🏆"}</span>
                </div>

                {/* Título */}
                <h3 className="font-bold mb-1 text-[16px] text-neutral-1000">
                  {item.titulo}
                </h3>

                {/* Fecha */}
                <p className="mb-3 text-[12px] text-neutral-600">
                  {item.fecha}
                </p>

                {/* Descripción */}
                <p className="text-[14px] text-neutral-800 leading-relaxed">
                  {item.descripcion}
                </p>
              </article>
            </div>
          )}
        />
      </div>

      {/* Grid vertical solo en mobile */}
      <div className="grid grid-cols-1 gap-6 md:hidden place-items-center">
        {reconocimientos.slice(0, 3).map((item, index) => (
          <article
            key={index}
            className="bg-neutral-100 rounded-2xl p-6
                       hover:shadow-lg hover:-translate-y-1 transition-all duration-300
                       w-full max-w-[280px] min-h-[280px] max-h-[280px] flex flex-col items-start overflow-hidden"
            style={{
              boxShadow: '0px 2px 8px 0px rgba(127, 89, 248, 0.08)',
            }}
          >
            {/* Icono */}
            <div className="mb-4">
              <span className="text-5xl">{iconMap[item.icono] ?? "🏆"}</span>
            </div>

            {/* Título */}
            <h3 className="font-bold mb-1 text-[16px] text-neutral-1000">
              {item.titulo}
            </h3>

            {/* Fecha */}
            <p className="mb-3 text-[12px] text-neutral-600">
              {item.fecha}
            </p>

            {/* Descripción */}
            <p className="text-[14px] text-neutral-800 leading-relaxed line-clamp-4">
              {item.descripcion}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
};