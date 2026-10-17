(() => {
  "use strict";

  const video = document.querySelector(".project-video");
  if (!video) return;

  let hasStarted = false;
  let hasEnded = false;

  // El inicio automático requiere silencio en los navegadores habituales.
  video.muted = true;
  video.defaultMuted = true;
  video.loop = false;
  video.controls = false;

  function requestPlayback() {
    if (hasStarted || hasEnded || document.hidden) return;

    const playback = video.play();
    if (playback && typeof playback.catch === "function") {
      playback.catch(() => {
        if (hasStarted || hasEnded) return;

        // Si el navegador bloquea autoplay, se puede tocar la imagen.
        // No se agrega ningún botón, texto ni control sobre el video.
        document.body.dataset.playback = "blocked";
        video.tabIndex = 0;
        video.setAttribute("aria-label", "Reproducir video sin sonido");
      });
    }
  }

  function onKeyDown(event) {
    if (hasStarted || hasEnded) return;
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      requestPlayback();
    }
  }

  function onVisible() {
    if (!document.hidden) requestPlayback();
  }

  function removeStartupListeners() {
    video.removeEventListener("click", requestPlayback);
    video.removeEventListener("keydown", onKeyDown);
    document.removeEventListener("visibilitychange", onVisible);
    video.removeAttribute("tabindex");
  }

  video.addEventListener("playing", () => {
    hasStarted = true;
    document.body.dataset.playback = "playing";
    video.setAttribute("aria-label", "Video del proyecto, sin sonido");
    removeStartupListeners();
  }, { once: true });

  video.addEventListener("ended", () => {
    hasEnded = true;
    video.autoplay = false;
    video.removeAttribute("autoplay");
    document.body.dataset.playback = "ended";
    removeStartupListeners();
    // Sin loop ni reinicio: se conserva el último fotograma.
  }, { once: true });

  video.addEventListener("click", requestPlayback);
  video.addEventListener("keydown", onKeyDown);
  document.addEventListener("visibilitychange", onVisible);

  requestPlayback();
})();
