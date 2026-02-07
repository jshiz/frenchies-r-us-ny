/**
 * FRENCH BULLDOG SEO KEYWORD DATABASE
 * Nuclear-option keyword expansion for maximum search coverage
 */

export const SEO_KEYWORDS = {
    // HYPE & TRENDING TERMS
    trending: {
        rope: ['Big Rope', 'Over-Nose Rope', 'Full Rope', 'Thick Rope', 'Deep Fold', 'Heavy Wrinkle'],
        coat: ['Velvet Frenchie', 'Soft Touch', 'Velvety Coat', 'Plush Carrier', 'Short-Plush'],
        fluffy: ['Visual Fluffy', 'L1 Carrier', 'L4 Fluffy', 'Full Fluffy', 'Teddy Bear Frenchie', 'Plush Coat'],
        size: ['Micro Frenchie', 'Pocket Frenchie', 'Nano Bulldog', 'Apartment Size', 'Compact Bull', 'Low-Rider'],
        status: ['High-End', 'Investment Quality', 'Foundation Quality', 'Kennel Club Registered', 'Pedigree', 'Blue Blood']
    },

    // COLOR DNA & GENETICS
    colors: {
        base: ['Fawn', 'Brindle', 'Cream', 'Pied', 'Piebald'],
        exotic: ['Blue', 'Lilac', 'Chocolate', 'Cocoa', 'Isabella', 'Rojo', 'Platinum'],
        newShade: ['New Shade Isabella', 'New Shade Rojo', 'Husky', 'Pink'],
        patterns: {
            merle: ['Blue Merle', 'Lilac Merle', 'Chocolate Merle', 'Harlequin Merle', 'Tweed Merle'],
            points: ['Tan Points', 'Tricolor', 'Trindle', 'Creamsicle'],
            structure: ['Maskless', 'Black Mask', 'Ticked', 'Irish Pied', 'Blanket Pied']
        }
    },

    // DNA GENETIC CODES
    genetics: {
        codes: ['ay/at', 'dd', 'bb', 'coco', 'Ee', 'Em', 'kyky', 'N/L1', 'at/at co/co', 'd/d', 'b/b d/d', 'M/m', 'e/e'],
        terms: ['DNA Verified', 'Genetic Testing', 'Health Tested', 'Color Genetics', 'Structure Tested']
    },

    // STRUCTURE & CONFORMATION
    structure: {
        head: ['Square Head', 'Block Head', 'Bat Ears', 'Short Muzzle', 'Flat Face', 'Tucked Chin', 'Wide Set Eyes'],
        body: ['Cobby', 'Short Back', 'Thick Bone', 'Heavy Bone', 'Wide Chest', 'Low to Ground', 'No Neck', 'Thick Neck'],
        stance: ['Stacked', 'Tight Feet', 'Cat Feet', 'Roach Back']
    },

    // COMMUNITY SLANG
    slang: {
        endearments: ['House Hippo', 'Potato', 'Gremlin', 'Bat Pig', 'Frog Dog', 'Frenchie Loaf', 'Tater Tot', 'Velveteen Rabbit', 'Clown Dog'],
        hashtags: ['FrenchieGang', 'BulldogLife', 'SquishyFace', 'FrenchieLove', 'PuppySpam', 'FrenchieGram']
    },

    // GEOGRAPHIC & LIFESTYLE
    geographic: {
        locations: ['Capital Region', 'Upstate NY', 'Hudson Valley', 'Saratoga Springs', 'The Hamptons', 'Adirondacks', 'Schenectady', 'Albany', 'Troy'],
        vibes: ['Farmhouse Raised', 'Couch Potato', 'Family Companion', 'Nanny Dog', 'Kid-Safe', 'Backyard Ready', 'Luxury Pet']
    }
};

/**
 * Generate SEO-optimized title
 */
export function generateSEOTitle(type: 'home' | 'blog', data?: any): string {
    const base = 'Frenchies R Us NY';

    switch (type) {
        case 'blog':
            return `${data.title} | ${base} | Expert French Bulldog Breeder`;
        default:
            return `${base} | Premium French Bulldog Breeder | Schenectady, Albany, Troy NY`;
    }
}

/**
 * Generate SEO-optimized description
 */
export function generateSEODescription(type: 'home', data?: any): string {
    switch (type) {
        default:
            return `Premium French Bulldog breeder in New York's Capital Region. Exotic colors, superior structure, DNA verified. Schenectady, Albany, Troy. Family-raised, health guaranteed.`;
    }
}

/**
 * Generate keyword string for meta tags
 */
export function generateKeywords(categories: string[]): string {
    const keywords: string[] = [];

    categories.forEach(cat => {
        switch (cat) {
            case 'trending':
                keywords.push(...SEO_KEYWORDS.trending.rope, ...SEO_KEYWORDS.trending.fluffy, ...SEO_KEYWORDS.trending.status);
                break;
            case 'colors':
                keywords.push(...SEO_KEYWORDS.colors.base, ...SEO_KEYWORDS.colors.exotic);
                break;
            case 'location':
                keywords.push(...SEO_KEYWORDS.geographic.locations);
                break;
            case 'structure':
                keywords.push(...SEO_KEYWORDS.structure.head, ...SEO_KEYWORDS.structure.body);
                break;
        }
    });

    return keywords.join(', ');
}

/**
 * Generate Organization structured data
 */
export function generateOrganizationStructuredData() {
    return {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Frenchies R Us NY',
        url: 'https://frenchiesrusny.com',
        logo: 'https://frenchiesrusny.com/frenchiesrus-logo-plain.png',
        contactPoint: {
            '@type': 'ContactPoint',
            telephone: '+1-914-325-7621',
            contactType: 'Customer Service',
            areaServed: ['US', 'CA'],
            availableLanguage: 'English'
        },
        sameAs: [
            'https://facebook.com/kevindbriggsjr',
            'https://instagram.com/frenchiesrusny'
        ],
        address: {
            '@type': 'PostalAddress',
            addressLocality: 'Schenectady',
            addressRegion: 'NY',
            addressCountry: 'US'
        }
    };
}
