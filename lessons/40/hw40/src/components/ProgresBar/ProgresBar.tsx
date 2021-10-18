import React from 'react'
import CSS from 'csstype'

interface Props {
    bgcolor: string;
    completed: number;
}

export const ProgressBar: React.FC<Props> = (props) => {

    const {bgcolor, completed} = props;

    const containerStyles: CSS.Properties = {
        height: '20px',
        width: '80%',
        backgroundColor: "#e0e0de",
        borderRadius: '50px',
        margin: '50px auto',
    }

    const fillStyles: CSS.Properties = {
        height: '100%',
        width: `${completed}%`,
        backgroundColor: bgcolor,
        borderRadius: 'inherit',
        textAlign: 'right',
        transition: 'width 1s ease-in-out'
    }

    const labelStyles: CSS.Properties = {
        padding: '5px',
        color: 'white',
        fontWeight: 'bold'
    }

    return (
        <div style={containerStyles}>
            <div style={fillStyles}>
                <span style={labelStyles} >{`${completed}%`}</span>
            </div>
        </div>
    )

}

