"use client";

import { useState } from "react";
import { FaSearch, FaSpinner } from "react-icons/fa";
import styles from "../../styles/page.module.css";

export default function SearchBar({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = () => {
    if (!searchQuery.trim()) return;
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      onSearch(searchQuery);
      setIsLoading(false);
    }, 800);
  };

  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        placeholder="Rechercher un podcast..."
        className={styles.searchInput}
        value={searchQuery}
        onChange={handleSearchChange}
        onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
        aria-label="Rechercher un podcast"
      />
      <button 
        className={styles.searchButton}
        onClick={handleSearch}
        aria-label="Rechercher"
        disabled={isLoading}
      >
        {isLoading ? <FaSpinner className={styles.spinner} /> : <FaSearch />}
      </button>
    </div>
  );
} 