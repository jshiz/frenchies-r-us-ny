# Frenchies R Us NY - SEO Documentation

## 🚀 Programmatic SEO Implementation

This website implements a **scalable, programmatic SEO strategy** designed to dominate search rankings for French Bulldog-related keywords.

---

## 📊 SEO Architecture

### 1. **Dynamic Routes**
- **Puppy Detail Pages**: `/puppies/[slug]`
  - Individual pages for each puppy with unique metadata
  - Example: `/puppies/kingston-lilac-tan`
  
- **Color Landing Pages**: `/colors/[color]`
  - Dedicated pages for each French Bulldog color
  - Examples: `/colors/blue`, `/colors/lilac`, `/colors/merle`

### 2. **Metadata Strategy**
- **Title Templates**: Dynamic titles for each page type
- **Descriptions**: SEO-optimized descriptions with keywords
- **Keywords**: Auto-generated from comprehensive keyword database
- **Open Graph**: Social media optimization
- **Twitter Cards**: Enhanced link previews

### 3. **Structured Data (JSON-LD)**
- **Organization Schema**: Company info, contact, social links
- **Product Schema**: Individual puppy listings
- **Auto-injected** via `app/layout.tsx` and dynamic pages

### 4. **Internal Linking**
- Puppy Grid → Color Pages
- Color Pages → Related Colors
- Puppy Pages → Parent Color Page
- Seamless navigation for users and crawlers

---

## 🎯 Keyword Database

Located in `/lib/seo.ts`, this database covers:

### Categories:
- **Trending Terms**: Big Rope, Velvet, Fluffy, Micro Frenchie
- **Color DNA**: Blue (d/d), Lilac (b/b d/d), Merle (M/m)
- **Structure**: Block Head, Bat Ears, Cobby
- **Slang**: House Hippo, Potato, Gremlin
- **Geographic**: Capital Region, Upstate NY, Schenectady

### Usage:
```typescript
import { generateKeywords } from '@/lib/seo';
const keywords = generateKeywords(['trending', 'colors', 'location']);
```

---

## 🗂️ File Structure

```
lib/
├── seo.ts              # SEO utilities & keyword database
├── puppies.ts          # Puppy data & helpers
└── colors.ts           # Color definitions for landing pages

app/
├── layout.tsx          # Root metadata + Organization schema
├── sitemap.ts          # Auto-generated sitemap
├── robots.ts           # Crawler directives
├── puppies/[slug]/     # Dynamic puppy pages
└── colors/[color]/     # Dynamic color pages
```

---

## 📈 SEO Checklist

✅ **Implemented**:
- [x] Dynamic metadata for all pages
- [x] Structured data (JSON-LD)
- [x] Programmatic color landing pages
- [x] Individual puppy detail pages
- [x] Sitemap generation
- [x] Robots.txt
- [x] Favicon + Web Manifest
- [x] Internal linking strategy
- [x] Open Graph & Twitter Cards

🔜 **Future Enhancements**:
- [ ] Google Search Console verification
- [ ] Blog/Content section for long-tail keywords
- [ ] Video schema for Gallery
- [ ] FAQ schema
- [ ] Review/Testimonial schema

---

## 🔍 How to Add New Content

### Adding a New Puppy:
1. Edit `/lib/puppies.ts`
2. Add entry to `PUPPIES` array with:
   - `slug`, `name`, `color`, `dna`, etc.
   - `seoKeywords` for targeted ranking
3. Page auto-generates at `/puppies/[slug]`

### Adding a New Color:
1. Edit `/lib/colors.ts`
2. Add entry to `COLOR_DATABASE`
3. Page auto-generates at `/colors/[slug]`

---

## 🎨 Keyword Injection

Keywords are programmatically injected into:
- **Meta Tags**: Via `generateKeywords()`
- **Page Titles**: Via `generateSEOTitle()`
- **Descriptions**: Via `generateSEODescription()`
- **Content**: Use `SEO_KEYWORDS` object in components

Example:
```tsx
import { SEO_KEYWORDS } from '@/lib/seo';

<h2>{SEO_KEYWORDS.structure.head[0]} French Bulldogs</h2>
// Outputs: "Square Head French Bulldogs"
```

---

## 🌐 Sitemap & Crawling

- **Sitemap**: Auto-generated at `/sitemap.xml`
- **Robots**: Configured at `/robots.txt`
- **Update Frequency**: Color pages = weekly, Puppy pages = weekly

---

## 📞 Contact for SEO

Kevin D Briggs Jr  
Email: info@frenchiesrusny.com  
Phone: (518) 227-7773

---

**Built with Next.js 16, React 19, TypeScript, and Tailwind CSS v4**
