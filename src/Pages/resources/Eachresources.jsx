import React, { useState } from 'react';
import Book from '../../assets/book.png';
import { IoStar } from "react-icons/io5";
import { NavLink } from 'react-router-dom';

// Define filter options as a constant
const FILTER_OPTIONS = ['All', 'Books', 'Podcast', 'Learning kits', 'Roadmaps', 'Flashcards', 'Articles', 'Essentials'];

const EachresourcesData = [
    { id: 1, title: 'Book title', type: 'Books', rating: 4.7, author: 'Author Name', price: 0, description: 'Access a wide range of educational materials...', content: ['Introduction', 'Who is Matt Ridley'], format: 'E-copy' },
    { id: 2, title: 'Podcast title', type: 'Podcast', rating: 4.5, author: 'Author Name', price: 0, description: 'Another great podcast for learning...', content: ['Introduction', 'About the Author'], format: 'Audio' },
    { id: 3, title: 'Learning Kit title', type: 'Learning kits', rating: 4.8, author: 'Author Name', price: 0, description: 'A comprehensive learning kit...', content: ['Introduction', 'How to Use'], format: 'PDF' },
    { id: 4, title: 'Roadmap title', type: 'Roadmaps', rating: 4.6, author: 'Author Name', price: 0, description: 'A detailed roadmap for success...', content: ['Introduction', 'Step-by-Step Guide'], format: 'E-copy' },
    { id: 5, title: 'Flashcard title', type: 'Flashcards', rating: 4.9, author: 'Author Name', price: 0, description: 'Flashcards for quick learning...', content: ['Introduction', 'Flashcard Usage'], format: 'PDF' },
    { id: 6, title: 'Article title', type: 'Articles', rating: 4.4, author: 'Author Name', price: 0, description: 'An insightful article...', content: ['Introduction', 'Key Takeaways'], format: 'E-copy' },
    { id: 7, title: 'Essentials title', type: 'Essentials', rating: 4.7, author: 'Author Name', price: 0, description: 'Essential resources for beginners...', content: ['Introduction', 'Getting Started'], format: 'E-copy' },
    { id: 8, title: 'Another Book title', type: 'Books', rating: 4.7, author: 'Author Name', price: 0, description: 'Another great book for learning...', content: ['Introduction', 'About the Author'], format: 'Paperback' },
];

const Eachresources = () => {
    const [activeFilter, setActiveFilter] = useState('All'); // State to track active filter

    // Mock filtering function
    const filterResources = (filter) => {
        if (filter === 'All') {
            return EachresourcesData; // Return all resources if "All" is selected
        }
        return EachresourcesData.filter((resource) => resource.type === filter);
    };

    // Get filtered resources based on active filter
    const filteredResources = filterResources(activeFilter);

    return (
        <div className="p-4 md:p-8">
            <h1 className='text-[30px] font-[600] my-8'>Resources</h1>
            <div className='flex flex-wrap items-center justify-between gap-4 mb-10'>
                {/* Filter Buttons */}
                {FILTER_OPTIONS.map((filter) => (
                    <button
                        key={filter}
                        onClick={() => setActiveFilter(filter)} // Update active filter on click
                        className={`py-2 px-4 rounded-md ${
                            activeFilter === filter
                                ? 'bg-[#007AFF] text-white shadow-md' // Active button style
                                : 'text-[#007AFF] shadow-md hover:bg-[#007AFF] hover:text-white' // Inactive button style
                        }`}
                    >
                        {filter}
                    </button>
                ))}
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredResources.map((resource) => (
                    <li key={resource.id} className="w-full border-[2px] border-[#D9D9D9] rounded-md p-3">
                        <div className="w-full rounded-md">
                            <img className="w-full" src={Book} alt={resource.title} />
                        </div>
                        <div className='flex flex-col gap-3 mt-6'>
                            <p className='flex items-center justify-between'>
                                <span>{resource.type}</span>
                                <span className="flex items-center gap-1">
                                    <IoStar /> {resource.rating}
                                </span>
                            </p>
                            <p className='font-[600]'>{resource.title}</p>
                            <p className='text-[#757575] text-[13px]'>{resource.author}</p>
                            <p className='flex items-center justify-between'>
                                <span className='text-[#757575] text-[13px]'>${resource.price}</span>
                                <NavLink
                                    to={`/resources/${resource.id}`}
                                    state={{ product: resource }} // Pass the product data via state
                                    className='w-[80px] rounded-[100px] text-center p-2 bg-[#0056D2] text-white text-[12px]'
                                >
                                    Quick look
                                </NavLink>
                            </p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Eachresources;