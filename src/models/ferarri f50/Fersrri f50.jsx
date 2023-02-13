/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 scene.gltf
Author: Alex.Ka. (https://sketchfab.com/Alex.Ka.)
License: CC-BY-NC-ND-4.0 (http://creativecommons.org/licenses/by-nc-nd/4.0/)
Source: https://sketchfab.com/3d-models/ferrari-f50-1995-3cb829a4ab164f9491696d9e49860afd
Title: Ferrari F50 1995
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Model(props) {
  const { nodes, materials } = useGLTF("/ferarri/scene.gltf");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={1.05}>
        <mesh
          geometry={nodes.Object_2.geometry}
          material={materials.material}
        />
        <mesh
          geometry={nodes.Object_3.geometry}
          material={materials.Ferrari_F50_1995_by_Alex_Ka}
        />
        <mesh
          geometry={nodes.Object_4.geometry}
          material={materials.blackaluminium}
        />
        <mesh
          geometry={nodes.Object_5.geometry}
          material={materials.blackchrome}
        />
        <mesh
          geometry={nodes.Object_6.geometry}
          material={materials.blackmatte}
        />
        <mesh
          geometry={nodes.Object_7.geometry}
          material={materials.blackplastic}
        />
        <mesh geometry={nodes.Object_8.geometry} material={materials.bottom} />
        <mesh
          geometry={nodes.Object_9.geometry}
          material={materials.brakedisc}
        />
        <mesh
          geometry={nodes.Object_10.geometry}
          material={materials.brakelight}
        />
        <mesh geometry={nodes.Object_11.geometry} material={materials.chrome} />
        <mesh
          geometry={nodes.Object_12.geometry}
          material={materials.designo_plastic}
        />
        <mesh
          geometry={nodes.Object_13.geometry}
          material={materials.door_lock}
        />
        <mesh
          geometry={nodes.Object_14.geometry}
          material={materials.emblem_hood}
        />
        <mesh
          geometry={nodes.Object_15.geometry}
          material={materials.engine_glass}
        />
        <mesh
          geometry={nodes.Object_16.geometry}
          material={materials.engine_rear}
        />
        <mesh
          geometry={nodes.Object_17.geometry}
          material={materials.engine_up}
        />
        <mesh
          geometry={nodes.Object_18.geometry}
          material={materials.exhaust_bronze}
        />
        <mesh
          geometry={nodes.Object_19.geometry}
          material={materials.exhaust_chrome}
        />
        <mesh
          geometry={nodes.Object_20.geometry}
          material={materials.exhaust_hole}
        />
        <mesh
          geometry={nodes.Object_21.geometry}
          material={materials.ferrari_support_logo}
        />
        <mesh
          geometry={nodes.Object_22.geometry}
          material={materials.gril_front}
        />
        <mesh
          geometry={nodes.Object_23.geometry}
          material={materials.grill_front_side}
        />
        <mesh
          geometry={nodes.Object_24.geometry}
          material={materials.grill_rear}
        />
        <mesh
          geometry={nodes.Object_25.geometry}
          material={materials.headlight1}
        />
        <mesh
          geometry={nodes.Object_26.geometry}
          material={materials.headlight2}
        />
        <mesh
          geometry={nodes.Object_27.geometry}
          material={materials.headlightglass}
        />
        <mesh geometry={nodes.Object_28.geometry} material={materials.horse} />
        <mesh
          geometry={nodes.Object_29.geometry}
          material={materials.horse_side_logo}
        />
        <mesh
          geometry={nodes.Object_30.geometry}
          material={materials.interior}
        />
        <mesh
          geometry={nodes.Object_31.geometry}
          material={materials.italy_logo}
        />
        <mesh
          geometry={nodes.Object_32.geometry}
          material={materials.mirror_interior}
        />
        <mesh
          geometry={nodes.Object_33.geometry}
          material={materials.mirrors}
        />
        <mesh
          geometry={nodes.Object_34.geometry}
          material={materials.pininfarina_chrome}
        />
        <mesh
          geometry={nodes.Object_35.geometry}
          material={materials.plastic_front}
        />
        <mesh
          geometry={nodes.Object_36.geometry}
          material={materials.plastic_front_side}
        />
        <mesh geometry={nodes.Object_37.geometry} material={materials.plate} />
        <mesh
          geometry={nodes.Object_38.geometry}
          material={materials.plate_ferrari_logo}
        />
        <mesh
          geometry={nodes.Object_39.geometry}
          material={materials.radiator}
        />
        <mesh
          geometry={nodes.Object_40.geometry}
          material={materials.radiator_side}
        />
        <mesh
          geometry={nodes.Object_41.geometry}
          material={materials.material_39}
        />
        <mesh
          geometry={nodes.Object_42.geometry}
          material={materials.rim_emblem}
        />
        <mesh
          geometry={nodes.Object_43.geometry}
          material={materials.side_windo_horse_logo}
        />
        <mesh
          geometry={nodes.Object_44.geometry}
          material={materials.sideline_black_plastic}
        />
        <mesh geometry={nodes.Object_45.geometry} material={materials.suport} />
        <mesh
          geometry={nodes.Object_46.geometry}
          material={materials.suspension}
        />
        <mesh geometry={nodes.Object_47.geometry} material={materials.tire} />
        <mesh
          geometry={nodes.Object_48.geometry}
          material={materials.tire_side}
        />
        <mesh
          geometry={nodes.Object_49.geometry}
          material={materials.turnlight_front}
        />
        <mesh
          geometry={nodes.Object_50.geometry}
          material={materials.turnlight_side}
        />
        <mesh geometry={nodes.Object_51.geometry} material={materials.windo} />
      </group>
    </group>
  );
}

useGLTF.preload("/scene.gltf");
