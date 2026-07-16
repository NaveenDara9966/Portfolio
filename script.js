const video = document.getElementById('heroVideo');
const toggle = document.getElementById('videoToggle');

video.pause();
video.currentTime = 0;
video.muted = false;
video.volume = 1;
toggle.classList.remove('is-playing');
toggle.setAttribute('aria-label', 'Play video');

toggle.addEventListener('click', async () => {
  video.muted = false;
  video.volume = 1;

  if (video.paused) {
    try {
      await video.play();
      toggle.classList.add('is-playing');
      toggle.setAttribute('aria-label', 'Pause video');
    } catch (error) {
      video.muted = true;
      await video.play();
      toggle.classList.add('is-playing');
    }
  } else {
    video.pause();
    toggle.classList.remove('is-playing');
    toggle.setAttribute('aria-label', 'Play video');
  }
});

const launch = document.getElementById('assistantLaunch');
const panel = document.getElementById('assistantPanel');
const closeBtn = document.getElementById('assistantClose');
const body = document.getElementById('assistantBody');

launch.addEventListener('click', () => {
  panel.classList.toggle('open');

  if (panel.classList.contains('open')) {
    body.innerHTML = `<p class="bot-msg">Hi, I can guide you through my portfolio.</p>`;
  }
});
closeBtn.addEventListener('click', () => {
  panel.classList.remove('open');
  body.innerHTML = `<p class="bot-msg">Hi, I can guide you through Naveen’s portfolio.</p>`;
});

document.querySelectorAll('.quick-buttons button').forEach(button => {
  button.addEventListener('click', () => {
    const message = document.createElement('p');
    message.className = 'bot-msg';
    message.textContent = button.dataset.answer;
    body.appendChild(message);
    body.scrollTop = body.scrollHeight;
  });
});

window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});