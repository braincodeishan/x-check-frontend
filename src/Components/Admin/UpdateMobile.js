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
                abc1
            </div>}
            {!data.threeG && <div className="boxLayout">
                abc2
            </div>}
            {!data.fourG && <div className="boxLayout">abc3</div>}
            {!data.fiveG && <div className="boxLayout">abc4</div>}
            {data.announced === null && <div className="boxLayout">abc5</div>}
            {data.weight === -1 && <div className="boxLayout">abc6</div>}
            {!data.dualSim && <div className="boxLayout">abc7</div>}
            {data.ipxRating && <div className="boxLayout">abc8</div>}
            {data.displayType === null && <div className="boxLayout">abc9</div>}
            {data.displayHz === -1 && <div className="boxLayout">abc10</div>}
            {data.displayResolutionHeight === -1 && <div className="boxLayout">abc11</div>}
            {data.displayResolutionWidth === -1 && <div className="boxLayout">abc12</div>}
            {data.os === null && <div className="boxLayout">abc13</div>}
            {data.cpuNoOfCores === -1 && <div className="boxLayout">abc14</div>}
            {data.cpuHz === -1 && <div className="boxLayout">abc15</div>}
            {!data.cardSlot && <div className="boxLayout">abc16</div>}
            {data.pCamera && <div className="boxLayout">abc17</div>}
            {data.pVideoResolution && <div className="boxLayout">abc18</div>}
            {data.sCamera && <div className="boxLayout">abc19</div>}
            {data.sVideoResolution && <div className="boxLayout">abc20</div>}
            {data.cardSlot && <div className="boxLayout">abc21</div>}
            {data.cardSlot && <div className="boxLayout">abc22</div>}
            {data.cardSlot && <div className="boxLayout">abc23</div>}
            {data.cardSlot && <div className="boxLayout">abc24</div>}
            {data.cardSlot && <div className="boxLayout">abc25</div>}
        </div >
    )
}

export default UpdateMobile