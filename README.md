# 🌿 Plant Disease Detection

An AI-powered web application that detects plant diseases from leaf images using a custom-trained **EfficientNetB3** deep learning model, trained on **Corn, Tomato, Potato, and Pepper** crops.

![Plant Disease Detection](https://raw.githubusercontent.com/Ainasebastien56/my-assets/refs/heads/main/images/plant_disease_detection.png)

## 🔗 Live Demo
👉 [plant-disease-detection-pink-zeta.vercel.app](https://plant-disease-detection-pink-zeta.vercel.app/)

---

## 📌 Features

- 📸 Upload a leaf image via drag & drop
- 🌽 Supports **Corn, Tomato, Potato, and Pepper**
- 🤖 AI diagnosis powered by **EfficientNetB3**
- 📊 Confidence score with Top 3 predictions
- 💊 Treatment recommendations for each disease
- ⚡ Fast REST API with **FastAPI** deployed on Hugging Face Spaces

---

## 🧠 Supported Diseases (19 classes)

> ⚠️ This model was trained exclusively on **Corn, Tomato, Potato, and Pepper** leaf images. Uploading leaves from other crops will produce inaccurate results.

| Crop | Diseases |
|------|----------|
| 🌽 Corn | Gray Leaf Spot, Common Rust, Northern Leaf Blight, Healthy |
| 🍅 Tomato | Bacterial Spot, Early Blight, Late Blight, Leaf Mold, Septoria Leaf Spot, Spider Mites, Target Spot, Yellow Leaf Curl Virus, Mosaic Virus, Healthy |
| 🥔 Potato | Early Blight, Late Blight, Healthy |
| 🌶️ Pepper | Bacterial Spot, Healthy |

---

## 🏗️ Architecture

```
Frontend (Angular)          Backend (FastAPI)
      │                           │
  Vercel                  Hugging Face Spaces
      │                           │
      └──────── HTTP POST ────────┘
               /predict
                    │
           EfficientNetB3 Model
```

---

## 🛠️ Tech Stack

### Frontend
- **Angular 21** — Standalone components
- **Tailwind CSS** — Styling
- **ngx-dropzone** — Image upload
- **Lucide Angular** — Icons

### Backend
- **FastAPI** — REST API
- **TensorFlow 2.13** — Model inference
- **EfficientNetB3** — Custom trained on PlantVillage dataset
- **Uvicorn** — ASGI server

### Deployment
- **Vercel** — Frontend hosting
- **Hugging Face Spaces** — Backend + Model hosting (Docker)

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- Python 3.10+
- Angular CLI : `npm install -g @angular/cli`

### 1. Clone the repository

```bash
git clone https://github.com/Ainasebastien56/plant-disease-detection.git
cd plant-disease-detection
```

### 2. Frontend setup

```bash
cd frontend
npm install
ng serve
```
The app will be available at `http://localhost:4200`

### 3. Backend setup

```bash
cd fastapi
pip install -r requirements.txt
uvicorn main:app --reload
```
The API will be available at `http://localhost:8000`

> ⚠️ Make sure your model is placed at `fastapi/models/effb3_best/` before starting the backend.

### 4. API Documentation

Once the backend is running, visit `http://localhost:8000/docs` for the interactive Swagger UI.

---

## 📁 Project Structure

```
plant-disease-detection/
├── frontend/                   # Angular app
│   ├── src/
│   │   ├── app/
│   │   │   └── diagnose/       # Main diagnosis component
│   │   ├── data/               # Disease info & treatments
│   │   └── environments/       # API URL config
│   └── package.json
│
└── fastapi/                    # FastAPI backend
    ├── main.py                 # API endpoints
    ├── models_loader.py        # Model loading logic
    ├── requirements.txt
    ├── Dockerfile
    └── models/
        └── effb3_best/         # EfficientNetB3 SavedModel
            ├── saved_model.pb
            └── variables/
```

---

## 📊 Model Performance

All models were trained on the [PlantVillage Dataset](https://www.kaggle.com/datasets/mohitsingh1804/plantvillage) on the same 19 classes (Corn, Tomato, Potato, Pepper).

| Model | Accuracy |
|-------|----------|
| EfficientNetB3 | ~99% |
| EfficientNetB0 | ~99% |
| Custom CNN | ~93% |
| VGG19 | ~94% |
| VGG16 | ~87% |

> EfficientNetB3 was selected for deployment due to its best accuracy/size ratio.

---

## 👤 Author

**Sebastien** — [GitHub](https://github.com/Ainasebastien56)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
