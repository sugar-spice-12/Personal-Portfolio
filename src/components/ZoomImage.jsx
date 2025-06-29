import React, { useRef } from 'react';

const MAGNIFIER_RADIUS = 100; // px
const ZOOM_SCALE = 1.5;

const ZoomImage = ({ src, alt, className = '' }) => {
  const containerRef = useRef(null);
  const zoomImgRef = useRef(null);

  const handleMouseMove = (e) => {
    const container = containerRef.current;
    const zoomImg = zoomImgRef.current;
    if (!container || !zoomImg) return;
    zoomImg.style.opacity = 1;
    const rect = container.getBoundingClientRect();
    const positionPx = e.clientX - rect.left;
    const positionPy = e.clientY - rect.top;
    const positionX = (positionPx / rect.width) * 100;
    const positionY = (positionPy / rect.height) * 100;
    zoomImg.style.setProperty('--zoom-x', positionX + '%');
    zoomImg.style.setProperty('--zoom-y', positionY + '%');
    const transformX = -(positionX - 50) / 3.5;
    const transformY = -(positionY - 50) / 3.5;
    zoomImg.style.transform = `scale(${ZOOM_SCALE}) translateX(${transformX}%) translateY(${transformY}%)`;
  };

  const handleMouseOut = () => {
    const zoomImg = zoomImgRef.current;
    if (zoomImg) {
      zoomImg.style.opacity = 0;
      zoomImg.style.transform = 'scale(1) translateX(0) translateY(0)';
      zoomImg.style.setProperty('--zoom-x', '50%');
      zoomImg.style.setProperty('--zoom-y', '50%');
    }
  };

  return (
    <div
      ref={containerRef}
      className={`zoom relative w-full h-full ${className}`}
      style={{ width: '100%', height: '100%', maxWidth: '100%' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseOut}
    >
      <img src={src} alt={alt} className="w-full h-full object-cover block select-none" draggable={false} />
      <img
        ref={zoomImgRef}
        src={src}
        alt={alt}
        id="imgZoom"
        className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none select-none"
        draggable={false}
        style={{
          opacity: 0,
          clipPath: `circle(${MAGNIFIER_RADIUS}px at var(--zoom-x, 50%) var(--zoom-y, 50%))`,
          WebkitClipPath: `circle(${MAGNIFIER_RADIUS}px at var(--zoom-x, 50%) var(--zoom-y, 50%))`,
          transition: 'opacity 0.2s',
        }}
      />
    </div>
  );
};

export default ZoomImage; 