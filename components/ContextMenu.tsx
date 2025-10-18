import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Calendar from "./Calendar";

interface Specialty {
  id: number;
  name: string;
  description?: string;
  icon?: string;
}

interface Doctor {
  id: number;
  name: string;
  specialty: string;
  available: boolean;
  rating?: number;
  experience?: string;
  location?: string;
}

interface ContextMenuProps {
  className?: string;
  onSelectionChange?: (
    specialty: Specialty | null,
    doctor: Doctor | null
  ) => void;
}

export default function ContextMenu({
  className = "",
  onSelectionChange,
}: ContextMenuProps) {
  const router = useRouter();
  const [specialties, setSpecialties] = useState<Specialty[]>([]);
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [selectedSpecialty, setSelectedSpecialty] = useState<Specialty | null>(
    null
  );
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);
  const [loading, setLoading] = useState(true);
  const [step, setStep] = useState<"specialty" | "doctor" | "confirmation">(
    "specialty"
  );
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string | null>(null);

  // Mock data - ezt később API hívással lehet helyettesíteni
  const mockSpecialties: Specialty[] = [
    {
      id: 1,
      name: "Medical Department",
      description: "Általános orvosi szolgáltatások",
      icon: "🏥",
    },
    {
      id: 2,
      name: "Private Tutoring",
      description: "Magántanítási szolgáltatások",
      icon: "📚",
    },
    {
      id: 3,
      name: "Driving Lessons",
      description: "Vezetési oktatás",
      icon: "🚗",
    },
    {
      id: 4,
      name: "Dentistry",
      description: "Fogászati szolgáltatások",
      icon: "🦷",
    },
    { id: 5, name: "Cardiology", description: "Szívgyógyászat", icon: "❤️" },
    { id: 6, name: "Dermatology", description: "Bőrgyógyászat", icon: "🧴" },
  ];

  const mockDoctors: Doctor[] = [
    {
      id: 1,
      name: "Dr. Emily Carter",
      specialty: "Dentistry",
      available: true,
      rating: 4.8,
      experience: "10 év",
      location: "Budapest",
    },
    {
      id: 2,
      name: "Dr. James Lee",
      specialty: "Dentistry",
      available: false,
      rating: 4.6,
      experience: "8 év",
      location: "Debrecen",
    },
    {
      id: 3,
      name: "Dr. Sarah Mitchell",
      specialty: "Medical Department",
      available: true,
      rating: 4.9,
      experience: "15 év",
      location: "Szeged",
    },
    {
      id: 4,
      name: "Dr. David Thompson",
      specialty: "Medical Department",
      available: true,
      rating: 4.7,
      experience: "12 év",
      location: "Pécs",
    },
    {
      id: 5,
      name: "Dr. Olivia Wright",
      specialty: "Cardiology",
      available: true,
      rating: 4.9,
      experience: "20 év",
      location: "Budapest",
    },
    {
      id: 6,
      name: "Dr. Thomas Harris",
      specialty: "Cardiology",
      available: false,
      rating: 4.5,
      experience: "6 év",
      location: "Győr",
    },
    {
      id: 7,
      name: "Dr. Laura Bennett",
      specialty: "Dermatology",
      available: true,
      rating: 4.8,
      experience: "14 év",
      location: "Budapest",
    },
    {
      id: 8,
      name: "Dr. Robert Collins",
      specialty: "Dermatology",
      available: true,
      rating: 4.6,
      experience: "9 év",
      location: "Miskolc",
    },
  ];

  useEffect(() => {
    // Simulate API call
    const loadData = async () => {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSpecialties(mockSpecialties);
      setLoading(false);
    };
    loadData();
  }, []);

  useEffect(() => {
    if (selectedSpecialty) {
      const filteredDoctors = mockDoctors.filter(
        (doctor) => doctor.specialty === selectedSpecialty.name
      );
      setDoctors(filteredDoctors);
    }
  }, [selectedSpecialty]);

  useEffect(() => {
    if (onSelectionChange) {
      onSelectionChange(selectedSpecialty, selectedDoctor);
    }
  }, [selectedSpecialty, selectedDoctor, onSelectionChange]);

  const handleSpecialtySelect = (specialty: Specialty) => {
    setSelectedSpecialty(specialty);
    setSelectedDoctor(null);
    setStep("doctor");
  };

  const handleDoctorSelect = (doctor: Doctor) => {
    setSelectedDoctor(doctor);
    setStep("confirmation");
  };

  const handleBack = () => {
    if (step === "doctor") {
      setStep("specialty");
      setSelectedSpecialty(null);
      setDoctors([]);
    } else if (step === "confirmation") {
      setStep("doctor");
      setSelectedDoctor(null);
    }
  };

  const handleReset = () => {
    setSelectedSpecialty(null);
    setSelectedDoctor(null);
    setSelectedDate(null);
    setSelectedTimeSlot(null);
    setStep("specialty");
    setDoctors([]);
  };

  // Naptár kezelő függvények
  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
    setSelectedTimeSlot(null); // Reset time slot when date changes
  };

  // Elérhető időpontok generálása
  const generateTimeSlots = () => {
    const slots = [];
    const startHour = 8;
    const endHour = 17;
    const slotDuration = 30; // 30 perces időpontok

    for (let hour = startHour; hour < endHour; hour++) {
      for (let minutes = 0; minutes < 60; minutes += slotDuration) {
        const timeString = `${hour.toString().padStart(2, "0")}:${minutes
          .toString()
          .padStart(2, "0")}`;
        slots.push(timeString);
      }
    }
    return slots;
  };

  const timeSlots = generateTimeSlots();

  // Elérhető dátumok (példa - valós implementációban API-ból jönne)
  const getAvailableDates = () => {
    const dates = [];
    const today = new Date();
    for (let i = 0; i < 30; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      // Csak hétköznapok
      if (date.getDay() >= 1 && date.getDay() <= 5) {
        dates.push(date);
      }
    }
    return dates;
  };

  const availableDates = getAvailableDates();

  if (loading) {
    return (
      <div className={`context-menu-container ${className}`}>
        <div className="loading-state">
          <div className="loading-spinner"></div>
          <p>Adatok betöltése...</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`context-menu-container ${className}`}>
      <div className="context-menu-header">
        <h2 className="context-menu-title">
          {step === "specialty" && "Szakterület kiválasztása"}
          {step === "doctor" && "Orvos kiválasztása"}
          {step === "confirmation" && "Kiválasztás megerősítése"}
        </h2>
        <div className="progress-indicator">
          <div
            className={`progress-step ${
              step === "specialty"
                ? "active"
                : step === "doctor" || step === "confirmation"
                ? "completed"
                : ""
            }`}
          >
            <span className="step-number">1</span>
            <span className="step-label">Szakterület</span>
          </div>
          <div
            className={`progress-step ${
              step === "doctor"
                ? "active"
                : step === "confirmation"
                ? "completed"
                : ""
            }`}
          >
            <span className="step-number">2</span>
            <span className="step-label">Orvos</span>
          </div>
          <div
            className={`progress-step ${
              step === "confirmation" ? "active" : ""
            }`}
          >
            <span className="step-number">3</span>
            <span className="step-label">Megerősítés</span>
          </div>
        </div>
      </div>

      <div className="context-menu-content">
        {step === "specialty" && (
          <div className="specialty-selection">
            <div className="selection-grid">
              {specialties.map((specialty) => (
                <div
                  key={specialty.id}
                  className="specialty-card"
                  onClick={() => handleSpecialtySelect(specialty)}
                >
                  <div className="specialty-icon">{specialty.icon}</div>
                  <h3 className="specialty-name">{specialty.name}</h3>
                  {specialty.description && (
                    <p className="specialty-description">
                      {specialty.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {step === "doctor" && selectedSpecialty && (
          <div className="doctor-selection">
            <div className="selected-specialty-info">
              <h3>Kiválasztott szakterület: {selectedSpecialty.name}</h3>
              <button className="change-specialty-btn" onClick={handleBack}>
                Módosítás
              </button>
            </div>

            <div className="doctors-list">
              {doctors.length > 0 ? (
                doctors.map((doctor) => (
                  <div
                    key={doctor.id}
                    className={`doctor-card ${
                      !doctor.available ? "unavailable" : ""
                    }`}
                    onClick={() =>
                      doctor.available && handleDoctorSelect(doctor)
                    }
                  >
                    <div className="doctor-info">
                      <h4 className="doctor-name">{doctor.name}</h4>
                      <div className="doctor-details">
                        {doctor.rating && (
                          <span className="doctor-rating">
                            ⭐ {doctor.rating}
                          </span>
                        )}
                        {doctor.experience && (
                          <span className="doctor-experience">
                            📅 {doctor.experience}
                          </span>
                        )}
                        {doctor.location && (
                          <span className="doctor-location">
                            📍 {doctor.location}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="doctor-status">
                      {doctor.available ? (
                        <span className="status-available">Elérhető</span>
                      ) : (
                        <span className="status-unavailable">Nem elérhető</span>
                      )}
                    </div>
                  </div>
                ))
              ) : (
                <div className="no-doctors">
                  <p>Nincs elérhető orvos ezen a szakterületen.</p>
                </div>
              )}
            </div>
          </div>
        )}

        {step === "confirmation" && selectedSpecialty && selectedDoctor && (
          <div className="confirmation">
            <div className="confirmation-summary">
              <h3>Kiválasztás összefoglalása</h3>
              <div className="summary-item">
                <strong>Szakterület:</strong> {selectedSpecialty.name}
              </div>
              <div className="summary-item">
                <strong>Orvos:</strong> {selectedDoctor.name}
              </div>
              <div className="summary-item">
                <strong>Értékelés:</strong> ⭐ {selectedDoctor.rating}
              </div>
              <div className="summary-item">
                <strong>Tapasztalat:</strong> {selectedDoctor.experience}
              </div>
              <div className="summary-item">
                <strong>Helyszín:</strong> {selectedDoctor.location}
              </div>
            </div>

            {/* Időpontfoglaló Naptár */}
            <div className="booking-section">
              <h4
                className="booking-title"
                style={{
                  color: "#a855f7",
                  position: "relative",
                  padding: "1rem 0",
                  margin: "1rem 0",
                  textAlign: "center",
                }}
              >
                Válassz időpontot
                <div
                  style={{
                    position: "absolute",
                    bottom: "0",
                    left: "0",
                    right: "0",
                    height: "2px",
                    background:
                      "linear-gradient(90deg, transparent, #a855f7, transparent)",
                    margin: "0.5rem 0",
                  }}
                ></div>
              </h4>
              <div className="calendar-wrapper">
                <Calendar
                  onDateSelect={handleDateSelect}
                  selectedDate={selectedDate}
                  availableDates={availableDates}
                />
              </div>

              {selectedDate && (
                <div className="time-slot-selector">
                  <h5
                    className="time-selector-title"
                    style={{
                      color: "#4ad8eb",
                      position: "relative",
                      padding: "0.8rem 0",
                      margin: "0.8rem 0",
                      textAlign: "center",
                    }}
                  >
                    Válassz időpontot:
                    <div
                      style={{
                        position: "absolute",
                        bottom: "0",
                        left: "0",
                        right: "0",
                        height: "2px",
                        background:
                          "linear-gradient(90deg, transparent, #4ad8eb, transparent)",
                        margin: "0.4rem 0",
                      }}
                    ></div>
                  </h5>
                  <div className="time-slots-grid">
                    {timeSlots.map((time, index) => (
                      <button
                        key={index}
                        className={`time-slot ${
                          selectedTimeSlot === time ? "selected" : ""
                        }`}
                        onClick={() => setSelectedTimeSlot(time)}
                        style={{
                          background:
                            selectedTimeSlot === time
                              ? "linear-gradient(45deg, #a855f7, #4ad8eb)"
                              : "rgba(0, 0, 0, 0.2)",
                          color:
                            selectedTimeSlot === time ? "#ffffff" : "#4ad8eb",
                          border:
                            selectedTimeSlot === time
                              ? "1px solid #a855f7"
                              : "1px solid rgba(74, 216, 235, 0.3)",
                          borderRadius: "8px",
                          padding: "0.5rem 1rem",
                          fontSize: "0.9rem",
                          fontWeight: "600",
                          cursor: "pointer",
                          transition: "all 0.3s ease",
                          textShadow:
                            selectedTimeSlot === time
                              ? "0 0 8px rgba(255, 255, 255, 0.5)"
                              : "0 0 5px rgba(74, 216, 235, 0.3)",
                          boxShadow:
                            selectedTimeSlot === time
                              ? "0 4px 15px rgba(168, 85, 247, 0.3)"
                              : "0 2px 8px rgba(74, 216, 235, 0.2)",
                        }}
                        onMouseEnter={(e) => {
                          if (selectedTimeSlot !== time) {
                            const target = e.target as HTMLButtonElement;
                            target.style.background = "rgba(74, 216, 235, 0.1)";
                            target.style.borderColor =
                              "rgba(74, 216, 235, 0.5)";
                            target.style.transform = "translateY(-2px)";
                            target.style.boxShadow =
                              "0 4px 12px rgba(74, 216, 235, 0.3)";
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (selectedTimeSlot !== time) {
                            const target = e.target as HTMLButtonElement;
                            target.style.background = "rgba(0, 0, 0, 0.2)";
                            target.style.borderColor =
                              "rgba(74, 216, 235, 0.3)";
                            target.style.transform = "translateY(0)";
                            target.style.boxShadow =
                              "0 2px 8px rgba(74, 216, 235, 0.2)";
                          }
                        }}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                  {selectedTimeSlot && (
                    <div
                      className="booking-summary"
                      style={{
                        position: "relative",
                        marginTop: "1.5rem",
                        padding: "1rem 0",
                        textAlign: "center",
                      }}
                    >
                      <div
                        style={{
                          position: "absolute",
                          top: "0",
                          left: "0",
                          right: "0",
                          height: "2px",
                          background:
                            "linear-gradient(90deg, transparent, #a855f7, transparent)",
                          margin: "0.5rem 0",
                        }}
                      ></div>
                      <p
                        style={{
                          color: "#a855f7",
                          fontSize: "0.9rem",
                          fontWeight: "600",
                          margin: "0.5rem 0",
                          textShadow: "0 0 5px rgba(168, 85, 247, 0.3)",
                        }}
                      >
                        Kiválasztott időpont:
                      </p>
                      <strong
                        style={{
                          color: "#4ad8eb",
                          fontSize: "1.1rem",
                          fontWeight: "700",
                          textShadow: "0 0 8px rgba(74, 216, 235, 0.5)",
                        }}
                      >
                        {selectedDate.toLocaleDateString("hu-HU")}{" "}
                        {selectedTimeSlot}
                      </strong>
                    </div>
                  )}
                </div>
              )}
            </div>

            <div className="confirmation-actions">
              <button
                className="btn-primary"
                onClick={() => {
                  if (selectedDate && selectedTimeSlot && selectedDoctor) {
                    // Navigálás az új oldalra az adatokkal
                    router.push({
                      pathname: "/appointment-confirmation",
                      query: {
                        doctor: selectedDoctor.name,
                        date: selectedDate.toLocaleDateString("hu-HU"),
                        time: selectedTimeSlot,
                        specialty:
                          selectedSpecialty?.name || "Általános orvosi",
                      },
                    });
                  } else {
                    alert("Kérjük, válassz dátumot és időpontot!");
                  }
                }}
                disabled={!selectedDate || !selectedTimeSlot}
              >
                Időpont foglalása
              </button>
              <button className="btn-secondary" onClick={handleBack}>
                Vissza
              </button>
              <button className="btn-outline" onClick={handleReset}>
                Újrakezdés
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
