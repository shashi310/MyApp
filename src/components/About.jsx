import {
  Box,
  Button,
  Container,
  HStack,
  Heading,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import aboutAnime from "./aboutAnime.gif";
import { FaReact } from "react-icons/fa";

//AOS
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const About = () => {
  return (
    <Box
      id="about"
      className="about section"
      bg={"#1E1842"}
      // padding={"120px 0px 0px 0px"}
    >
      <div data-aos="fade-up">
        <Container maxW={{ base: "90%", md: "90%", lg: "8xl" }} padding={"0px"}>
          <HStack justifyContent={"center"} marginBottom={"50px"}>
            <Heading color={"#C651CD"} textAlign={"center"}>
              About
            </Heading>
            <Heading color={"white"} textAlign={"center"}>
              Me
            </Heading>
          </HStack>
          <Stack
            direction={{ base: "column", md: "column", lg: "row" }}
            spacing={"20px"}
          >
            <Image src={aboutAnime} />
            <VStack
              spacing={"20px"}
              w={{ base: "100%", md: "80%", lg: "90%" }}
              m={"auto"}
            >
              <div data-aos="fade-up">
                <HStack
                  alignItems={"flex-start"}
                  justifyContent={"flex-start"}
                  spacing={"10px"}
                >
                  <Box marginTop={"5px"}>
                    <FaReact color="#C651CD" fontSize={"20px"} />
                  </Box>
                  <Text
                    id="user-detail-intro"
                    color={"white"}
                    textAlign={"justify"}
                  >
                    As a results-oriented Full Stack Web Developer, I leverage my proficiency in both Frontend and Backend, honed through intensive training at Masai School. Backed by a portfolio highlighting accomplished web applications and four significant projects, I have cultivated robust teamwork and communication abilities.
                  </Text>
                </HStack>
              </div>

              <div data-aos="fade-up">
                <HStack
                  alignItems={"flex-start"}
                  justifyContent={"flex-start"}
                  spacing={"10px"}
                >
                  <Box marginTop={"5px"}>
                    <FaReact color="#C651CD" fontSize={"20px"} />
                  </Box>
                  <Text color={"white"} textAlign={"justify"}>
                  Presently, I am eager to channel my skills into a Full Stack Web Developer position, actively adding value to cutting-edge endeavors and crafting user-friendly solutions. Let's partner to craft extraordinary web experiences and propel innovation in the digital sphere.
                  </Text>
                </HStack>
              </div>
            </VStack>
          </Stack>
        </Container>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#0F1624"
            fill-opacity="1"
            d="M0,256L48,261.3C96,267,192,277,288,272C384,267,480,245,576,229.3C672,213,768,203,864,213.3C960,224,1056,256,1152,266.7C1248,277,1344,267,1392,261.3L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </Box>
  );
};

export default About;
