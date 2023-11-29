import React from 'react'

const TextField = ({ label, inputProps, onChange, value }) => {
    return (
        <>
            <div className="container">
                <div className="flex col">
                    <label className="mb-2  ">{label}</label>
                    <input className="  form-control p-2 rounded " {...inputProps} onChange={onChange} value={value} />
                </div>
            </div>
        </>
    )
}

export default TextField