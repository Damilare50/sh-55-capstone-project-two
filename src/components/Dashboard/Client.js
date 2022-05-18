import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

const ClientSection = styled.section`
  tr:nth-child(even) {
    background-color: #f8f8f8;
  }

  tr:nth-child(odd) {
    background-color: white;
  }

  tr:hover {
    background-color: #ddd;
  }
  .image {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
`;

const Clients = () => {
  const url = "https://fakerapi.it/api/v1/persons?_quantity=5";
  const [data, setData] = useState([]);

  const loadData = () => {
    axios
      .get(url)
      .then((body) => {
        setData(body.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(loadData, []);

  return (
    <ClientSection>
      <table className="table-auto border-collapse bg-white">
        <caption className="py-3 text-center text-blue-700 space-x-1 text-xl font-semibold">
          CLIENT DETAILS
        </caption>
        <thead>
          <tr className="">
            <th
              className="hidden md:block border-2 border-dirty-white-300 py-3 text-left bg-blue-700 text-white
             "
            >
              Image
            </th>
            <th className="border-2 border-dirty-white-300 py-3 text-left bg-blue-700 text-white">
              Name
            </th>
            <th className="border-2 border-dirty-white-300 py-3 text-left bg-blue-700 text-white">
              Email
            </th>
            <th className="border-2 border-dirty-white-300 py-3 text-left bg-blue-700 text-white">
              Phone Number
            </th>
            <th className="border-2 border-dirty-white-300 py-3 pr-2 text-left bg-blue-700 text-white">
              Gender
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((detail) => (
            <tr className="" key={detail.id}>
              <td className="hidden md:block border-2 border-dirty-white-300 p-2 ">
                <img className="image" src={detail.image} alt="customer pic" />
              </td>
              <td className="border-2 border-dirty-white-300 p-2">
                {detail.firstname} {detail.lastname}
              </td>
              <td className="border-2 border-dirty-white-300 p-2">
                {detail.email}
              </td>
              <td className="border-2 border-dirty-white-300 p-2">
                {detail.phone}
              </td>
              <td className="border-2 border-dirty-white-300 p-2">
                {detail.gender}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </ClientSection>
  );
};

export default Clients;
