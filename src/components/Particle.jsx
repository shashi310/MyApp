import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

import htmlIcon from "../icons/html-icon.svg";
import cssIcon from "../icons/css-icon.svg";
import emailIcon from "../icons/email-icon.svg";
import githubIcon from "../icons/github.svg";
import jsIcon from "../icons/js-icon.svg";
import linkedinIcon from "../icons/linkedin-icon.svg";
import nodeIcon from "../icons/node-icon.svg";
import phoneIcon from "../icons/phone-icon.svg";
import reactIcon from "../icons/react-icon.svg";
import typescriptIcon from "../icons/typescript-icon.svg";
import vscodeIcon from "../icons/vscode-icon.svg";

const Particle = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    // await console.log(container);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: "black",
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: false,
              mode: "push",
            },
            onHover: {
              enable: false,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "green",
          },
          links: {
            color: "#ffff",
            distance: 150,
            enable: true,
            opacity: 0,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "random",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: false,
              area: 800,
            },
            value: 20,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "image",
            image: [
              {
                src: htmlIcon,
                width: 20,
                height: 20,
              },
              {
                src: cssIcon,
                width: 20,
                height: 20,
              },
              {
                src: emailIcon,
                width: 20,
                height: 20,
              },
              {
                src: githubIcon,
                width: 20,
                height: 20,
              },
              {
                src: jsIcon,
                width: 20,
                height: 20,
              },
              {
                src: linkedinIcon,
                width: 20,
                height: 20,
              },
              {
                src: nodeIcon,
                width: 20,
                height: 20,
              },
              {
                src: phoneIcon,
                width: 20,
                height: 20,
              },
              {
                src: reactIcon,
                width: 20,
                height: 20,
              },
              {
                src: typescriptIcon,
                width: 20,
                height: 20,
              },
              {
                src: vscodeIcon,
                width: 20,
                height: 20,
              },
            ],
            polygon: {
              sides: 5,
            },
            stroke: {
              color: "#000000",
              width: 20,
            },
          },
          size: {
            value: { min: 10, max: 20 },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default Particle;
