import { useMediaQuery, useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import { CustomCard } from "../../components/Card/CustomCard";
import { ContactCard } from "../../components/ContactCard/ContactCard";
import { LinkCard } from "../../components/LinkCard/LinkCard";
import { Appbar } from "../Appbar/Appbar";
import {
  sxAppContainer,
  sxAppContentContainer,
  sxAppContentContainerSmall,
  sxAppContentLeftContainer,
  sxAppContentRightContainer,
  sxPageContainer,
} from "./App.styles";
import { useRef, useEffect, useState } from "react";
import { SidePanel } from "../../components/SidePanel/SidePanel";

function App() {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("md"));

  //all refs
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const [aboutIsVisible, setAboutIsVisible] = useState<boolean>(false);
  const experienceRef = useRef<HTMLDivElement | null>(null);
  const [experienceIsVisible, setExperienceIsVisible] =
    useState<boolean>(false);
  const skillRef = useRef<HTMLDivElement | null>(null);
  const [skillIsVisible, setSkillIsVisible] = useState<boolean>(false);
  const projectRef = useRef<HTMLDivElement | null>(null);
  const [projectIsVisible, setProjectIsVisible] = useState<boolean>(false);
  const contactRef = useRef<HTMLDivElement | null>(null);
  const [contactIsVisible, setContactIsVisible] = useState<boolean>(false);

  useEffect(() => {
    aboutRef.current?.focus();
    const aboutObserver = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setAboutIsVisible(entry.isIntersecting);
    });
    if (aboutRef.current) aboutObserver.observe(aboutRef.current);
    experienceRef.current?.focus();
    const experienceObserver = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setExperienceIsVisible(entry.isIntersecting);
    });
    if (experienceRef.current)
      experienceObserver.observe(experienceRef.current);
    skillRef.current?.focus();
    const skillObserver = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setSkillIsVisible(entry.isIntersecting);
    });
    if (skillRef.current) skillObserver.observe(skillRef.current);
    projectRef.current?.focus();
    const projectObserver = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setProjectIsVisible(entry.isIntersecting);
    });
    if (projectRef.current) projectObserver.observe(projectRef.current);
    contactRef.current?.focus();
    const contactObserver = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setContactIsVisible(entry.isIntersecting);
    });
    if (contactRef.current) contactObserver.observe(contactRef.current);
  }, []);

  return (
    <Box sx={sxPageContainer}>
      <Appbar />
      <Box sx={sxAppContainer}>
        <section
          ref={aboutRef}
          style={{
            transition: "opacity 0.2s ease-in-out",
            opacity: aboutIsVisible ? 1 : 0,
          }}
        >
          <ContactCard />
        </section>
        <Box sx={isSmall ? sxAppContentContainerSmall : sxAppContentContainer}>
          <Box sx={sxAppContentLeftContainer}>
            <section
              ref={experienceRef}
              style={{
                transition: "opacity 0.2s ease-in-out 0.2s",
                opacity: experienceIsVisible ? 1 : 0,
              }}
            >
              <CustomCard id={"experiences"} title={"Experiences"} />
            </section>

            <section
              ref={skillRef}
              style={{
                transition: "opacity 0.2s ease-in-out 0.3s",
                opacity: skillIsVisible ? 1 : 0,
              }}
            >
              <CustomCard id={"skills"} title={"Skills"} />
            </section>
            <section
              ref={projectRef}
              style={{
                transition: "opacity 0.2s ease-in-out 0.4s",
                opacity: projectIsVisible ? 1 : 0,
              }}
            >
              <CustomCard id={"projects"} title={"Projects"} />
            </section>
          </Box>
          <Box sx={sxAppContentRightContainer}>
            <section
              ref={contactRef}
              style={{
                transition: "opacity 0.2s ease-in-out 0.1s",
                opacity: contactIsVisible ? 1 : 0,
              }}
            >
              <LinkCard />
            </section>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default App;
