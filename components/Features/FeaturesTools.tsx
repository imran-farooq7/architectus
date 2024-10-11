import { featuresTools } from "@/lib/constants";
import Feature from "./Feature";

const FeaturesTools = () => {
	return (
		<div
			className="feature py-20 px-14 lg:px-28 xl:px-32 bg-cover
            bg-no-repeat
            "
		>
			<div className="max-w-7xl mx-auto">
				<h1 className="text-center mb-20 text-white font-semibold text-xl lg:text-3xl">
					Features AI Tools
				</h1>
				<div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
					{featuresTools.map((feature) => (
						<Feature
							key={feature.title}
							href={feature.href}
							text={feature.text}
							title={feature.title}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default FeaturesTools;
