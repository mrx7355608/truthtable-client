export default function Table({ finalAnswersArray }) {
    const { a, b, c, d, answers } = finalAnswersArray;
    return (
        <table>
            <tr>
                {a && <th>A</th>}
                {b && <th>B</th>}
                {c && <th>C</th>}
                {d && <th>D</th>}
            </tr>
            {
                a.map((value, index) => {
                    return (
                        <tr>
                            <td>{value}</td>
                            {b && <td>{b[index]}</td>}
                            {c && <td>{c[index]}</td>}
                            {d && <td>{d[index]}</td>}
                        </tr>
                    )
                })
            }
        </table>
    )
}
