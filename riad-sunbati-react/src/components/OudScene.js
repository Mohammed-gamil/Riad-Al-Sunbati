import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const OudScene = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffaa00, 0.8); // Golden light
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    // Set camera position
    camera.position.z = 5;

    const loader = new GLTFLoader();
    loader.load(
        '/oud.glb', // Path to model in public folder
        function (gltf) {
            const model = gltf.scene;
            model.scale.set(5, 5, 5); // Adjust scale as needed
            model.position.y = -3; // Adjust position
            model.rotation.y = Math.PI / 4;
            
            scene.add(model);
            
            // Animation function
            const animateModel = function() {
                requestAnimationFrame(animateModel);
                
                // Base rotation only
                model.rotation.y += 0.0095;

                renderer.render(scene, camera);
            };
            animateModel();
        },
        function (xhr) {
            console.log((xhr.loaded / xhr.total * 100) + '% loaded');
        },
        function (error) {
            console.error('An error happened', error);
        }
    );

    // Handle Resize
    const handleResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    };
    
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      
      if (container && renderer.domElement && renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
      
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        opacity: 0.8
      }}
    />
  );
};

export default OudScene;
