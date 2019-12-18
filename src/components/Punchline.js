import React from 'react';

class Punchline extends React.Component{
    render(){
       return <p className='punchline'>{this.props.punchline}</p>
    }
}

export default Punchline;