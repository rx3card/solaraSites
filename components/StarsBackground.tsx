"use client";

import { useEffect, useRef } from "react";

export const StarsBackground = () => {
  const starsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!starsRef.current) return;

    // Generar estrellas pequeñas
    for (let i = 0; i < 100; i++) {
      const star = document.createElement("div");
      star.className = "star-tiny";
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      star.style.animationDelay = `${Math.random() * 3}s`;
      starsRef.current.appendChild(star);
    }

    // Generar estrellas doradas medianas
    for (let i = 0; i < 30; i++) {
      const star = document.createElement("div");
      star.className = "star-medium";
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      star.style.animationDelay = `${Math.random() * 4}s`;
      starsRef.current.appendChild(star);
    }

    // Generar polvo estelar
    for (let i = 0; i < 50; i++) {
      const dust = document.createElement("div");
      dust.className = "star-dust";
      dust.style.left = `${Math.random() * 100}%`;
      dust.style.top = `100%`;
      dust.style.animationDelay = `${Math.random() * 15}s`;
      starsRef.current.appendChild(dust);
    }
  }, []);

  return <div ref={starsRef} className="stars-layer"></div>;
};
