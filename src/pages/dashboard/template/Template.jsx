import { Input, Select } from "antd";

import whatsappImage from "./assets/whatsapp-bg.jpg";
import { useState } from "react";
import * as XLSX from "xlsx";
import Papa from "papaparse";
import CustomTable from "../../../components/table/Table";
const { Option } = Select;

const Template = ({ BackButton }) => {
  const [pageSize, setPageSize] = useState(10);
  const [fileName, setFileName] = useState(10);
  const [jsonData, setJsonData] = useState(null);
  const [newPage, setNewPage] = useState(false)

  const [loading, setLoading] = useState(false);

  const columns = [
    {
      title: "Name",
      dataIndex: "Name",
      key: "Name",
    },
    {
      title: "Phone",
      dataIndex: "Phone",
      key: "Phone",
    },
    {
      title: "Group",
      dataIndex: "Group",
      key: "Group",
    },
    // {
    //     title: "Message",
    //     dataIndex: "message",
    //     key: "message",
    // },
  ];
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const fileType = file.name.split(".").pop().toLowerCase();

    if (fileType === "csv") {
      parseCSV(file);
    } else if (fileType === "xls" || fileType === "xlsx") {
      parseExcel(file);
    } else {
      alert("Unsupported file format! Please upload a CSV or Excel file.");
    }
  };

  const parseCSV = (file) => {
    setLoading(true);
    setJsonData([]); // Reset JSON data before parsing

    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      worker: true,
      chunk: function (result) {
        setJsonData((prev) => [
          ...(Array.isArray(prev) ? prev : []),
          ...result.data.map((item, index) => ({
            ...item,
            key: item.id || `csv-${Date.now()}-${index}`, // Ensure a unique key
          })),
        ]);
      },
      complete: () => {
        setLoading(false);
        console.log("CSV parsing complete.");
      },
    });
  };

  const parseExcel = (file) => {
    setLoading(true);
    setJsonData([]); // Reset JSON data before parsing

    const reader = new FileReader();
    reader.onload = (e) => {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: "array" });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];

      let parsedData = XLSX.utils.sheet_to_json(sheet, { defval: "" });

      parsedData = parsedData.map((item, index) => ({
        ...item,
        key: item.id || `excel-${Date.now()}-${index}`, // Assign unique key
      }));

      setJsonData(parsedData);
      setLoading(false);
      console.log("Excel parsing complete.");
    };
    reader.readAsArrayBuffer(file);
  };

  const downloadSampleCSV = () => {
    const sampleData = [
      ["Name", "Phone", "Group"],
      ["John Doe", "+1234567890", "A"],
      ["Jane Smith", "+9876543210", "B"],
    ];

    const csvContent = Papa.unparse(sampleData);
    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "sample_contacts.csv";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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
  };

  return (
    <div className="">

        <div className="">
            <div className="w-[71%]  bg-white my-shadow py-6 px-4">
                <div className="heading-2 mb-2">Template Name</div>
                <Input placeholder="Name" className="inputBox !mb-4" />

                
                <div className="heading-2 mb-2">Title</div>
                <Input placeholder="Title" className="inputBox !mb-4" />

                
                <div className="heading-2 mb-2">Body</div>
                <Input.TextArea placeholder="Message" className="inputBox !mb-4 !min-h-[30vh]" />


                <div className="heading-2 mb-2">Footer</div>
                <Input placeholder="Footer" className="inputBox !mb-4" />

                <div className="heading-2 mb-2">Buttons</div>
                <Select
                value={pageSize}
                onChange={handleChange}
                style={{ width: "100%" }}
                dropdownStyle={{ minWidth: 60 }}
                className="!mb-4"
                >
                {/* <Option value={10} disabled>
                    select-account
                </Option> */}
                <Option value={10}>call to action</Option>
                <Option value={20}>quick replay</Option>
                </Select>

                
            </div>
            <div className="my-shadow fixed right-6 top-23 w-[20%]">
                <img src={whatsappImage} className="my-shadow" alt="" />
            </div>
            <div className="w-[20%] fixed right-6 bottom-6  py-3 flex justify-end">
                <button
                onClick={handleAdd}
                className="secondary-button font-medium mr-4 !px-[30px]"
                >
                Discard
                </button>
                <button onClick={handleAdd} className="primary-button font-medium ">
                Save Template
                </button>
            </div>
        </div>
    </div>
  );
};

export default Template;
