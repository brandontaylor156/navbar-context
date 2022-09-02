import React from 'react'
import {NavbarContext} from '../Contexts/NavbarContext';

const Form = () => {
    const context = React.useContext(NavbarContext)
    const [currName, setCurrName] = React.useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        if(currName.length > 0){
            context.setName(currName)
            setCurrName("")
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input 
                        type="text" 
                        onChange={(event)=>{setCurrName(event.target.value)}}
                        value={currName}
                    />
                    <button>Change Name</button>
                </div>
            </form>
        </div>
    )
}

export default Form