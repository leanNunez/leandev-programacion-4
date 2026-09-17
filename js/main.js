/* ==========================================================================
   LeanDev — JavaScript del sitio
   Funcionalidades sobre el markup de index.html. Bootstrap ya maneja el
   navbar toggler y el accordion de FAQ por su cuenta (data-bs-*); acá va
   todo lo que no cubre Bootstrap por defecto.
   ========================================================================== */

/* ---------- Formulario de diagnóstico: validar y armar el WhatsApp -------- */

const diagnosticoForm = document.querySelector('#diagnosticoForm');
const formSuccess = document.querySelector('#formSuccess');

diagnosticoForm.addEventListener('submit', (event) => {
  event.preventDefault();

  if (!diagnosticoForm.checkValidity()) {
    event.stopPropagation();
    diagnosticoForm.classList.add('was-validated');
    return;
  }

  const datos = new FormData(diagnosticoForm);
  const mensaje = [
    'Hola Lean, quiero una recomendación para mi comercio.',
    `Nombre: ${datos.get('nombre')}`,
    `Comercio: ${datos.get('comercio')}`,
    `Rubro: ${datos.get('rubro')}`,
    `Necesito mejorar: ${datos.get('problema')}`
  ].join('\n');

  formSuccess.classList.remove('d-none');
  window.open(`https://wa.me/5493814627108?text=${encodeURIComponent(mensaje)}`, '_blank', 'noopener,noreferrer');
});

/* ---------- Navbar: cerrar el menú móvil al clickear un link -------------- */

const navbarCollapseEl = document.querySelector('#navbarNav');
const navbarCollapse = bootstrap.Collapse.getOrCreateInstance(navbarCollapseEl, { toggle: false });

navbarCollapseEl.querySelectorAll('.nav-link').forEach((link) => {
  link.addEventListener('click', () => {
    if (navbarCollapseEl.classList.contains('show')) {
      navbarCollapse.hide();
    }
  });
});

/* ---------- Botón flotante: volver arriba --------------------------------- */

const botonVolverArriba = document.querySelector('#botonVolverArriba');

window.addEventListener('scroll', () => {
  botonVolverArriba.classList.toggle('btn-top--visible', window.scrollY > 600);
});

botonVolverArriba.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
