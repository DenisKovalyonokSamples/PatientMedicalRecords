import React, { useState } from "react";
import "./App.css";
import "h8k-components";
import Search from "./components/Search";
import Records from "./components/Records";
import medical_records from "./medicalRecords";

const title = "Patient Medical Records";

// Main App component manages state for selected patient and record visibility
const App = () => {
    // Index of selected patient in medical_records array
    const [selectedPatientIdx, setSelectedPatientIdx] = useState(null);
    // Whether to show the records table
    const [showRecords, setShowRecords] = useState(false);

    // Handler for Show button in Search
    const handleShow = (idx) => {
        setSelectedPatientIdx(idx);
        setShowRecords(true);
    };

    // Handler for Next button in Records
    const handleNext = () => {
        if (selectedPatientIdx === null) return;
        const nextIdx = (selectedPatientIdx + 1) % medical_records.length;
        setSelectedPatientIdx(nextIdx);
    };

    return (
        <div className="App">
            <h8k-navbar header={title}></h8k-navbar>
            <div className="content">
                <Search
                    medicalRecords={medical_records}
                    onShow={handleShow}
                    selectedPatientIdx={selectedPatientIdx}
                    showRecords={showRecords}
                />
                {showRecords && selectedPatientIdx !== null && (
                    <Records
                        patient={medical_records[selectedPatientIdx]}
                        onNext={handleNext}
                    />
                )}
            </div>
        </div>
    );
};

export default App;
