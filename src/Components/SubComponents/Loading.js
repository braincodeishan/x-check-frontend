import React from 'react'
import HashLoader from "react-spinners/HashLoader"



const Loading = () => {


    return (
        <>
            <div className='Loading'>
                <HashLoader size={75} color={"#FFFFFF"} />
            </div>

        </>
    )
}

export default Loading
