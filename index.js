$(() => {
  const canvas = document.getElementById("canvas");
  const context = canvas.getContext('2d');
  context.strokeStyle = 'white';

  const generateBtn = $('#generate');
  const frequencySlider = $('#frequency-slider');
  const straightnessSlider = $('#straightness-slider');

  generateBtn.on('click', () => {
    const freq = frequencySlider.val();
    const straightPercent = straightnessSlider.val();

    const nonStraightFreq = freq * (straightPercent / 100);
    const straightFreq = freq - nonStraightFreq;

    console.warn(nonStraightFreq, straightFreq);

    context.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < straightFreq; i++) {
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

    for (let i = 0; i < nonStraightFreq; i++) {
      context.beginPath();
      context.moveTo(Math.random() * canvas.width, Math.random() * canvas.height);
      context.lineTo(Math.random() * canvas.width, Math.random() * canvas.height);
      context.stroke();
    }
  })
});