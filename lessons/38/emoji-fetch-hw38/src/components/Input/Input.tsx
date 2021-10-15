import React from 'react' 

interface Props {
    searchingWord: string,
    handleChange: (newSearchingWord: string) => void
}

function Input (props: Props) {

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        return props.handleChange(event.target.value)
    }
        return (
                <input placeholder="Enter emoji title" onChange={handleChange}></input>
        )
}

export default Input;

