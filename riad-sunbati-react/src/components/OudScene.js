import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';

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
    
    // Setup DRACO loader for compressed models
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.5.6/');
    dracoLoader.setDecoderConfig({ type: 'js' });
    loader.setDRACOLoader(dracoLoader);
    
    // Add more detailed logging
    console.log('Attempting to load oud.glb...');
    
    let model = null;
    
    loader.load(
        '/oud.glb', // Path to model in public folder
        function (gltf) {
            console.log('Model loaded successfully:', gltf);
            model = gltf.scene;
            
            // Function to update model based on screen size
            const updateModelForScreenSize = () => {
                const isMobile = window.innerWidth < 768;
                const scale = isMobile ? 4.5 : 5;
                model.scale.set(scale, scale, scale);
                model.position.y = isMobile ? -2 : -3;
                model.position.x = isMobile ? 0 : 0;
            };
            
            updateModelForScreenSize();
            model.rotation.y = Math.PI / 4;
            
            scene.add(model);
            console.log('Model added to scene');
            
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
            if (xhr.lengthComputable) {
                const percentComplete = (xhr.loaded / xhr.total * 100).toFixed(2);
                console.log(`Loading: ${percentComplete}% (${xhr.loaded} / ${xhr.total} bytes)`);
            } else {
                console.log(`Loading: ${xhr.loaded} bytes loaded`);
            }
        },
        function (error) {
            console.error('Error loading GLB file:', error);
            console.error('Error details:', {
                message: error.message,
                stack: error.stack,
                type: error.type
            });
        }
    );

    // Handle Resize
    const handleResize = () => {
        const isMobile = window.innerWidth < 768;
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
        
        // Update model position and scale if it exists
        if (model) {
            const scale = isMobile ? 1.5 : 5;
            model.scale.set(scale, scale, scale);
            model.position.y = isMobile ? -0.5 : -3;
            model.position.x = isMobile ? 0 : 0;
        }
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
        opacity: 0.9
      }}
    />
  );
};

export default OudScene;
