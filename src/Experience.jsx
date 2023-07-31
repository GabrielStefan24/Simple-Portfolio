import {
  PresentationControls,
  Environment,
  Float,
  useGLTF,
  ContactShadows,
  Html,
  Text,
} from "@react-three/drei";

export default function Experience() {
  const computer = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf"
  );
  return (
    <>
      <Environment preset="city" />
      <color args={["#241a1a"]} attach="background" />
      <PresentationControls
        global
        rotation={[0.2, 0.2, 0.1]}
        polar={[-0.4, 0.5]}
        azimuth={[-0.5, 0.5]}
        config={{ mass: 1.5, tension: 500 }}
        snap={{ mass: 3, tension: 500 }}
      >
        <Float rotationIntensity={0.4}>
          <rectAreaLight
            width={2.5}
            height={1.65}
            intensity={65}
            color={"#000000"}
            rotation={[0.1, Math.PI, 0]}
            position={[0, 0.55, -1.15]}
          />
          <primitive object={computer.scene} position-y={-1.2}>
            <Html
              transform
              wrapperClass="htmlScreen"
              distanceFactor={1.17}
              position={[0, 1.56, -1.4]}
              rotation-x={-0.256}
            >
              <iframe src="https://gabrieldevs.com"></iframe>
            </Html>
          </primitive>
          <Text
            font="./bangers-v20-latin-regular.woff"
            fontSize={1}
            position={[2, 0.75, 0.75]}
            maxWidth={2}
            rotation-y={-1.25}
          >
            Gabriel Sirbu
          </Text>
        </Float>
      </PresentationControls>
      <ContactShadows position-y={-1.2} opacity={0.4} scale={5} blur={2.4} />
    </>
  );
}
