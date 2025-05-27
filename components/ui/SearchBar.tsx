'use client';

import { Search } from 'lucide-react';
import { useState } from 'react';

interface SearchBarProps {
  className?: string;
}

export default function SearchBar({
  className = '',
}: SearchBarProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
    // 在这里处理搜索逻辑
    console.log('搜索查询:', value);
  };

  return (
    <div className={`relative w-full ${className}`}>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-8 w-8 -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearch}
          placeholder="Search for product..."
          className="w-full rounded-full border border-gray-200 bg-brand-300 py-4 pl-12 pr-4 text-base placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
      </div>
    </div>
  );
}
