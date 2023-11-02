import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom"
import axios from 'axios';


const VoteAnalysis = () => {
    const [data, setData] = useState([])
    const [post, setPost] = useState([])
    const [position, setPosition] = useState('null')


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


    const uniquePositions = [...new Set(data.map(item => item.Position))];



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