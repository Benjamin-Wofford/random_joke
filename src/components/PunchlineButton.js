import React from 'react';
import Button from '@material-ui/core/Button'


class PunchlineButton extends React.Component{
    render(){
       return <Button color="primary" style={{margin: 20}}className='button' variant='contained' size='large'>Reveal Punchline</Button>
    }
}

export default PunchlineButton;