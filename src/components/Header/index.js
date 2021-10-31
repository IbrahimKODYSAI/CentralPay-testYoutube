import React from "react";

//import locaux
import './header.css'

const Header = ({setInputValue, inputValue, onSearch }) => {

    const onSearchChange = (event) => {
        const fieldValue = event.target.value;

        setInputValue(fieldValue)
        onSearch(fieldValue)
    };

    const clearInput = () => {
        setInputValue("")
    }

     return (
        <div className="header-container p-5">
            <div className="flex flex-row justify-center">
                <img src="img/logo.png" alt="" className="w-8 h-6 mx-2 my-auto"/>
                <p className="text-center font-bold text-2xl text-white">Central<span className="text-red-600 ">Play</span></p>
            </div>
            <div className="mx-auto w-4/12 m-5">
                <div className="mx-auto flex">
                    <input
                        className="w-10/12 h-10 border p-2 rounded-l"
                        type="text"
                        placeholder="Search..."
                        autoComplete="off"
                        name="inputSearchValue"
                        value={inputValue}
                        onChange={(event) => onSearchChange(event)}
                    />
                    <div className="w-10 text-center border h-10">
                        {inputValue.length === 0 ?
                            <i className="fa fa-search leading-10 text-white"></i> :
                            <i className="fa fa-times leading-10 text-white" onClick={clearInput}></i>
                        }
                    </div>
                </div>
            </div>
        </div> 
     )
}

export default Header;