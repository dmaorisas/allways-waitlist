document.documentElement.classList.add("motion-ready");

const copy = {
  en: {
    navCta: "Get early access", eyebrow: "Wellbeing is opening up",
    travelerLabel: "I live wellness", travelerHint: "Member / traveler", centerLabel: "I offer wellness", centerHint: "Business / provider",
    heroCta: "Get early access", exploreLabel: "Explore the value", formKicker: "Be first in line",
    nameLabel: "Full name", namePlaceholder: "Your name",
    emailLabel: "Email", cityLabel: "City", cityPlaceholder: "Your city", countryLabel: "Country", countryPlaceholder: "Your country",
    travelLabel: "Average travel days per year", gymLabel: "Business or brand", gymPlaceholder: "Studio, clinic, brand...", roleLabel: "Your role", rolePlaceholder: "Owner, manager...",
    consent: "I agree to receive launch updates. No spam.", submit: "Join the waitlist", submitting: "Saving...", success: "You’re on the list. We’ll be in touch.", successEmail: "You’re on the list. Check your inbox for confirmation.",
    duplicate: "You’re already on this waitlist.", error: "We couldn’t save your details. Please try again.", invalid: "Please complete the required fields.",
    footer: "Wellbeing, all ways. Coming soon.", kinetic: ["TRAIN", "RECOVER", "NOURISH", "LIVE"],
    profiles: {
      traveler: {
        headline: "Wellbeing.<br /><em>All ways.</em>", heroCopy: "Connect with fitness, wellness and nutrition experiences wherever work, travel or life takes you.",
        incentive: "Early members get first access and launch benefits as the ecosystem comes to life.", valueKicker: "Built around your whole life", valueTitle: "One wellbeing life.<br />Every way to live it.",
        valueLede: "Training, recovery and nourishment should move with you—not make you start over.", statement: "“There is more than one way to feel your best.”",
        routeStart: "YOUR LIFE", routeEnd: "ALL WAYS", formTitle: "Your place<br />starts here.", formCopy: "Tell us a little about you. We’ll let you know as soon as Allways opens access in your market."
      },
      fitness_center: {
        headline: "Your expertise.<br /><em>More ways to grow.</em>", heroCopy: "Bring your gym, studio, recovery space, wellness service or nutrition brand into one connected ecosystem.",
        incentive: "Early providers get priority consideration as the Allways ecosystem takes shape.", valueKicker: "Demand meets possibility", valueTitle: "New people.<br />Real connections.",
        valueLede: "Meet relevant customers who may never have discovered your business on their own.", statement: "“Wellbeing grows when the right people find the right experience.”",
        routeStart: "DISCOVERY", routeEnd: "GROWTH", formTitle: "Put your business<br />on the map.", formCopy: "Tell us about your business or brand. We’ll contact you as provider access opens in your market."
      }
    },
    travelerBenefits: [
      ["↗", "Keep your momentum", "Stay connected to your wellbeing when travel or a changing schedule disrupts the usual routine.", "Continuity"],
      ["◎", "Choose what you need", "Explore ways to train, recover and nourish yourself according to the moment you are in.", "Choice"],
      ["✦", "Connect the whole picture", "Bring movement, recovery, wellness and nutrition into one simpler journey.", "Connection"],
      ["∞", "Make wellbeing yours", "Build a wellbeing life that adapts to your world instead of asking your world to adapt.", "Freedom"]
    ],
    centerBenefits: [
      ["↗", "Reach new customers", "Welcome relevant people who would not normally discover your business, service or brand.", "Discovery"],
      ["◎", "Turn discovery into value", "Create incremental revenue from qualified visits, bookings or purchases within the ecosystem.", "Revenue"],
      ["✦", "Join a broader journey", "Connect your expertise with complementary fitness, wellness and nutrition experiences.", "Ecosystem"],
      ["∞", "Build lasting demand", "Create a new discovery channel while staying focused on the experience you deliver best.", "Momentum"]
    ]
  },
  es: {
    navCta: "Obtén acceso anticipado", eyebrow: "El bienestar se abre a nuevas posibilidades",
    travelerLabel: "Vivo el bienestar", travelerHint: "Miembro / viajero", centerLabel: "Ofrezco bienestar", centerHint: "Negocio / proveedor",
    heroCta: "Obtén acceso anticipado", exploreLabel: "Explora el valor", formKicker: "Sé de los primeros", nameLabel: "Nombre completo", namePlaceholder: "Tu nombre",
    emailLabel: "Email", cityLabel: "Ciudad", cityPlaceholder: "Tu ciudad", countryLabel: "País", countryPlaceholder: "Tu país",
    travelLabel: "Promedio de días de viaje al año", gymLabel: "Negocio o marca", gymPlaceholder: "Estudio, clínica, marca...", roleLabel: "Tu cargo", rolePlaceholder: "Dueño, administrador...",
    consent: "Acepto recibir novedades del lanzamiento. Sin spam.", submit: "Únete a la lista", submitting: "Guardando...", success: "Ya estás en la lista. Te contactaremos pronto.", successEmail: "Ya estás en la lista. Revisa tu correo para ver la confirmación.",
    duplicate: "Ya estás registrado en esta lista.", error: "No pudimos guardar tus datos. Inténtalo de nuevo.", invalid: "Completa los campos obligatorios.",
    footer: "Bienestar, de todas las formas. Próximamente.", kinetic: ["ENTRENA", "RECUPERA", "NUTRE", "VIVE"],
    profiles: {
      traveler: {
        headline: "Bienestar.<br /><em>De todas las formas.</em>", heroCopy: "Conecta con experiencias de fitness, wellness y nutrición donde te lleven el trabajo, los viajes o la vida.",
        incentive: "Los primeros miembros obtendrán acceso anticipado y beneficios de lanzamiento mientras el ecosistema cobra vida.", valueKicker: "Diseñado para toda tu vida", valueTitle: "Una vida de bienestar.<br />Todas las formas de vivirla.",
        valueLede: "Entrenar, recuperar y nutrirte debería acompañarte, no obligarte a empezar de cero.", statement: "“Hay más de una forma de sentirte en tu mejor versión.”",
        routeStart: "TU VIDA", routeEnd: "TODAS LAS FORMAS", formTitle: "Tu lugar<br />empieza aquí.", formCopy: "Cuéntanos un poco sobre ti. Te avisaremos tan pronto Allways abra el acceso en tu mercado."
      },
      fitness_center: {
        headline: "Tu experiencia.<br /><em>Más formas de crecer.</em>", heroCopy: "Integra tu gimnasio, estudio, espacio de recuperación, servicio wellness o marca de nutrición en un ecosistema conectado.",
        incentive: "Los primeros proveedores tendrán consideración prioritaria mientras construimos el ecosistema Allways.", valueKicker: "La demanda encuentra posibilidades", valueTitle: "Nuevas personas.<br />Conexiones reales.",
        valueLede: "Conecta con clientes relevantes que quizá nunca habrían descubierto tu negocio por su cuenta.", statement: "“El bienestar crece cuando las personas correctas encuentran la experiencia correcta.”",
        routeStart: "DESCUBRIMIENTO", routeEnd: "CRECIMIENTO", formTitle: "Pon tu negocio<br />en el mapa.", formCopy: "Cuéntanos sobre tu negocio o marca. Te contactaremos cuando abramos el acceso para proveedores en tu mercado."
      }
    },
    travelerBenefits: [
      ["↗", "Mantén el impulso", "Sigue conectado con tu bienestar cuando un viaje o cambio de agenda interrumpe la rutina habitual.", "Continuidad"],
      ["◎", "Elige lo que necesitas", "Explora formas de entrenar, recuperar y nutrirte según el momento en el que estás.", "Elección"],
      ["✦", "Conecta todo el panorama", "Integra movimiento, recuperación, wellness y nutrición en un recorrido más simple.", "Conexión"],
      ["∞", "Haz tuyo el bienestar", "Construye una vida de bienestar que se adapta a tu mundo, sin pedirle a tu mundo que se adapte.", "Libertad"]
    ],
    centerBenefits: [
      ["↗", "Llega a nuevos clientes", "Recibe personas relevantes que normalmente no descubrirían tu negocio, servicio o marca.", "Descubrimiento"],
      ["◎", "Convierte descubrimiento en valor", "Genera ingresos incrementales mediante visitas, reservas o compras calificadas dentro del ecosistema.", "Ingresos"],
      ["✦", "Únete a un recorrido más amplio", "Conecta tu especialidad con experiencias complementarias de fitness, wellness y nutrición.", "Ecosistema"],
      ["∞", "Construye demanda duradera", "Crea un nuevo canal de descubrimiento mientras mantienes el foco en la experiencia que mejor sabes entregar.", "Impulso"]
    ]
  }
};

let language = "en";
let audience = "traveler";

const form = document.querySelector("#waitlistForm");
const status = document.querySelector("#formStatus");
const submitButton = form.querySelector("button[type='submit']");
let benefitNavLockUntil = 0;
let benefitCleanup = () => {};

function setActiveBenefit(index) {
  const cards = [...document.querySelectorAll(".benefit")];
  const buttons = [...document.querySelectorAll(".benefit-nav button")];
  cards.forEach((card, cardIndex) => card.classList.toggle("is-active", cardIndex === index));
  buttons.forEach((button, buttonIndex) => button.classList.toggle("is-active", buttonIndex === index));
  const meter = document.querySelector("#benefitMeter");
  const counter = document.querySelector("#benefitCounter");
  if (meter) meter.style.transform = `scaleX(${(index + 1) / Math.max(cards.length, 1)})`;
  if (counter) counter.textContent = `${String(index + 1).padStart(2, "0")} / ${String(cards.length).padStart(2, "0")}`;
}

function setupBenefitInteraction() {
  benefitCleanup();
  const cards = [...document.querySelectorAll(".benefit")];
  const scroller = document.querySelector("#benefitGrid");
  const track = document.querySelector("#benefitTrack");
  const experience = document.querySelector(".benefit-experience");
  const controller = new AbortController();
  const { signal } = controller;
  let animationFrame = 0;
  let resizeFrame = 0;

  const clamp = (value, minimum = 0, maximum = 1) => Math.min(Math.max(value, minimum), maximum);

  const renderProgress = (progress) => {
    const position = progress * Math.max(cards.length - 1, 0);
    const activeIndex = Math.round(position);
    const maxTranslate = Math.max(track.scrollWidth - scroller.clientWidth, 0);
    track.style.transform = `translate3d(${-progress * maxTranslate}px, 0, 0)`;
    experience.style.setProperty("--benefit-progress", String(progress));

    cards.forEach((card, index) => {
      const delta = index - position;
      const distance = Math.abs(delta);
      card.style.setProperty("--card-opacity", String(clamp(1 - distance * .48, .46, 1)));
      card.style.setProperty("--card-scale", String(1 - Math.min(distance * .035, .07)));
      card.style.setProperty("--card-tilt", `${clamp(delta, -1, 1) * 1.1}deg`);
      card.classList.toggle("is-past", index < activeIndex);
      card.classList.toggle("is-next", index > activeIndex);
      card.setAttribute("aria-hidden", String(distance > 1.15));
    });

    setActiveBenefit(activeIndex);
  };

  const syncActiveBenefit = () => {
    animationFrame = 0;
    if (Date.now() < benefitNavLockUntil) return;
    const topOffset = matchMedia("(max-width: 760px)").matches ? 168 : 112;
    const experienceTop = scrollY + experience.getBoundingClientRect().top;
    const stageHeight = scroller.getBoundingClientRect().height;
    const scrollRange = Math.max(experience.offsetHeight - stageHeight, 1);
    const progress = clamp((scrollY - experienceTop + topOffset) / scrollRange);
    renderProgress(progress);
  };
  const queueSync = () => {
    if (!animationFrame) animationFrame = requestAnimationFrame(syncActiveBenefit);
  };
  const scrollTarget = window;
  scrollTarget.addEventListener("scroll", queueSync, { passive: true, signal });
  window.addEventListener("resize", () => {
    if (resizeFrame) cancelAnimationFrame(resizeFrame);
    resizeFrame = requestAnimationFrame(queueSync);
  }, { passive: true, signal });
  benefitCleanup = () => {
    controller.abort();
    if (animationFrame) cancelAnimationFrame(animationFrame);
    if (resizeFrame) cancelAnimationFrame(resizeFrame);
  };

  document.querySelectorAll(".benefit-nav button").forEach((button, index) => {
    button.addEventListener("click", () => {
      benefitNavLockUntil = Date.now() + 1100;
      setActiveBenefit(index);
      const topOffset = matchMedia("(max-width: 760px)").matches ? 168 : 112;
      const experienceTop = scrollY + experience.getBoundingClientRect().top;
      const stageHeight = scroller.getBoundingClientRect().height;
      const scrollRange = Math.max(experience.offsetHeight - stageHeight, 1);
      const ratio = cards.length > 1 ? index / (cards.length - 1) : 0;
      renderProgress(ratio);
      window.scrollTo({ top: experienceTop - topOffset + scrollRange * ratio, behavior: "smooth" });
      requestAnimationFrame(() => setActiveBenefit(index));
      window.setTimeout(syncActiveBenefit, 1150);
    }, { signal });
  });

  if (matchMedia("(pointer: fine) and (prefers-reduced-motion: no-preference)").matches) {
    cards.forEach((card) => {
      card.addEventListener("pointermove", (event) => {
        const rect = card.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        card.style.setProperty("--mx", `${x}px`);
        card.style.setProperty("--my", `${y}px`);
        card.style.setProperty("--rx", `${((y / rect.height) - .5) * -3}deg`);
        card.style.setProperty("--ry", `${((x / rect.width) - .5) * 3}deg`);
      }, { signal });
      card.addEventListener("pointerleave", () => {
        card.style.setProperty("--rx", "0deg");
        card.style.setProperty("--ry", "0deg");
      }, { signal });
    });
  }
  syncActiveBenefit();
}

function renderBenefits() {
  const benefits = copy[language][audience === "traveler" ? "travelerBenefits" : "centerBenefits"];
  document.querySelector(".benefit-experience").style.setProperty("--benefit-count", String(benefits.length));
  document.querySelector("#benefitGrid").innerHTML = `<div class="benefit-track" id="benefitTrack">${benefits.map(([icon, title, body, tag], index) => `
      <article class="benefit" data-index="${index}" data-number="${String(index + 1).padStart(2, "0")}" style="--i:${index}">
        <div class="benefit-topline"><span class="benefit-index">0${index + 1} / 0${benefits.length}</span><span class="benefit-tag">${tag}</span></div>
        <div class="benefit-icon" aria-hidden="true">${icon}</div><h3>${title}</h3><p>${body}</p>
      </article>
    `).join("")}</div>`;
  document.querySelector("#benefitNav").innerHTML = benefits.map(([, title], index) => `
    <button type="button" aria-label="${title}"><span>0${index + 1}</span><strong>${title}</strong></button>
  `).join("");
  setupBenefitInteraction();
}

function renderProfileCopy() {
  const profile = copy[language].profiles[audience];
  document.querySelectorAll("[data-profile-copy]").forEach((element) => {
    element.innerHTML = profile[element.dataset.profileCopy];
  });
  const words = copy[language].kinetic;
  const sequence = [...words, ...words, ...words, ...words].map((word) => `<span>${word}</span>`).join("");
  document.querySelector("#kineticTrack").innerHTML = sequence;
}

function renderCopy() {
  document.documentElement.lang = language;
  document.querySelectorAll("[data-copy]").forEach((element) => {
    element.innerHTML = copy[language][element.dataset.copy];
  });
  document.querySelectorAll("[data-placeholder]").forEach((element) => {
    element.placeholder = copy[language][element.dataset.placeholder];
  });
  document.querySelector("#languageToggle").textContent = language === "en" ? "ES" : "EN";
  document.querySelector("#languageInput").value = language;
  renderProfileCopy();
  renderBenefits();
}

function setAudience(nextAudience) {
  audience = nextAudience;
  document.body.dataset.audience = audience;
  document.querySelector("#audienceInput").value = audience;
  document.querySelectorAll("[data-audience]").forEach((button) => {
    const selected = button.dataset.audience === audience;
    button.classList.toggle("is-active", selected);
    button.setAttribute("aria-pressed", String(selected));
  });
  const traveler = audience === "traveler";
  document.querySelector("#travelerFields").classList.toggle("is-hidden", !traveler);
  document.querySelector("#centerFields").classList.toggle("is-hidden", traveler);
  form.elements.travel_days.required = traveler;
  form.elements.gym_name.required = !traveler;
  form.elements.role.required = !traveler;
  status.textContent = "";
  renderProfileCopy();
  renderBenefits();
}

document.querySelector("#languageToggle").addEventListener("click", () => {
  language = language === "en" ? "es" : "en";
  renderCopy();
});

document.querySelectorAll("[data-audience]").forEach((button) => button.addEventListener("click", () => setAudience(button.dataset.audience)));

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  status.className = "form-status";
  if (!form.reportValidity()) {
    status.textContent = copy[language].invalid;
    status.classList.add("error");
    return;
  }
  const endpoint = document.querySelector('meta[name="waitlist-endpoint"]')?.content.trim();
  if (window.location.protocol === "file:") {
    status.textContent = language === "es"
      ? "La vista está lista. Para guardar el registro, ejecuta python3 app.py y abre http://127.0.0.1:8000."
      : "The preview is ready. To save your registration, run python3 app.py and open http://127.0.0.1:8000.";
    status.classList.add("error");
    return;
  }
  if (!endpoint) {
    status.textContent = language === "es"
      ? "El registro en línea estará disponible muy pronto. La página pública ya está activa, pero todavía no enviaremos tus datos hasta conectar el servicio seguro de la waitlist."
      : "Online registration will be available very soon. The public page is live, but we will not send your data until the secure waitlist service is connected.";
    status.classList.add("error");
    return;
  }
  submitButton.disabled = true;
  submitButton.querySelector("span").textContent = copy[language].submitting;
  const payload = Object.fromEntries(new FormData(form).entries());
  delete payload.consent;
  try {
    const response = await fetch(endpoint, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
    const result = await response.json();
    if (!response.ok) throw Object.assign(new Error(result.error), { code: result.code });
    form.reset();
    setAudience(audience);
    status.textContent = result.email_sent ? copy[language].successEmail : copy[language].success;
    status.classList.add("success");
  } catch (error) {
    status.textContent = error.code === "duplicate" ? copy[language].duplicate : copy[language].error;
    status.classList.add("error");
  } finally {
    submitButton.disabled = false;
    submitButton.querySelector("span").textContent = copy[language].submit;
  }
});

function initializeMotion() {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: .12 });
  document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));

  let ticking = false;
  const updateScrollEffects = () => {
    const maxScroll = Math.max(document.documentElement.scrollHeight - innerHeight, 1);
    const progress = Math.min(Math.max(scrollY / maxScroll, 0), 1);
    document.querySelector("#pageProgress").style.transform = `scaleX(${progress})`;

    const statement = document.querySelector(".statement");
    const rect = statement.getBoundingClientRect();
    const routeProgress = Math.min(Math.max((innerHeight - rect.top) / (innerHeight + rect.height * .55), 0), 1);
    statement.style.setProperty("--route-progress", `${routeProgress * 100}%`);
    ticking = false;
  };
  addEventListener("scroll", () => {
    if (!ticking) {
      requestAnimationFrame(updateScrollEffects);
      ticking = true;
    }
  }, { passive: true });
  updateScrollEffects();

  if (matchMedia("(pointer: fine) and (prefers-reduced-motion: no-preference)").matches) {
    addEventListener("pointermove", (event) => {
      document.body.style.setProperty("--cursor-x", `${event.clientX}px`);
      document.body.style.setProperty("--cursor-y", `${event.clientY}px`);
    }, { passive: true });

    document.querySelectorAll(".primary-cta, .submit-button").forEach((button) => {
      button.addEventListener("pointermove", (event) => {
        const rect = button.getBoundingClientRect();
        button.style.translate = `${(event.clientX - rect.left - rect.width / 2) * .06}px ${(event.clientY - rect.top - rect.height / 2) * .12}px`;
      });
      button.addEventListener("pointerleave", () => { button.style.translate = "0 0"; });
    });
  }
}

renderCopy();
setAudience("traveler");
initializeMotion();
document.documentElement.dataset.ready = "true";
