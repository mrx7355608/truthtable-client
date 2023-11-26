export default function Table({ finalAnswersArray, totalInputs }) {
    return (
        <table id="output">
            {
                totalInputs === 2 ? (
                    <tr>
                        <th>A</th><th>B</th><th>X</th>
                    </tr>
                ) : totalInputs === 3 ? (
                    <tr>
                        <th>A</th><th>B</th><th>C</th><th>X</th>
                    </tr>
                ) : totalInputs === 4 ? (
                    <tr>
                        <th>A</th><th>B</th><th>C</th><th>D</th><th>X</th>
                    </tr> 
                ) : (
                    <tr>
                        <th>A</th><th>X</th>
                    </tr>
                )
            }
            {
                finalAnswersArray.map((data) => {
                    if (totalInputs === 1) {
                        return (
                            <tr>
                                <td>{data.a}</td>
                                <td>{data.answer}</td>
                            </tr>
                        )
                    } else if (totalInputs === 2) {
                        return (
                            <tr>
                                <td>{data.a}</td>
                                <td>{data.b}</td>
                                <td>{data.answer}</td>
                            </tr>
                        )
                    } else if (totalInputs === 3) {
                        return (
                            <tr>
                                <td>{data.a}</td>
                                <td>{data.b}</td>
                                <td>{data.c}</td>
                                <td>{data.answer}</td>
                            </tr>
                        )
                    } else if (totalInputs === 4) {
                        return (
                            <tr>
                                <td>{data.a}</td>
                                <td>{data.b}</td>
                                <td>{data.c}</td>
                                <td>{data.d}</td>
                                <td>{data.answer}</td>
                            </tr>
                        )
                    }
                })
            }
        </table>
    )
}
