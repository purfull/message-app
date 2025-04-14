import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import profileImage from "./assets/profile-img.png"
import { RightOutlined } from "@ant-design/icons";

gsap.registerPlugin(ScrollTrigger);

const Settings = () => {
    const fixedDivRef = useRef(null);


    return ( 
        <div className="grid grid-cols-12 gap-6 w-full">
            <div className="col-span-8 grid gap-6">
                <div className="bg-white my-shadow h-[35vh] py-6 px-4">
                    <div className="">
                        <span className="heading-2 !text-[1.2rem]">current balance</span>
                    </div>
                </div>
                <div className="bg-white my-shadow h-[35vh]"></div>
                <div className="bg-white my-shadow h-[35vh]"></div>
            </div>
            {/* GSAP will pin this instead of using 'fixed' */}
            
            <div className="my-shadow fixed right-6 top-23 w-[24%] bg-white h-[83vh] py-6 px-4">

                <img src={profileImage} className="w-24 mx-auto rounded-[8px]" alt="" />
                <div className="text-center my-4">
                    <span className="heading-2 !text-[1.2rem] ">s.n.sanjay</span>
                </div>
                <hr className="w-[100%] border-[#d9d9d9] mb-4" /> 
                <div className="w-full  ">
                    <div className="w-full py-3 flex">

                        <div className="py-[2px] px-[6px] w-10 flex justify-center bg-[#E8FADD] text-[#96E95F] rounded-[8px] mr-4">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" ><path d="M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H18C18 18.6863 15.3137 16 12 16C8.68629 16 6 18.6863 6 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11Z"></path></svg>

                        </div>
                        
                        <div className="">
                            <p className=" !w-[30%] text-[var(--secondary-text-color)]">username</p>
                            <p className=" !w-[43%] heading-2 !text-[15px]">s.n.sanjay</p>

                        </div>
                        {/* <RightOutlined style={{ fontSize: '12px', color: 'var(--secondary-text-color)' }}  /> */}
                        {/* <hr className="w-[100%] border-[#d9d9d9]" /> */}
                    </div>
                    <div className="w-full py-3 flex">

                        <div className="py-[2px] px-[6px] w-10 flex justify-center bg-[#FFE3E2] text-[#FF4D49] rounded-[8px] mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM20 7.23792L12.0718 14.338L4 7.21594V19H20V7.23792ZM4.51146 5L12.0619 11.662L19.501 5H4.51146Z"></path></svg>

                        </div>
                        
                        <div className="">
                            <p className=" !w-[30%] text-[var(--secondary-text-color)]">email</p>
                            <p className=" !w-[43%] heading-2 !text-[15px]">s.n.sanjay@gmail.com</p>

                        </div>
                        {/* <RightOutlined style={{ fontSize: '12px', color: 'var(--secondary-text-color)' }}  /> */}
                        {/* <hr className="w-[100%] border-[#d9d9d9]" /> */}
                    </div>
                    <div className="w-full py-3 flex">

                        <div className="py-[2px] px-[6px] w-10 flex justify-center bg-[#E7E7FF] text-[#666CFF] rounded-[8px] mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M9.36556 10.6821C10.302 12.3288 11.6712 13.698 13.3179 14.6344L14.2024 13.3961C14.4965 12.9845 15.0516 12.8573 15.4956 13.0998C16.9024 13.8683 18.4571 14.3353 20.0789 14.4637C20.599 14.5049 21 14.9389 21 15.4606V19.9234C21 20.4361 20.6122 20.8657 20.1022 20.9181C19.5723 20.9726 19.0377 21 18.5 21C9.93959 21 3 14.0604 3 5.5C3 4.96227 3.02742 4.42771 3.08189 3.89776C3.1343 3.38775 3.56394 3 4.07665 3H8.53942C9.0611 3 9.49513 3.40104 9.5363 3.92109C9.66467 5.54288 10.1317 7.09764 10.9002 8.50444C11.1427 8.9484 11.0155 9.50354 10.6039 9.79757L9.36556 10.6821ZM6.84425 10.0252L8.7442 8.66809C8.20547 7.50514 7.83628 6.27183 7.64727 5H5.00907C5.00303 5.16632 5 5.333 5 5.5C5 12.9558 11.0442 19 18.5 19C18.667 19 18.8337 18.997 19 18.9909V16.3527C17.7282 16.1637 16.4949 15.7945 15.3319 15.2558L13.9748 17.1558C13.4258 16.9425 12.8956 16.6915 12.3874 16.4061L12.3293 16.373C10.3697 15.2587 8.74134 13.6303 7.627 11.6707L7.59394 11.6126C7.30849 11.1044 7.05754 10.5742 6.84425 10.0252Z"></path></svg>

                        </div>
                        
                        <div className="">
                            <p className=" !w-[30%] text-[var(--secondary-text-color)]">phone</p>
                            <p className=" !w-[43%] heading-2 !text-[15px]">9087654321</p>

                        </div>
                        {/* <RightOutlined style={{ fontSize: '12px', color: 'var(--secondary-text-color)' }}  /> */}
                        {/* <hr className="w-[100%] border-[#d9d9d9]" /> */}
                    </div>
                    <div className="w-full py-3 flex">

                        <div className="py-[2px] px-[6px] w-10 flex justify-center bg-[#FFF3DD] text-[#FDB428] rounded-[8px] mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 20.8995L16.9497 15.9497C19.6834 13.2161 19.6834 8.78392 16.9497 6.05025C14.2161 3.31658 9.78392 3.31658 7.05025 6.05025C4.31658 8.78392 4.31658 13.2161 7.05025 15.9497L12 20.8995ZM12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364L12 23.7279ZM12 13C13.1046 13 14 12.1046 14 11C14 9.89543 13.1046 9 12 9C10.8954 9 10 9.89543 10 11C10 12.1046 10.8954 13 12 13ZM12 15C9.79086 15 8 13.2091 8 11C8 8.79086 9.79086 7 12 7C14.2091 7 16 8.79086 16 11C16 13.2091 14.2091 15 12 15Z"></path></svg>

                        </div>
                        
                        <div className="">
                            <p className=" !w-[30%] text-[var(--secondary-text-color)]">address</p>
                            <p className="  heading-2 !text-[15px]">2nd street, 1st block, 1st floor</p>

                        </div>
                        {/* <RightOutlined style={{ fontSize: '12px', color: 'var(--secondary-text-color)' }}  /> */}
                        {/* <hr className="w-[100%] border-[#d9d9d9]" /> */}
                    </div>
                </div>
                <div className="text-center mt-4">
                    <button className="primary-button font-medium mx-auto">Edit Profile</button>
                </div>
               
            </div>
        </div>
    );
}

export default Settings;
