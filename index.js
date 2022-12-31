$(() => {
  const canvas = document.getElementById("canvas");
  const context = canvas.getContext('2d');

  $('#generate').on('click', () => {
    const val = $('#range').val();
    console.debug(val);
    context.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < val; i++) {
      context.beginPath();
      context.moveTo(Math.random() * canvas.width, Math.random() * canvas.height);
      context.lineTo(Math.random() * canvas.width, Math.random() * canvas.height);
      context.stroke();
    }
  })
});