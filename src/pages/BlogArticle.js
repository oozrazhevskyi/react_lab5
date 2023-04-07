import React from 'react'
import posts from '../blog.data';
import { Card } from 'react-bootstrap';
import { Navigate, useParams } from 'react-router-dom';

export default function BlogArticle() {
    const {id} = useParams('id');
    const post = posts.filter(item=>item.id == id)[0];
    if (!post){
        return <Navigate to="/404" />
    }
    return (
        <Card className="m-4" bg="light" border="none">
            <Card.Img
                variant="top"
                style={{maxHeight: "50vh"}}
                src={post.image}
            />
            <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Subtitle>Category: <a href={`/blog/?category=${post.category}`}>{post.category}</a></Card.Subtitle>
                <Card.Subtitle className='mt-1 text-muted'>Published at: {post.date}</Card.Subtitle>
                <hr/>
                <Card.Text>{post.fullDescription}</Card.Text>
            </Card.Body>
        </Card>
    )
}
