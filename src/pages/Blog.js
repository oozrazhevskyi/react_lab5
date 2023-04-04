import React, { Component } from 'react'
import {Col, Row, Card, ListGroup, Container} from "react-bootstrap";
import BlogPost from '../components/BlogPost'
import posts from '../blog.data';
import { useParams, useLocation } from 'react-router-dom';

function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}

export default function Blog() {
  const {category} = useParams('category');
  const query = useQuery();
  console.log(query);
  let filteredPosts = posts;
  if(category){
    filteredPosts = [...posts.filter(item=>item.category === category)]
  }
  // /blog?page=1&date={old|new}
  // https://v5.reactrouter.com/web/example/query-parameters
  
  return (
    <Container className="w-100">
      <Row>
        <Col md="9">
          {filteredPosts.length? filteredPosts.map((post) => {
            return <BlogPost key={post.id} post={post} />;
          }):
          <h1>No posts found</h1>}
        </Col>
        <Col md="3">
          <h5 className="text-center mt-5">Категорії</h5>

          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item><a href='/blog/'>All</a></ListGroup.Item>
              <ListGroup.Item><a href='/blog/category/react'>React</a></ListGroup.Item>
              <ListGroup.Item><a href='/blog/category/web-development'>Web Development</a></ListGroup.Item>
              <ListGroup.Item><a href='/blog/category/tools'>Tools</a></ListGroup.Item>
            </ListGroup>
          </Card>

          <h5 className="text-center mt-5">Дата публікації</h5>

          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item><a href='/blog/'>All</a></ListGroup.Item>
              <ListGroup.Item><a href='/blog/?date=new'>Newest</a></ListGroup.Item>
              <ListGroup.Item><a href='/blog/?date=old'>Oldest</a></ListGroup.Item>
            </ListGroup>
          </Card>

          <Card className="mt-3 bg-light">
            <Card.Body>
              <Card.Title>Slide widget</Card.Title>
              <Card.Text>Lorem</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}
