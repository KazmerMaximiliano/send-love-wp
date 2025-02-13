async function sendLove(love_count) {
  (main = document.querySelector('#main')),
    (textarea = main.querySelector(`div[contenteditable="true"]`));

  if (!textarea) throw new Error('No hay una conversación abierta');

  for (let i = 0; i < love_count; i++) {
    const random = Math.floor(Math.random() * 8);
    const line = ['🤍', '💜', '💙', '🩵', '💚', '💛', '🧡', '🩷'][random];

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
