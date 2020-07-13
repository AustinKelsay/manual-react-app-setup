import React from "react"

const deepComponent = (props) => {
    console.log(props)

    return(
        <div>
            <h1>Deep component</h1>
            {
                props.deepData.map((char) => {
                    return <p>{char.name}</p>
                })
            }
        </div>
    )
}

export default deepComponent;