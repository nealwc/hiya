import React, { useState, useContext } from 'react';
import { Jumbotron, Container, Row, Col, Form, Button, Card, CardColumns } from 'react-bootstrap';

import PostForm from '../components/PostForm'
import UserInfoContext from '../utils/UserInfoContext';
import AuthService from '../utils/auth';
import { saveBook, searchGoogleBooks } from '../utils/API';



function BlankForm() {
    return (
        <>
        <PostForm />
        </>
    )
}

export default BlankForm