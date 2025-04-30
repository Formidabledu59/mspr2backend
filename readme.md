# 🌍 MSPR Pandémie API

Une API RESTful construite avec **Express.js** et connectée à une base de données **MySQL** pour gérer des informations sur les pandémies, les pays et leurs statistiques.

---

## 🔧 Installation

1. **Cloner le projet**
```bash
git clone https://github.com/Formidabledu59/mspr2backend.git
cd mspr2backend
```

2. **Installer les dépendances**
```bash
npm install
```

3. **Configurer l'environnement**
Créer un fichier `.env` à la racine (comme le `.env.example` ):
```env
DB_HOST=
DB_PORT=
DB_USER=
DB_PASSWORD=
DB_MSPR_BDD=
```

4. **Lancer le serveur localement**
```bash
node app.js
```
Le serveur écoute par défaut sur `http://localhost:3000`

5. **Accéder à la documentation Swagger**
Une fois le serveur lancé, accède à `http://localhost:3000/swagger` pour voir la documentation interactive de l'API.

---

## 📦 Endpoints CRUD

### 📁 `/pandemie`
| Méthode | Route         | Description                         |
|---------|---------------|-------------------------------------|
| GET     | /pandemie     | Liste toutes les pandémies          |
| GET     | /pandemie/:id | Détail d'une pandémie               |
| POST    | /pandemie     | Créer une pandémie                  |
| PUT     | /pandemie/:id | Modifier une pandémie               |
| DELETE  | /pandemie/:id | Supprimer une pandémie              |

#### Exemple POST
```json
{
  "nom_pandemie": "COVID-19",
  "virus": "SARS-CoV-2",
  "date_debut": "2019-12-01",
  "date_fin": null,
  "description": "Pandémie mondiale"
}
```

### 📁 `/pays`
| Méthode | Route      | Description                 |
|---------|------------|-----------------------------|
| GET     | /pays      | Liste tous les pays         |
| GET     | /pays/:id  | Détail d'un pays            |
| POST    | /pays      | Créer un pays               |
| PUT     | /pays/:id  | Modifier un pays            |
| DELETE  | /pays/:id  | Supprimer un pays           |

#### Exemple POST
```json
{
  "nom_pays": "France",
  "code_iso": "FRA",
  "population": 67000000,
  "dimension": 551695
}
```

### 📁 `/stat_pandemie`
| Méthode | Route               | Description                           |
|---------|--------------------|---------------------------------------|
| GET     | /stat_pandemie     | Toutes les stats                      |
| GET     | /stat_pandemie/:id | Statistique par ID                    |
| POST    | /stat_pandemie     | Ajouter une statistique               |
| PUT     | /stat_pandemie/:id | Modifier une statistique              |
| DELETE  | /stat_pandemie/:id | Supprimer une statistique             |

#### Exemple POST
```json
{
  "id_pandemie": 1,
  "id_pays": 2,
  "date": "2024-01-01",
  "nouveaux_cas": 1000,
  "nouveaux_deces": 50,
  "nouveaux_gueris": 800,
  "cas_actifs": 150
}
```

---

## ⚙️ Endpoint Spécial : `/statpandemie`

### 🔍 `POST /statpandemie`
Récupère les statistiques d’une pandémie dans un pays donné, entre deux dates.

#### 🔸 Corps de la requête
```json
{
  "countryId": 1,
  "typeId": 2,
  "startDate": "2024-01-01",
  "endDate": "2024-02-01"
}
```
Tous les champs sont optionnels, mais plus tu en donnes, plus la recherche est précise.

#### ✅ Réponse
```json
[
  {
    "nouveaux_cas": 1000,
    "nouveaux_deces": 50,
    "nouveaux_gueris": 800,
    "cas_actifs": 150,
    "id_pays": 1,
    "nom_pandemie": "COVID-19",
    "id_pandemie": 2,
    "nom_pays": "France",
    "date": "2024-01-01"
  },
  ...
]
```

#### ❌ Erreur possible
```json
{
  "message": "Erreur lors de la récupération des statistiques",
  "error": {}
}
```

---

## 🧪 Documentation Swagger

Accessible à l’adresse : [http://localhost:3000/swagger](http://localhost:3000/swagger)

Toutes les routes sont automatiquement regroupées dans cette documentation grâce aux annotations dans `swagger-docs.js`.

---

## ✨ Auteur
FATHALLAH Ayoub – [GitHub](https://github.com/Formidabledu59)