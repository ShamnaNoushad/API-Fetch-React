import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import './Apifetch.css'

function Apifetch() {
    //usestate
    const [posts, setPosts] = useState([])
    //url
    const base_url = 'https://jsonplaceholder.typicode.com/posts'

    const fetchData = async () => {
        const response = await fetch(base_url)
            .then(response => response.json())
            .then(posts => setPosts(posts))
    }
    console.log(posts);
    useEffect(() => {
        fetchData()
    }, [])


    return (
        <div className='card'>
            {posts.map(post => (
                <div>
                    <Card style={{ width: '20rem', height: '350px', border: '3px solid rgb(99, 82, 92)', backgroundColor: 'rgb(213, 212, 213)', boxShadow: '0px 0px 2px 2px grey' }}>
                        <ListGroup variant="flush">
                            <h1 style={{ textAlign: 'center', marginTop: '20px', color: ' rgb(60, 35, 60)', backgroundColor: 'rgb(213, 212, 213)', fontWeight: 'bold' }}>{post.id}</h1>
                            <ListGroup.Item style={{ backgroundColor: 'rgb(213, 212, 213)' }}> <h4 style={{ fontFamily: 'Times New Roman', textAlign: 'center' }}>{post.title}</h4></ListGroup.Item>
                            <ListGroup.Item style={{ backgroundColor: 'rgb(213, 212, 213)' }}> <p style={{ fontFamily: 'Times New Roman', textAlign: 'justify' }}>{post.body}</p></ListGroup.Item>
                        </ListGroup>
                    </Card>
                </div>
            ))}
        </div>
    )
}

export default Apifetch