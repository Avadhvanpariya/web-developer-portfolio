import React from 'react';
import Image from 'next/image';

export const ProjectsSection = () => {
	return (
		<section id="work" className="py-12 sm:py-20 px-4 bg-[#161B22] scroll-mt-20">
			<div className="max-w-6xl mx-auto">
				<h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center">Featured Projects</h2>
				<div className="grid gap-8 sm:gap-12 lg:grid-cols-3">
					{[
						{
							title: 'Stallon – Gym & Fitness Website',
							description: 'A modern fitness website showcasing training programs, membership plans, amenities, client transformations, reviews, and inquiry options – all in a clean, user-friendly layout.',
							site: '/stallon/index.html',
							image: '/stallon.png',
						},
						{
							title: 'Fitness With Gomzi',
							description: 'A full-fledged eCommerce website focused on health & fitness. Offers diet and workout plans, fitness and digital marketing courses, ready-made healthy meals, gym equipment, and supplement sales.',
							site: 'https://fggroup.in/fitnesswithgomzi/weight-loss-programs',
							image: '/fitnesswithgomzi.png',
						},
						{
							title: 'Gomzi Consulting Services ',
							description: 'A dynamic and live marketing company website offering services like website design & development, custom ERP software, business management, financial advisory, and marketing solutions. Includes features for course purchases and customer support.',
							site: 'https://gcsconsultant.fggroup.in/',
							image: '/gcsconsultant.png',
						},
						{
							title: 'Kohost – Domain & Hosting Platform Theme ',
							description: 'A static theme designed for domain and hosting services, featuring tools for website optimization, pricing plans, package details, client testimonials, and an affiliate program.',
							site: '/kohost/index.html',
							image: '/kohost.png',
						},
						{
							title: 'Init InfoLogic',
							description: 'A professional WordPress site for a tech company offering ERP systems, custom software, web solutions, and business consulting. Includes active blogs, lead-generating contact form with email notifications, and client-focused service pages.',
							site: 'https://initinfologic.com/',
							image: '/initinfoLogic.png',
						},
						{
							title: 'Rang Color of Soul',
							description: 'A live Shopify website for selling women wear, built with all essential e-commerce features including email marketing, order tracking, shipment handling, and SEO.',
							site: 'https://rangcolorofsoul.com/',
							image: '/rangcolorofsoul.png',
						},
						{
							title: 'Oxy-Burger – Food & Restaurant Landing Page ',
							description: 'A static marketing site for a fast-food restaurant, designed to showcase the menu, highlight special offers, and handle customer inquiries effectively.',
							site: '/oxy-burger/index.html',
							image: '/oxy-burger.png',
						},
						{
							title: 'Guru Logistics',
							description: 'A live WordPress site showcasing logistics and cargo services, with service listings, branch info, client reviews, and a contact form with email integration for lead generation.',
							site: 'https://gurulogistics.co/',
							image: '/gurulogistics.png',
						},
						{
							title: 'Krishiv Physiotherapy – Wellness & Recovery',
							description: 'A lead-generation site for physiotherapy and wellness services, highlighting treatments, weight loss programs, customer reviews, and support contact.',
							site: 'public/krishivphysio/index.html',
							image: '/krishivphysio.png',
						},
						{
							title: 'Aayush Organic – Herbal Products & Wellness Store ',
							description: 'A marketing-focused site for a real herbal manufacturer featuring product listings, contact forms, and a working payment system to support customer inquiries and orders.',
							site: '/aayushorganic/index.html',
							image: '/aayushorganic.png',
						},
					].map((project) => (
						// <div key={project.title} className="bg-[#21262D] rounded-lg overflow-hidden">
						// 	<div className="grid grid-cols-1 lg:grid-cols-2">
						// 		<div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
						// 			<h3 className="text-xl sm:text-2xl font-bold">{project.title}</h3>
						// 			<p className="text-sm sm:text-base text-gray-400">{project.description}</p>

						// 			{/* Technical Implementation */}
						// 			<div>
						// 				<h4 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3">Technical Implementation</h4>
						// 				<ul className="space-y-1.5 sm:space-y-2 text-sm sm:text-base">
						// 					{project.techDetails.map((detail) => (
						// 						<li key={detail} className="flex items-center gap-2">
						// 							<span className="text-green-400">▹</span>
						// 							<span className="text-gray-300">{detail}</span>
						// 						</li>
						// 					))}
						// 				</ul>
						// 			</div>
						// 		</div>

						// 		<div className="relative h-full min-h-[300px] lg:min-h-full">
						// 			<Image src={project.image} alt={project.title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
						// 			<div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-[#21262D] via-transparent to-transparent lg:via-[#21262D]/20 lg:to-[#21262D]/40"></div>
						// 		</div>
						// 	</div>
						// </div>
						<div key={project.title} className="bg-[#21262D] rounded-lg overflow-hidden">
							<div className="flex flex-col relative">
								<div className="relative w-full h-[250px] sm:h-[300px]">
									<Image
										src={project.image}
										alt={project.title}
										fill
										className="object-cover"
										sizes="100vw"
									/>
									<div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-[#21262D]" />
								</div>
								<div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
									<h3 className="text-xl sm:text-2xl font-bold">{project.title}</h3>
									<p className="text-sm sm:text-base text-gray-400">{project.description}</p>

									<div className="flex justify-center">
										<a href={project.site} target="_blank"
											rel="noopener noreferrer" className="group relative inline-flex items-center justify-center">
											<div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur opacity-75 group-hover:opacity-100 transition"></div>
											<span className="relative px-6 sm:px-8 py-3 bg-[#161B22] rounded-full inline-flex items-center justify-center w-full sm:w-auto">
												View The Website
												<svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
													<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
												</svg>
											</span>
										</a>
									</div>
								</div>
							</div>
						</div>

					))}
				</div>
			</div>
		</section>
	);
};
