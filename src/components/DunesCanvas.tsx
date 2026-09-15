import React, { useEffect, useRef } from 'react';

export const DunesCanvas: React.FC<{ className?: string }> = ({ className = '' }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 600);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };
    window.addEventListener('resize', handleResize);

    let frameId: number;
    let time = 0;

    // Dunes wave curves parameters
    const dunes = [
      { yOffset: 0.65, amp: 45, freq: 0.002, speed: 0.15, color: '#322316', pathColor: '#d97706', glow: 0.8 },
      { yOffset: 0.75, amp: 60, freq: 0.0015, speed: 0.1, color: '#231810', pathColor: '#f59e0b', glow: 1.0 },
      { yOffset: 0.86, amp: 70, freq: 0.0012, speed: 0.07, color: '#160f0a', pathColor: '#fbbf24', glow: 1.2 },
    ];

    const render = () => {
      frameId = requestAnimationFrame(render);
      time += 0.01;

      ctx.clearRect(0, 0, width, height);

      // Gradient background
      const bgGrad = ctx.createLinearGradient(0, 0, 0, height);
      bgGrad.addColorStop(0, '#0e0c0a');
      bgGrad.addColorStop(0.5, '#19120c');
      bgGrad.addColorStop(1, '#0e0c0a');
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      // Render each dune layer with illuminated ridge pathway
      dunes.forEach((dune, idx) => {
        ctx.beginPath();
        const startY = height * dune.yOffset + Math.sin(time * dune.speed) * 15;
        ctx.moveTo(0, startY);

        for (let x = 0; x <= width; x += 8) {
          const y =
            height * dune.yOffset +
            Math.sin(x * dune.freq + time * dune.speed + idx) * dune.amp +
            Math.cos(x * dune.freq * 2 + time * 0.05) * 15;
          ctx.lineTo(x, y);
        }

        ctx.lineTo(width, height);
        ctx.lineTo(0, height);
        ctx.closePath();

        // Dune fill
        const duneGrad = ctx.createLinearGradient(0, height * dune.yOffset - 50, 0, height);
        duneGrad.addColorStop(0, dune.color);
        duneGrad.addColorStop(1, '#090706');
        ctx.fillStyle = duneGrad;
        ctx.fill();

        // Illuminated ridge path
        ctx.save();
        ctx.shadowColor = dune.pathColor;
        ctx.shadowBlur = 18 * dune.glow;
        ctx.strokeStyle = dune.pathColor;
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        for (let x = 0; x <= width; x += 8) {
          const y =
            height * dune.yOffset +
            Math.sin(x * dune.freq + time * dune.speed + idx) * dune.amp +
            Math.cos(x * dune.freq * 2 + time * 0.05) * 15;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
        ctx.restore();
      });

      // Animated glowing pathway dots travelling along the main ridge
      const pathY = (x: number) =>
        height * 0.75 +
        Math.sin(x * 0.0015 + time * 0.1 + 1) * 60 +
        Math.cos(x * 0.003 + time * 0.05) * 15;

      const dotCount = 8;
      for (let i = 0; i < dotCount; i++) {
        const progress = ((time * 0.08 + i / dotCount) % 1);
        const x = progress * width;
        const y = pathY(x);

        ctx.save();
        ctx.shadowColor = '#fff';
        ctx.shadowBlur = 12;
        ctx.fillStyle = '#fef3c7';
        ctx.beginPath();
        ctx.arc(x, y, 3.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(frameId);
    };
  }, []);

  return <canvas ref={canvasRef} className={`absolute inset-0 w-full h-full pointer-events-none ${className}`} />;
};
