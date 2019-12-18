import React from 'react';
import Button from '@material-ui/core/Button'

class NewJokeButton extends React.Component{
    render(){
       return <Button style={{padding:15}} className='button' variant="contained" size="large">Get new joke</Button>
    }
}

export default NewJokeButton;
