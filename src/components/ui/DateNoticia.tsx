export const DateNoticia = ({ date }: { date: string }) => {
  if (!date) return null;
  return (
    <div className="flex items-center gap-2 justify-start my-4">
      <img
        src="/icons/calendar.svg"
        alt="Fecha de publicación"
        className="w-4 h-4"
      />
      <span className="text-neutral-900 text-sm ">
        {' '}
        {date.split('T')[0].replace(/-/g, '/')}{' '}
      </span>
    </div>
  );
};
