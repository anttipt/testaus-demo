<<<<<<< HEAD
# 🛠️ Fullstack-blogialusta – kehitysvaiheessa

Tämä projekti on rakenteilla oleva fullstack-blogialusta, jossa yhdistyvät React-frontend ja Express-backend. Tavoitteena on rakentaa moderni, testattu ja dokumentoitu alusta, jossa on rekisteröinti, kirjautuminen, suojatut reitit ja yhteydenottolomake. Projekti sisältää myös CI/CD-automatisoinnin ja testikattavuuden seurannan.

## ✅ Toteutetut ominaisuudet

### 🔐 Autentikointi ja reitit
- Rekisteröinti- ja kirjautumislomakkeet Reactilla
- Backend-reitit testattu Postmanilla
- Suojattu reitti, joka näyttää sisältöä vain kirjautuneille käyttäjille

### 📬 Yhteydenottolomake
- Lomake toteutettu Reactilla
- Lomake yhdistetty Express-backendiin

### 🧪 Testaus
- Unit- ja integraatiotestit lomakkeelle
- Testikattavuusraportti luotu `react-scripts test --coverage`-komennolla
- CI-workflow testien ajamiseen GitHub Actionsissa

### ⚙️ CI/CD ja automaatio
- GitHub Actions -workflow testien ja kattavuusraportin ajamiseen
- Testikattavuusraportti tallennetaan artifactiksi
- Codecov-integraatio työn alla

### 📄 Dokumentointi
- README sisältää projektin kuvauksen
- Badgejen ja workflowjen lisäys käynnissä

## 🚀 Projektin käynnistys

### 1. Asenna riippuvuudet

```bash
cd react-testing-demo
npm install
```

### 2. Käynnistä React-frontend
```
npm start
```

### 3. Käynnistä Express-backend (esim. toisessa terminaalissa)
```
cd backend
npm install
npm start
```

### 4. Aja testit ja tuota kattavuusraportti
```
npm test -- --coverage
```
→ Raportti syntyy kansioon coverage/lcov-report/index.html

## 🚧 Keskeneräiset osat

- Codecov-badge ei vielä näytä kattavuusprosenttia
- CI-workflow ei vielä tallenna raporttia oikein
- Testikattavuuden laajennus useampiin komponentteihin
- Mahdollinen GitHub Pages -julkaisu kattavuusraportille


gg

dfsddgsd
=======
# testaus-demo
testaus-demo
>>>>>>> c55e8422186418427d4c060f60ab1275f7b694b9
