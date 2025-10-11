"use client";

import { useEffect, useRef, useState } from "react";

export const StarsBackground = () => {
  const starsRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detectar si es móvil
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (!starsRef.current) return;

    // Ajustar cantidad de estrellas según dispositivo
    const tinyStarsCount = isMobile ? 30 : 100;  // 70% menos en móvil
    const mediumStarsCount = isMobile ? 10 : 30;  // 66% menos en móvil
    const dustCount = isMobile ? 15 : 50;  // 70% menos en móvil

    // Generar estrellas pequeñas
    for (let i = 0; i < tinyStarsCount; i++) {
      const star = document.createElement("div");
      star.className = "star-tiny";
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      star.style.animationDelay = `${Math.random() * 3}s`;
      star.style.willChange = 'opacity, transform';  // Optimización GPU
      starsRef.current.appendChild(star);
    }

    // Generar estrellas doradas medianas
    for (let i = 0; i < mediumStarsCount; i++) {
      const star = document.createElement("div");
      star.className = "star-medium";
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      star.style.animationDelay = `${Math.random() * 4}s`;
      star.style.willChange = 'opacity, transform';
      starsRef.current.appendChild(star);
    }

    // Generar polvo estelar
    for (let i = 0; i < dustCount; i++) {
      const dust = document.createElement("div");
      dust.className = "star-dust";
      dust.style.left = `${Math.random() * 100}%`;
      dust.style.top = `100%`;
      dust.style.animationDelay = `${Math.random() * 15}s`;
      dust.style.willChange = 'transform';
      starsRef.current.appendChild(dust);
    }

    // Cleanup al desmontar
    return () => {
      if (starsRef.current) {
        starsRef.current.innerHTML = '';
      }
    };
  }, [isMobile]);

  return <div ref={starsRef} className="stars-layer"></div>;
};
