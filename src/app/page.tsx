import { Home as HomeSection, Company, Services, Skills, Projects, Contact, About, Reviews } from "@/sections";

export default function Home() {
	return (
		<>
			<HomeSection />
			<Company />
			<Services />
			<Skills />
			<About />
			<Projects />
			<Reviews />
			<Contact />
		</>
	);
}
