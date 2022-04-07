import React, { useEffect, useState } from 'react'
import axios from 'axios';
const UpdateMobile = () => {
    const [data, setData] = useState({});
    useEffect(() => {
        getData()
    }, [data])

    const getData = async () => {
        const result = await axios.get('http://localhost:3001/updateMobile')
        if (result) {
            setData(result.data)
        }
    }




    return (
        <div className="container">
            <div className="boxLayout">
                <h2>{data.name}</h2>
            </div>
            {!data.twoG && < div className="boxLayout">

            </div>}
            {!data.threeG && <div className="boxLayout">

            </div>}
            {!data.fourG && <div className="boxLayout"></div>}
            {!data.fiveG && <div className="boxLayout"></div>}
            {data.announced===null && <div className="boxLayout"></div>}
            <div className="boxLayout"></div>
            <div className="boxLayout"></div>
            <div className="boxLayout"></div>
            <div className="boxLayout"></div>
            <div className="boxLayout"></div>
        </div >
    )
}

export default UpdateMobile