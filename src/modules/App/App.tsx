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

  const content: string[] = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id ante orci. Morbi vulputate egestas elit, et feugiat est finibus quis. Suspendisse maximus nunc ut ante pharetra, at porttitor tortor dignissim. Maecenas libero erat, sagittis ac massa rutrum, egestas feugiat erat. Suspendisse ut erat euismod, rutrum leo a, consequat quam. Cras hendrerit a est a accumsan. Etiam rutrum sem erat, sed porttitor lectus ultricies et. Vestibulum eleifend quis arcu sit amet egestas. Fusce malesuada justo quis pellentesque blandit. Donec convallis ipsum sed odio venenatis placerat. Nam eget nulla in libero cursus congue ut id arcu. Vestibulum rutrum sed arcu id dignissim. Nulla facilisi. Proin sed tristique velit, vitae placerat metus. Nulla facilisi. Phasellus quis bibendum odio. Etiam id accumsan risus. Suspendisse potenti. In lacinia eleifend elementum. Pellentesque non aliquam metus, gravida ultrices neque. Cras accumsan auctor gravida. Aenean vehicula quam finibus malesuada commodo. Quisque dignissim velit a nisl interdum, a rhoncus leo tempus. Morbi vehicula venenatis nibh, et consequat dolor lacinia vel. Suspendisse eget nulla sed leo efficitur facilisis sit amet non felis. Sed at leo nisl. Praesent ac purus sed ante venenatis tristique sed id ligula.",
    "Donec tincidunt sapien vitae risus gravida dapibus. Curabitur quis euismod arcu. Nulla non arcu tempus felis aliquet hendrerit. Quisque dictum diam libero, vitae vulputate lacus maximus vitae. Aliquam id libero velit. Morbi risus nisi, maximus sed lacinia et, porta ac nisl. Phasellus mi massa, sagittis quis faucibus eu, dapibus at ex. In eget metus ligula. Curabitur enim elit, ultrices nec sem ac, gravida varius eros. Donec posuere id arcu a tristique. In sagittis maximus odio, eget tincidunt mauris volutpat pharetra. Donec nec lobortis ante. Sed leo sapien, commodo at viverra in, vehicula sit amet nisl. Nulla a velit nec ipsum hendrerit ultrices ut at orci.",
    "Vestibulum rutrum sed arcu id dignissim. Nulla facilisi. Proin sed tristique velit, vitae placerat metus. Nulla facilisi. Phasellus quis bibendum odio. Etiam id accumsan risus. Suspendisse potenti. In lacinia eleifend elementum. Pellentesque non aliquam metus, gravida ultrices neque. Cras accumsan auctor gravida. Aenean vehicula quam finibus malesuada commodo. Quisque dignissim velit a nisl interdum, a rhoncus leo tempus. Morbi vehicula venenatis nibh, et consequat dolor lacinia vel. Suspendisse eget nulla sed leo efficitur facilisis sit amet non felis. Sed at leo nisl. Praesent ac purus sed ante venenatis tristique sed id ligula. Quisque felis libero, pellentesque ut pulvinar quis, ornare a nisi. Sed ullamcorper lorem quis consectetur tristique. Proin ligula lorem, feugiat at mi at, dignissim semper sem. Proin a fermentum neque. Donec ut ante lectus. Donec sed lacus non nisl rutrum eleifend vel nec turpis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras et eros imperdiet, consequat quam vel, tincidunt orci. Vivamus ut lobortis nisl, sed varius massa. Suspendisse faucibus lectus eu sapien faucibus posuere.",
  ];

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
              <CustomCard
                id={"experiences"}
                title={"Experiences"}
                content={content[0]}
              />
            </section>

            <section
              ref={skillRef}
              style={{
                transition: "opacity 0.2s ease-in-out 0.3s",
                opacity: skillIsVisible ? 1 : 0,
              }}
            >
              <CustomCard id={"skills"} title={"Skills"} content={content[1]} />
            </section>
            <section
              ref={projectRef}
              style={{
                transition: "opacity 0.2s ease-in-out 0.4s",
                opacity: projectIsVisible ? 1 : 0,
              }}
            >
              <CustomCard
                id={"projects"}
                title={"Projects"}
                content={content[2]}
              />
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
