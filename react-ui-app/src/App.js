
import React, { useState } from "react";
import "./App.css";
import "h8k-components";
import Search from "./components/Search";
import Records from "./components/Records";
import medicalRecordsData from "./medicalRecords";

const APP_TITLE = "Patient Medical Records";

// Main App component manages state for selected patient and record visibility
const App = () => {
    // Index of selected patient in medicalRecordsData array
    const [currentPatientIndex, setCurrentPatientIndex] = useState(null);
    // Whether to show the records table
    const [isRecordsVisible, setIsRecordsVisible] = useState(false);

    // Handler for Show button in Search
    const handleShowPatientRecords = (patientIndex) => {
        setCurrentPatientIndex(patientIndex);
        setIsRecordsVisible(true);
    };

    // Handler for Next button in Records
    const handleShowNextPatient = () => {
        if (currentPatientIndex === null) return;
        const nextPatientIndex = (currentPatientIndex + 1) % medicalRecordsData.length;
        setCurrentPatientIndex(nextPatientIndex);
    };

    return (
        <div className="App">
            <h8k-navbar header={APP_TITLE}></h8k-navbar>
            <div className="content">
                <Search
                    medicalRecords={medicalRecordsData}
                    onShow={handleShowPatientRecords}
                    selectedPatientIndex={currentPatientIndex}
                    isRecordsVisible={isRecordsVisible}
                />
                {isRecordsVisible && currentPatientIndex !== null && (
                    <Records
                        patient={medicalRecordsData[currentPatientIndex]}
                        onNext={handleShowNextPatient}
                    />
                )}
            </div>
        </div>
    );
};

export default App;
