import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function AppointmentConfirmation() {
  const router = useRouter();
  const { doctor, date, time, specialty } = router.query;

  // Ha nincs adat, visszairányítjuk a főoldalra
  if (!doctor || !date || !time) {
    React.useEffect(() => {
      router.push("/");
    }, [router]);
    return null;
  }

  const appointmentData = {
    doctor: doctor as string,
    date: date as string,
    time: time as string,
    specialty: (specialty as string) || "Általános orvosi",
    location: "Budapest, Váci út 1-3.",
    phone: "+36 1 234 5678",
    email: "info@medicalcenter.hu",
    confirmationNumber: `MC${Date.now().toString().slice(-6)}`,
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #0a0a19 0%, #1a1a2e 25%, #16213e 50%, #0f172a 75%, #0a0a19 100%)",
        color: "#ffffff",
        fontFamily: "'Roboto', sans-serif",
        padding: "2rem",
      }}
    >
      <div
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          background: "rgba(26, 26, 46, 0.8)",
          backdropFilter: "blur(20px)",
          borderRadius: "24px",
          border: "1px solid rgba(168, 85, 247, 0.3)",
          boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
          padding: "3rem",
          textAlign: "center",
        }}
      >
        {/* Siker ikon */}
        <div
          style={{
            fontSize: "4rem",
            marginBottom: "1.5rem",
            animation: "bounce 2s ease-in-out infinite",
          }}
        >
          ✅
        </div>

        {/* Főcím */}
        <h1
          style={{
            fontSize: "2.5rem",
            fontWeight: "700",
            marginBottom: "1rem",
            background: "linear-gradient(45deg, #a855f7, #4ad8eb, #a855f7)",
            backgroundSize: "200% 200%",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            animation: "gradientShift 3s ease-in-out infinite",
          }}
        >
          Időpont Foglalva!
        </h1>

        {/* Alcím */}
        <p
          style={{
            fontSize: "1.2rem",
            color: "rgba(255, 255, 255, 0.8)",
            marginBottom: "2rem",
          }}
        >
          Az időpontfoglalás sikeresen megtörtént
        </p>

        {/* Visszaigazolási szám */}
        <div
          style={{
            background: "rgba(168, 85, 247, 0.1)",
            border: "1px solid rgba(168, 85, 247, 0.3)",
            borderRadius: "12px",
            padding: "1rem",
            marginBottom: "2rem",
          }}
        >
          <p
            style={{
              color: "#a855f7",
              fontSize: "0.9rem",
              marginBottom: "0.5rem",
            }}
          >
            Visszaigazolási szám:
          </p>
          <strong
            style={{
              color: "#4ad8eb",
              fontSize: "1.5rem",
              fontFamily: "monospace",
            }}
          >
            {appointmentData.confirmationNumber}
          </strong>
        </div>

        {/* Időpont részletek */}
        <div
          style={{
            background: "rgba(0, 0, 0, 0.2)",
            borderRadius: "16px",
            padding: "2rem",
            marginBottom: "2rem",
            border: "1px solid rgba(168, 85, 247, 0.2)",
          }}
        >
          <h2
            style={{
              color: "#4ad8eb",
              fontSize: "1.5rem",
              marginBottom: "1.5rem",
              textAlign: "center",
            }}
          >
            Időpont Részletei
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "1rem",
              textAlign: "left",
            }}
          >
            <div
              style={{
                background: "rgba(168, 85, 247, 0.1)",
                padding: "1rem",
                borderRadius: "8px",
                border: "1px solid rgba(168, 85, 247, 0.2)",
              }}
            >
              <strong style={{ color: "#a855f7" }}>Orvos:</strong>
              <p style={{ margin: "0.5rem 0 0 0", color: "#ffffff" }}>
                {appointmentData.doctor}
              </p>
            </div>

            <div
              style={{
                background: "rgba(74, 216, 235, 0.1)",
                padding: "1rem",
                borderRadius: "8px",
                border: "1px solid rgba(74, 216, 235, 0.2)",
              }}
            >
              <strong style={{ color: "#4ad8eb" }}>Szakterület:</strong>
              <p style={{ margin: "0.5rem 0 0 0", color: "#ffffff" }}>
                {appointmentData.specialty}
              </p>
            </div>

            <div
              style={{
                background: "rgba(168, 85, 247, 0.1)",
                padding: "1rem",
                borderRadius: "8px",
                border: "1px solid rgba(168, 85, 247, 0.2)",
              }}
            >
              <strong style={{ color: "#a855f7" }}>Dátum:</strong>
              <p style={{ margin: "0.5rem 0 0 0", color: "#ffffff" }}>
                {appointmentData.date}
              </p>
            </div>

            <div
              style={{
                background: "rgba(74, 216, 235, 0.1)",
                padding: "1rem",
                borderRadius: "8px",
                border: "1px solid rgba(74, 216, 235, 0.2)",
              }}
            >
              <strong style={{ color: "#4ad8eb" }}>Időpont:</strong>
              <p style={{ margin: "0.5rem 0 0 0", color: "#ffffff" }}>
                {appointmentData.time}
              </p>
            </div>

            <div
              style={{
                background: "rgba(168, 85, 247, 0.1)",
                padding: "1rem",
                borderRadius: "8px",
                border: "1px solid rgba(168, 85, 247, 0.2)",
              }}
            >
              <strong style={{ color: "#a855f7" }}>Helyszín:</strong>
              <p style={{ margin: "0.5rem 0 0 0", color: "#ffffff" }}>
                {appointmentData.location}
              </p>
            </div>

            <div
              style={{
                background: "rgba(74, 216, 235, 0.1)",
                padding: "1rem",
                borderRadius: "8px",
                border: "1px solid rgba(74, 216, 235, 0.2)",
              }}
            >
              <strong style={{ color: "#4ad8eb" }}>Telefon:</strong>
              <p style={{ margin: "0.5rem 0 0 0", color: "#ffffff" }}>
                {appointmentData.phone}
              </p>
            </div>
          </div>
        </div>

        {/* Fontos információk */}
        <div
          style={{
            background: "rgba(74, 216, 235, 0.1)",
            border: "1px solid rgba(74, 216, 235, 0.3)",
            borderRadius: "12px",
            padding: "1.5rem",
            marginBottom: "2rem",
            textAlign: "left",
          }}
        >
          <h3
            style={{
              color: "#4ad8eb",
              fontSize: "1.2rem",
              marginBottom: "1rem",
              textAlign: "center",
            }}
          >
            Fontos Információk
          </h3>
          <ul
            style={{
              color: "rgba(255, 255, 255, 0.8)",
              lineHeight: "1.6",
              paddingLeft: "1.5rem",
            }}
          >
            <li>
              Kérjük, érkezzen 15 perccel korábban a rendelkezésre bocsátott
              időpontra
            </li>
            <li>Hozzon magával személyi igazolványt és TB-kártyát</li>
            <li>
              Ha le kell mondania az időpontot, kérjük, tegye meg legalább 24
              órával korábban
            </li>
            <li>
              Az időpont módosítása telefonon lehetséges:{" "}
              {appointmentData.phone}
            </li>
          </ul>
        </div>

        {/* Műveletek */}
        <div
          style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <Link href="/">
            <button
              style={{
                background: "linear-gradient(45deg, #a855f7, #4ad8eb)",
                color: "#ffffff",
                border: "none",
                borderRadius: "8px",
                padding: "1rem 2rem",
                fontSize: "1rem",
                fontWeight: "600",
                cursor: "pointer",
                transition: "all 0.3s ease",
                boxShadow: "0 4px 16px rgba(168, 85, 247, 0.3)",
              }}
            >
              Vissza a Főoldalra
            </button>
          </Link>

          <button
            style={{
              background: "rgba(74, 216, 235, 0.2)",
              color: "#4ad8eb",
              border: "1px solid rgba(74, 216, 235, 0.3)",
              borderRadius: "8px",
              padding: "1rem 2rem",
              fontSize: "1rem",
              fontWeight: "600",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
          >
            Új Időpont Foglalása
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes bounce {
          0%,
          20%,
          50%,
          80%,
          100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-10px);
          }
          60% {
            transform: translateY(-5px);
          }
        }

        @keyframes gradientShift {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
      `}</style>
    </div>
  );
}
