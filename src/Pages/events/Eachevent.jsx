import React, { useState } from 'react';
import Eventimg from '../../assets/eventplaceholder.png'
import Speaker from '../../assets/speaker.jpg'

// Define filter options as a constant
const FILTER_OPTIONS = ['All', 'Workshop', 'Orientations', 'Past Events'];

// Mock event data
const EventData = [
    { id: 1, date: '28th February, 2025', title: 'Mastering UI/UX Design: Hands-on Workshop', venue: 'Event venue', type: 'Workshop', image: Eventimg, action: 'Register' },
    { id: 2, date: '28th February, 2025', title: 'Mastering UI/UX Design: Hands-on Workshop', venue: 'Event venue', type: 'Workshop', image: Eventimg, action: 'Join Workshop' },
    { id: 3, date: '28th February, 2025', title: 'Mastering UI/UX Design: Hands-on Workshop', venue: 'Event venue', type: 'Workshop', image: Eventimg, action: 'Speakers' },
    { id: 4, date: '28th February, 2025', title: 'Mastering UI/UX Design: Hands-on Workshop', venue: 'Event venue', type: 'Workshop', image: Eventimg, action: 'Ask to edit' },
    { id: 5, date: '28th February, 2025', title: 'Mastering UI/UX Design: Hands-on Workshop', venue: 'Event venue', type: 'Past Events', image: Eventimg, action: 'Watch Recap' },
];

const Eachevent = () => {
    const [activeFilter, setActiveFilter] = useState('All'); // State to track active filter

    // Mock filtering function
    const filterEvents = (filter) => {
        if (filter === 'All') {
            return EventData; // Return all events if "All" is selected
        }
        return EventData.filter((event) => event.type === filter);
    };

    // Get filtered events based on active filter
    const filteredEvents = filterEvents(activeFilter);

    return (
        <div className="p-4 md:p-8 mt-10">
            <div className='flex flex-wrap items-center gap-16 mb-10'>
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
            <ul className="flex flex-col gap-6">
                {filteredEvents.map((event) => (
                    <li key={event.id} className="w-full border-[2px] border-[#D9D9D9] rounded-md p-3 flex justify-between items-center">
                        <div className='flex items-center gap-4'>
                            <div><img src={event.image} alt="" /></div>
                            <div className='flex flex-col gap-3'>
                                <span className="text-[#007AFF] border-[1px] border-[#007AFF] rounded-[100px] text-[18px] w-[185px] py-2 px-1">
                                    {event.date}
                                </span>
                                <p className='font-[600] text-[20px]'>{event.title}</p>
                                <p className='text-[#757575] text-[14px]'>{event.venue}</p>
                            </div>
                        </div>
                        <div className='border-l-[1px] border-[#0056D2] pl-8'>
                            <span className='border-[#B8E8F2] border-[1px] rounded-[100px] text-[#0056D2] p-1'>{event.action}</span>
                            <div className='flex items-center gap-2 mt-5'>
                                <div className='flex relative'>
                                    <div className='w-12 h-12 rounded-full overflow-hidden'><img className='w-full h-full object-cover' src={Speaker} alt="" /></div>
                                    <div className='w-12 h-12 rounded-full overflow-hidden left-8'><img className='w-full h-full object-cover' src={Speaker} alt="" /></div>
                                    <div className='w-12 h-12 rounded-full overflow-hidden left-16'><img className='w-full h-full object-cover' src={Speaker} alt="" /></div>
                                </div>
                                <span>Speakers</span>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Eachevent;