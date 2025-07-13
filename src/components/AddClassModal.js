import React from 'react';
import './AddClassModal.css';
import { HiChevronRight, HiChevronDown } from 'react-icons/hi';

export default function AddClassModal() {
  function handleSave(e) {
    e.preventDefault();
    alert('Saved!');
  }


  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <div className="modal-header">
          <h2>Add Class</h2>
          <button className="close-btn">&times;</button>
        </div>
        <div className="line"></div>
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
        <form onSubmit={handleSave}>
          <div className="curriculum-table">
            <div className="table-header">
              <div>Subject *</div>
              <div>Publisher Name *</div>
              <div>Faculty Name *</div>
            </div>
            <div className="table-row">
              <div style={{position: 'relative', width: '100%'}}>
                <select name="subject0" defaultValue="English">
                  <option>English</option>
                  <option>Chemistry</option>
                </select>
                <span className="select-arrow"><HiChevronDown /></span>
              </div>
              <div style={{position: 'relative', width: '100%'}}>
                <select name="publisher0" defaultValue="NCERT">
                  <option>NCERT</option>
                  <option>Oxford</option>
                </select>
                <span className="select-arrow"><HiChevronDown /></span>
              </div>
              <div style={{position: 'relative', width: '100%'}}>
                <select name="faculty0" defaultValue="Bindhu">
                  <option>Bindhu</option>
                  <option>Balan</option>
                </select>
                <span className="select-arrow"><HiChevronDown /></span>
              </div>
            </div>
            <div className="table-row">
              <div style={{position: 'relative', width: '100%'}}>
                <select name="subject1" defaultValue="Chemistry">
                  <option>English</option>
                  <option>Chemistry</option>
                </select>
                <span className="select-arrow"><HiChevronDown /></span>
              </div>
              <div style={{position: 'relative', width: '100%'}}>
                <select name="publisher1" defaultValue="Oxford">
                  <option>NCERT</option>
                  <option>Oxford</option>
                </select>
                <span className="select-arrow"><HiChevronDown /></span>
              </div>
              <div style={{position: 'relative', width: '100%'}}>
                <select name="faculty1" defaultValue="Balan">
                  <option>Bindhu</option>
                  <option>Balan</option>
                </select>
                <span className="select-arrow"><HiChevronDown /></span>
              </div>
              <div style={{position: 'relative', width: '100%'}}>
                <select name="subject0" defaultValue="English">
                  <option>English</option>
                  <option>Chemistry</option>
                </select>
                <span className="select-arrow"><HiChevronDown /></span>
              </div>
              <div style={{position: 'relative', width: '100%'}}>
                <select name="publisher0" defaultValue="NCERT">
                  <option>NCERT</option>
                  <option>Oxford</option>
                </select>
                <span className="select-arrow"><HiChevronDown /></span>
              </div>
              <div style={{position: 'relative', width: '100%'}}>
                <select name="faculty0" defaultValue="Bindhu">
                  <option>Bindhu</option>
                  <option>Balan</option>
                </select>
                <span className="select-arrow"><HiChevronDown /></span>
              </div>
            </div>
            <div className="table-row">
              <div style={{position: 'relative', width: '100%'}}>
                <select name="subject1" defaultValue="Chemistry">
                  <option>English</option>
                  <option>Chemistry</option>
                </select>
                <span className="select-arrow"><HiChevronDown /></span>
              </div>
              <div style={{position: 'relative', width: '100%'}}>
                <select name="publisher1" defaultValue="Oxford">
                  <option>NCERT</option>
                  <option>Oxford</option>
                </select>
                <span className="select-arrow"><HiChevronDown /></span>
              </div>
              <div style={{position: 'relative', width: '100%'}}>
                <select name="faculty1" defaultValue="Balan">
                  <option>Bindhu</option>
                  <option>Balan</option>
                </select>
                <span className="select-arrow"><HiChevronDown /></span>
              </div>
              <div style={{position: 'relative', width: '100%'}}>
                <select name="subject0" defaultValue="English">
                  <option>English</option>
                  <option>Chemistry</option>
                </select>
                <span className="select-arrow"><HiChevronDown /></span>
              </div>
              <div style={{position: 'relative', width: '100%'}}>
                <select name="publisher0" defaultValue="NCERT">
                  <option>NCERT</option>
                  <option>Oxford</option>
                </select>
                <span className="select-arrow"><HiChevronDown /></span>
              </div>
              <div style={{position: 'relative', width: '100%'}}>
                <select name="faculty0" defaultValue="Bindhu">
                  <option>Bindhu</option>
                  <option>Balan</option>
                </select>
                <span className="select-arrow"><HiChevronDown /></span>
              </div>
            </div>
            <div className="table-row">
              <div style={{position: 'relative', width: '100%'}}>
                <select name="subject1" defaultValue="Chemistry">
                  <option>English</option>
                  <option>Chemistry</option>
                </select>
                <span className="select-arrow"><HiChevronDown /></span>
              </div>
              <div style={{position: 'relative', width: '100%'}}>
                <select name="publisher1" defaultValue="Oxford">
                  <option>NCERT</option>
                  <option>Oxford</option>
                </select>
                <span className="select-arrow"><HiChevronDown /></span>
              </div>
              <div style={{position: 'relative', width: '100%'}}>
                <select name="faculty1" defaultValue="Balan">
                  <option>Bindhu</option>
                  <option>Balan</option>
                </select>
                <span className="select-arrow"><HiChevronDown /></span>
              </div>
            </div>
          </div>
          <div className="modal-actions">
            <div>
              <button type="button" className="back-btn">Back</button>
            </div>
            <div>
              <button type="button" className="clear-btn">Clear</button>
              <button type="submit" className="save-btn">Save</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

