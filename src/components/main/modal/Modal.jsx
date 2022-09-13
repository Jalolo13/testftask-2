import React from "react";
import "./modal.sass";

const Modal = ({
    active,
    setActive,
    setName,
    setLevel,
    setScore,
    handleClick,
}) => {
    return (
        <div
            className={active ? "modal-overlay active" : "modal-overlay"}
            onClick={() => setActive(false)}
        >
            <div className="modal-block" onClick={(e) => e.stopPropagation()}>
                <h2 className="modal-title">add new student</h2>
                <input
                    type="text"
                    className="modal-input"
                    placeholder="Full Name"
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="text"
                    className="modal-input"
                    placeholder="Level"
                    onChange={(e) => setLevel(e.target.value)}
                />
                <input
                    type="text"
                    className="modal-input"
                    placeholder="Average score"
                    onChange={(e) => setScore(e.target.value)}
                />
                <button className="modal-add" onClick={handleClick}>
                    Add
                </button>
            </div>
        </div>
    );
};

export default Modal;
