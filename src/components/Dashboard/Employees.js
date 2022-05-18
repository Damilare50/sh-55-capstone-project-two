import React, { useEffect, useState } from 'react';
import Wrapper from './EmployeeTable.styles';


const Employees = () => {
  const [ getData, setGetData ] = useState({
    data: []
  })
  const [ isLoading, setIsLoading ] = useState(false)
  const [ isError, setIsError ] = useState(false)
  
  const fetchData = async () => {
    try {
      setIsLoading(true);
      const employeeData = await (await fetch('https://fakerapi.it/api/v1/persons?_quantity=10')).json();

      // console.log(employeeData)

      setGetData({
        ...employeeData
      })
    } catch (error) {
      setIsError(true)
      console.log(error);
    }
    setIsLoading(false)
  }

  useEffect(() => {
    fetchData()
  }, [])

  console.log(getData)

  if (isLoading) {
    return <h1>Loading...</h1>
  }

  if (!isLoading && !isError ) {
    return (
      <Wrapper>
        <table>
          <caption>Team Members</caption>
          <thead>
            <tr>
              <th>Fullname</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Gender</th>
              <th>Image</th>
            </tr>
          </thead>
          <tbody>
            {getData.data.map(person => {
            return (
              <tr key={person.id}>
                <td>{person.firstname + " " + person.lastname}</td>
                <td>{person.email}</td>
                <td>{person.phone}</td>
                <td>{person.gender}</td>
                <td><img src={person.image} alt="employee-pic" /> </td>
              </tr>
            )
            })}
          </tbody>
        </table>
      </Wrapper>
    )
  }
}

export default Employees;