/* eslint-disable react/no-unknown-property */
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from '@react-three/drei';
import Scene from '../../public/Scene';

function Hero() {
  return (
    <>
      <div className="flex flex-1 items-center justify-center">
        <div className="max-w-5xl px-4 py-2">
          <h1
            className="text-left text-3xl font-bold uppercase tracking-wide 
          text-purple-400 sm:text-6xl"
          >
            EMF IS BACK
          </h1>
          <h3 className="text-left text-xl text-cyan-200">
            Let's dance under the stars together, as Escapade returns with
            <span className="text-orange-200"> electrifying beats</span> and
            <span className="text-indigo-300"> epic vibes!</span>
          </h3>
        </div>
      </div>
      <div className="flex justify-center px-8">
        <Canvas className="cursor-grab">
          <ambientLight intensity={1} />
          <PerspectiveCamera />
          <OrbitControls enableZoom={false} enablePan={false} />
          <Suspense fallback={null}>
            <Scene />
          </Suspense>
          <Environment preset="sunset" />
        </Canvas>
      </div>
      <h2 className="text-center text-2xl text-teal-500">June 21-23 2024</h2>
    </>
  );
}

export default Hero;
