import { Input, Select, Table } from "antd";
import "./Table.scss"
import { useState } from "react";
const { Option } = Select;

const CustomTable = ({columns, data, addButtonClick}) => {
    const [pageSize, setPageSize] = useState(10);

    const handleChange = (value) => {
      setPageSize(value);
      if (onChange) onChange(value);
    };

    const handleAdd = () => {
        addButtonClick({newPage: true})
    }
    return ( 
        <div className="bg-white w-full my-shadow ">
            <div className="py-6 flex justify-between px-8">
                <div className="flex items-center">
                    <span className="heading-2 mr-4">show</span>
                    <Select
                        value={pageSize}
                        onChange={handleChange}
                        style={{ width: 60 }}
                        dropdownStyle={{ minWidth: 60 }}
                    >
                        <Option value={10}>10</Option>
                        <Option value={25}>25</Option>
                        <Option value={50}>50</Option>
                        <Option value={100}>100</Option>
                    </Select>

                </div>
                <div className="flex">
                    <div className=" h-full mr-6">
                        <Input placeholder="Search" className="w-[40vw] !py-[6px]" />
                    </div>
                    
                    <button className="primary-button font-medium " onClick={handleAdd}>+ Add New</button>

                </div>
            </div>
            
            <Table columns={columns} dataSource={data} />
        </div>
     );
}
 
export default CustomTable;