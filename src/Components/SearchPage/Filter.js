import React, { useState } from "react";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Filter = ({ filteredArray, setFilteredResults }) => {
  const [sectorFilter, setSectorFilter] = useState("");
  const [fieldFilters, setFieldFilters] = useState([]);

  const handleSectorFilter = (value) => {
    setSectorFilter(value); // Update sector filter
  };

  const handleFieldFilter = (value) => {
    setFieldFilters((prev) => {
      if (prev.includes(value)) {
        return prev.filter((field) => field !== value); // Remove if already selected
      } else {
        return [...prev, value]; // Add new field
      }
    });
  };

  const applyFilters = () => {
    let results = filteredArray;

    // Filter by sector
    if (sectorFilter) {
      results = results.filter((item) => item.Sector === sectorFilter);
    }

    // Filter by fields
    if (fieldFilters.length > 0) {
      results = results.filter((item) => fieldFilters.includes(item.Field));
    }

    setFilteredResults(results); // Update parent component with filtered results
  };

  // Apply filters whenever sectorFilter or fieldFilters change
  React.useEffect(() => {
    applyFilters();
  }, [sectorFilter, fieldFilters]);

  const [sector, setSector] = useState(false);
  const [field, setField] = useState(false);

  return (
    <div className="py-4">
      {/* Sector Filter */}
      <hr className="border" />
      <div className="flex justify-between mt-2">
        <h2 className="my-2 text-xl font-semibold">Sectors</h2>
        <button onClick={() => setSector(!sector)}>
          {sector ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </button>
      </div>
      <div className={`${sector ? "flex" : "hidden"} flex-col gap-2 my-2 mb-4`}>
        <label htmlFor="Private">
          <input
            type="radio"
            name="Sector"
            className="mx-4"
            onChange={() => handleSectorFilter("Private")}
          />
          Private
        </label>
        <label htmlFor="Public">
          <input
            type="radio"
            name="Sector"
            className="mx-4"
            onChange={() => handleSectorFilter("Public")}
          />
          Public
        </label>
      </div>

      {/* Field Filter */}
      <hr className="my-2 border" />
      <div className="flex justify-between mt-2">
        <h2 className="my-2 text-xl font-semibold">Fields</h2>
        <button onClick={() => setField(!field)}>
          {field ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </button>
      </div>
      <div className={`${field ? "flex" : "hidden"} flex-col gap-2 my-2 mb-4`}>
        <label htmlFor="Engineering">
          <input
            type="checkbox"
            name="Field"
            value="Engineering"
            className="mx-4"
            onChange={(e) => handleFieldFilter(e.target.value)}
          />
          Engineering Universities
        </label>
        <label htmlFor="Medical">
          <input
            type="checkbox"
            name="Field"
            value="Medical"
            className="mx-4"
            onChange={(e) => handleFieldFilter(e.target.value)}
          />
          Medical Universities
        </label>
      </div>
    </div>
  );
};

export default Filter;
