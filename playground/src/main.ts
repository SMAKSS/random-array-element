import randomArrayElement from '@smakss/random-array-element';
import './styles.css';

const root = document.querySelector<HTMLDivElement>('#app');

if (!root) throw new Error('App root was not found.');

root.innerHTML = [
  '<div class="page">',
  '<header class="topbar"><span class="brand">@smakss/random-array-element</span><span class="tag">Local playground</span></header>',
  '<section class="intro"><p class="eyebrow">A draw without repeats</p><h1>Choose without repeats</h1><p class="subtitle">Make a list and draw one item at a time. Every item is selected once before the next cycle begins.</p></section>',
  '<main class="panel"><div class="panel-heading"><div><h2>Your draw</h2><p>Change the list, apply it, then draw until the cycle resets.</p></div></div>',
  '<div class="field"><label for="items">Items, one per line</label><textarea id="items" spellcheck="false">Plan a day trip\nTry a new recipe\nRead a short story\nVisit a museum\nTake a long walk</textarea></div>',
  '<div class="actions"><button id="draw" type="button">Pick next item</button><button class="secondary" id="apply" type="button">Apply list and reset</button></div>',
  '<div class="result-box" aria-live="polite"><span class="result-label">Selected item</span><output class="result-value" id="result">Ready when you are</output></div>',
  '<p class="status" id="cycle">0 selections in this cycle</p><h2>Recent picks</h2><ul class="list" id="history"></ul>',
  '</main><footer>Selections use the package default secure randomness.</footer></div>'
].join('');

const itemsField = root.querySelector<HTMLTextAreaElement>('#items')!;
const result = root.querySelector<HTMLOutputElement>('#result')!;
const cycle = root.querySelector<HTMLParagraphElement>('#cycle')!;
const historyList = root.querySelector<HTMLUListElement>('#history')!;
let items = readItems();
let picks = randomArrayElement(items);
let count = 0;
const history: string[] = [];

function readItems(): string[] {
  return itemsField.value
    .split(/\r?\n/)
    .map((item) => item.trim())
    .filter(Boolean);
}

function renderHistory(): void {
  historyList.replaceChildren(
    ...history.map((item) => {
      const row = document.createElement('li');
      row.textContent = item;
      return row;
    })
  );
}

root
  .querySelector<HTMLButtonElement>('#draw')!
  .addEventListener('click', () => {
    const item = picks();

    if (item === -1) {
      result.textContent = 'Add at least one item, then apply the list.';
      return;
    }

    count += 1;
    history.unshift(item);
    result.textContent = item;
    cycle.textContent =
      count % items.length === 0
        ? 'Cycle complete — the next pick starts a fresh cycle.'
        : (count % items.length) +
          ' of ' +
          items.length +
          ' unique items selected';
    renderHistory();
  });

root
  .querySelector<HTMLButtonElement>('#apply')!
  .addEventListener('click', () => {
    items = readItems();
    picks = randomArrayElement(items);
    count = 0;
    history.length = 0;
    result.textContent =
      items.length > 0 ? 'Ready when you are' : 'Add at least one item.';
    cycle.textContent = '0 selections in this cycle';
    renderHistory();
  });
