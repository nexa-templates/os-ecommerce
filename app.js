let filter = 'all';
const search = document.querySelector('input[type=search]');
function render() {
  let visible = 0;
  document.querySelectorAll('tr[data-status]').forEach(row => { row.hidden = filter !== 'all' && row.dataset.status !== filter || !row.textContent.toLowerCase().includes(search.value.toLowerCase()); if (!row.hidden) visible++; });
  document.querySelector('.empty').hidden = visible > 0;
}
search.addEventListener('input', render);
document.querySelectorAll('[data-filter]').forEach(button => button.addEventListener('click', () => { filter = button.dataset.filter; document.querySelectorAll('[data-filter]').forEach(tab => { tab.classList.toggle('active', tab === button); tab.setAttribute('aria-selected', String(tab === button)); }); render(); }));
let timer;
document.querySelectorAll('[data-demo]').forEach(button => button.addEventListener('click', () => { const toast = document.querySelector('.toast'); toast.textContent = 'This is a template preview. Add your products and connect your store to get started.'; toast.hidden = false; clearTimeout(timer); timer = setTimeout(() => toast.hidden = true, 3500); }));
