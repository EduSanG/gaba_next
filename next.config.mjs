/** @type {import('next').NextConfig} */

const repo = 'gaba_next';
const nextConfig = {
    output: 'export',
    images: {unoptimized: true},
    assetPrefix: `/${repo}/`,
    basePath: `/${repo}`,
};

export default nextConfig;
