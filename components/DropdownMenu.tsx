import React, { useState, useRef, useEffect } from "react";

interface DropdownOption {
  id: string | number;
  name: string;
  value: string;
  icon?: string;
  description?: string;
  disabled?: boolean;
}

interface DropdownMenuProps {
  options: DropdownOption[];
  placeholder?: string;
  value?: string | number;
  onChange: (value: string | number, option: DropdownOption) => void;
  className?: string;
  searchable?: boolean;
  multiSelect?: boolean;
  label?: string;
  error?: string;
}

export default function DropdownMenu({
  options,
  placeholder = "Válassz egy opciót...",
  value,
  onChange,
  className = "",
  searchable = false,
  multiSelect = false,
  label,
  error,
}: DropdownMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedValues, setSelectedValues] = useState<(string | number)[]>([]);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const filteredOptions = options.filter(
    (option) =>
      option.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (option.description &&
        option.description.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const selectedOption = options.find((option) => option.value === value);
  const selectedOptions = options.filter((option) =>
    selectedValues.includes(option.value)
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
        setSearchTerm("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleOptionClick = (option: DropdownOption) => {
    if (option.disabled) return;

    if (multiSelect) {
      const newSelectedValues = selectedValues.includes(option.value)
        ? selectedValues.filter((val) => val !== option.value)
        : [...selectedValues, option.value];

      setSelectedValues(newSelectedValues);
      onChange(newSelectedValues as any, option);
    } else {
      onChange(option.value, option);
      setIsOpen(false);
      setSearchTerm("");
    }
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setSearchTerm("");
    }
  };

  const clearSelection = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (multiSelect) {
      setSelectedValues([]);
      onChange([] as any, {} as DropdownOption);
    } else {
      onChange("", {} as DropdownOption);
    }
  };

  return (
    <div className={`dropdown-menu-container ${className}`} ref={dropdownRef}>
      {label && <label className="dropdown-label">{label}</label>}

      <div
        className={`dropdown-trigger ${isOpen ? "open" : ""} ${
          error ? "error" : ""
        }`}
        onClick={handleToggle}
      >
        <div className="dropdown-selected">
          {multiSelect ? (
            selectedOptions.length > 0 ? (
              <div className="selected-items">
                {selectedOptions.map((option, index) => (
                  <span key={index} className="selected-item">
                    {option.icon && (
                      <span className="item-icon">{option.icon}</span>
                    )}
                    {option.name}
                    <button
                      className="remove-item"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleOptionClick(option);
                      }}
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
            ) : (
              <span className="placeholder">{placeholder}</span>
            )
          ) : selectedOption ? (
            <div className="selected-single">
              {selectedOption.icon && (
                <span className="item-icon">{selectedOption.icon}</span>
              )}
              <span className="item-name">{selectedOption.name}</span>
            </div>
          ) : (
            <span className="placeholder">{placeholder}</span>
          )}
        </div>

        <div className="dropdown-actions">
          {(multiSelect ? selectedValues.length > 0 : value) && (
            <button
              className="clear-button"
              onClick={clearSelection}
              type="button"
            >
              ×
            </button>
          )}
          <span className={`dropdown-arrow ${isOpen ? "open" : ""}`}>▼</span>
        </div>
      </div>

      {isOpen && (
        <div className="dropdown-content">
          {searchable && (
            <div className="dropdown-search">
              <input
                type="text"
                placeholder="Keresés..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
                autoFocus
              />
            </div>
          )}

          <div className="dropdown-options">
            {filteredOptions.length > 0 ? (
              filteredOptions.map((option) => (
                <div
                  key={option.id}
                  className={`dropdown-option ${
                    (
                      multiSelect
                        ? selectedValues.includes(option.value)
                        : value === option.value
                    )
                      ? "selected"
                      : ""
                  } ${option.disabled ? "disabled" : ""}`}
                  onClick={() => handleOptionClick(option)}
                >
                  {multiSelect && (
                    <div className="checkbox">
                      <input
                        type="checkbox"
                        checked={selectedValues.includes(option.value)}
                        onChange={() => {}}
                        readOnly
                      />
                    </div>
                  )}

                  <div className="option-content">
                    {option.icon && (
                      <span className="option-icon">{option.icon}</span>
                    )}
                    <div className="option-text">
                      <span className="option-name">{option.name}</span>
                      {option.description && (
                        <span className="option-description">
                          {option.description}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="no-options">
                <span>Nincs találat</span>
              </div>
            )}
          </div>
        </div>
      )}

      {error && <div className="dropdown-error">{error}</div>}
    </div>
  );
}
