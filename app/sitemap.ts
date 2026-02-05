import { MetadataRoute } from 'next';

export const dynamic = 'force-static';
import { getAllPuppySlugs, getAllColorSlugs } from '@/lib/puppies';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://frenchiesrusny.com';

    // Static pages
    const staticPages = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'daily' as const,
            priority: 1,
        },
        {
            url: `${baseUrl}/terms`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.3,
        },
        {
            url: `${baseUrl}/privacy`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.3,
        },
    ];

    // Dynamic puppy pages
    const puppySlugs = getAllPuppySlugs();
    const puppyPages = puppySlugs.map((slug) => ({
        url: `${baseUrl}/puppies/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }));

    // Dynamic color pages
    const colorSlugs = getAllColorSlugs();
    const colorPages = colorSlugs.map((slug) => ({
        url: `${baseUrl}/colors/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.9,
    }));

    return [...staticPages, ...puppyPages, ...colorPages];
}
