# 🚌 People Counter

A simple and clean web app to count people entering a place (like a bus), built with **HTML, CSS and JavaScript**.

Click **Increment** each time someone enters, then click **Save** to store the current count in the history and start over from 0.

Project Preview:
<img width="958" height="444" alt="image" src="https://github.com/user-attachments/assets/f694afe9-bd7a-4329-8e28-dcfcbb6b4c52" />


## ✨ Features

- ➕ **Increment button**: adds 1 to the counter on every click
- 💾 **Save button**: saves the current count to the "Previous entries" list and resets the counter to 0
- 📋 **Previous entries**: shows the history of all saved counts
- 🖼️ **Full-page background photo** with a centered, green card on top
- 🎨 Button feedback with the `:active` state (color change, glow and slight zoom on click)

## 🛠️ Technologies

| Technology | Use |
|---|---|
| HTML5 | Page structure |
| CSS3 | Layout (Flexbox), background image, shadows, button effects |
| JavaScript | Counter logic and click events |

## 🚀 Getting Started

No installation is needed.

1. **Clone the repository**
   ```bash
   git clone https://github.com/Meryem889/Passenger-Counter.git
   ```
2. **Open the project folder**
   ```bash
   cd Passenger-Counter
   ```
3. **Open `project3.html`** in your browser (double-click the file, or use the *Live Server* extension in VS Code).

## 📁 Project Structure

```
├── project3.html      # Main page
├── style.css          # Styles (rename to match your CSS file)
├── script.js          # Counter logic (rename to match your JS file)
├── photo.jpg          # Background image
├── screenshot.png     # Preview image used in this README
└── README.md
```

## 💡 How It Works

```javascript
let saveEl=document.getElementById("save-el")
let countEl = document.getElementById("count-el")
console.log(countEl);
let count = 0;

function increment() {
    count = count + 1;
    countEl.innerText = count;
}
function save() {
    let countStr = count + " - ";
    saveEl.textContent = saveEl.textContent + countStr;
    console.log(saveEl.textContent);
    countEl.textContent = 0;
    count = 0;
}
save();
```

- `count++` increases the counter by 1 at each click.
- On save, the current value is added to the history **before** the counter is reset to 0.

## 🎨 Styling Highlights

- The background photo covers the whole page with `background-size: cover`.
- The card is centered using Flexbox (`display: flex`, `justify-content: center`, `align-items: center`) on a `100vh` container.
- Buttons use `:active` for click feedback and `box-shadow` for the glow effect.

## 🔮 Possible Improvements

- Save the history with `localStorage` so it stays after refreshing the page
- Add a **Reset** button to clear the history
- Add a decrement (`-`) button
- Make the layout fully responsive for small phone screens

## 📸 Credits

Background photo by **Wahyu Prabowo** on [Pexels](https://www.pexels.com).

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
