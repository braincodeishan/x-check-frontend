import React from 'react'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
const FilterBox = (props) => {
    // const id=props.id;
    // console.log(props.data);
    return (
        <div className="subsection">
            <div className="subheading">
                <h6>{props.data.name}</h6>
                
                <Button 
                variant="text" 
                disabled={props.data.isClearDisabled}
                className="subbutton">Clear
                </Button>
                
                <i className='bx bxs-chevron-down' onClick={(e)=>{
                    e.target.classList.toggle("rotateX180")
                    props.toggleCheckboxFunction(props.data.id)}}></i>

            </div>
            {props.data.isCheckboxShown && <div className={"filterForms"} style={{marginLeft:'10px'}}>
            <FormGroup>
                
                {props.data.value.map((val,index)=>{
                    if(index<5){
                        return <FormControlLabel key={index} control={<Checkbox default />} label={val} className="FilterCheckboxes"/>
                    }else{
                        return <FormControlLabel key={index} control={<Checkbox default />} label={val} className="FilterCheckboxes hidden"/>
                    }
                })}
                {props.data.value.length>5 && <Button variant="text" className="subbutton" onClick={props.showAllCheckboxesFunction}>Show All</Button>}
            </FormGroup>
            </div>}
        </div>
    )
}

export default FilterBox