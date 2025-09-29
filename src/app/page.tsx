import { Home as HomeSection, Services, Skills, Projects, Contact, About } from "@/sections";

export default function Home() {
	return (
		<>
			<HomeSection />
			<Services />
			<Skills />
			<About />
			<Projects />
			<Contact />
		</>
	);
}
