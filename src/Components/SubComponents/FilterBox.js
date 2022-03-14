import React from 'react'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
const FilterBox = (props) => {
    // const id=props.id;
    return (
        <div className="subsection">
            <div className="subheading">
                <h6>{props.name}</h6>
                <Button variant="text" className="subbutton">Clear</Button>
                <i className='bx bxs-chevron-down' onClick={(e)=>{
                    e.target.classList.toggle("rotateX180")
                    props.invert(props.id)}}></i>
            </div>
            {props.showFormCheckbox && <div className={"filterForms"} style={{marginLeft:'10px'}}>
            <FormGroup>
                
                {props.data.map((data,index)=>{
                    if(index<5){
                        return <FormControlLabel key={index} control={<Checkbox default />} label={data} className="FilterCheckboxes"/>
                    }else{
                        return <FormControlLabel key={index} control={<Checkbox default />} label={data} className="FilterCheckboxes hidden"/>
                    }
                })}
                {props.data.length>5 && <Button variant="text" className="subbutton" onClick={props.showCheckboxes}>Show All</Button>}
            </FormGroup>
            </div>}
        </div>
    )
}

export default FilterBox