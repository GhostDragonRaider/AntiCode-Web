from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def root():
    return {"message": "API Működik!"}


@app.get("/api/specialty")
def get_specialty():
    return [
        {"id": 1, "name": "Medical Department"},
        {"id": 2, "name": "Private Tutoring"},
        {"id": 3, "name": "Driving Lessons"},
    ]




@app.get("/api/doctors")
def get_doctors():
    return [
  { "id": 1, "name": "Dr. Emily Carter", "specialty": "Dentistry" },
  { "id": 2, "name": "Dr. James Lee", "specialty": "Dentistry" },

  { "id": 3, "name": "Dr. Sarah Mitchell", "specialty": "General Practice" },
  { "id": 4, "name": "Dr. David Thompson", "specialty": "General Practice" },

  { "id": 5, "name": "Dr. Olivia Wright", "specialty": "Surgery" },
  { "id": 6, "name": "Dr. Thomas Harris", "specialty": "Surgery" },

  { "id": 7, "name": "Dr. Laura Bennett", "specialty": "Ultrasound" },
  { "id": 8, "name": "Dr. Robert Collins", "specialty": "Ultrasound" },

  { "id": 9, "name": "Dr. Emma Scott", "specialty": "Pediatrics" },
  { "id": 10, "name": "Dr. Daniel Evans", "specialty": "Pediatrics" },

  { "id": 11, "name": "Dr. Isabella Foster", "specialty": "Cardiology" },
  { "id": 12, "name": "Dr. Michael Reed", "specialty": "Cardiology" },

  { "id": 13, "name": "Dr. Chloe Morgan", "specialty": "Dermatology" },
  { "id": 14, "name": "Dr. Anthony Hughes", "specialty": "Dermatology" },

  { "id": 15, "name": "Dr. Natalie Cooper", "specialty": "Orthopedics" },
  { "id": 16, "name": "Dr. Benjamin Price", "specialty": "Orthopedics" },

  { "id": 17, "name": "Dr. Grace Adams", "specialty": "Neurology" },
  { "id": 18, "name": "Dr. William Turner", "specialty": "Neurology" },

  { "id": 19, "name": "Dr. Hannah Brooks", "specialty": "Endocrinology" },
  { "id": 20, "name": "Dr. Christopher Green", "specialty": "Endocrinology" }
]
