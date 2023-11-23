import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom"
import axios from 'axios';


const VoteAnalysis = () => {
    const [data, setData] = useState([])
    const [post, setPost] = useState([])
    const [data1, setData1] = useState([])
    const [position, setPosition] = useState('null')
    const [candidateName, setCandidateName] = useState('null')


    useEffect(() => {

        async function fetchContent() {
            try {
                const response = await axios.get('http://localhost:5000/positions');
                setData(response.data.message)

            } catch (error) {

            }
        }

        fetchContent();

    }, []);

    useEffect(() => {

        async function fetchPost() {
            try {
                const response = await axios.get('http://localhost:5000/posts', {
                    headers: {
                        fullstack: position
                    }
                });
                setPost(response.data.message)

            } catch (error) {

            }
        }

        fetchPost();

    }, [position]);

    useEffect(() => {

        async function fetchPost() {
            try {
                const response = await axios.get('http://localhost:5000/name-by-matric', {
                    headers: {
                        fullstack: candidateName
                    }
                });
                setPost(response.data.message)

            } catch (error) {

            }
        }

        fetchPost();

    }, [candidateName]);
    

    useEffect(() => {

        async function fetchPost() {
            try {
                const response = await axios.get('http://localhost:5000/name',{
                    headers:{
                        position : position
                    }
                });
                setData1(response.data.message)

            } catch (error) {

            }
        }

        fetchPost();

    }, [position]);


    const uniquePositions = [...new Set(data.map(item => item.Position))];

console.log(data1)

    return (
        <div>
            <h2>Vote Analysis</h2>

            <select
                value={position}
                onChange={(event) => setPosition(event.target.value)}
            >
                <option value=''>Choose a Position</option>
                {uniquePositions.map((pos, index) => (
                    <option key={index} value={pos}>
                        {pos}
                    </option>
                ))}
            </select>

            <select
                value={candidateName}
                onChange={(event) => setCandidateName(event.target.value)}
            >
                <option value=''>Choose a Name</option>
                {data1.map((pos, index) => (
                    <option key={index} value= {`${pos.FirstName} ${pos.LastName}`}>
                        {`${pos.FirstName} ${pos.LastName}`}
                    </option>
                ))}
            </select>



            <table>
                <thead>
                    <tr>
                        <th>Student Matric Number</th>
                        <th>Candidates Matric Number</th>
                        <th>Position</th>
                    </tr>

                </thead>
                <tbody>
                    {post.map((item, index) => (
                        <tr key={index}>
                            <td>{item.studentMatricNumber}</td>
                            <td>{item.candidateMatricNumber}</td>
                            <td>{item.position}</td>


                        </tr>
                    ))}
                </tbody>
            </table>


        </div>
    )
}

export default VoteAnalysis