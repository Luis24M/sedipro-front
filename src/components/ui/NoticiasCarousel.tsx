import { Carousel } from '@/components/ui/Carousel';
import { DateNoticia } from '@/components/ui/DateNoticia';

interface NoticiasCarouselProps {
  noticias: Noticia[];
}

export const NoticiasCarousel = ({ noticias }: NoticiasCarouselProps) => {
  return (
    <div className="block">
      <Carousel
        data={noticias}
        basisClass="basis-1/1 md:basis-1/3"
        isAutoScroll
        renderItem={(noticia) => (
          <div className="flex h-full p-4">
            <a
              href={`/noticias/${noticia.id}`}
              className="flex flex-col w-full h-full hover:opacity-100 transition-opacity duration-300"
            >
              <img
                src={noticia.imageUrl}
                alt={noticia.title}
                className="object-cover pointer-events-none h-80 rounded-t-xl"
              />
              <div className="px-4 py-8 bg-white rounded-b-xl flex flex-col flex-1">
                <h2 className="text-lg font-bold line-clamp-2 h-14">
                  {noticia.title}
                </h2>
                <DateNoticia date={noticia.publishedAt} />
                <p className="text-sm line-clamp-3 h-16 my-4 text-neutral-900">
                  {noticia.description}
                </p>
                {/* boton de leer mas */}
                <button className="bg-primary-500 text-white font-medium text-sm py-2 px-4 rounded-lg cursor-pointer">
                  <span className="font-black">↗</span> Leer más
                </button>

                {/* tags */}
                <div className="flex items-center gap-2 mt-4 flex-wrap">
                  {noticia.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-white text-neutral-700 px-2 py-1 rounded-full shadow-xl drop-shadow-xl shadow-accent-50/30 "
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          </div>
        )}
      />
    </div>
  );
};
