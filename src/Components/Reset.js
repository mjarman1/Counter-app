
import React from 'react'

const Reset = (props) => {
    const { reset } = props

    return (
        <div>
            <button onClick = {reset}>Back to zero</button>
        </div>
    )
}

export default Reset