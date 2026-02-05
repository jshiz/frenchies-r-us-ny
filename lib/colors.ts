/**
 * Color Information Database for Programmatic SEO
 */

export interface ColorInfo {
    slug: string;
    name: string;
    scientificName?: string;
    dnaCode: string;
    description: string;
    rarity: 'Common' | 'Rare' | 'Exotic' | 'Ultra Rare';
    priceRange: string;
    characteristics: string[];
    seoKeywords: string[];
    relatedColors: string[];
}

export const COLOR_DATABASE: Record<string, ColorInfo> = {
    blue: {
        slug: 'blue',
        name: 'Blue French Bulldog',
        scientificName: 'Dilute Black',
        dnaCode: 'd/d',
        description: 'Blue French Bulldogs are one of the most sought-after exotic colors. Their stunning steel-blue coat is caused by a dilution gene (d/d) that lightens the black pigment. These pups often have blue/gray eyes and a unique mouse-gray nose.',
        rarity: 'Exotic',
        priceRange: '$5,000 - $10,000',
        characteristics: ['Steel-blue coat', 'Gray nose', 'Blue/gray eyes', 'Solid or with markings'],
        seoKeywords: ['Blue French Bulldog', 'Blue Frenchie', 'Dilute Black', 'd/d', 'Gray nose', 'Exotic color'],
        relatedColors: ['lilac', 'isabella', 'blue-merle']
    },
    lilac: {
        slug: 'lilac',
        name: 'Lilac French Bulldog',
        scientificName: 'Dilute Chocolate',
        dnaCode: 'b/b d/d or co/co d/d',
        description: 'Lilac French Bulldogs are the pinnacle of exotic breeding. This rare color is produced by combining the chocolate gene (b/b or co/co) with the blue dilution gene (d/d), resulting in a stunning lavender-champagne coat with light eyes.',
        rarity: 'Ultra Rare',
        priceRange: '$8,000 - $15,000+',
        characteristics: ['Lavender coat', 'Light eyes', 'Pinkish nose', 'Champagne hue', 'Investment quality'],
        seoKeywords: ['Lilac French Bulldog', 'Lilac Frenchie', 'Isabella', 'b/b d/d', 'Lavender coat', 'Ultra rare'],
        relatedColors: ['blue', 'chocolate', 'isabella']
    },
    merle: {
        slug: 'merle',
        name: 'Merle French Bulldog',
        scientificName: 'Merle Pattern',
        dnaCode: 'M/m',
        description: 'Merle French Bulldogs display a stunning mottled pattern with patches of diluted color. Blue Merle, Lilac Merle, and Chocolate Merle are highly coveted. These pups often have striking blue eyes or heterochromia (two different colored eyes).',
        rarity: 'Ultra Rare',
        priceRange: '$10,000 - $20,000+',
        characteristics: ['Mottled pattern', 'Blue eyes common', 'Unique markings', 'Harlequin variations', 'Show-stopping appearance'],
        seoKeywords: ['Merle French Bulldog', 'Blue Merle', 'Lilac Merle', 'M/m', 'Blue eyes', 'Harlequin'],
        relatedColors: ['blue', 'lilac', 'chocolate']
    },
    isabella: {
        slug: 'isabella',
        name: 'Isabella French Bulldog',
        scientificName: 'True Lilac / New Shade Isabella',
        dnaCode: 'b/b d/d',
        description: 'Isabella (True Lilac) French Bulldogs are the rarest of the rare. Often called "New Shade Isabella," these pups have a fawn base with the chocolate and blue dilution genes, creating an ethereal champagne-silver coat.',
        rarity: 'Ultra Rare',
        priceRange: '$12,000 - $25,000+',
        characteristics: ['Fawn + Lilac blend', 'Silver-champagne coat', 'Light eyes', 'New Shade variation', 'Blue Blood lineage'],
        seoKeywords: ['Isabella French Bulldog', 'New Shade', 'True Lilac', 'b/b d/d', 'Silver coat', 'Investment quality'],
        relatedColors: ['lilac', 'platinum', 'rojo']
    },
    platinum: {
        slug: 'platinum',
        name: 'Platinum French Bulldog',
        scientificName: 'Cream with Dilution',
        dnaCode: 'e/e + dilute',
        description: 'Platinum French Bulldogs are a stunning cream variation with a silvery sheen. The cream gene (e/e) combined with dilution creates an almost white, metallic-looking coat. These pups are incredibly rare and highly sought after.',
        rarity: 'Ultra Rare',
        priceRange: '$10,000 - $18,000',
        characteristics: ['Silvery cream', 'Metallic sheen', 'Light pigmentation', 'Soft coat', 'Velvet texture'],
        seoKeywords: ['Platinum French Bulldog', 'Platinum Frenchie', 'e/e', 'Cream dilute', 'Silver coat', 'Velvet'],
        relatedColors: ['cream', 'isabella', 'lilac']
    },
    cream: {
        slug: 'cream',
        name: 'Cream French Bulldog',
        scientificName: 'Recessive Cream',
        dnaCode: 'e/e',
        description: 'Cream French Bulldogs are a classic and beautiful color. The double cream gene (e/e) produces an off-white to light tan coat. These pups are compact, sturdy, and have the sweet temperament Frenchies are famous for.',
        rarity: 'Common',
        priceRange: '$3,500 - $6,000',
        characteristics: ['Off-white coat', 'Sweet temperament', 'Compact structure', 'Traditional look', 'Family friendly'],
        seoKeywords: ['Cream French Bulldog', 'e/e', 'Off-white', 'Classic Frenchie', 'Family dog'],
        relatedColors: ['fawn', 'platinum', 'pied']
    },
    chocolate: {
        slug: 'chocolate',
        name: 'Chocolate French Bulldog',
        scientificName: 'Brown',
        dnaCode: 'b/b or co/co',
        description: 'Chocolate French Bulldogs have a rich brown coat caused by the chocolate gene (b/b) or the cocoa gene (co/co). These pups often have amber or light-colored eyes and a brown nose.',
        rarity: 'Exotic',
        priceRange: '$6,000 - $12,000',
        characteristics: ['Rich brown coat', 'Amber eyes', 'Brown nose', 'Solid or with markings'],
        seoKeywords: ['Chocolate French Bulldog', 'Brown Frenchie', 'b/b', 'co/co', 'Cocoa gene', 'Amber eyes'],
        relatedColors: ['lilac', 'rojo', 'merle']
    },
};

export function getColorInfo(slug: string): ColorInfo | undefined {
    return COLOR_DATABASE[slug];
}

export function getAllColorInfo(): ColorInfo[] {
    return Object.values(COLOR_DATABASE);
}
