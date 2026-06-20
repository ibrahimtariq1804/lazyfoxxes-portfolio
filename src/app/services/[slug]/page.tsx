import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServicePageContent } from "@/components/ServicePageContent";
import { getAllServiceSlugs, getServiceBySlug } from "@/lib/services";

type ServicePageProps = {
	params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
	return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
	const { slug } = await params;
	const service = getServiceBySlug(slug);

	if (!service) {
		return { title: "Service Not Found | LazyFoxxes" };
	}

	return {
		title: `${service.title} | LazyFoxxes`,
		description: service.description,
		openGraph: {
			title: `${service.title} | LazyFoxxes`,
			description: service.tagline,
			type: "website",
		},
	};
}

export default async function ServicePage({ params }: ServicePageProps) {
	const { slug } = await params;
	const service = getServiceBySlug(slug);

	if (!service) {
		notFound();
	}

	return <ServicePageContent service={service} />;
}
