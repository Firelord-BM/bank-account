"use client";
import React, { useState } from "react";
import { FiChevronDown, FiMoreVertical } from "react-icons/fi";

const Transactions = () => {
  const transactions = [
    { name: "Maddona", type: "Food", Date: "25-6-2023", Amount: 254, code: 233442234234, account: 4564563, fee: 234 },
    { name: "Starbucks", type: "Coffee", Date: "12-8-2023", Amount: 15, code: 233442234234, account: 4564563, fee: 234  },
    { name: "Amazon", type: "Shopping", Date: "3-4-2023", Amount: 100, code: 233442234234, account: 4564563, fee: 234  },
    { name: "Gas Station", type: "Fuel", Date: "8-7-2023", Amount: 60, code: 233442234234, account: 4564563, fee: 234  },
    { name: "Gym Membership", type: "Fitness", Date: "17-9-2023", Amount: 50, code: 233442234234, account: 4564563, fee: 234  },
  ];

  const [isActive, setIsActive] = useState(null);

  const toggleDropdown = (index) => {
    if (index === isActive) {
      setIsActive(null);
    } else {
      setIsActive(index);
    }
  };

  return (
    <div className="bg-white overflow-x-hidden text-black h-auto rounded-md">
      <div>
        <div className="gap-6 pt-4 p-4">
          <h1 className="text-md pb-4">Transaction History</h1>
          <table className="w-full ">
          
            <thead>
              <tr>
                <th className=" text-left"></th>
                <th className=" text-left">Name</th>
                <th className=" text-left">Type</th> 
                
                <th className=" text-left">Amount</th>
                <th className=" text-left"><FiMoreVertical/></th>
              </tr>
            </thead>

            {/* <tbody>
              {transactions.map((item, index) => (
                <tr key={item.name}>
                  <td className="table_body">{item.name}</td>
                  <td className="table_body">{item.type}</td>
                  <td className="table_body">{item.Date}</td>
                  <td className="table_body">$ {item.Amount}</td>
                  <td onClick={() => toggleDropdown(index)}>
                    <FiChevronDown
                      className={`duration-300 ${
                        isActive === index ? "rotate-180" : ""
                      }`}
                    />
                  </td>
                </tr>
              ))}
            </tbody> */}
             <tbody>
            {transactions.map((item, index) => (
              <>
                <tr key={item.name} className="cursor-pointer">
                  <td className="table_body">
                  
                  </td>
                  <td className="table_body">{item.name}</td>
                  <td className="table_body">{item.type}</td>
                  
                  <td className="table_body">{item.Amount}</td>
                  
                  <td onClick={() => toggleDropdown(index)}>
                    <FiChevronDown
                      className={`duration-300 ${
                        isActive == index ? "rotate-180" : ""
                      }`}
                    />
                  </td>
                </tr>

                {index === isActive && (
                  <tr>
                    <td colSpan={9}>
                      <div className="flex p-4 ">
                        
                        <div className="my-auto flex flex-wrap gap-14">
                        <div>
                          <label className="text-sm text-gray-600">Display Name</label>
                          <p className="pt-2 border-zinc-950 border-b-2 text-center">{item.name}</p>
                        </div>
                        <div>
                          <label className="text-sm text-gray-600">Code</label>
                          <p className="pt-2 border-zinc-950 border-b-2 text-center">{item.code}</p>
                        </div>
                        <div>
                          <label className="text-sm text-gray-600">Account</label>
                          <p className="pt-2 border-zinc-950 border-b-2 text-center">{item.account}</p>
                        </div>
                      
                        <div>
                          <label className="text-sm text-gray-600">Fee</label>
                          <p className="pt-2 border-zinc-950 border-b-2 text-center">{item.fee}</p>
                        </div>
                    
                      
                     
                        
                        </div>
                        
                      </div>
        
                    </td>
                  </tr>
                )}
              </>
            ))}
          </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Transactions;
