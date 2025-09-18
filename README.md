# Heart Spammer for WhatsApp Web

Send a burst of colorful hearts to any open chat on **WhatsApp Web** straight from your browser console.

> ⚠️ **Use responsibly.** Spamming or automating actions may annoy people and can violate WhatsApp’s Terms of Service. Only use this with consent and for light-hearted fun.

---

## ✨ What it does

- Inserts a random heart emoji from a curated palette  
- Sends messages at a gentle pace (default ~4 msg/sec)  
- Returns the total number of messages sent

---

## 📦 Script

```js
async function sendLove(love_count) {
  (main = document.querySelector('#main')),
    (textarea = main.querySelector(`div[contenteditable="true"]`));

  if (!textarea) throw new Error('There is no open conversation');

  for (let i = 0; i < love_count; i++) {
    const hearts = ['❤️', '🤍', '💜', '💙', '🩵', '💚', '💛', '🧡', '🩷'];
    const random = Math.floor(Math.random() * hearts.length);
    const line = hearts[random];

    textarea.focus();
    document.execCommand('insertText', false, line);
    textarea.dispatchEvent(new Event('change', {bubbles: true}));

    setTimeout(() => {
      (
        main.querySelector(`[data-testid="send"]`) ||
        main.querySelector(`[data-icon="send"]`)
      ).click();
    }, 100);

    if (i !== love_count - 1)
      await new Promise(resolve => setTimeout(resolve, 250));
  }

  return love_count;
}
```

---

## 🚀 Quick start

1. Open WhatsApp Web and select the chat you want to shower with hearts.
2. Open the browser DevTools Console:
⋅⋅⋅⋅* Windows/Linux: Ctrl+Shift+J (Chrome) / Ctrl+Shift+K (Firefox)
⋅⋅⋅⋅* macOS: Cmd+Option+J (Chrome) / Cmd+Option+K (Firefox)
3. Paste the script above and press Enter.
4. Run it:

```js
sendLove(50); // sends 50 hearts
```

To stop midway: refresh the page or close the tab.
