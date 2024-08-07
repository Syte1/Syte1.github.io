import React from "react";
import CoursesSection from "../components/courses";
import {
	AboutSection,
	ContactSection,
	HeroSection,
	InterestsSection,
	Page,
	ProjectsSection,
	Seo,
} from "gatsby-theme-portfolio-minimal";

export default function IndexPage() {
	return (
		<>
			<Seo title="Portfolio - Belal Kourkmas" />
			<Page useSplashScreenAnimation>
				<HeroSection sectionId="hero" />
				<AboutSection sectionId="about" heading="About me" />
				<InterestsSection sectionId="details" heading="Skills" />
				<ProjectsSection sectionId="projects" heading="Projects" />
				<CoursesSection sectionId="courses" heading="Courses" />
				<ContactSection
					sectionId="github"
					heading="Looking for a dev?"
				/>
			</Page>
		</>
	);
}
