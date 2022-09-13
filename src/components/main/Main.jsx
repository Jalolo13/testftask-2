import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Math from "./Math/Math";
import Chemistry from "./Chemistry/Chemistry";
import Biology from "./Biology/Biology";
import Physics from "./Physics/Physics";
import "./Main.sass";
import Table from "./Table/Table";
import { fetchStudents } from "./store/studentSlice";
import Modal from "./modal/Modal";

const Main = () => {
    return (
        <>
            <main className="main">
                <div className="main-inner">
                    <Routes path="/">
                        <Route index element={<Math />} />
                        <Route path="/Chemistry" element={<Chemistry />} />
                        <Route path="/Physics" element={<Physics />} />
                        <Route path="/Biology" element={<Biology />} />
                    </Routes>
                </div>
            </main>
        </>
    );
};

export default Main;
