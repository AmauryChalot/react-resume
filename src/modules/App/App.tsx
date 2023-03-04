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

  const myRef = useRef<HTMLDivElement | null>(null);
  const [myRefIsVisible, setMyRefIsVisible] = useState<boolean>(false);

  useEffect(() => {
    myRef.current?.focus();
    // const observer = new IntersectionObserver((entries) => {
    //   const entry = entries[0];
    //   setMyRefIsVisible(entry.isIntersecting);
    //   console.log(entry);
    // });
    // if (myRef.current) observer.observe(myRef.current);
    const handleScroll = (e: Event) => {
      if (window.scrollY >= 0 && window.scrollY <= window.innerHeight / 4) {
        // Set states for nav items here if the user is on the first section
        setMyRefIsVisible(false);
      } else if (
        myRef.current &&
        myRef.current.offsetTop - window.scrollY < window.innerHeight / 2
      ) {
        setMyRefIsVisible(true);
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [window.scrollY]);

  // useEffect(() => {
  //   console.log(myRefIsVisible);
  // }, [myRefIsVisible]);

  return (
    <Box sx={sxPageContainer}>
      <Appbar />
      <Box sx={sxAppContainer}>
        <section>
          <ContactCard />
        </section>
        <Box sx={isSmall ? sxAppContentContainerSmall : sxAppContentContainer}>
          <Box sx={sxAppContentLeftContainer}>
            <section>
              <CustomCard id={"experiences"} title={"Experiences"} />
            </section>

            <section ref={myRef}>
              <CustomCard
                id={"skills"}
                highlighted={myRefIsVisible}
                title={"Skills"}
              />
            </section>
            <section>
              <CustomCard id={"projects"} title={"Projects"} />
            </section>
          </Box>
          <Box sx={sxAppContentRightContainer}>
            <section>
              <LinkCard />
            </section>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default App;
