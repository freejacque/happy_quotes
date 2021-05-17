test('Check that changeText changes the text displayed on the page', () => {
  document.body.innerHTML = `
    <div class="container">
      <h1><span>H</span>appy <span>Q</span>uotes</h1>
      <div class="main-text">
        <p id="quote">Click the button for a quote.</p>
        <p id="author"></p>
        <button id="textButton">Click</button>
      </div>
    </div>
  `;
  require('./public/change-text.js');

  const quote = document.getElementById('quote');
  const author = document.getElementById('author');
  const btn = document.getElementById('textButton');

  expect(quote.textContent).toBe('Click the button for a quote.');

  btn.click();

  expect(quote.textContent).not.toBe('Click the button for a quote.');

});