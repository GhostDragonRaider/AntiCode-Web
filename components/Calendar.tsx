import React, { useState } from "react";

interface CalendarProps {
  onDateSelect?: (date: Date) => void;
  selectedDate?: Date;
  availableDates?: Date[];
  disabledDates?: Date[];
}

export default function Calendar({
  onDateSelect,
  selectedDate,
  availableDates = [],
  disabledDates = []
}: CalendarProps) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [viewMonth, setViewMonth] = useState(new Date());

  // Hónap navigáció
  const navigateMonth = (direction: 'prev' | 'next') => {
    const newDate = new Date(viewMonth);
    if (direction === 'prev') {
      newDate.setMonth(newDate.getMonth() - 1);
    } else {
      newDate.setMonth(newDate.getMonth() + 1);
    }
    setViewMonth(newDate);
  };

  // Hónap első napjának meghatározása
  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1);
  };

  // Hónap utolsó napjának meghatározása
  const getLastDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0);
  };

  // Hét napjai
  const weekDays = ['H', 'K', 'Sz', 'Cs', 'P', 'Sz', 'V'];
  const monthNames = [
    'Január', 'Február', 'Március', 'Április', 'Május', 'Június',
    'Július', 'Augusztus', 'Szeptember', 'Október', 'November', 'December'
  ];

  // Naptár grid generálása
  const generateCalendarGrid = () => {
    const firstDay = getFirstDayOfMonth(viewMonth);
    const lastDay = getLastDayOfMonth(viewMonth);
    const startDate = new Date(firstDay);
    
    // Előző hónap utolsó napjai
    startDate.setDate(startDate.getDate() - firstDay.getDay());
    
    const calendarDays = [];
    const current = new Date(startDate);
    
    // 42 nap (6 hét * 7 nap)
    for (let i = 0; i < 42; i++) {
      calendarDays.push(new Date(current));
      current.setDate(current.getDate() + 1);
    }
    
    return calendarDays;
  };

  // Dátum kiválasztása
  const handleDateClick = (date: Date) => {
    if (onDateSelect && isDateAvailable(date)) {
      onDateSelect(date);
    }
  };

  // Dátum elérhetőségének ellenőrzése
  const isDateAvailable = (date: Date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    // Múltbeli dátumok nem elérhetők
    if (date < today) return false;
    
    // Kizárt dátumok
    if (disabledDates.some(d => 
      d.getFullYear() === date.getFullYear() &&
      d.getMonth() === date.getMonth() &&
      d.getDate() === date.getDate()
    )) return false;
    
    // Ha van elérhető dátumok listája, csak azokat engedjük
    if (availableDates.length > 0) {
      return availableDates.some(d => 
        d.getFullYear() === date.getFullYear() &&
        d.getMonth() === date.getMonth() &&
        d.getDate() === date.getDate()
      );
    }
    
    return true;
  };

  // Dátum státuszának meghatározása
  const getDateStatus = (date: Date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    if (date < today) return 'past';
    if (!isDateAvailable(date)) return 'disabled';
    if (selectedDate && 
        selectedDate.getFullYear() === date.getFullYear() &&
        selectedDate.getMonth() === date.getMonth() &&
        selectedDate.getDate() === date.getDate()) return 'selected';
    return 'available';
  };

  // Jelenlegi hónap napjai
  const isCurrentMonth = (date: Date) => {
    return date.getMonth() === viewMonth.getMonth() &&
           date.getFullYear() === viewMonth.getFullYear();
  };

  const calendarDays = generateCalendarGrid();

  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <button 
          className="calendar-nav-btn prev"
          onClick={() => navigateMonth('prev')}
          aria-label="Előző hónap"
        >
          ‹
        </button>
        
        <h3 className="calendar-title">
          {monthNames[viewMonth.getMonth()]} {viewMonth.getFullYear()}
        </h3>
        
        <button 
          className="calendar-nav-btn next"
          onClick={() => navigateMonth('next')}
          aria-label="Következő hónap"
        >
          ›
        </button>
      </div>

      <div className="calendar-weekdays">
        {weekDays.map((day, index) => (
          <div key={index} className="calendar-weekday">
            {day}
          </div>
        ))}
      </div>

      <div className="calendar-grid">
        {calendarDays.map((date, index) => {
          const status = getDateStatus(date);
          const isCurrentMonthDay = isCurrentMonth(date);
          
          return (
            <button
              key={index}
              className={`calendar-day ${status} ${!isCurrentMonthDay ? 'other-month' : ''}`}
              onClick={() => handleDateClick(date)}
              disabled={status === 'disabled' || status === 'past'}
              aria-label={`${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}.`}
            >
              <span className="day-number">{date.getDate()}</span>
              {status === 'selected' && (
                <div className="selected-indicator"></div>
              )}
            </button>
          );
        })}
      </div>

      <div className="calendar-legend">
        <div className="legend-item">
          <div className="legend-color available"></div>
          <span>Elérhető</span>
        </div>
        <div className="legend-item">
          <div className="legend-color selected"></div>
          <span>Kiválasztott</span>
        </div>
        <div className="legend-item">
          <div className="legend-color disabled"></div>
          <span>Nem elérhető</span>
        </div>
      </div>
    </div>
  );
}


