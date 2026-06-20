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
	const baseUrl = "https://lazyfoxxes-portfolio.vercel.app";

	if (!service) {
		return { title: "Service Not Found | LazyFoxxes" };
	}

	return {
		title: `${service.title} | LazyFoxxes`,
		description: service.description,
		keywords: [service.title, "LazyFoxxes", "web development", "digital services", "Islamabad"],
		openGraph: {
			url: `${baseUrl}/services/${service.slug}`,
			title: `${service.title} | LazyFoxxes`,
			description: service.tagline,
			type: "website",
			images: [
				{
					url: `${baseUrl}/logo.png`,
					width: 1200,
					height: 630,
					alt: `${service.title} | LazyFoxxes`,
				},
			],
		},
		twitter: {
			card: "summary_large_image",
			title: `${service.title} | LazyFoxxes`,
			description: service.tagline,
			images: [`${baseUrl}/logo.png`],
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
