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
        name: "Fluffy",
        details: ["Lilac Fluffy"],
        gender: "Male",
        img: "/images/puppies/fluffy-1.jpg"
    },
    {
        id: 2,
        name: "Husky",
        details: ["Husky / Blue"],
        gender: "Female",
        img: "/images/puppies/husky-1.jpg"
    },
    {
        id: 3,
        name: "Koi 1",
        details: ["Koi / Merle"],
        gender: "Male",
        img: "/images/puppies/koi-1.jpg"
    },
    {
        id: 4,
        name: "Koi 2",
        details: ["Koi / Merle"],
        gender: "Female",
        img: "/images/puppies/koi-2.jpg"
    },
    {
        id: 5,
        name: "Rojo",
        details: ["Rojo / Chocolate"],
        gender: "Male",
        img: "/images/puppies/rojo-1.jpg"
    },
    {
        id: 6,
        name: "Platinum",
        details: ["Platinum Cream"],
        gender: "Female",
        img: "/images/frenchie-pup-21.jpg"
    }
];
