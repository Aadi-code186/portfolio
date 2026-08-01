'use client';

import React, { useEffect, useRef } from 'react';

export interface WavesProps {
  lineColor?: string;
  backgroundColor?: string;
  waveSpeedX?: number;
  waveSpeedY?: number;
  waveAmpX?: number;
  waveAmpY?: number;
  friction?: number;
  tension?: number;
  maxDistance?: number;
  className?: string;
  style?: React.CSSProperties;
  xGap?: number;
  yGap?: number;
}

export function Waves({
  lineColor = 'rgba(255, 255, 255, 0.25)',
  backgroundColor = 'transparent',
  waveSpeedX = 0.015,
  waveSpeedY = 0.01,
  waveAmpX = 24,
  waveAmpY = 16,
  maxDistance = 180,
  className = '',
  style = {},
  xGap = 16,
  yGap = 32,
}: WavesProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = container.clientWidth);
    let height = (canvas.height = container.clientHeight);

    let time = 0;
    const mouse = { x: -1000, y: -1000 };

    const handleResize = () => {
      if (!canvas || !container) return;
      width = canvas.width = container.clientWidth;
      height = canvas.height = container.clientHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const rect = canvas.getBoundingClientRect();
        mouse.x = e.touches[0].clientX - rect.left;
        mouse.y = e.touches[0].clientY - rect.top;
      }
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);

    const render = () => {
      time += 1;
      ctx.clearRect(0, 0, width, height);

      if (backgroundColor && backgroundColor !== 'transparent') {
        ctx.fillStyle = backgroundColor;
        ctx.fillRect(0, 0, width, height);
      }

      ctx.strokeStyle = lineColor;
      ctx.lineWidth = 1;

      const rows = Math.ceil(height / yGap) + 2;
      const cols = Math.ceil(width / xGap) + 2;

      for (let r = 0; r < rows; r++) {
        ctx.beginPath();
        const yBase = r * yGap;

        for (let c = 0; c <= cols; c++) {
          const xBase = c * xGap;

          const angleX = xBase * 0.006 + time * waveSpeedX;
          const angleY = yBase * 0.006 + time * waveSpeedY;

          let offsetY =
            Math.sin(angleX) * waveAmpX +
            Math.cos(angleY * 1.4) * waveAmpY +
            Math.sin(angleX * 0.5 + angleY * 0.5) * 8;

          const dx = xBase - mouse.x;
          const dy = yBase - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const factor = Math.pow(1 - dist / maxDistance, 2);
            offsetY += Math.sin(dist * 0.04 - time * 0.08) * 20 * factor;
          }

          const finalX = xBase;
          const finalY = yBase + offsetY;

          if (c === 0) {
            ctx.moveTo(finalX, finalY);
          } else {
            ctx.lineTo(finalX, finalY);
          }
        }
        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, [
    lineColor,
    backgroundColor,
    waveSpeedX,
    waveSpeedY,
    waveAmpX,
    waveAmpY,
    maxDistance,
    xGap,
    yGap,
  ]);

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full overflow-hidden ${className}`}
      style={style}
    >
      <canvas ref={canvasRef} className="block w-full h-full" />
    </div>
  );
}

export function WavesDemo() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full bg-black">
      {/* Centered content with aspect ratio */}
      <div className="w-full flex flex-col items-center">
        {/* Top border - thin white line */}
        <div className="w-full h-[1px] bg-white/80"></div>

        {/* 16:9 container that's full width */}
        <div className="w-full aspect-video relative">
          <Waves className="h-full w-full" lineColor="rgba(255, 255, 255, 0.35)" />
        </div>

        {/* Bottom border - thin white line */}
        <div className="w-full h-[1px] bg-white/80"></div>
      </div>
    </div>
  );
}

export default Waves;
