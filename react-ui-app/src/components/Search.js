import React, { useState, useEffect } from "react";

// Search component for selecting a patient and showing records
function Search({ medicalRecords = [], onShow, selectedPatientIdx, showRecords }) {
    // Local state for dropdown selection
    const [selectedIdx, setSelectedIdx] = useState("");

    // Reset dropdown when showRecords is false (i.e., after cycling)
    useEffect(() => {
        if (!showRecords) setSelectedIdx("");
    }, [showRecords]);

    // Handle dropdown change
    const handleChange = (e) => {
        setSelectedIdx(e.target.value);
    };

    // Handle Show button click
    const handleShow = (e) => {
        e.preventDefault();
        if (selectedIdx === "") {
            window.alert("Please select a patient name");
            return;
        }
        // Pass index (0-based) to onShow
        onShow(parseInt(selectedIdx, 10) - 1);
    };

    return (
        <div className="layout-row align-items-baseline select-form-container">
            <div className="select">
                <select
                    data-testid="patient-name"
                    value={selectedIdx}
                    onChange={handleChange}
                    disabled={showRecords}
                >
                    <option value="" disabled>
                        Select Patient
                    </option>
                    {medicalRecords.map((patient, idx) => (
                        <option key={patient.id} value={idx + 1}>
                            {patient.data[0]?.userName}
                        </option>
                    ))}
                </select>
            </div>

            <button
                type="submit"
                data-testid="show"
                onClick={handleShow}
                disabled={showRecords}
            >
                Show
            </button>
        </div>
    );
}

export default Search;