import React from 'react'

export default function Nested(props) {
    const data = props.data;

    return (
        <>
        <ul>
            {
                data.map((entry) => {
                    const key = entry.key != null ? entry.key : entry
                    const children = entry.children
                    return (
                        <li>
                            {key}

                            {
                            children != null &&
                            <Nested data={children}/>
                            }
                        </li>
                    )
                })
            }
        </ul>
        </>
    )

}
