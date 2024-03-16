/* eslint-disable react/no-unknown-property */
import { Canvas } from "@react-three/fiber";
import { Model } from "./HandModel";
import { Center, OrbitControls } from "@react-three/drei";

const RefreshToLoad = () => {
  return (
    <Canvas>
      <ambientLight intensity={Math.PI / 2} />
      <spotLight
        position={[10, 10, 10]}
        angle={0.15}
        penumbra={1}
        decay={0}
        intensity={Math.PI}
      />
      <pointLight position={[-10, -10, -10]} decay={1} intensity={Math.PI} />
      <OrbitControls />
      <Center>
        <Model />
      </Center>
    </Canvas>
  );
};

export default RefreshToLoad;
