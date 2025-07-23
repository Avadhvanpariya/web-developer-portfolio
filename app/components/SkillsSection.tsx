import Image from 'next/image';
import React from 'react';

export const SkillsSection = () => {
	return (
		<section className="py-12 sm:py-20 px-4 bg-[#161B22]">
			<div className="max-w-6xl mx-auto">
				<h2 className="text-2xl sm:text-3xl font-bold mb-10 text-center text-white">
					Technical Expertise
				</h2>
				<div className="grid grid-cols-4 gap-3 sm:grid-cols-5 sm:gap-5 md:grid-cols-6 md:gap-6 justify-items-center">
					{[
						'react',
						'nextjs',
						'typescript',
						'tailwind',
						'javascript',
						'express',
						'jquery',
						'redux',
						'github',
						'bootstrap',
						'wordpress',
						'html',
						'css3',
						'vercel',
						'figma',
						'git',
						'cloudflare',

					].map((tech) => (
						<div
							key={tech}
							className="bg-[#21262D] rounded-lg p-3 sm:p-4 md:p-6 transform hover:scale-[1.02] transition-all"
						>
							<Image
								src={`/${tech}.png`}
								alt={tech}
								width={100}
								height={100}
								className="object-contain mx-auto"
							/>
						</div>
					))}
				</div>
			</div>
		</section>

	);
};
