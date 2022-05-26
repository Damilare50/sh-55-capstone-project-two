import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

const ClientSection = styled.section`
  padding: 10px 70px 70px;
  /* box-shadow: 15px 15px 50px rgba( 0, 0, 0, 0.2 ); */

  table {
    max-width: 100%;
    width: 100%;
  }

  caption {
    font-size: 20px;
    font-weight: 600;
    letter-spacing: 1px;
  }

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

  @media (max-width: 767px) {
    padding: 0 10px 0 0;
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
      <table className="table-auto border-collapse bg-whites">
        <caption className=" py-4 text-left md:text-center text-blue-700 space-x-1 text-xl font-semibold">
          CLIENT DETAILS
        </caption>
        <thead>
          <tr className="">
            <th
              className="hidden md:block py-3 text-left bg-blue-700 text-white
             "
            >
              Image
            </th>
            <th className="py-3 text-left bg-blue-700 text-white">
              Name
            </th>
            <th className="py-3 text-left bg-blue-700 text-white">
              Email
            </th>
            <th className="py-3 text-left bg-blue-700 text-white">
              Phone Number
            </th>
            <th className="py-3 pr-2 text-left bg-blue-700 text-white">
              Gender
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((detail) => (
            <tr className="" key={detail.id}>
              <td className="hidden md:block p-2 ">
                <img className="image" src={detail.image} alt="customer pic" />
              </td>
              <td className="p-2">
                {detail.firstname} {detail.lastname}
              </td>
              <td className="p-2">
                {detail.email}
              </td>
              <td className="p-2">
                {detail.phone}
              </td>
              <td className="p-2">
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
