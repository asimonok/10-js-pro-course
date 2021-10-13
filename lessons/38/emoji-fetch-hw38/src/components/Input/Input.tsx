import React from 'react' 

interface Props {
    searchingWord: string,
    onChange: (newSearchingWord: string) => void
}

class Input extends React.Component<Props> {
    

    handleChange =(event: React.ChangeEvent<HTMLInputElement>) => {
        this.props.onChange(event.target.value)
    }
    render() {

        return (
                <input placeholder="Enter emoji title" onChange={this.handleChange}></input>
        )
    }
    
}

export default Input;

