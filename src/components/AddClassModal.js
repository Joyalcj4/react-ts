import React from 'react';
import './AddClassModal.css';
import { HiChevronRight, HiChevronDown } from 'react-icons/hi';

export default function AddClassModal() {
  
  

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <div className="modal-header">
          <h2>Add Class</h2>
          <button className="close-btn">&times;</button>
        </div>
        <div className="stepper">
          <div className="step active">
            <span className="step-circle">1</span>
            Class Details
          </div>
          <span className="step-arrow"><HiChevronRight /></span>
          <div className="step active">
            <span className="step-circle">2</span>
            Add Curriculum
          </div>
        </div>
        <div>
          <div className="curriculum-table">
            <div className="table-header">
              <div>Subject *</div>
              <div>Publisher Name *</div>
              <div>Faculty Name *</div>
            </div>
            <div className="table-row">
              <div style={{position: 'relative', width: '100%'}}>
                <select defaultValue="English">
                  <option>English</option>
                  <option>Chemistry</option>
                </select>
                <span className="select-arrow"><HiChevronDown /></span>
              </div>
              <select defaultValue="NCERT">
                <option>NCERT</option>
                <option>Oxford</option>
              </select>
              <select defaultValue="Bindhu">
                <option>Bindhu</option>
                <option>Balan</option>
              </select>
            </div>
            <div className="table-row">
              <div style={{position: 'relative', width: '100%'}}>
                <select defaultValue="Chemistry">
                  <option>English</option>
                  <option>Chemistry</option>
                </select>
                <span className="select-arrow"><HiChevronDown /></span>
              </div>
              <select defaultValue="Oxford">
                <option>NCERT</option>
                <option>Oxford</option>
              </select>
              <select defaultValue="Balan">
                <option>Bindhu</option>
                <option>Balan</option>
              </select>
            </div>
          </div>
          <div className="modal-actions">
            <button type="button" className="back-btn">Back</button>
            <button
              type="button"
              className="clear-btn"
            >
              Clear
            </button>
            <button className="save-btn">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

