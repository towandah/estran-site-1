/* ===================================
   Footer — Trail de l'Estran
   Injecte le footer dans #footer
   =================================== */

function loadFooter() {
  const footer = document.getElementById("footer");
  if (!footer) return;

  const isIndex = document.body.dataset.page === "index";

  if (isIndex) {
    footer.innerHTML = `
      <div class="container footer-index">
        <h2>Contact</h2>

        <div class="footer-columns">
          <div class="footer-col footer-info">
            <p class="footer-intro">
              Une question sur les épreuves, l'inscription ou l'organisation ?
              N'hésite pas à nous contacter.
            </p>
            <div class="contact-line">
              <span class="icon solid fa-home"></span>
              <span>10 Place de l'église, 22710 Penvénan</span>
            </div>
            <div class="contact-line">
              <span class="icon solid fa-envelope"></span>
              <a href="mailto:estran@estran.org">estran@estran.org</a>
            </div>
            <ul class="footer-socials">
              <li><a href="https://www.facebook.com/estran22?locale=fr_FR" class="icon brands fa-facebook-f" target="_blank" rel="noopener"><span class="sr-only">Facebook</span></a></li>
              <li><a href="https://www.instagram.com/traildelestran/" class="icon brands fa-instagram" target="_blank" rel="noopener"><span class="sr-only">Instagram</span></a></li>
            </ul>
          </div>
          <div class="footer-col footer-form">
            <form id="contact-form" method="POST" action="https://formspree.io/f/TON_ID" class="contact-card">
              <input type="text" name="_gotcha" style="display:none" tabindex="-1" autocomplete="off">
              <div class="form-row">
                <input type="text" name="name" placeholder="Nom" required>
                <input type="email" name="email" placeholder="Email" required>
              </div>
              <input type="text" name="subject" placeholder="Objet">
              <textarea name="message" rows="5" placeholder="Ton message" required></textarea>
              <input type="hidden" name="_subject" value="Message depuis le site — Trail de l'Estran">
              <div class="form-actions">
                <button type="submit" class="button send-button">Envoyer</button>
              </div>
              <p id="form-status" class="form-status" aria-live="polite"></p>
            </form>
          </div>
        </div>

        <p class="copyright">&copy; Trail de l'Estran · <a href="#mentions">Mentions légales &amp; RGPD</a></p>
      </div>
    `;
  }
}

document.addEventListener("DOMContentLoaded", loadFooter);
