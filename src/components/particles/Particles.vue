<template>
  <div>
    <!-- shapeType => Available shape types: "circle","edge","triangle", "polygon","star" -->
    <!-- hoverMode => Available hover modes: "grab", "repulse", "bubble" -->
    <!-- clickMode => Available click modes: "push", "remove", "repulse", "bubble" -->
    <vue-particles
      color="#f70000"
      :particleOpacity="0.7"
      :particlesNumber="80"
      shapeType="circle" 
      :particleSize="4"
      linesColor="#f70000"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="150"
      :moveSpeed="7"
      :hoverEffect="true"
      hoverMode="repulse"
      :clickEffect="true"
      clickMode="push"
    />

    <!-- <Particles
      :options="{
        background: {
          color: {
            value: '#0d47a1'
          }
        },
        fpsLimit: 120,
        interactivity: {
          events: {
              onClick: {
                enable: true,
                mode: 'push'
              },
              onHover: {
                enable: true,
                mode: 'repulse'
              },
              resize: true
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 40
            },
            push: {
              quantity: 4
            },
            repulse: {
              distance: 200,
              duration: 0.4
            }
          }
        },
        particles: {
          color: {
            value: '#ffffff'
          },
          links: {
            color: '#ffffff',
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1
          },
          collisions: {
            enable: true
          },
          move: {
            direction: 'none',
            enable: true,
            outMode: 'bounce',
            random: false,
            speed: 6,
            straight: false
          },
          number: {
              density: {
                enable: true,
                area: 800
              },
              value: 80
          },
          opacity: {
            value: 0.5
          },
          shape: {
            type: 'circle'
          },
          size: {
            random: true,
            value: 5
          }
        },
        detectRetina: true
      }"
    /> -->
  </div>
</template>

<script>
// import { loadFull } from "tsparticles";

// const particlesInit = async (engine) => {
//     await loadFull(engine);
// }

// const particlesLoaded = async (container) => {
//     console.log("Particles container loaded", container);
// }

export default {
  name: 'Particles',
}

</script>
