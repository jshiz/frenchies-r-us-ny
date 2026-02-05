/**
 * Puppy Database - This will be dynamically generated or managed via CMS later
 * For now, it's a TypeScript constant for SEO + programmatic page generation
 */

export interface Puppy {
    id: number;
    slug: string;
    name: string;
    color: string;
    colorSlug: string;
    dna: string;
    age: string;
    status: 'Available' | 'Reserved' | 'Coming Soon';
    gender: 'Male' | 'Female';
    img: string;
    price?: number;
    description?: string;
    seoKeywords?: string[];
}

export const PUPPIES: Puppy[] = [
    {
        id: 1,
        slug: 'kingston-lilac-tan',
        name: "Kingston",
        color: "Lilac Tan",
        colorSlug: "lilac",
        dna: "at/at co/co d/d",
        age: "8 weeks",
        status: "Available",
        gender: "Male",
        img: "/images/frenchie-pup-1.jpg",
        price: 8500,
        description: "Kingston is a stunning Lilac Tan French Bulldog with exceptional structure. Big Rope, block head, heavy bone. DNA verified at/at co/co d/d.",
        seoKeywords: ['Lilac Tan', 'Big Rope', 'Block Head', 'Heavy Bone', 'Investment Quality']
    },
    {
        id: 2,
        slug: 'bella-platinum',
        name: "Bella",
        color: "Platinum",
        colorSlug: "platinum",
        dna: "Ay/at D/d e/e",
        age: "9 weeks",
        status: "Available",
        gender: "Female",
        img: "/images/frenchie-pup-2.jpg",
        price: 9000,
        description: "Bella is a rare Platinum beauty with velvety soft coat. Compact, cobby structure with cat feet. DNA: Ay/at D/d e/e.",
        seoKeywords: ['Platinum', 'Velvet Coat', 'Compact Bull', 'Cat Feet']
    },
    {
        id: 3,
        slug: 'tank-blue',
        name: "Tank",
        color: "Blue",
        colorSlug: "blue",
        dna: "d/d co/co",
        age: "10 weeks",
        status: "Reserved",
        gender: "Male",
        img: "/images/frenchie-pup-3.jpg",
        price: 7500,
        description: "Tank is a solid Blue male with thick bone and a short back. Perfect family companion. DNA: d/d co/co.",
        seoKeywords: ['Blue', 'Thick Bone', 'Short Back', 'Family Companion']
    },
    {
        id: 4,
        slug: 'hazel-isabella',
        name: "Hazel",
        color: "Isabella",
        colorSlug: "isabella",
        dna: "b/b d/d",
        age: "8 weeks",
        status: "Available",
        gender: "Female",
        img: "/images/frenchie-pup-4.jpg",
        price: 10000,
        description: "Hazel is a True Isabella (New Shade) with wide-set eyes and a tucked chin. Show-quality structure. DNA: b/b d/d.",
        seoKeywords: ['Isabella', 'New Shade', 'Show Quality', 'Wide Set Eyes']
    },
    {
        id: 5,
        slug: 'rocco-merle',
        name: "Rocco",
        color: "Blue Merle",
        colorSlug: "merle",
        dna: "M/m d/d",
        age: "6 weeks",
        status: "Coming Soon",
        gender: "Male",
        img: "/images/frenchie-pup-20.jpg",
        price: 12000,
        description: "Rocco is a Blue Merle prince. Fluffy carrier (N/L1), big rope, and exceptional pedigree. DNA: M/m d/d.",
        seoKeywords: ['Blue Merle', 'Fluffy Carrier', 'Big Rope', 'Pedigree']
    },
    {
        id: 6,
        slug: 'gigi-cream',
        name: "Gigi",
        color: "Cream",
        colorSlug: "cream",
        dna: "e/e",
        age: "9 weeks",
        status: "Available",
        gender: "Female",
        img: "/images/frenchie-pup-10.jpg",
        price: 5500,
        description: "Gigi is a classic Cream beauty. Compact, low to ground, with a sweet temperament. DNA: e/e.",
        seoKeywords: ['Cream', 'Low to Ground', 'Compact', 'Sweet Temperament']
    },
];

export function getPuppyBySlug(slug: string): Puppy | undefined {
    return PUPPIES.find(p => p.slug === slug);
}

export function getPuppiesByColor(colorSlug: string): Puppy[] {
    return PUPPIES.filter(p => p.colorSlug === colorSlug);
}

export function getAllPuppySlugs(): string[] {
    return PUPPIES.map(p => p.slug);
}

export function getAllColorSlugs(): string[] {
    return Array.from(new Set(PUPPIES.map(p => p.colorSlug)));
}
