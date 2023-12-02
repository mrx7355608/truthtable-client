import { useState } from "react"
import Table from "./Table"

export default function App() {
    const [expr, setExpr] = useState(null)
    const [resp, setResp] = useState(null)
    const [loading, setLoading] = useState(false)

    const submit = (e) => {
        e.preventDefault();
        setLoading(true)
        fetch("http://localhost:3000/api/v1/solve-expression", 
            { 
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ expression: expr })
            }
        )
            .then(resp => resp.json())
            .then(data => {
                console.log(data)
                setResp(data)
            })
            .catch(err => console.log(err.message))
            .finally(() => setLoading(false))
    }
    const handleChange = (e) => setExpr(e.target.value);

    return (
        <>
            <h1>Truth Table Generator</h1>
            <div id="note">
                <h3>NOTE</h3>
                <ul>
                    <li>Only supports AND, NOT & OR operations</li>
                    <li>Use "." (dot) for AND operations</li>
                    <li>Use "+" (dot) for OR operations</li>
                    <li>Use "!" (exclamation) for NOT operations</li>
                </ul>
            </div>
            <form onSubmit={submit} id="expr-input">
                <input type="text" placeholder="Enter expression" name="expression" onChange={handleChange} />
                <button type="submit">{loading ? "Loading...":"Do it!"}</button>
            </form>
            {resp && <Table finalAnswersArray={resp}/>}
        </>

    )
}
