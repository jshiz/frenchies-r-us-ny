/**
 * Dog Database - Simplified for Puppies and Studs
 */

export interface Dog {
    id: number;
    name: string;
    details: string[];
    gender: 'Male' | 'Female';
    img: string;
}

export const STUDS: Dog[] = [
    {
        id: 1,
        name: "Red Cafe",
        details: ["Rojo Stud"],
        gender: "Male",
        img: "/images/studs/red-cafe-rojo-stud.jpg"
    },
    {
        id: 2,
        name: "Babyface",
        details: ["Black & Tan Stud", "Patterns from Saturn", "Fluffy Carrier"],
        gender: "Male",
        img: "/images/studs/babyface-black-and-tan-patterns-from-saturn-fluffy-carrier-stud.jpg"
    },
    {
        id: 3,
        name: "Oscar Delakoi",
        details: ["Koi Fluffy Stud"],
        gender: "Male",
        img: "/images/studs/oscar-delakoi-koi-fluffy-stud.jpg"
    },
    {
        id: 4,
        name: "Small Fries",
        details: ["Rojo Stud", "Fluffy Carrier"],
        gender: "Male",
        img: "/images/studs/small-fries-rojo-fluffy-carrier-stud.jpg"
    }
];

export const PUPPIES: Dog[] = [
    {
        id: 1,
        name: "Blue & Tan / Fluffy / Male",
        details: ["Visual Fluffy", "World-Class Structure"],
        gender: "Male",
        img: "/images/puppies/blue-and-tan-fluffy-male.jpg"
    },
    {
        id: 2,
        name: "Husky / Isabella / Female",
        details: ["Rare Isabella DNA", "Future Foundation"],
        gender: "Female",
        img: "/images/puppies/husky-isabella-female.jpg"
    },
    {
        id: 3,
        name: "Say Less / Koi / Male",
        details: ["Koi Merle", "Compact Frame"],
        gender: "Male",
        img: "/images/puppies/say-less-koi-male.jpg"
    },
    {
        id: 4,
        name: "Say Somethin / Koi / Male",
        details: ["Koi Merle", "Heavy Bone"],
        gender: "Male",
        img: "/images/puppies/say-somethin-koi-male.jpg"
    },
    {
        id: 5,
        name: "Rojo / Rojo / Male",
        details: ["Pure Rojo DNA", "Investment Quality"],
        gender: "Male",
        img: "/images/puppies/rojo-male.jpg"
    },
    {
        id: 6,
        name: "Vengeance / Rojo / Male",
        details: ["Deep Rojo Tone", "Elite Bloodline"],
        gender: "Male",
        img: "/images/puppies/vengeance-rojo-male.jpg"
    }
];
