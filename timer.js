  const eventTime = new Date("2026-01-31T21:00:00+01:00").getTime();
  const timerEl = document.getElementById("ufc-timer");

  function updateTimer() {
    const now = new Date().getTime();
    let diff = eventTime - now;

    if (diff <= 0) {
      timerEl.textContent = "LIVE";
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);

    timerEl.textContent =
      `${days}d ${hours.toString().padStart(2,"0")}h ${minutes.toString().padStart(2,"0")}m`;
  }

  updateTimer();
  setInterval(updateTimer, 60000); // обновляем каждую минуту
