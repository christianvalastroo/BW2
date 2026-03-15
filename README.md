# Airbnb Clone – Frontend Project 🏡

Questo progetto è un **clone semplificato di Airbnb** sviluppato come esercitazione frontend con **HTML, CSS, Bootstrap e JavaScript**.

## 🔗 Project Link

Repository:  
https://github.com/tuonome/airbnb-clone(https://christianvalastroo.github.io/BW2/)

L'obiettivo del progetto è ricreare una piccola esperienza di navigazione ispirata ad Airbnb, lavorando su:

- layout responsive
- componenti Bootstrap
- struttura multi-pagina
- navigazione tra pagine
- gestione delle card
- ricerca base con JavaScript
- modali di errore personalizzati
- organizzazione del codice CSS

---

## 📌 Panoramica del progetto

Il progetto è composto da **3 pagine principali**:

### 1. Home page
File: `index.html`

Contiene:

- navbar responsive
- hero section con immagine principale
- search bar stile Airbnb
- elenco destinazioni
- modali per errori di ricerca
- footer

La home rappresenta la **landing page** del progetto e consente all’utente di avviare una ricerca della destinazione. Se la località inserita è valida, viene effettuato il redirect alla pagina catalogo. Se il campo è vuoto o la destinazione non esiste, viene mostrato un messaggio di errore. 

---

### 2. Catalog page
File: `indexAirbnb2.html`

Contiene:

- intestazione con titolo della località
- pulsanti filtro
- descrizione introduttiva
- griglia responsive di appartamenti
- card con immagine, rating, località e nome casa
- link alla pagina dettaglio
- footer

Questa pagina simula il **catalogo degli alloggi disponibili** nella località scelta.

---

### 3. Detail page
File: `dettaglio.html`

Contiene:

- gallery immagini della casa
- titolo e rating
- informazioni generali sull’alloggio
- dettagli host
- servizi della casa
- box prenotazione con date e ospiti
- form recensione
- sezione commenti utenti
- footer

Questa pagina rappresenta la **scheda dettaglio di un singolo alloggio**.

---

## 🛠 Tecnologie utilizzate

- **HTML5**
- **CSS3**
- **Bootstrap 5**
- **Bootstrap Icons**
- **JavaScript**

---

## 🎨 Struttura CSS

Il progetto usa più file CSS per dividere meglio le responsabilità:

### `style.css`
Gestisce principalmente la **home page**:

- navbar
- hero section
- barra di ricerca
- cards delle destinazioni
- footer
- overlay e modali
- effetti hover
- responsive design

### `header.css`
Gestisce la **navbar condivisa** nelle pagine interne.

### `cssCustom.css`
Gestisce lo stile della **pagina catalogo**:

- titolo e descrizione
- pulsanti filtro
- card appartamenti
- hover delle card
- layout responsive
- footer

### `styleDettaglio.css`
Gestisce la **pagina dettaglio**:

- gallery immagini
- layout descrittivo
- form prenotazione
- form recensione
- commenti utente

---

## ⚙️ Funzionalità JavaScript

Nel file `script.js` è presente la logica principale della ricerca.

### Funzionalità implementate:
- lettura input località
- conversione testo in minuscolo con `toLowerCase()`
- controllo della località cercata
- redirect alla pagina catalogo
- gestione modale “campo vuoto”
- gestione modale “destinazione non trovata”
- overlay scuro dietro ai modali

### Logica attuale
- se l’utente cerca **Genova**, viene aperta `indexAirbnb2.html`
- se l’input è vuoto, viene mostrato un errore
- se la destinazione non è supportata, viene mostrato un altro errore

---

## 📁 Struttura del progetto

```bash
Airbnb-Clone/
│
├── index.html
├── indexAirbnb2.html
├── dettaglio.html
├── script.js
├── style.css
├── header.css
├── cssCustom.css
├── styleDettaglio.css
├── README.md
│
└── assets/
    ├── logo.png
    ├── logo-pink.png
    ├── home.jpg
    ├── principale/
    ├── apart1.jpg
    ├── apart2.jpg
    ├── ...
    ├── 1.webp
    ├── 2.webp
    ├── ...
    └── propic.png:
