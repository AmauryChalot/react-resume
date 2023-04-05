import {useMediaQuery, useTheme} from "@mui/material";
import Box from "@mui/material/Box";
import React, {useEffect, useRef, useState} from "react";
import {CustomCard} from "../../components/Card/CustomCard";
import {ContactCard} from "../../components/ContactCard/ContactCard";
import {DynamicText} from "../../components/DynamicText/DynamicText";
import {ExperienceContent} from "../../components/ExperienceContent/ExperienceContent";
import {ContentType, ExperienceItem} from "../../components/ExperienceContent/ExperienceContent.models";
import {InfoCard} from "../../components/InfoCard/InfoCard";
import {LanguageCard} from "../../components/LanguageCard/LanguageCard";
import {LinkCard} from "../../components/LinkCard/LinkCard";
import {ProjectContent} from "../../components/ProjectContent/ProjectContent";
import {ProjectItem} from "../../components/ProjectContent/ProjectContent.models";
import {SkillCard} from "../../components/SkillCard/SkillCard";
import {SkillSection} from "../../components/SkillCard/SkillCard.models";
import {Appbar} from "../Appbar/Appbar";
import {
    sxAppContainer,
    sxAppContentContainer,
    sxAppContentContainerSmall,
    sxAppContentLeftContainer,
    sxAppContentRightContainer,
    sxPageContainer,
    sxPageContainerLarge,
} from "./App.styles";

function App() {
    const theme = useTheme();
    const isSmall = useMediaQuery(theme.breakpoints.down("md"));
    const isLarge = useMediaQuery(theme.breakpoints.up("md"));

    //all refs
    const containerRef = useRef<HTMLDivElement | null>(null);
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
    const infoRef = useRef<HTMLDivElement | null>(null);
    const [infoIsVisible, setInfoIsVisible] = useState<boolean>(false);
    const languageRef = useRef<HTMLDivElement | null>(null);
    const [languageIsVisible, setLanguageIsVisible] = useState<boolean>(false);

    useEffect(() => {
        containerRef.current?.focus();
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
        infoRef.current?.focus();
        const infoObserver = new IntersectionObserver((entries) => {
            const entry = entries[0];
            setInfoIsVisible(entry.isIntersecting);
        });
        if (infoRef.current) infoObserver.observe(infoRef.current);
        languageRef.current?.focus();
        const languageObserver = new IntersectionObserver((entries) => {
            const entry = entries[0];
            setLanguageIsVisible(entry.isIntersecting);
        });
        if (languageRef.current) languageObserver.observe(languageRef.current);
    }, []);

    const content: string[] = [
        "Donec tincidunt sapien vitae risus gravida dapibus. Curabitur quis euismod arcu. Nulla non arcu tempus felis aliquet hendrerit. Quisque dictum diam libero, vitae vulputate lacus maximus vitae. Aliquam id libero velit. Morbi risus nisi, maximus sed lacinia et, porta ac nisl. Phasellus mi massa, sagittis quis faucibus eu, dapibus at ex. In eget metus ligula. Curabitur enim elit, ultrices nec sem ac, gravida varius eros. Donec posuere id arcu a tristique. In sagittis maximus odio, eget tincidunt mauris volutpat pharetra. Donec nec lobortis ante. Sed leo sapien, commodo at viverra in, vehicula sit amet nisl. Nulla a velit nec ipsum hendrerit ultrices ut at orci.",
        "Vestibulum rutrum sed arcu id dignissim. Nulla facilisi. Proin sed tristique velit, vitae placerat metus. Nulla facilisi. Phasellus quis bibendum odio. Etiam id accumsan risus. Suspendisse potenti. In lacinia eleifend elementum. Pellentesque non aliquam metus, gravida ultrices neque. Cras accumsan auctor gravida. Aenean vehicula quam finibus malesuada commodo. Quisque dignissim velit a nisl interdum, a rhoncus leo tempus. Morbi vehicula venenatis nibh, et consequat dolor lacinia vel. Suspendisse eget nulla sed leo efficitur facilisis sit amet non felis. Sed at leo nisl. Praesent ac purus sed ante venenatis tristique sed id ligula. Quisque felis libero, pellentesque ut pulvinar quis, ornare a nisi. Sed ullamcorper lorem quis consectetur tristique. Proin ligula lorem, feugiat at mi at, dignissim semper sem. Proin a fermentum neque. Donec ut ante lectus. Donec sed lacus non nisl rutrum eleifend vel nec turpis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras et eros imperdiet, consequat quam vel, tincidunt orci. Vivamus ut lobortis nisl, sed varius massa. Suspendisse faucibus lectus eu sapien faucibus posuere.",
    ];

    const experiences: ExperienceItem[] = [
        {
            title: "experience-1-title",
            subTitle: "experience-1-subTitle",
            info: "experience-1-info",
            content: [
                {type: ContentType.TEXT, content: "experience-1-content-1"},
                {
                    type: ContentType.LIST,
                    content: [
                        "experience-1-content-2",
                        "experience-1-content-3",
                        "experience-1-content-4",
                    ],
                },
                {type: ContentType.TEXT, content: "experience-1-content-5"},
            ],
        },
        {
            title: "experience-2-title",
            subTitle: "experience-2-subTitle",
            info: "experience-2-info",
            content: [
                {type: ContentType.TEXT, content: "experience-2-content-1"},
                {
                    type: ContentType.LIST,
                    content: ["experience-2-content-2", "experience-2-content-3"],
                },
                {type: ContentType.TEXT, content: "experience-2-content-4"},
            ],
        },
        {
            title: "experience-3-title",
            subTitle: "experience-3-subTitle",
            info: "experience-3-info",
            content: [
                {type: ContentType.TEXT, content: "experience-3-content-1"},
                {
                    type: ContentType.LIST,
                    content: ["experience-3-content-2", "experience-3-content-3"],
                },
                {
                    type: ContentType.TEXT,
                    content: "experience-3-content-4",
                },
            ],
        },
    ];

    const skills: SkillSection[] = [
        {
            title: "skill-1-title",
            content: [
                "skill-1-content-1",
                "skill-1-content-2",
                "skill-1-content-3",
                "skill-1-content-4",
            ],
        },
        {
            title: "skill-2-title",
            content: [
                "skill-2-content-1",
                "skill-2-content-2",
                "skill-2-content-3",
                "skill-2-content-4",
                "skill-2-content-5",
            ],
        },
        {
            title: "skill-3-title",
            content: [
                "skill-3-content-1",
                "skill-3-content-2",
                "skill-3-content-3",
                "skill-3-content-4",
                "skill-3-content-5",
            ],
        },
        {
            title: "skill-4-title",
            content: [
                "skill-4-content-1",
                "skill-4-content-2",
                "skill-4-content-3",
                "skill-4-content-4",
            ],
        },
        {
            title: "skill-5-title",
            content: [
                "skill-5-content-1",
                "skill-5-content-2",
                "skill-5-content-3",
                "skill-5-content-4",
            ],
        },
    ];

    const projects: ProjectItem[] = [
        {
            title: "project-1-title",
            info: "project-1-info",
            content: [
                { type: ContentType.TEXT, content: "project-1-content-1" },
                { type: ContentType.TEXT, content: "project-1-content-2" },
                { type: ContentType.TEXT, content: "project-1-content-3" },
            ],
        },
        {
            title: "project-2-title",
            info: "project-2-info",
            content: [
                { type: ContentType.TEXT, content: "project-2-content-1" },
                { type: ContentType.TEXT, content: "project-2-content-2" },
                { type: ContentType.TEXT, content: "project-2-content-3" },
            ],
        },
        {
            title: "project-3-title",
            info: "project-3-info",
            content: [
                {type: ContentType.TEXT, content: "project-3-content-1"},
            ],
        },
    ];

    const [scrolledSections, setScrolledSections] = useState<number>(0);

    return (
        <React.Fragment>
            <Box
                sx={isLarge ? sxPageContainerLarge : sxPageContainer}
                ref={containerRef}
            >
                <Appbar
                    scrolledSectionsState={[scrolledSections, setScrolledSections]}
                />
                <Box sx={sxAppContainer} maxWidth={isSmall ? "sm" : "xl"}>
                    <section
                        ref={aboutRef}
                        style={{
                            transition: "opacity 0.3s ease-in-out",
                            opacity: aboutIsVisible ? 1 : 0,
                            width: "100%",
                        }}
                    >
                        <ContactCard
                            index={0}
                            containerRef={containerRef}
                            scrolledSectionsState={[scrolledSections, setScrolledSections]}
                        />
                    </section>
                    <Box
                        sx={isSmall ? sxAppContentContainerSmall : sxAppContentContainer}
                    >
                        <Box sx={sxAppContentLeftContainer}>
                            <section
                                ref={experienceRef}
                                style={{
                                    transition: "opacity 0.3s ease-in-out 0.2s",
                                    opacity: experienceIsVisible ? 1 : 0,
                                }}
                            >
                                <CustomCard
                                    id={"experiences"}
                                    title={<DynamicText textId={"experiences"}/>}
                                    content={<ExperienceContent experiences={experiences}/>}
                                    index={1}
                                    containerRef={containerRef}
                                    scrolledSectionsState={[
                                        scrolledSections,
                                        setScrolledSections,
                                    ]}
                                />
                            </section>
                            <section
                                ref={projectRef}
                                style={{
                                    transition: "opacity 0.3s ease-in-out 0.2s",
                                    opacity: projectIsVisible ? 1 : 0,
                                }}
                            >
                                <CustomCard
                                    id={"projects"}
                                    title={<DynamicText textId={"projects"}/>}
                                    content={<ProjectContent projects={projects}/>}
                                    index={2}
                                    containerRef={containerRef}
                                    scrolledSectionsState={[
                                        scrolledSections,
                                        setScrolledSections,
                                    ]}
                                />
                            </section>
                        </Box>
                        <Box sx={sxAppContentRightContainer}>
                            <section
                                ref={contactRef}
                                style={{
                                    transition: "opacity 0.3s ease-in-out 0.1s",
                                    opacity: contactIsVisible ? 1 : 0,
                                }}
                            >
                                <LinkCard/>
                            </section>
                            <section
                                ref={infoRef}
                                style={{
                                    transition: "opacity 0.3s ease-in-out 0.2s",
                                    opacity: infoIsVisible ? 1 : 0,
                                }}
                            >
                                <InfoCard/>
                            </section>
                            <section
                                ref={skillRef}
                                style={{
                                    transition: "opacity 0.3s ease-in-out 0.2s",
                                    opacity: skillIsVisible ? 1 : 0,
                                }}
                            >
                                <SkillCard skills={skills} id={"skills"}/>
                            </section>
                            <section
                                ref={languageRef}
                                style={{
                                    transition: "opacity 0.3s ease-in-out 0.2s",
                                    opacity: languageIsVisible ? 1 : 0,
                                }}
                            >
                                <LanguageCard/>
                            </section>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </React.Fragment>
    );
}

export default App;
