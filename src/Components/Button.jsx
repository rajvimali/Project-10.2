import React from 'react'

const Button = ({ onclick, children }) => {
    return (
        <div className="container d-flex justify-content-center">
            <button className=" bg-primary text-white  my-10 border-0  py-2 px-3 mt-3 rounded" onClick={onclick}>
                {children}
            </button>
        </div>
    )
}
export default Button
