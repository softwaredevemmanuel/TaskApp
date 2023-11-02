import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom"
import axios from 'axios';


const Candidates = () => {
    const [data, setData] = useState([])
    const [department, setDepartment] = useState('null')


    useEffect(() => {
        console.log(department)

        async function fetchContent() {
            try {
                const response = await axios.get('http://localhost:5000/candidates', {
                    headers: {
                        fullstack: department
                    }
                });
                setData(response.data.message)

            } catch (error) {

            }
        }

        fetchContent();
    }, [department]);
    console.log(department)



    async function createStudent() {
        try {
            const response = await axios.get('http://localhost:5000/candidates', {
                headers: {
                    fullstack: department
                }
            });
            setData(response.data.message)

        } catch (error) {

        }
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        createStudent();
    };


    return (
        <div>
            <h2>Candidates Contesting For Position</h2>

            <select
                value={department}
                onChange={(event) => setDepartment(event.target.value)}
            >
                <option value=''></option>
                <option value='MicroBiology'>MicroBiology</option>
                <option value='BioChemistry'>BioChemistry</option>

            </select>
            <br />
            <br />
            <br />


            <form onSubmit={handleSubmit}>
                <select
                    value={department}
                    onChange={(event) => setDepartment(event.target.value)}
                >
                    <option value=''></option>
                    <option value='Chemistry'>Chemistry</option>
                    <option value='Chemical Engineering'>Chemical Engineering</option>

                </select>
                <button> Submit</button>
            </form>


            <table>
                <thead>
                    <tr>
                        <th>FirstName</th>
                        <th>LastName</th>
                        <th>Position</th>
                        <th>View More</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                                <td>{item.FirstName}</td>
                                <td>{item.LastName}</td>
                                <td>{item.Position}</td>    

                                <td> <Link to={`/candidates/${item.Email}`}>More Details </Link></td>                                

                        </tr>
                    ))}
                </tbody>
            </table>


        </div>
    )
}

export default Candidates