import React, { useState} from "react";

import Dropdown from "../components/Dropdown";

function DropdownPage() {
    const dropDownOptions = [
        { label: 'Red', value: 'red' },
        { label: 'Green', value: 'green' },
        { label: 'Blue', value: 'blue' }
    ];

    const [selection,setSelection] = useState(null);

    const onDropdownChange = (option) => {
        
        setSelection({...option});
    }


    return (
        <div className="flex p-5  gap-x-5">
           <Dropdown options={dropDownOptions} value={selection} onChange = {onDropdownChange}  />
           <Dropdown options={dropDownOptions} value={selection} onChange = {onDropdownChange}  />

        </div>
    )
}

export default DropdownPage;
