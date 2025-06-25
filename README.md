# 🏠 Reas - Realitní formulář

Tento projekt je dvoukrokový formulář pro sběr leadů ohledně nemovitostí. Na frontendu využívá React + TypeScript, backend běží na Node.js (Koa) a MongoDB. Celý projekt je dockerizovaný pro snadné spuštění.

---

## 📦 O projektu

Projekt obsahuje:

- **Frontend** (React + Vite + Tailwind)
- **Backend** (Node.js + Koa + Mongoose)
- **MongoDB** databázi
- **Docker Compose** konfiguraci pro snadné spuštění všech částí najednou

## Upozornění
- Je vyžadován MongoDB (Compass)
- Bez Dockeru => ruční import dat z /backend/data_default

---

## 🚀 Jak spustit projekt

### 1. Klonování repozitáře

```bash
git clone https://github.com/LukesHomola/Reas_interview.git
cd Reas_interview
```
### 2. Docker build

- Vyžaduje
    - MongoDB Compass
    - Docker Desktop

```bash
docker-compose up --build
```

### 3. Ověření funkčnosti

- Docker by sám měl připravit základní set dat.
  (Regions, districts, EstateTypes)
- Pokud se tak nestane, častým problémem je typ "konce řádků".
    - *"Soubor init.sh má Windows konce řádků (CRLF), ale běží v Linuxovém prostředí v Dockeru, které očekává LF."*
 
### 4. Zobrazení:

- Frontend: 
  - http://localhost:3000
- Backend:
  - http://localhost:4000/regions
  - http://localhost:4000/real-estates
  - http://localhost:4000/districts?region={kraj}
    - Př. http://localhost:4000/districts?region=Jihomoravský
