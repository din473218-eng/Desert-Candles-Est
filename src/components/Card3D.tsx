import React, { useRef, useState, useCallback } from 'react';

interface Card3DProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  depth?: number; // max tilt degrees (e.g. 10)
  glowColor?: string;
  enableGlow?: boolean;
}

export const Card3D: React.FC<Card3DProps> = ({
  children,
  className = '',
  onClick,
  depth = 10,
  glowColor = 'rgba(217, 119, 6, 0.18)',
  enableGlow = true,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState<string>('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
  const [glarePos, setGlarePos] = useState<{ x: number; y: number; opacity: number }>({ x: 50, y: 50, opacity: 0 });
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      // Calculate tilt angles smoothly
      const rotateX = -((y - centerY) / centerY) * depth;
      const rotateY = ((x - centerX) / centerX) * depth;

      setTransform(`perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.02, 1.02, 1.02) translateZ(10px)`);

      // Glare position percentage
      const percentX = (x / rect.width) * 100;
      const percentY = (y / rect.height) * 100;
      setGlarePos({ x: percentX, y: percentY, opacity: 1 });
    },
    [depth]
  );

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    setTransform('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1) translateZ(0px)');
    setGlarePos(prev => ({ ...prev, opacity: 0 }));
  }, []);

  return (
    <div
      ref={cardRef}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative transition-transform duration-300 ease-out will-change-transform preserve-3d cursor-pointer select-none rounded-2xl ${className}`}
      style={{
        transform,
      }}
    >
      {/* Interactive Glare / Specular Highlight */}
      {enableGlow && (
        <div
          className="pointer-events-none absolute inset-0 rounded-2xl transition-opacity duration-300 z-20"
          style={{
            opacity: glarePos.opacity * 0.45,
            background: `radial-gradient(circle 220px at ${glarePos.x}% ${glarePos.y}%, rgba(254, 243, 199, 0.4), ${glowColor}, transparent 70%)`,
          }}
        />
      )}

      {/* Ambient gold glow on hover */}
      {enableGlow && (
        <div
          className={`pointer-events-none absolute -inset-0.5 rounded-2xl transition-opacity duration-500 blur-md -z-10 ${
            isHovered ? 'opacity-70' : 'opacity-0'
          }`}
          style={{
            background: 'linear-gradient(135deg, rgba(217,119,6,0.4), rgba(245,158,11,0.1), rgba(180,83,9,0.3))',
          }}
        />
      )}

      {children}
    </div>
  );
};
