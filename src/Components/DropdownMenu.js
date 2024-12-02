import React, { useState } from 'react';

const menuData = {
    "IT": {
        "North America": ["Harvard", "MIT"],
        "Europe": ["Oxford", "Cambridge"],
    },
    "Medical": {
        "Asia": ["University of Tokyo", "Peking University"],
        "Australia": ["University of Melbourne", "University of Sydney"],
    }
};

const DropdownMenu = () => {
    const [selectedDepartment, setSelectedDepartment] = useState(null);
    const [selectedRegion, setSelectedRegion] = useState(null);

    const handleDepartmentClick = (department) => {
        setSelectedDepartment(department);
        setSelectedRegion(null);
    };

    const handleRegionClick = (region) => {
        setSelectedRegion(region);
    };

    return (
        <div className="flex">
            {/* Departments Menu */}
            <div className="relative">
                <button className="px-4 py-2 bg-gray-200 rounded-md">
                    Departments
                </button>
                <div className="absolute left-0 mt-2 w-56 bg-white border border-gray-300 rounded-md shadow-lg">
                    {Object.keys(menuData).map((department) => (
                        <div key={department} className="group relative">
                            <button
                                className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100 flex justify-between"
                                onClick={() => handleDepartmentClick(department)}
                            >
                                {department}
                                <span className="ml-2">→</span> {/* Arrow Indicator */}
                            </button>
                            {/* Regions Menu */}
                            {selectedDepartment === department && (
                                <div className="absolute left-full top-0 mt-0 w-56 bg-white border border-gray-300 rounded-md shadow-lg">
                                    {Object.keys(menuData[department]).map((region) => (
                                        <div key={region} className="group relative">
                                            <button
                                                className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100 flex justify-between"
                                                onClick={() => handleRegionClick(region)}
                                            >
                                                {region}
                                                <span className="ml-2">→</span> {/* Arrow Indicator */}
                                            </button>
                                            {/* Universities Menu */}
                                            {selectedRegion === region && (
                                                <div className="absolute left-full top-0 mt-0 w-56 bg-white border border-gray-300 rounded-md shadow-lg">
                                                    {menuData[department][region].map((university) => (
                                                        <button
                                                            key={university}
                                                            className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100"
                                                        >
                                                            {university}
                                                        </button>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DropdownMenu;
