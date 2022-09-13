export default function TodoItem({ id, name, surname, level, score }) {
    return (
        <tr key={id}>
            <td>
                {name} {surname}
            </td>
            <td>{level}</td>
            <td>{score}</td>
        </tr>
    );
}
