import { Carousel } from '@/components/ui/Carousel';
import { DateNoticia } from '@/components/ui/DateNoticia';
import type { Noticia } from '@/Interfaces/noticia.interface';

interface NoticiasCarouselProps {
  noticias: Noticia[];
}

export const NoticiasCarousel = ({ noticias }: NoticiasCarouselProps) => {
  const safeNoticias = noticias ?? [];

  return (
    <div className="block">
      <Carousel
        data={safeNoticias}
        basisClass="basis-1/1 md:basis-1/3"
        isAutoScroll
        renderItem={(noticia) => (
          <div className="flex h-full p-4">
            <a
              href={`/noticias/${noticia.id}`}
              className="flex flex-col w-full h-full hover:opacity-100 transition-opacity duration-300"
            >
              <img
                src={noticia.image_url}
                alt={noticia.name}
                className="object-cover pointer-events-none h-80 rounded-t-xl"
                loading="lazy"
              />
              <div className="px-4 py-8 bg-white rounded-b-xl flex flex-col flex-1">
                <h2 className="text-lg font-bold line-clamp-2 h-14">
                  {noticia.name}
                </h2>
                <DateNoticia date={noticia.publishDate} />
                <p className="text-sm line-clamp-3 h-16 my-4 text-neutral-900">
                  {noticia.description}
                </p>
                <button className="bg-primary-500 text-white font-medium text-sm py-2 px-4 rounded-lg cursor-pointer">
                  <span className="font-black">↗</span> Leer más
                </button>
              </div>
            </a>
          </div>
        )}
      />
    </div>
  );
};

