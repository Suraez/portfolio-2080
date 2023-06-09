import { withContentlayer } from "next-contentlayer";

/** @type {import('next').NextConfig} */
const nextConfig = {
	pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
	experimental: {
		appDir: true,
		mdxRs: true,
	},
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'i.imgur.com',
			},
		]
	}
};

export default withContentlayer(nextConfig);
