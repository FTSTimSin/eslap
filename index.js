$(() => {
  const canvas = document.getElementById("canvas");
  const context = canvas.getContext('2d');
  context.strokeStyle = 'white';

  const generateBtn = $('#generate');
  const frequencySlider = $('#frequency-slider');
  const diagonalSlider = $('#diagonal-slider');
  const curveSlider = $('#curve-slider')

  generateBtn.on('click', () => {
    const freq = frequencySlider.val();
    const diagonalPercent = diagonalSlider.val() / 100;
    const curvePercent = curveSlider.val() / 100;

    context.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < freq; i++) {
      const isDiagonal = Math.random() < diagonalPercent;
      const isCurve = Math.random() < curvePercent;
      const startingPoint = [Math.random() * canvas.width, Math.random() * canvas.height]
      let endingPoint;

      context.beginPath();
      context.moveTo(...startingPoint);
      if (isDiagonal) {
        endingPoint = [Math.random() * canvas.width, Math.random() * canvas.height]
      } else {
        if (Math.random() > 0.5) {
          // Vertical Line
          endingPoint = [Math.random() * canvas.width, startingPoint[1]];
        } else {
          // Horizontal Line
          endingPoint = [startingPoint[0], Math.random() * canvas.height]
        }
      }

      if (isCurve) {
        context.quadraticCurveTo(
          Math.random() * canvas.width, 
          Math.random() * canvas.height,
          ...endingPoint
        )
      } else {
        context.lineTo(...endingPoint);
      }
      context.stroke();
    }
  });
});