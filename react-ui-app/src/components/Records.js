import React from "react";

// Records component displays selected patient details and records
function Records({ patient, onNext }) {
    if (!patient) return null;
    // Patient details from first record (all records have same user info)
    const { userName, userDob, meta } = patient.data[0];

    // Helper to format date as DD/MM/YYYY
    const formatDate = (timestamp) => {
        const d = new Date(timestamp);
        const day = String(d.getDate()).padStart(2, '0');
        const month = String(d.getMonth() + 1).padStart(2, '0');
        const year = d.getFullYear();
        return `${day}/${month}/${year}`;
    };

    return (
        <div className="patient-profile-container" id="profile-view">
            <div className="layout-row justify-content-center">
                <div id="patient-profile" data-testid="patient-profile" className="mx-auto">
                    <h4 id="patient-name">{userName}</h4>
                    <h5 id="patient-dob">DOB: {userDob}</h5>
                    <h5 id="patient-height">Height: {meta.height} cm</h5>
                </div>
                <button className="mt-10 mr-10" data-testid="next-btn" onClick={onNext}>
                    Next
                </button>
            </div>

            <table id="patient-records-table">
                <thead id="table-header">
                    <tr>
                        <th>SL</th>
                        <th>Date</th>
                        <th>Diagnosis</th>
                        <th>Weight</th>
                        <th>Doctor</th>
                    </tr>
                </thead>
                <tbody id="table-body" data-testid="patient-table">
                    {patient.data.map((rec, idx) => (
                        <tr key={rec.id}>
                            <td>{idx + 1}</td>
                            <td>{formatDate(rec.timestamp)}</td>
                            <td>{rec.diagnosis.name}</td>
                            <td>{rec.meta.weight}</td>
                            <td>{rec.doctor.name}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Records;
