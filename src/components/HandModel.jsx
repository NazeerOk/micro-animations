/* eslint-disable react/no-unknown-property */
import { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export function Model(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/the_hand.glb");

  const { actions,mixer } = useAnimations(animations, group);

  useEffect(() => {
    // actions.Animation.play();
    actions?.GrabHold?.play()
  }, [mixer,actions]);
  
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[Math.PI / 2, 0, 0]}>
          <group
            name="b760f5edbef04eacb67c05f90ae95fb8fbx"
            rotation={[-Math.PI, 0, 0]}
            scale={0.01}
          >
            <group name="Object_2">
              <group name="RootNode">
                <group name="Object_4">
                  <primitive object={nodes._rootJoint} />
                  <skinnedMesh
                    name="Object_6"
                    geometry={nodes.Object_6.geometry}
                    material={materials.Material_357}
                    skeleton={nodes.Object_6.skeleton}
                  />
                  <skinnedMesh
                    name="Object_7"
                    geometry={nodes.Object_7.geometry}
                    material={materials.Material_349}
                    skeleton={nodes.Object_7.skeleton}
                  />
                  <group name="SK_Gauntlet" />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/the_hand.glb");