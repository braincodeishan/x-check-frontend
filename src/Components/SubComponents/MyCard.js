import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material'
import Avatar from '@mui/material/Avatar';

import { deepPurple } from '@mui/material/colors';

const MyCard = (props) => {

    return (
        <Card className={'L-myCard ' + props.classes} sx={{ position: 'absolute' }}>
            <CardContent>
                <div className="cardHeader">
                
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {props.data.name}
                </Typography>
                {props.data.avatar ?
                    <Avatar alt={props.data.name} src={props.data.avatar} /> :
                    <Avatar sx={{ bgcolor: deepPurple[500], justifySelf: 'center' }}>{props.data.name[0]}</Avatar>}
                </div>

                <Typography variant="body2">
                    {props.data.body}
                    <br />
                    {props.data.details}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>

    )
}

export default MyCard