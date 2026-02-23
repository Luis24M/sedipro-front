import { useState, useMemo } from "react";

interface CalendarioProps {
  eventos: Evento[];
}

const DIAS_SEMANA = ["Lu", "Ma", "Mi", "Ju", "Vi", "Sa", "Do"];

const MESES = [
  "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
  "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre",
];

const TYPE_COLORS: Record<string, string> = {
  convocatoria: "var(--color-primary-400)",
  taller: "var(--color-accent-300)",
  webinar: "var(--color-light-blue-50)",
};

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfMonth(year: number, month: number) {
  const day = new Date(year, month, 1).getDay();
  return day === 0 ? 6 : day - 1;
}

export default function Calendario({ eventos }: CalendarioProps) {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [activeDay, setActiveDay] = useState<number | null>(null);

  const eventosDelMes = useMemo(() => {
    const map = new Map<number, Evento[]>();
    eventos.forEach((evento) => {
      const date = new Date(evento.date);
      if (date.getMonth() === currentMonth && date.getFullYear() === currentYear) {
        const day = date.getDate();
        if (!map.has(day)) map.set(day, []);
        map.get(day)!.push(evento);
      }
    });
    return map;
  }, [eventos, currentMonth, currentYear]);

  const daysInMonth = getDaysInMonth(currentYear, currentMonth);
  const firstDay = getFirstDayOfMonth(currentYear, currentMonth);

  const prevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear((y) => y - 1);
    } else {
      setCurrentMonth((m) => m - 1);
    }
    setActiveDay(null);
  };

  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear((y) => y + 1);
    } else {
      setCurrentMonth((m) => m + 1);
    }
    setActiveDay(null);
  };

  const handleDayClick = (day: number) => {
    if (eventosDelMes.has(day)) {
      setActiveDay(activeDay === day ? null : day);
    }
  };

  const isToday = (day: number) =>
    day === today.getDate() &&
    currentMonth === today.getMonth() &&
    currentYear === today.getFullYear();

  // Calculate column index (0-6) for tooltip positioning
  const getColIndex = (day: number) => {
    return (firstDay + day - 1) % 7;
  };

  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-2xl shadow-lg p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-base font-bold text-[var(--color-primary-500)]">
          {MESES[currentMonth]} {currentYear}
        </h3>
        <div className="flex gap-1">
          <button
            onClick={prevMonth}
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 text-[var(--color-primary-400)] font-bold transition-colors cursor-pointer"
            aria-label="Mes anterior"
          >
            ‹
          </button>
          <button
            onClick={nextMonth}
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 text-[var(--color-primary-400)] font-bold transition-colors cursor-pointer"
            aria-label="Mes siguiente"
          >
            ›
          </button>
        </div>
      </div>

      {/* Days of week header */}
      <div className="grid grid-cols-7 gap-1 mb-1">
        {DIAS_SEMANA.map((dia) => (
          <div
            key={dia}
            className="text-center text-xs font-semibold text-gray-400 py-1"
          >
            {dia}
          </div>
        ))}
      </div>

      {/* Calendar grid */}
      <div className="grid grid-cols-7 gap-1">
        {Array.from({ length: firstDay }).map((_, i) => (
          <div key={`empty-${i}`} className="h-12" />
        ))}

        {Array.from({ length: daysInMonth }).map((_, i) => {
          const day = i + 1;
          const dayEvents = eventosDelMes.get(day);
          const hasEvents = !!dayEvents;
          const isActive = activeDay === day;
          const col = getColIndex(day);
          // Tooltip alignment: left-align if near right edge, right-align if near left edge
          const tooltipAlign = col >= 5 ? "right-0" : col <= 1 ? "left-0" : "left-1/2 -translate-x-1/2";
          const arrowAlign = col >= 5 ? "right-4" : col <= 1 ? "left-4" : "left-1/2 -translate-x-1/2";

          return (
            <div key={day} className="relative flex flex-col items-center">
              <button
                onClick={() => handleDayClick(day)}
                className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-colors
                  ${isToday(day)
                    ? "ring-2 ring-[var(--color-accent-300)] text-[var(--color-primary-500)] font-bold"
                    : hasEvents
                      ? "text-[var(--color-primary-500)] font-bold cursor-pointer hover:bg-gray-100"
                      : "text-gray-600 hover:bg-gray-50"
                  }
                `}
              >
                {day}
              </button>

              {/* Event indicator dots */}
              {hasEvents && (
                <div className="flex gap-0.5 mt-0.5">
                  {dayEvents.map((evento, idx) => (
                    <span
                      key={idx}
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ backgroundColor: TYPE_COLORS[evento.type] || "var(--color-accent-300)" }}
                    />
                  ))}
                </div>
              )}

              {/* Tooltip */}
              {isActive && hasEvents && (
                <div
                  className={`absolute bottom-full mb-3 z-10 w-48 bg-[var(--color-accent-500)] text-white text-xs rounded-lg p-3 shadow-xl ${tooltipAlign}`}
                >
                  <div
                    className={`absolute top-full w-0 h-0 border-l-[6px] border-r-[6px] border-t-[6px] border-l-transparent border-r-transparent border-t-[var(--color-accent-500)] ${arrowAlign}`}
                  />
                  {dayEvents.map((evento, idx) => (
                    <div key={idx} className={idx > 0 ? "mt-2 pt-2 border-t border-white/20" : ""}>
                      <p className="font-semibold leading-tight">{evento.title}</p>
                      <p className="text-[10px] text-white/70 mt-1 cursor-pointer hover:text-white transition-colors">
                        Clic aquí para ver más
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Legend */}
      <div className="flex gap-4 mt-4 pt-3 border-t border-gray-100">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[var(--color-primary-400)]" />
          <span className="text-[10px] text-gray-500">Convocatoria</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[var(--color-accent-300)]" />
          <span className="text-[10px] text-gray-500">Taller</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[var(--color-light-blue-50)]" />
          <span className="text-[10px] text-gray-500">Webinar</span>
        </div>
      </div>
    </div>
  );
}
