import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';
import { KTX2Loader } from 'three/examples/jsm/loaders/KTX2Loader';
import { MeshoptDecoder } from 'three/examples/jsm/libs/meshopt_decoder.module.js';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';

const OudScene = () => {
  const containerRef = useRef(null);
  const rendererRef = useRef(null);
  const frameIdRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    
    // Renderer setup with performance optimizations
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Cap pixel ratio
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1;
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    // Environment setup (PMREM) for realistic lighting
    const pmremGenerator = new THREE.PMREMGenerator(renderer);
    pmremGenerator.compileEquirectangularShader();
    const environment = new RoomEnvironment();
    scene.environment = pmremGenerator.fromScene(environment).texture;
    scene.environmentIntensity = 0.5; // Reduce env brightness to let yellow light pop
    environment.dispose();
    pmremGenerator.dispose();

    // Lights - Tuned for "Yellow/Golden" look
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    
    // Strong Golden Light
    const directionalLight = new THREE.DirectionalLight(0xffaa00, 3.0); 
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    // Loaders setup
    const ktx2Loader = new KTX2Loader()
        .setTranscoderPath(`https://unpkg.com/three@0.181.2/examples/jsm/libs/basis/`)
        .detectSupport(renderer);

    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.5.6/');
    dracoLoader.setDecoderConfig({ type: 'js' });

    const loader = new GLTFLoader();
    loader.setDRACOLoader(dracoLoader);
    loader.setKTX2Loader(ktx2Loader);
    loader.setMeshoptDecoder(MeshoptDecoder);
    
    console.log('Attempting to load oud-optimized.glb...');
    
    let model = null;
    
    loader.load(
        '/oud-optimized.glb',
        function (gltf) {
            console.log('Model loaded successfully:', gltf);
            model = gltf.scene;
            
            const updateModelForScreenSize = () => {
                const isMobile = window.innerWidth < 768;
                const scale = isMobile ? 4 : 5;
                model.scale.set(scale, scale, scale);
                model.position.y = isMobile ? -2 : -3;
                model.position.x = isMobile ? 0 : 0;
            };
            
            updateModelForScreenSize();
            model.rotation.y = Math.PI / 4;
            
            scene.add(model);
            
            // Start animation loop
            animate();
        },
        undefined,
        function (error) {
            console.error('Error loading GLB file:', error);
        }
    );

    const animate = () => {
        frameIdRef.current = requestAnimationFrame(animate);
        
        if (model) {
            model.rotation.y += 0.0095;
        }

        renderer.render(scene, camera);
    };

    // Handle Resize
    const handleResize = () => {
        const width = window.innerWidth;
        const height = window.innerHeight;
        const isMobile = width < 768;
        
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
        
        if (model) {
            const scale = isMobile ? 3 : 5;
            model.scale.set(scale, scale, scale);
            model.position.y = isMobile ? -1.5 : -3;
            model.position.x = isMobile ? 0 : 0;
        }
    };
    
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(frameIdRef.current);
      
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      
      // Dispose resources
      scene.traverse((object) => {
          if (object.geometry) object.geometry.dispose();
          if (object.material) {
              if (Array.isArray(object.material)) {
                  object.material.forEach(material => material.dispose());
              } else {
                  object.material.dispose();
              }
          }
      });

      if (scene.environment) scene.environment.dispose();
      renderer.dispose();
      ktx2Loader.dispose();
      dracoLoader.dispose();
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
