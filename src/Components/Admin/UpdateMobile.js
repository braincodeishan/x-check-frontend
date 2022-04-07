import React, { useEffect, useState } from 'react'
import axios from 'axios';
import '../../Assets/CSS/Admin.css'
import { Select, MenuItem } from '@mui/material';

const UpdateMobile = () => {
    const [data, setData] = useState({});
    const [updatedData, setUpdatedData] = useState({})
    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        const result = await axios.get('http://localhost:3001/admin/updateMobile')
        if (result.status === 200) {
            console.log(result.data);
            setData(result.data)

        } else {
            alert(result.data)
        }
    }





    return (
        <div className="container">
            <div className="boxLayout d-flex-justify-align">
                <h2>{data.name}</h2>
            </div>
            {!data.twoG && < div className="boxLayout d-flex-justify-align">
                <div className="questions">
                    <h6>Is 2G available in the phone?</h6>
                    <Select />
                </div>
            </div>}
            {!data.threeG && <div className="boxLayout d-flex-justify-align">
                abc2
            </div>}
            {!data.fourG && <div className="boxLayout d-flex-justify-align">abc3</div>}
            {!data.fiveG && <div className="boxLayout d-flex-justify-align">abc4</div>}
            {data.announced === null && <div className="boxLayout d-flex-justify-align">abc5</div>}
            {data.weight === -1 && <div className="boxLayout d-flex-justify-align">
                <div className="questions d-grid">
                <h6>What is the weight of the phone?</h6>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        // value={age}
                        label="Age"
                        // onChange={handleChange}
                    >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </div>

            </div>}
            {!data.dualSim && <div className="boxLayout d-flex-justify-align">abc7</div>}
            {data.ipxRating && <div className="boxLayout d-flex-justify-align">abc8</div>}
            {data.displayType === null && <div className="boxLayout d-flex-justify-align">abc9</div>}
            {data.displayHz === -1 && <div className="boxLayout d-flex-justify-align">abc10</div>}
            {data.displayResolutionHeight === -1 && <div className="boxLayout d-flex-justify-align">abc11</div>}
            {data.displayResolutionWidth === -1 && <div className="boxLayout d-flex-justify-align">abc12</div>}
            {data.os === null && <div className="boxLayout d-flex-justify-align">abc13</div>}
            {data.cpuNoOfCores === -1 && <div className="boxLayout d-flex-justify-align">abc14</div>}
            {data.cpuHz === -1 && <div className="boxLayout d-flex-justify-align">abc15</div>}
            {!data.cardSlot && <div className="boxLayout d-flex-justify-align">abc16</div>}
            {data.pCamera && <div className="boxLayout d-flex-justify-align">abc17</div>}
            {data.pVideoResolution && <div className="boxLayout d-flex-justify-align">abc18</div>}
            {data.sCamera && <div className="boxLayout d-flex-justify-align">abc19</div>}
            {data.sVideoResolution && <div className="boxLayout d-flex-justify-align">abc20</div>}
            {data.cardSlot && <div className="boxLayout d-flex-justify-align">abc21</div>}
            {data.cardSlot && <div className="boxLayout d-flex-justify-align">abc22</div>}
            {data.cardSlot && <div className="boxLayout d-flex-justify-align">abc23</div>}
            {data.cardSlot && <div className="boxLayout d-flex-justify-align">abc24</div>}
            {data.cardSlot && <div className="boxLayout d-flex-justify-align">abc25</div>}
        </div >
    )
}

export default UpdateMobile