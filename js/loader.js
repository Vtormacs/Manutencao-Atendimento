const components = document.querySelectorAll('[data-component]');

const promises = [...components].map(el => {
  const name = el.getAttribute('data-component');
  return fetch(`components/${name}.html`)
    .then(res => res.text())
    .then(html => { el.innerHTML = html; });
});

Promise.all(promises).then(() => {
  document.dispatchEvent(new Event('components:loaded'));
});