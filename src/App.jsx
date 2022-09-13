import Main from "./components/main/Main";
import "./App.sass";
import NavBar from "./components/NavBar/NavBar";
import { useState } from "react";

function App() {
    const [subject, setSubject] = useState("");

    const handleSubject = (subj) => {
        setSubject(subj);
    };
    return (
        <div className="App">
            <NavBar handleSubject={handleSubject} />

            <Main />
        </div>
    );
}

export default App;
