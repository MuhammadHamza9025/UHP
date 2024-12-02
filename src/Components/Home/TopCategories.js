import React from "react";

const categories = [
  {
    id: 1,
    name: "IT",
    description:
      "Draw your reader’s eye to the key information about your work.",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLwUZThQiNFmFqy6NL9d8e3OqNY0gfb8XPfw&s", // Replace with actual image URL
  },
  {
    id: 2,
    name: "Cyber security",
    description:
      "Draw your reader’s eye to the key information about your work.",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwaOmpUMreDnHg12VV95_IoEfqWdGrlyoC_w&s", // Replace with actual image URL
    isNew: true,
  },
  {
    id: 3,
    name: "Business",
    description:
      "Draw your reader’s eye to the key information about your work.",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLwUZThQiNFmFqy6NL9d8e3OqNY0gfb8XPfw&s", // Replace with actual image URL
  },
  {
    id: 4,
    name: "Engineering",
    description:
      "Draw your reader’s eye to the key information about your work.",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLwUZThQiNFmFqy6NL9d8e3OqNY0gfb8XPfw&s", // Replace with actual image URL
    isNew: true,
  },
  {
    id: 5,
    name: "Medical",
    description:
      "Draw your reader’s eye to the key information about your work.",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLwUZThQiNFmFqy6NL9d8e3OqNY0gfb8XPfw&s", // Replace with actual image URL
  },
  {
    id: 6,
    name: "Art and Design",
    description:
      "Draw your reader’s eye to the key information about your work.",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLwUZThQiNFmFqy6NL9d8e3OqNY0gfb8XPfw&s", // Replace with actual image URL
  },
  {
    id: 7,
    name: "Law",
    description:
      "Draw your reader’s eye to the key information about your work.",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLwUZThQiNFmFqy6NL9d8e3OqNY0gfb8XPfw&s", // Replace with actual image URL
  },
  {
    id: 8,
    name: "Urdu Literature",
    description:
      "Draw your reader’s eye to the key information about your work.",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLwUZThQiNFmFqy6NL9d8e3OqNY0gfb8XPfw&s", // Replace with actual image URL
  },
];

const TopCategories = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container px-4 mx-auto">
        <h2 className="mb-12 text-4xl font-bold text-center">Top Categories</h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          {categories.map((category) => (
            <div key={category.id} className="text-center">
              <div className="relative mx-auto mb-4 overflow-hidden border-4 border-teal-500 rounded-full w-28 h-28">
                <img
                  src={category.imageUrl}
                  alt={category.name}
                  className="object-cover w-full h-full"
                />
                {category.isNew && (
                  <div className="absolute top-0 right-0 px-2 py-1 text-xs text-white bg-teal-500 rounded-full">
                    NEW
                  </div>
                )}
              </div>
              <h3 className="text-xl font-semibold">{category.name}</h3>
              <p className="mt-2 text-gray-500">{category.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopCategories;
