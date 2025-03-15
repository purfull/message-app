import { Input, Select } from 'antd';
import whatsappImage from './assets/whatsapp-bg.jpg';
import { useState } from 'react';
const { Option } = Select;


const Detial = ({BackButton}) => {
    const [pageSize, setPageSize] = useState(10);
    const [fileName, setFileName] = useState(10);
    
    const handleChange = (value) => {
        setPageSize(value);
        if (onChange) onChange(value);
    };
    const handleFileNameChange = (value) => {
        setFileName(value);
        if (onChange) onChange(value);
    };

    const handleAdd = () => {
        BackButton({newPage: false})
    }
    return ( 
        <div className="">
            <div className="w-[71%] h-[90vh] bg-white my-shadow py-6 px-4">

                
                <div className="heading-2 mb-2">Broadcast Name</div>
                <Input placeholder="Name" className="inputBox !mb-4" />
                
                <div className="heading-2 mb-2">Select Broadcast Number</div>
                    <Select
                        value={pageSize}
                        onChange={handleChange}
                        style={{ width: "100%" }}
                        dropdownStyle={{ minWidth: 60 }}
                        className='!mb-4'
                    >
                        <Option value={10} disabled>select-account</Option>
                        <Option value={20}>Purfull, +919098789098</Option>
                        <Option value={25}>Madgix, +918890987656</Option>
                    </Select>

                    <div className="heading-2 mb-2">Select Contact List</div>
                    <Select
                        value={fileName}
                        onChange={handleFileNameChange}
                        style={{ width: "100%" }}
                        dropdownStyle={{ minWidth: 60 }}
                        className=''
                    >
                        <Option value={10} disabled>select-file</Option>
                        <Option value={20}>my-list</Option>
                        <Option value={25}>her-list</Option>
                    </Select>

            </div>
            <div className="my-shadow fixed right-6 top-23 w-[20%]">
                <img src={whatsappImage} className="my-shadow"  alt="" />
            </div>
            <div className="w-[20%] fixed right-6 bottom-6  py-3 flex justify-end">
                <button onClick={handleAdd} className="secondary-button font-medium mr-4 !px-[30px]">Discard</button>
                <button onClick={handleAdd} className="primary-button font-medium ">Add Broadcast</button>

            </div>
        </div>
     );
}
 
export default Detial;