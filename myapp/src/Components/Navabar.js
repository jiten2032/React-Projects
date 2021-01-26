import React from 'react'

const Navabar = (props) => {
const SeparateDta = Mydata.map(data => {
    
        return (
            <div className="Navabar" key={data.id}>
                <div>Name:{data.name}</div>
                <div>Age:{data.age}</div>
                <div>Location:{data.location}</div>
                <div>Comapny:{data.company}</div>

            </div>
        )

    });

    return (
        <div className="separatedata">
            {SeparateDta}
        </div>
    )

}
export default Navabar