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
import { FaGithub, FaRegPaperPlane } from "react-icons/fa";

//image
import FitQuest from "../Images/project1.png";
import Notes from "../Images/project2.png";
import PillReminder from "../Images/project3.png";
import Portfolio from "../Images/project4.png";

const Projects = () => {
  return (
    <Box
      id="projects"
      bg={"#1E1842"}
      // padding={"120px 0px 0px 0px"}
    >
      <div data-aos="fade-up">
        <HStack justifyContent={"center"} marginBottom={"100px"}>
          <Heading color={"#C651CD"} textAlign={"center"}>
            My
          </Heading>
          <Heading color={"white"} textAlign={"center"}>
            Projects
          </Heading>
        </HStack>
        <Container
          maxW={{ base: "95%", md: "90%", lg: "85%", xl:"7xl" }}
          display={"flex"}
          flexDirection={"column"}
          gap={"50px"}
        >
          <div data-aos="flip-up">
            <Stack
              className="project-card"
              maxW={{ base: "100%", md: "90%", lg: "90%", xl: "100%" }}
              margin={"auto"}
              flexDirection={{
                base: "column",
                md: "column",
                lg: "column",
                xl: "row",
              }}
              bg={"white"}
              borderRadius={"11px"}
              boxShadow={"rgb(26, 194, 228) 0px 5px 15px 0px"}
              transition={".3s ease-in-out 0s"}
              _hover={{
                transform: "scale(1.02)",
              }}
            >
              <Image
                width={{ base: "100%", md: "100%", lg: "100%", xl: "700px" }}
                objectFit={"cover"}
                src={FitQuest}
                alt="FitQuest"
                borderRadius={{
                  base: "10px 10px 0px 0px",
                  md: "10px 10px 0px 0px",
                  lg: "10px 10px 0px 0px",
                  xl: "10px 0px 0px 10px",
                }}
              />
              <VStack
                padding={{
                  base: "15px 15px",
                  md: "20px 30px",
                  lg: "20px 30px",
                }}
                spacing={"10px"}
                justifyContent={"space-between"}
              >
                <Heading
                  fontSize={"22px"}
                  color={"#C651CD"}
                  className="project-title"
                >
                  LeafyMart
                </Heading>
                <Text className="project-description" textAlign={"justify"}>
                Embark on a journey of garden enchantment through our user-friendly web app. Driven by React and Chakra UI, it harmoniously guides you in acquiring seeds, fertilizers, and flowers, elevating your nurturing endeavors.
                </Text>
                <VStack>
                  <Text
                    className="project-tech-stack"
                    fontWeight={"bold"}
                    color={"#C651CD"}
                  >
                    Tech Stacks
                  </Text>
                  <Text fontSize={"15px"}>
                    HTML5 | CSS3 | JavaScript | React | Redux | Chakra UI |
                    Thunk | Axios | Node Js | Express JS | MongoDB | Mongoose |
                    Bcrypt | JsonWebToken{" "}
                  </Text>
                </VStack>
                <HStack spacing={"50px"} marginTop={"20px"}>
                  <Button
                    className="project-github-link"
                    bg={"#0F1624"}
                    color={"white"}
                    leftIcon={<FaGithub />}
                    _hover={{
                      background: "black",
                    }}
                    onClick={() => {
                      window.open(
                        "https://github.com/shashi310/habitual-oatmeal-3228"
                      );
                    }}
                  >
                    Code
                  </Button>
                  <Button
                    className="project-deployed-link"
                    colorScheme="green"
                    variant={"outline"}
                    leftIcon={<FaRegPaperPlane />}
                    _hover={{
                      color: "white",
                      background: "green",
                    }}
                    onClick={() => {
                      window.open(
                        "https://648fd6f1bb4a661c5b46aad1--timely-mooncake-09ad75.netlify.app/",
                        "_blank"
                      );
                    }}
                  >
                    Live
                  </Button>
                </HStack>
              </VStack>
            </Stack>
          </div>

          <div data-aos="flip-up">
            <Stack
              className="project-card"
              maxW={{ base: "100%", md: "90%", lg: "90%", xl: "100%" }}
              margin={"auto"}
              flexDirection={{
                base: "column",
                md: "column",
                lg: "column",
                xl: "row",
              }}
              bg={"white"}
              borderRadius={"11px"}
              boxShadow={"rgb(26, 194, 228) 0px 5px 15px 0px"}
              transition={".3s ease-in-out 0s"}
              _hover={{
                transform: "scale(1.02)",
              }}
            >
              <Image
                width={{ base: "100%", md: "100%", lg: "100%", xl: "700px" }}
                objectFit={"cover"}
                src={Notes}
                alt="Notes"
                borderRadius={{
                  base: "10px 10px 0px 0px",
                  md: "10px 10px 0px 0px",
                  lg: "10px 10px 0px 0px",
                  xl: "10px 0px 0px 10px",
                }}
              />
              <VStack
                padding={{
                  base: "15px 15px",
                  md: "20px 30px",
                  lg: "20px 30px",
                }}
                spacing={"10px"}
                justifyContent={"space-between"}
              >
                <Heading
                  fontSize={"22px"}
                  color={"#C651CD"}
                  className="project-title"
                >
                  Credit Folio
                </Heading>
                <Text className="project-description" textAlign={"justify"}>
                The CREDIT-FOLIO React App is a modern web application designed to manage credit scores and related data. This application is developed by a team of three talented developers: Anshul Kushwah,Shashikant Yadav, and Shivam Verma.
                </Text>
                <VStack>
                  <Text
                    className="project-tech-stack"
                    fontWeight={"bold"}
                    color={"#C651CD"}
                  >
                    Tech Stacks
                  </Text>
                  <Text fontSize={"15px"}>
                    HTML5 | CSS3 | JavaScript | React | Redux | Chakra UI |
                    Thunk | Axios | JsonWebToken{" "}
                  </Text>
                </VStack>
                <HStack spacing={"50px"} marginTop={"20px"}>
                  <Button
                    className="project-github-link"
                    bg={"#0F1624"}
                    color={"white"}
                    leftIcon={<FaGithub />}
                    _hover={{
                      background: "black",
                    }}
                    onClick={() => {
                      window.open(
                        "https://github.com/shashi310/quixotic-snail-9802",
                        "_blank"
                      );
                    }}
                  >
                    Code
                  </Button>
                  <Button
                    className="project-deployed-link"
                    colorScheme="green"
                    variant={"outline"}
                    leftIcon={<FaRegPaperPlane />}
                    _hover={{
                      color: "white",
                      background: "green",
                    }}
                    onClick={() => {
                      window.open("https://roaring-axolotl-876ede.netlify.app/", "_blank");
                    }}
                  >
                    Live
                  </Button>
                </HStack>
              </VStack>
            </Stack>
          </div>

          <div data-aos="flip-up">
            <Stack
              className="project-card"
              maxW={{ base: "100%", md: "90%", lg: "90%", xl: "100%" }}
              margin={"auto"}
              flexDirection={{
                base: "column",
                md: "column",
                lg: "column",
                xl: "row",
              }}
              bg={"white"}
              borderRadius={"11px"}
              boxShadow={"rgb(26, 194, 228) 0px 5px 15px 0px"}
              transition={".3s ease-in-out 0s"}
              _hover={{
                transform: "scale(1.02)",
              }}
            >
              <Image
                width={{ base: "100%", md: "100%", lg: "100%", xl: "700px" }}
                objectFit={"cover"}
                src={PillReminder}
                alt="PillAlert"
                borderRadius={{
                  base: "10px 10px 0px 0px",
                  md: "10px 10px 0px 0px",
                  lg: "10px 10px 0px 0px",
                  xl: "10px 0px 0px 10px",
                }}
              />
              <VStack
                padding={{
                  base: "15px 15px",
                  md: "20px 30px",
                  lg: "20px 30px",
                }}
                spacing={"10px"}
                justifyContent={"space-between"}
              >
                <Heading
                  fontSize={"22px"}
                  color={"#C651CD"}
                  className="project-title"
                >
                  Buy from Us
                </Heading>
                <Text className="project-description" textAlign={"justify"}>
                A Web Application designed  as B2B E-commerce Platform. explore options from 10 lac plus products, 40 plus B2B categories. Top-Notch Brands | 100% Quality Assured Products | Easy Returns & Replacement and many more.
                </Text>
                <VStack>
                  <Text
                    className="project-tech-stack"
                    fontWeight={"bold"}
                    color={"#C651CD"}
                  >
                    Tech Stacks
                  </Text>
                  <Text fontSize={"15px"}>
                    HTML5 | CSS3 | JavaScript | JSON server 
                  </Text>
                </VStack>
                <HStack spacing={"50px"} marginTop={"20px"}>
                  <Button
                    className="project-github-link"
                    bg={"#0F1624"}
                    color={"white"}
                    leftIcon={<FaGithub />}
                    _hover={{
                      background: "black",
                    }}
                    onClick={() => {
                      window.open(
                        "https://github.com/shashi310/hunky-potato-4915",
                        "_blank"
                      );
                    }}
                  >
                    Code
                  </Button>
                  <Button
                    className="project-deployed-link"
                    colorScheme="green"
                    variant={"outline"}
                    leftIcon={<FaRegPaperPlane />}
                    _hover={{
                      color: "white",
                      background: "green",
                    }}
                    onClick={() => {
                      window.open(
                        "https://bbuyfromus.netlify.app/",
                        "_blank"
                      );
                    }}
                  >
                    Live
                  </Button>
                </HStack>
              </VStack>
            </Stack>
          </div>

          <div data-aos="flip-up">
            <Stack
              className="project-card"
              maxW={{ base: "100%", md: "90%", lg: "90%", xl: "100%" }}
              margin={"auto"}
              flexDirection={{
                base: "column",
                md: "column",
                lg: "column",
                xl: "row",
              }}
              bg={"white"}
              borderRadius={"11px"}
              boxShadow={"rgb(26, 194, 228) 0px 5px 15px 0px"}
              transition={".3s ease-in-out 0s"}
              _hover={{
                transform: "scale(1.02)",
              }}
            >
              <Image
                width={{ base: "100%", md: "100%", lg: "100%", xl: "700px" }}
                objectFit={"cover"}
                src={Portfolio}
                alt="portfolio"
                borderRadius={{
                  base: "10px 10px 0px 0px",
                  md: "10px 10px 0px 0px",
                  lg: "10px 10px 0px 0px",
                  xl: "10px 0px 0px 10px",
                }}
              />
              <VStack
                padding={{
                  base: "15px 15px",
                  md: "20px 30px",
                  lg: "20px 30px",
                }}
                spacing={"10px"}
                justifyContent={"space-between"}
              >
                <Heading
                  fontSize={"22px"}
                  color={"#C651CD"}
                  className="project-title"
                >
                  MedMarket
                </Heading>
                <Text className="project-description" textAlign={"justify"}>
                Discover comprehensive medical solutions through our versatile web application. Addressing your every healthcare requirement with convenience and precision, we strive to enhance your well-being effectively and efficiently
                </Text>
                <VStack>
                  <Text
                    className="project-tech-stack"
                    fontWeight={"bold"}
                    color={"#C651CD"}
                  >
                    Tech Stacks
                  </Text>
                  <Text fontSize={"15px"}>
                    HTML5 | CSS3 | JavaScript | React | Chakra UI
                  </Text>
                </VStack>
                <HStack spacing={"50px"} marginTop={"20px"}>
                  <Button
                    className="project-github-link"
                    bg={"#0F1624"}
                    color={"white"}
                    leftIcon={<FaGithub />}
                    _hover={{
                      background: "black",
                    }}
                    onClick={() => {
                      window.open(
                        "https://github.com/shashi310/frantic-zoo-5736",
                        "_blank"
                      );
                    }}
                  >
                    Code
                  </Button>
                  <Button
                    className="project-deployed-link"
                    colorScheme="green"
                    variant={"outline"}
                    leftIcon={<FaRegPaperPlane />}
                    _hover={{
                      color: "white",
                      background: "green",
                    }}
                    onClick={() => {
                      window.open("https://darling-peony-9dd335.netlify.app/", "_blank");
                    }}
                  >
                    Live
                  </Button>
                </HStack>
              </VStack>
            </Stack>
          </div>
          
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

export default Projects;
