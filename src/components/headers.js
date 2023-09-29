import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { Link } from 'react-router-dom';
import '../styles/header.css';

function Headers() {
  return (
    <div className="headerContainer mt-3 d-flex justify-content-center">
      <ButtonGroup className='btngrp'>
        <Link to='/addcourse' className='no-text-decoration'>
          <Button variant="outline-primary">
            addCourse
          </Button>
        </Link>
        <Link to='/listCourses' className='no-text-decoration'>
          <Button variant="outline-primary">
            listCourses
          </Button>
        </Link>
        <Link to='/addInstance' className='no-text-decoration'>
          <Button variant="outline-primary">
            addInstance
          </Button>
        </Link>
        <Link to='/listInstances' className='no-text-decoration'>
          <Button variant="outline-primary">
            listInstances
          </Button>
        </Link>
      </ButtonGroup>
    </div>
  );
}

export default Headers;
