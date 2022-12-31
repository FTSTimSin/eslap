$(() => {
  const canvas = document.getElementById("canvas");
  const context = canvas.getContext('2d');
  context.strokeStyle = 'white';

  const generateBtn = $('#generate');
  const frequencySlider = $('#frequency-slider');
  const diagonalSlider = $('#diagonal-slider');

  generateBtn.on('click', () => {
    const freq = frequencySlider.val();
    const diagonalPercent = diagonalSlider.val();

    const orthogonalFreq = freq * (diagonalPercent / 100);
    const diagonalFreq = freq - orthogonalFreq;

    console.warn(orthogonalFreq, diagonalFreq);

    context.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < diagonalFreq; i++) {
      const isVertical = Math.random() > 0.5;
      context.beginPath();
      const startingPoint = [Math.random() * canvas.width, Math.random() * canvas.height]
      context.moveTo(...startingPoint);
      if (isVertical) {
        context.lineTo(Math.random() * canvas.width, startingPoint[1]);
      } else {
        context.lineTo(startingPoint[0], Math.random() * canvas.height);
      }
      context.stroke();
    }

    for (let i = 0; i < orthogonalFreq; i++) {
      context.beginPath();
      context.moveTo(Math.random() * canvas.width, Math.random() * canvas.height);
      context.lineTo(Math.random() * canvas.width, Math.random() * canvas.height);
      context.stroke();
    }
  })
});