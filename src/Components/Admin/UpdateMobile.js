import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../Assets/CSS/Admin.css";
import { Select, MenuItem } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { TextField } from "@mui/material";
const UpdateMobile = () => {
    const [data, setData] = useState({});
    const [updatedData, setUpdatedData] = useState({});
    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        const result = await axios.get("http://localhost:3001/admin/updateMobile");
        if (result.status === 200) {
            //   console.log(result.data);
            setData(result.data);
        } else {
            alert(result.data);
        }
    };

    return (
        <div className="container">
            <div className="boxLayout d-flex-justify-align">
                <h2>{data.name}</h2>
            </div>
            <div className="row">
                <div className="col-6">
                    <div className="boxLayout">
                        <Table sx={{ minWidth: 500 }} aria-label="simple table">
                            <TableBody>
                                {data.specification?.map((row) => {
                                    if (row.value) {
                                        return (
                                            <TableRow
                                                key={row.name}
                                                sx={{
                                                    "&:last-child td, &:last-child th": { border: 0 },
                                                }}
                                            >
                                                <TableCell component="th" scope="row">
                                                    <b>{row.name}</b>
                                                </TableCell>
                                                <TableCell align="left">{row.value}</TableCell>
                                            </TableRow>
                                        );
                                    } else {
                                        return null;
                                    }
                                })}
                            </TableBody>
                        </Table>
                    </div>
                </div>
                <div className="col-6">
                    {!data.twoG && (
                        <div className="boxLayout d-flex-justify-align">
                            <div className="questions">
                                <h6>Is 2G available in the phone?</h6>
                            </div>
                        </div>
                    )}
                    {!data.threeG && (
                        <div className="boxLayout d-flex-justify-align">abc2</div>
                    )}
                    {!data.fourG && (
                        <div className="boxLayout d-flex-justify-align">abc3</div>
                    )}
                    {!data.fiveG && (
                        <div className="boxLayout d-flex-justify-align">abc4</div>
                    )}
                    {data.announced === null && (
                        <div className="boxLayout d-flex-justify-align">abc5</div>
                    )}
                    {data.weight === -1 && (
                        <div className="boxLayout">
                            <div className="questions row p-4">
                                <h6 className="col-6 my-auto">
                                    What is the weight of the phone?
                                </h6>
                                <TextField
                                    id="standard-basic"
                                    label="Wts. in gram?"
                                    variant="standard"
                                    className="col-6"
                                />
                            </div>
                        </div>
                    )}
                    {!data.dualSim && (
                        <div className="boxLayout">
                            <div className="questions row p-4">
                                <h6 className="col-6 my-auto">Does the phone has Dual SIM?</h6>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={true}
                                    label="Age"
                                    className="col-6"
                                // onChange={handleChange}
                                >
                                    <MenuItem value={true}>Yes</MenuItem>
                                    <MenuItem value={false}>No</MenuItem>
                                </Select>
                            </div>
                        </div>
                    )}
                    {data.ipxRating && (
                        <div className="boxLayout ">
                            <div className="questions row p-4">
                                <h6 className="col-6 my-auto">
                                    Does the phone any IPx Ratings?
                                </h6>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={"IP69"}
                                    label="Age"
                                    className="col-6"
                                // onChange={handleChange}
                                >
                                    <MenuItem value={"IP69"}>IP69</MenuItem>
                                    <MenuItem value={"IP68"}>IP68</MenuItem>
                                    <MenuItem value={"IP67"}>IP67</MenuItem>
                                    <MenuItem value={"IP66"}>IP66</MenuItem>
                                    <MenuItem value={"IP65"}>IP65</MenuItem>
                                    <MenuItem value={"IP64"}>IP64</MenuItem>
                                    <MenuItem value={"IP63"}>IP63</MenuItem>
                                    <MenuItem value={"IP62"}>IP62</MenuItem>
                                    <MenuItem value={"IP61"}>IP61</MenuItem>
                                    <MenuItem value={"IP60"}>IP60</MenuItem>
                                    <MenuItem value={"IP59"}>IP59</MenuItem>
                                    <MenuItem value={"IP58"}>IP58</MenuItem>
                                    <MenuItem value={"IP57"}>IP57</MenuItem>
                                    <MenuItem value={"IP56"}>IP56</MenuItem>
                                    <MenuItem value={"IP55"}>IP55</MenuItem>
                                    <MenuItem value={"IP54"}>IP54</MenuItem>
                                    <MenuItem value={"IP53"}>IP53</MenuItem>
                                    <MenuItem value={null}>None</MenuItem>
                                </Select>
                            </div>
                        </div>
                    )}
                    {data.displayType === null && (
                        <div className="boxLayout">
                            <div className="questions row p-4">
                                <h6 className="col-6 my-auto">
                                    Please select type of Display?
                                </h6>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={"Amoled"}
                                    label="Age"
                                    className="col-6"
                                // onChange={handleChange}
                                >
                                    <MenuItem value={"Amoled"}>Amoled</MenuItem>
                                    <MenuItem value={"IPS"}>IPS</MenuItem>
                                    <MenuItem value={"LCD"}>LCD</MenuItem>
                                </Select>
                            </div>
                        </div>
                    )}
                    {data.displayHz === -1 && (
                        <div className="boxLayout">
                            <div className="questions row p-4">
                                <h6 className="col-6 my-auto">
                                    Please select Refresh Rate of Display?
                                </h6>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={144}
                                    label="Age"
                                    className="col-6"
                                // onChange={handleChange}
                                >
                                    <MenuItem value={60}>60Hz</MenuItem>
                                    <MenuItem value={90}>90Hz</MenuItem>
                                    <MenuItem value={120}>120Hz</MenuItem>
                                    <MenuItem value={144}>144Hz</MenuItem>
                                </Select>
                            </div>
                        </div>
                    )}
                    {data.displayResolutionHeight === -1 &&
                        data.displayResolutionWidth === -1 && (
                            <div className="boxLayout d-flex-justify-align">
                                <div className="questions row p-4">
                                    <h6 className="col-6 my-auto">
                                        What is the Resolution of the phone?
                                    </h6>
                                    <TextField
                                        id="standard-basic"
                                        label="Width"
                                        variant="standard"
                                        className="col-2 pl-2"
                                    />
                                    <h6 className="col-2 d-grid justify-items-center align-items-end">
                                        X
                                    </h6>
                                    <TextField
                                        id="standard-basic"
                                        label="Height"
                                        variant="standard"
                                        className="col-2 pl-2"
                                    />
                                </div>
                            </div>
                        )}

                    {data.os === null && (
                        <div className="boxLayout">
                            <div className="questions row p-4">
                                <h6 className="col-6 my-auto">
                                    Please select OS of the Phone?
                                </h6>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={"IOS"}
                                    label="Age"
                                    className="col-6"
                                // onChange={handleChange}
                                >
                                    <MenuItem value={"Android"}>Android</MenuItem>
                                    <MenuItem value={"IOS"}>IOS</MenuItem>
                                    <MenuItem value={"Symbian"}>Symbian</MenuItem>
                                    <MenuItem value={"Java"}>Java</MenuItem>
                                </Select>
                            </div>
                        </div>
                    )}
                    {data.cpuNoOfCores === -1 && (
                        <div className="boxLayout">
                            <div className="questions row p-4">
                                <h6 className="col-6 my-auto">
                                    Please select no of Cores in the CPU?
                                </h6>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={8}
                                    label="Age"
                                    className="col-6"
                                // onChange={handleChange}
                                >
                                    <MenuItem value={1}>1</MenuItem>
                                    <MenuItem value={2}>2</MenuItem>
                                    <MenuItem value={4}>4</MenuItem>
                                    <MenuItem value={6}>6</MenuItem>
                                    <MenuItem value={8}>8</MenuItem>
                                    <MenuItem value={10}>10</MenuItem>
                                    <MenuItem value={12}>12</MenuItem>
                                </Select>
                            </div>
                        </div>
                    )}
                    {data.cpuHz === -1 && (
                        <div className="boxLayout">
                            <div className="questions row p-4">
                                <h6 className="col-6 my-auto">
                                    Please select clock speed of the CPU?
                                </h6>
                                <TextField
                                    id="standard-basic"
                                    label="Clock Speed"
                                    variant="standard"
                                    className="col-6 pl-2"
                                />
                            </div>
                        </div>
                    )}
                    {!data.cardSlot && (
                        <div className="boxLayout">
                            <div className="questions row p-4">
                                <h6 className="col-6 my-auto">Does the phone has CardSlot?</h6>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={true}
                                    label="Age"
                                    className="col-6"
                                // onChange={handleChange}
                                >
                                    <MenuItem value={true}>Yes</MenuItem>
                                    <MenuItem value={false}>No</MenuItem>
                                </Select>
                            </div>
                        </div>
                    )}
                    {data.pCamera && <div className="boxLayout">abc17</div>}


                    {data.pVideoResolution && <div className="boxLayout">
                        <div className="questions row p-4">
                            <h6 className="col-6 my-auto">What is the resolution of Video of Primary Camera?</h6>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={'4K'}
                                label="Age"
                                className="col-6"
                            // onChange={handleChange}
                            >
                                <MenuItem value={'4K'}>4K</MenuItem>
                                <MenuItem value={'2K'}>2K</MenuItem>
                                <MenuItem value={'1080'}>1080p</MenuItem>
                                <MenuItem value={'720'}>720p</MenuItem>
                                <MenuItem value={'none'}>None</MenuItem>
                            </Select>
                        </div>
                    </div>}
                    {data.sCamera && <div className="boxLayout">
                        <div className="questions row p-4">
                            <h6 className="col-2 my-auto">
                                Primary Camera?
                            </h6>
                            <TextField
                                id="standard-basic"
                                label="MegaPixel"
                                variant="standard"
                                className="col-2 pl-2"
                            />
                            <TextField
                                id="standard-basic"
                                label="MegaPixel"
                                variant="standard"
                                className="col-2 pl-2"
                            />
                        </div>

                    </div>}


                    {data.sVideoResolution && <div className="boxLayout">
                        <div className="questions row p-4">
                            <h6 className="col-6 my-auto">What is the resolution of Video of Front Camera?</h6>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={'4K'}
                                label="Age"
                                className="col-6"
                            // onChange={handleChange}
                            >
                                <MenuItem value={'4K'}>4K</MenuItem>
                                <MenuItem value={'2K'}>2K</MenuItem>
                                <MenuItem value={'1080'}>1080p</MenuItem>
                                <MenuItem value={'720'}>720p</MenuItem>
                                <MenuItem value={'none'}>None</MenuItem>
                            </Select>
                        </div>
                    </div>}
                    {!data.nfc && <div className="boxLayout">
                        <div className="questions row p-4">
                            <h6 className="col-6 my-auto">Does the phone has NFC?</h6>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={true}
                                label="Age"
                                className="col-6"
                            // onChange={handleChange}
                            >
                                <MenuItem value={true}>Yes</MenuItem>
                                <MenuItem value={false}>No</MenuItem>
                            </Select>
                        </div>
                    </div>}


                    {data.batterymAh && <div className="boxLayout">
                        <div className="questions row p-4">
                            <h6 className="col-6 my-auto">
                                Please enter the mAh of Battery?
                            </h6>
                            <TextField
                                id="standard-basic"
                                label="Battery Capacity"
                                variant="standard"
                                className="col-6 pl-2"
                            />
                        </div>
                    </div>}
                    {data.chargingWatt && <div className="boxLayout">
                        <div className="questions row p-4">
                            <h6 className="col-6 my-auto">
                                Please enter the Watt of Charger?
                            </h6>
                            <TextField
                                id="standard-basic"
                                label="Charger Power"
                                variant="standard"
                                className="col-6 pl-2"
                            />
                        </div>
                    </div>}

                </div>
            </div>
        </div>
    );
};

export default UpdateMobile;
