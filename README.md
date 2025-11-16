[![codecov](https://codecov.io/gh/anttipt/testaus-demo/branch/main/graph/badge.svg)](https://codecov.io/gh/anttipt/testaus-demo)

Tämä projekti demonstroi React-sovelluksen testauksen ja CI/CD-automatisoinnin GitHub Actionsin avulla.

## 🔧 Ominaisuudet

- ✅ **Unit- ja integraatiotestit** `npm test`-komennolla
- 📦 **Kattavuusraportti** generoidaan `--coverage`-lipulla
- 🚀 **GitHub Actions -workflow** käynnistyy automaattisesti pushin ja pull requestin yhteydessä
- 📊 **Codecov-integraatio** lähettää kattavuusraportin ja näyttää badge-prosentin
- 🛡️ **CODECOV_TOKEN** lisätty GitHubin Secretsiin turvallista lähetystä varten
- 🖼️ **README-badgetit** näyttävät testien tilan ja kattavuusprosentin
- 📁 **Selkeä projektirakenne**: kaikki tiedostot ovat projektin juuressa, ei turhia alikansioita

## 📂 Rakenne
```
testaus-demo/ 
├── package.json 
├── src/ 
├── coverage/ 
└── .github/ 
└── workflows/ 
└── test.yml
```


## 🚀 Workflow

```yaml
- name: Aja testit ja tuota kattavuusraportti
  run: npm test -- --coverage

- name: Lähetä kattavuusraportti Codecoviin
  uses: codecov/codecov-action@v4
  with:
    token: ${{ secrets.CODECOV_TOKEN }}
    files: coverage/lcov.info
```	

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

## 📊 Testikattavuusprosentti

54% (prosenttiluku badgessa) = kuinka suuri osa koodiriveistä on testattu automaattisesti 
unit-, integraatio- tai end-to-end-testeillä.

🔍 Miten se lasketaan?
Codecov analysoi coverage/lcov.info-tiedoston, joka syntyy kun ajat:
```
npm test -- --coverage
```
→ Se laskee:
- Kuinka monta riviä koodista on olemassa
- Kuinka monta niistä on käyty läpi testien aikana
Esimerkiksi:
- 1000 riviä koodia
- 540 riviä käyty testien aikana
- → 54% kattavuus







