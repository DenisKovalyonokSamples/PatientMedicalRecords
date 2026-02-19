import React, { useState, useEffect } from "react";

// Search component for selecting a patient and showing records
function Search({ medicalRecords = [], onShow, selectedPatientIndex, isRecordsVisible }) {
    // Local state for dropdown selection
    const [selectedPatientDropdownValue, setSelectedPatientDropdownValue] = useState("");

    // Reset dropdown when records are not visible (i.e., after cycling)
    useEffect(() => {
        if (!isRecordsVisible) setSelectedPatientDropdownValue("");
    }, [isRecordsVisible]);

    // Handle dropdown change
    const handleDropdownChange = (event) => {
        setSelectedPatientDropdownValue(event.target.value);
    };

    // Handle Show button click
    const handleShowButtonClick = (event) => {
        event.preventDefault();
        if (selectedPatientDropdownValue === "") {
            window.alert("Please select a patient name");
            return;
        }
        // Pass index (0-based) to onShow
        onShow(parseInt(selectedPatientDropdownValue, 10) - 1);
    };

    return (
        <div className="layout-row align-items-baseline select-form-container">
            <div className="select">
                <select
                    data-testid="patient-name"
                    value={selectedPatientDropdownValue}
                    onChange={handleDropdownChange}
                    disabled={isRecordsVisible}
                >
                    <option value="" disabled>
                        Select Patient
                    </option>
                    {medicalRecords.map((patient, index) => (
                        <option key={patient.id} value={index + 1}>
                            {patient.data[0]?.userName}
                        </option>
                    ))}
                </select>
            </div>

            <button
                type="submit"
                data-testid="show"
                onClick={handleShowButtonClick}
                disabled={isRecordsVisible}
            >
                Show
            </button>
        </div>
    );
}

export default Search;
