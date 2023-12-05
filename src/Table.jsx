import React  from "react";

export default function Table({ finalAnswersArray }) {
    const respObjectKeys = Object.keys(finalAnswersArray[0]);

    const copyTable = () => {
        const elTable = document.querySelector('table');

        let range, sel;

        // Ensure that range and selection are supported by the browsers
        if (document.createRange && window.getSelection) {

            range = document.createRange();
            sel = window.getSelection();
            // unselect any element in the page
            sel.removeAllRanges();

            try {
                range.selectNodeContents(elTable);
                sel.addRange(range);
            } catch (e) {
                range.selectNode(elTable);
                sel.addRange(range);
            }

            document.execCommand('copy');
        }

        sel.removeAllRanges();

        console.log('Element Copied! Paste it in a file')
    }

    return (
        <div id="main">
            <table id="table" border={1}>
                <tr>
                    {
                        respObjectKeys.map((elem) => {
                            return <th>{elem.toUpperCase()}</th>
                        })
                    }
                </tr>
                {
                    finalAnswersArray.map((val, idx) => {
                        return (
                            <tr key={idx}>
                                {
                                    respObjectKeys.map((key, index) => {
                                        return <td key={index}>{val[key]}</td>
                                    })
                                }
                            </tr>
                        )
                    })
                }
            </table>
            <button id="copy-to-clipboard" onClick={copyTable}>Copy</button>
        </div>
    )
}
