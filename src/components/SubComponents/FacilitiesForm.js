/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import {
    CFormInput,
    CInputGroup,
    CInputGroupText,
    CRow,
    CCol,
    CForm,
    CFormSelect,
    CFormCheck,
    CButton,
    CDropdownMenu,
    CDropdownItem,
    CDropdownDivider,
    CDropdown,
    CDropdownItemPlain
} from "@coreui/react";
const FacilitiesForm = () => {

    const [show, setShow] = useState(false);
    const [selecteddata, setSelecteddata] = useState();
    const [inputValue, setInputValue] = useState('');
    const [checkboxes, setCheckboxes] = useState([
        { id: 1, label: 'Checkbox 1', checked: false },
        { id: 2, label: 'Checkbox 2', checked: false },
        { id: 3, label: 'Checkbox 3', checked: false },
    ]);
    const handleCheckboxChange = (event) => {
        const { id, checked } = event.target;
        setCheckboxes((prevCheckboxes) =>
            prevCheckboxes.map((checkbox) =>
                checkbox.id === Number(id) ? { ...checkbox, checked } : checkbox
            )
        );
    };
    const options = [
        {
            value: 0,
            text: 'Angular',
            selected: true,
        },
        {
            value: 1,
            text: 'Bootstrap',
        },
        {
            value: 2,
            text: 'React.js',
        },
        {
            value: 3,
            text: 'Vue.js',
        },
    ]

    const onSelect = (index, item) => {
        console.log('index', index, item);
        setSelecteddata(item.text)

    }
    const handleInputChange = () => {
        setShow(!show)
    };

    // const selectdata = JSON.stringify(selecteddata)
    // console.log('selecteddata',selectdata)
    return (
        <div className=''>
            <CForm>
                <CFormInput
                    
                    label={"Add Facilities"}
                    placeholder={"Select no. of Facilities"}
                    onClick={() => handleInputChange()}
                  
                    value={selecteddata}
               
                />
                {show && <div className='border p-3 rounded'>
                {options.map((item,index) => (
                    <div className='d-flex px-3 py-2' key={index} onClick={() => onSelect(index,item)} >
                        <input type="checkbox" className='me-3'/><div>{item.text}</div>
                    </div>
                    ))}
                    
                </div>}
                <p>Input Value: {inputValue}</p>
            </CForm>
            {/* <div>
                {checkboxes.map((checkbox) => (
                    <label key={checkbox.id}>
                        <input
                            type="checkbox"
                            id={checkbox.id}
                            checked={checkbox.checked}
                            onChange={handleCheckboxChange}
                        />
                        {checkbox.label}
                    </label>
                ))}
            </div> */}
        </div>
    )
}

export default FacilitiesForm