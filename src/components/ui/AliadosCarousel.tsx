import { Carousel } from '@/components/ui/Carousel';

interface AliadosCarouselProps {
  partners: Partner[];
}

// función auxiliar para dividir el array de partners en grupos de 2 para la vista móvil
const chunkArray = <T,>(array: T[], size: number): T[][] => {
  const result: T[][] = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
};

export const AliadosCarousel = ({ partners }: AliadosCarouselProps) => {

  const mobileSlides = chunkArray(partners, 2);

  return (
    <>
      <div className="block sm:hidden">
        <Carousel
          data={mobileSlides}
          basisClass="basis-1/1"
          isAutoScroll
          renderItem={(partnersGroup) => (
            <div className="flex flex-col items-center justify-center gap-6 p-4 h-40">
              {partnersGroup.map((partner) => (
                <a
                  key={partner.name}
                  href={partner.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center h-16 opacity-50 hover:opacity-100 transition-opacity duration-300 cursor-pointer select-none"
                >
                  <img
                    src={partner.logoUrl}
                    alt={partner.name}
                    className="h-full object-contain pointer-events-none"
                  />
                </a>
              ))}
            </div>
          )}
        />  
      </div>

      <div className="hidden sm:block">
        <Carousel
          data={partners}
          basisClass="basis-1/2 md:basis-1/4"
          isAutoScroll
          renderItem={(partner) => (
            <a
              href={partner.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center p-4 sm:p-6 h-24 sm:h-32 opacity-50 hover:opacity-100 transition-opacity duration-300 cursor-pointer select-none"
            >
              <img
                src={partner.logoUrl}
                alt={partner.name}
                className="w-full h-full object-contain pointer-events-none"
              />
            </a>
          )}
        />
      </div>
    </>
  );
};
