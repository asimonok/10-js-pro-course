import React from 'react'

class Toggle extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            isToggleOn: true,
        }
    }

    handleClick = () => {
        this.setState( (prevState: any) => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    retnder () {
        return (
            <button onClick={this.handleClick}>
                Click me
                {this.state.isToggleOn ? 'Turned on' : 'Turned off'}
            </button> 
        )
    }
   
}

export default Toggle;