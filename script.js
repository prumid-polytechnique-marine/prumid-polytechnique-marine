const btn=document.querySelector('.menu-btn');const nav=document.querySelector('.nav');btn?.addEventListener('click',()=>{const open=nav.classList.toggle('open');btn.setAttribute('aria-expanded',open?'true':'false')});document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));document.getElementById('year').textContent=new Date().getFullYear();

const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

if (contactForm) {
  contactForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    formStatus.textContent = "Envoi de votre demande en cours...";
    formStatus.className = "form-status sending";

    try {
      const response = await fetch(contactForm.action, {
        method: "POST",
        body: new FormData(contactForm),
        headers: { "Accept": "application/json" }
      });

      if (response.ok) {
        formStatus.textContent = "Merci. Votre demande a bien été transmise à PRUMID POLYTECHNIQUE MARINE SARL. Notre équipe vous répondra dans les meilleurs délais.";
        formStatus.className = "form-status success";
        contactForm.reset();
      } else {
        formStatus.textContent = "Votre demande n’a pas pu être envoyée. Merci de réessayer ou de nous contacter directement par WhatsApp.";
        formStatus.className = "form-status error";
      }
    } catch (error) {
      formStatus.textContent = "Une erreur de connexion est survenue. Merci de réessayer ou de nous contacter directement par WhatsApp.";
      formStatus.className = "form-status error";
    }
  });
}
