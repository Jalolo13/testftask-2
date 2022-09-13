import "./Table.sass";
import { addStudents, fetchStudents } from "../store/studentSlice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../modal/Modal";

const Table = ({ subj }) => {
    const [modalActive, setModalActive] = useState(false);
    const [name, setName] = useState("");
    const [score, setScore] = useState("");
    const [level, setLevel] = useState("");
    const dispatch = useDispatch();

    const handleClick = () => {
        setModalActive(true);
    };

    const postUser = () => {
        dispatch(
            addStudents({
                name: name,
                score: score,
                level: level,
                subject: subj,
            })
        );
    };

    useEffect(() => {
        dispatch(fetchStudents(subj));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch]);

    const studentData = useSelector((state) => state.students.students);
    const { status } = useSelector((state) => state.students);
    console.log(status);

    return status === "loading" ? (
        <h2>Loading...</h2>
    ) : status === "rejected" ? (
        <h2 className="error-server">Internal Server Error 500. Try again</h2>
    ) : (
        <>
            <button className="add-student" onClick={handleClick}>
                Add new student
            </button>
            <Modal
                setScore={setScore}
                setName={setName}
                setLevel={setLevel}
                active={modalActive}
                setActive={setModalActive}
                handleClick={postUser}
            />
            <table class="table">
                <tr>
                    <th>Name</th>
                    <th>Level</th>
                    <th>Average Score</th>
                </tr>
                {studentData.map(({ name, level, score, surname, id }) => (
                    <tr className={id}>
                        <td>
                            {name} {surname}
                        </td>
                        <td>{level}</td>
                        <td>{score}</td>
                    </tr>
                ))}
            </table>
        </>
    );
};

export default Table;
