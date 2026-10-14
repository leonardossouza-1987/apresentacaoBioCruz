/* Alterna entre modo crianca e modo tecnico */
function trocarModo(modo) {
  document.body.classList.remove('modo-crianca', 'modo-tecnico');
  document.body.classList.add('modo-' + modo);
  document.querySelectorAll('.seletor-modo button').forEach(b => {
    b.classList.toggle('ativo', b.dataset.modo === modo);
  });
  localStorage.setItem('biocruz-roteiro-modo', modo);
}

/* Restaura a preferencia salva */
document.addEventListener('DOMContentLoaded', () => {
  const salvo = localStorage.getItem('biocruz-roteiro-modo');
  if (salvo === 'crianca') trocarModo('crianca');
});