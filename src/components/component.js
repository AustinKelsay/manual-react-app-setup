import React from "react"
import DeepComponent from "./deepComponent"

const Component = (props) => {
    console.log(props)

    return(
        <div>
            <h1>Component</h1>
            <DeepComponent deepData={props.data} />
        </div>
    )
}

export default Component;