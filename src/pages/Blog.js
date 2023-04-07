import React, { Component } from 'react'
import {Col, Row, Card, ListGroup, Container} from "react-bootstrap";
import BlogPost from '../components/BlogPost'
import posts from '../blog.data';
import { useParams, useLocation } from 'react-router-dom';
import ArticleRating from '../components/ArticleRating';

function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}

function addUrlParameter(name, value) {
  var searchParams = new URLSearchParams(window.location.search)
  searchParams.set(name, value)
  window.location.search = searchParams.toString()
  return false;
}

function removeUrlParameter(name) {
  var searchParams = new URLSearchParams(window.location.search)
  searchParams.delete(name)
  window.location.search = searchParams.toString()
  return false;
}

function dateParse(date){
  var dmy = [...[...date.split('.')].map(parseInt)];
  console.log("dateParse",dmy);
  return new Date(1,1,1);
}

function dateCompare(dateA, dateB) {
  let dateObjectA = dateParse(dateA);
  let dateObjectB = dateParse(dateB);
  console.log('dateCompare',dateObjectA, dateObjectB);
  return dateObjectB - dateObjectA;
}

const POSTS_PER_PAGE = 5;

export default function Blog() {
  // const {category} = useParams('category');
  const query = useQuery();
  console.log([...query.keys()], [...query.values()], );
  let filteredPosts = posts;
  let category = query.get('category');
  let page = query.get('page');
  let date = query.get('date');
  
  if(category){
    filteredPosts = [...filteredPosts.filter(item=>item.category === category)]
  }

  if(date){
    filteredPosts = [...filteredPosts.sort((a,b)=>dateCompare(a.date, b.date))];
    if(date=='old'){
      filteredPosts = [...filteredPosts.reverse()];
    }
  }

  let lastPage = Math.ceil(filteredPosts.length/POSTS_PER_PAGE);

  page = parseInt(page);
  if(!page || page < 1 || page > lastPage){
    page = 1;
  }

  filteredPosts = [...filteredPosts.slice((page-1) * POSTS_PER_PAGE, page * POSTS_PER_PAGE)];
  
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

          <h5 className="text-center">Сторінка {page} з {lastPage}</h5>

          <Card>
            <ListGroup variant="flush">
              {page != 1        && <ListGroup.Item><a href='#' onClick={e=>{e.preventDefault();removeUrlParameter("page")}}>First page</a></ListGroup.Item>}
              {page >  1        && <ListGroup.Item><a href='#' onClick={e=>{e.preventDefault();addUrlParameter("page",`${page-1}`)}}>Previous page</a></ListGroup.Item>}
              {page <  lastPage && <ListGroup.Item><a href='#' onClick={e=>{e.preventDefault();addUrlParameter("page",`${page+1}`)}}>Next page</a></ListGroup.Item>}
              {page != lastPage && <ListGroup.Item><a href='#' onClick={e=>{e.preventDefault();addUrlParameter("page",`${lastPage}`)}}>Last page</a></ListGroup.Item>}
            </ListGroup>
          </Card>

          <h5 className="text-center mt-3">Категорії</h5>

          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item><a href='#' onClick={e=>{e.preventDefault();removeUrlParameter("category")}}>All</a></ListGroup.Item>
              <ListGroup.Item><a href='#' onClick={e=>{e.preventDefault();addUrlParameter("category","react")}}>React</a></ListGroup.Item>
              <ListGroup.Item><a href='#' onClick={e=>{e.preventDefault();addUrlParameter("category","web-development")}}>Web Development</a></ListGroup.Item>
              <ListGroup.Item><a href='#' onClick={e=>{e.preventDefault();addUrlParameter("category","tools")}}>Tools</a></ListGroup.Item>
            </ListGroup>
          </Card>

          <h5 className="text-center mt-3">Дата публікації</h5>

          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item><a href='#' onClick={e=>{e.preventDefault();removeUrlParameter("date")}}>All</a></ListGroup.Item>
              <ListGroup.Item><a href='#' onClick={e=>{e.preventDefault();addUrlParameter("date","new")}}>Newest</a></ListGroup.Item>
              <ListGroup.Item><a href='#' onClick={e=>{e.preventDefault();addUrlParameter("date","old")}}>Oldest</a></ListGroup.Item>
            </ListGroup>
          </Card>

          <Card className="mt-5 bg-light">
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
