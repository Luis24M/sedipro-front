import React from 'react';
import { Carousel } from './Carousel';

export const ProyectosCarousel: React.FC<{ proyectos: any[] }> = ({ proyectos }) => {
  return (
    <div className="max-w-[1096px] mx-auto pt-8 px-8 pb-24">
      <Carousel
        data={proyectos}
        basisClass="basis-[376px]"
        loop={true}
        isAutoScroll={true}
        renderItem={(item) => (
          <div className="w-[280px] mr-24 ">
            <article className="bg-white min-h-[407px] rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
              {/* Imagen */}
              <div className="w-full h-[180px] overflow-hidden">
                <img 
                  src={item.imagen} 
                  alt={item.titulo}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Contenido */}
              <div className="p-6">
                {/* Título */}
                <h3 className="font-bold mb-2 text-[18px] text-neutral-1000">
                  {item.titulo}
                </h3>

                {/* Director */}
                <p className="mb-3 text-[14px] font-semibold text-primary-500">
                  Director del Proyecto
                </p>

                {/* Descripción */}
                <p className="text-[14px] text-neutral-800 leading-relaxed mb-4 line-clamp-3">
                  {item.descripcion}
                </p>
              </div>
            </article>
          </div>
        )}
      />
    </div>
  );
};