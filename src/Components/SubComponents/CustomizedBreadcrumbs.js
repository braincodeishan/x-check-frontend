import * as React from 'react';
import { emphasize, styled } from '@mui/material/styles';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Chip from '@mui/material/Chip';
import HomeIcon from '@mui/icons-material/Home';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useNavigate } from 'react-router';

const StyledBreadcrumb = styled(Chip)(({ theme }) => {
  const backgroundColor =
    theme.palette.mode === 'light'
      ? theme.palette.grey[100]
      : theme.palette.grey[800];
  return {
    backgroundColor,
    height: theme.spacing(3),
    color: theme.palette.text.primary,
    fontWeight: theme.typography.fontWeightRegular,
    '&:hover, &:focus': {
      backgroundColor: emphasize(backgroundColor, 0.06),
    },
    '&:active': {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(backgroundColor, 0.12),
      
    },
  };
}); // TypeScript only: need a type cast here because https://github.com/Microsoft/TypeScript/issues/26591

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function CustomizedBreadcrumbs(props) {
  const Navigate = useNavigate()
  return (
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb" sx={{marginTop:'8px',marginBottom:'10px'}}>
        
        {props.data.map((data,index)=>{
          return (
            <StyledBreadcrumb
          component="a"
          href="/"
          label={data}
          icon={data==="Home" && <HomeIcon fontSize="small" />}
          onClick={()=>{

            {data==="Home"?Navigate("/"):Navigate("/"+props.data)}
          }}
          deleteIcon={index===(props.data.length) && <ExpandMoreIcon />}
          onDelete={handleClick}
        />
          )

        })}
        
        
      </Breadcrumbs>
    </div>
  );
}
