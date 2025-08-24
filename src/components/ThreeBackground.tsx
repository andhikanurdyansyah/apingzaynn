import React, { useRef, useEffect, useMemo } from 'react';
import * as THREE from 'three';

interface ThreeBackgroundProps {
  isDark: boolean;
}

const ThreeBackground: React.FC<ThreeBackgroundProps> = ({ isDark }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const particlesRef = useRef<THREE.Points | null>(null);
  const frameIdRef = useRef<number | null>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  // Memoize particle system to avoid recreation on theme change
  const particleSystem = useMemo(() => {
    const particleCount = 150;
    const positions = new Float32Array(particleCount * 3);
    const velocities = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      
      // Random positions
      positions[i3] = (Math.random() - 0.5) * 20;
      positions[i3 + 1] = (Math.random() - 0.5) * 20;
      positions[i3 + 2] = (Math.random() - 0.5) * 20;
      
      // Random velocities
      velocities[i3] = (Math.random() - 0.5) * 0.02;
      velocities[i3 + 1] = (Math.random() - 0.5) * 0.02;
      velocities[i3 + 2] = (Math.random() - 0.5) * 0.02;
      
      // Random sizes
      sizes[i] = Math.random() * 3 + 1;
    }

    return { positions, velocities, sizes, particleCount };
  }, []);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 10;
    cameraRef.current = camera;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: true,
      powerPreference: "high-performance"
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    rendererRef.current = renderer;

    mountRef.current.appendChild(renderer.domElement);

    // Create particle geometry
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(particleSystem.positions, 3));
    geometry.setAttribute('size', new THREE.BufferAttribute(particleSystem.sizes, 1));

    // Create particle material with theme-adaptive colors
    const material = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        isDark: { value: isDark ? 1.0 : 0.0 },
        mouse: { value: new THREE.Vector2() }
      },
      vertexShader: `
        attribute float size;
        uniform float time;
        uniform float isDark;
        uniform vec2 mouse;
        varying vec3 vColor;
        varying float vAlpha;
        
        void main() {
          vec3 pos = position;
          
          // Gentle floating animation
          pos.y += sin(time * 0.5 + position.x * 0.1) * 0.3;
          pos.x += cos(time * 0.3 + position.y * 0.1) * 0.2;
          
          // Mouse interaction
          vec2 mouseInfluence = mouse * 0.5;
          pos.xy += mouseInfluence * 0.1 * (1.0 / (distance(position.xy, mouseInfluence) + 1.0));
          
          vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
          gl_Position = projectionMatrix * mvPosition;
          
          // Size based on distance
          gl_PointSize = size * (300.0 / -mvPosition.z);
          
          // Theme-adaptive colors
          if (isDark > 0.5) {
            vColor = mix(
              vec3(0.9, 0.4, 0.6), // Rose
              vec3(0.6, 0.3, 0.9), // Purple
              sin(time * 0.2 + position.x * 0.1) * 0.5 + 0.5
            );
          } else {
            vColor = mix(
              vec3(0.95, 0.7, 0.8), // Light rose
              vec3(0.9, 0.6, 0.95), // Light purple
              sin(time * 0.2 + position.x * 0.1) * 0.5 + 0.5
            );
          }
          
          // Alpha based on distance and theme
          vAlpha = isDark > 0.5 ? 0.6 : 0.4;
        }
      `,
      fragmentShader: `
        varying vec3 vColor;
        varying float vAlpha;
        
        void main() {
          vec2 center = gl_PointCoord - 0.5;
          float dist = length(center);
          
          if (dist > 0.5) discard;
          
          float alpha = (1.0 - dist * 2.0) * vAlpha;
          gl_FragColor = vec4(vColor, alpha);
        }
      `,
      transparent: true,
      blending: THREE.AdditiveBlending
    });

    // Create particles
    const particles = new THREE.Points(geometry, material);
    particlesRef.current = particles;
    scene.add(particles);

    // Add some ambient geometry for depth
    const ambientGeometry = new THREE.RingGeometry(0.5, 1, 32);
    const ambientMaterial = new THREE.MeshBasicMaterial({ 
      color: isDark ? 0x4a154a : 0xfce7f3,
      transparent: true,
      opacity: isDark ? 0.1 : 0.05,
      side: THREE.DoubleSide
    });
    
    for (let i = 0; i < 3; i++) {
      const ring = new THREE.Mesh(ambientGeometry, ambientMaterial);
      ring.position.set(
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 10 - 5
      );
      ring.rotation.x = Math.random() * Math.PI;
      ring.rotation.y = Math.random() * Math.PI;
      scene.add(ring);
    }

    // Mouse tracking
    const handleMouseMove = (event: MouseEvent) => {
      mouseRef.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Handle resize
    const handleResize = () => {
      if (!camera || !renderer) return;
      
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Animation loop
    const animate = () => {
      frameIdRef.current = requestAnimationFrame(animate);
      
      if (!renderer || !scene || !camera || !particles) return;

      const time = Date.now() * 0.001;
      
      // Update particle positions
      const positions = particles.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < particleSystem.particleCount; i++) {
        const i3 = i * 3;
        
        // Apply velocities
        positions[i3] += particleSystem.velocities[i3];
        positions[i3 + 1] += particleSystem.velocities[i3 + 1];
        positions[i3 + 2] += particleSystem.velocities[i3 + 2];
        
        // Boundary wrapping
        if (positions[i3] > 10) positions[i3] = -10;
        if (positions[i3] < -10) positions[i3] = 10;
        if (positions[i3 + 1] > 10) positions[i3 + 1] = -10;
        if (positions[i3 + 1] < -10) positions[i3 + 1] = 10;
        if (positions[i3 + 2] > 10) positions[i3 + 2] = -10;
        if (positions[i3 + 2] < -10) positions[i3 + 2] = 10;
      }
      
      particles.geometry.attributes.position.needsUpdate = true;
      
      // Update shader uniforms
      (particles.material as THREE.ShaderMaterial).uniforms.time.value = time;
      (particles.material as THREE.ShaderMaterial).uniforms.mouse.value.set(
        mouseRef.current.x,
        mouseRef.current.y
      );
      
      // Gentle camera movement
      camera.position.x = Math.sin(time * 0.1) * 0.5;
      camera.position.y = Math.cos(time * 0.15) * 0.3;
      camera.lookAt(0, 0, 0);
      
      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      
      if (frameIdRef.current) {
        cancelAnimationFrame(frameIdRef.current);
      }
      
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      
      renderer.dispose();
      geometry.dispose();
      material.dispose();
    };
  }, []);

  // Update theme colors when isDark changes
  useEffect(() => {
    if (particlesRef.current) {
      const material = particlesRef.current.material as THREE.ShaderMaterial;
      material.uniforms.isDark.value = isDark ? 1.0 : 0.0;
    }
  }, [isDark]);

  return (
    <div 
      ref={mountRef} 
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 1 }}
    />
  );
};

export default ThreeBackground;
