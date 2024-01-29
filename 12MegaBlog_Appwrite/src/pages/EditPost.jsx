// import React, {useEffect, useState} from 'react';
// import { Container, PostForm } from '../components';
// import appwriteService from "../appwrite/config";
// import { useParams, useNavigate } from 'react-router-dom';

// function EditPost() {

//     const [post, setPosts] = useState(null);
//     //taking slug value to select post which we have to edit.
//     const {slug} = useParams();
//     const navigate = useNavigate();

//     //edit post is dependent on slug and navigate which is change then it will run again.
//     useEffect(() => {
//         if(slug){
//             appwriteService.getPost(slug).then((post) => {
//                 if(post){
//                     setPosts(post);
//                 }
//             })
//         } else { //navigating to "/" home route if slug is false.
//             navigate("/");
//         }
//     }, [slug, navigate]);

//     //conditionally returning
//   return post ? (
//     <div className='py-8'>
//         <Container>
//             <PostForm post={post} />
//         </Container>
//     </div>
//   ) : null;
// }

// export default EditPost

import React, {useEffect, useState} from 'react'
import {Container, PostForm} from '../components'
import appwriteService from "../appwrite/config";
import { useNavigate,  useParams } from 'react-router-dom';

function EditPost() {
    const [post, setPosts] = useState(null)
    const {slug} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        if (slug) {
            appwriteService.getPost(slug).then((post) => {
                if (post) {
                    setPosts(post)
                }
            })
        } else {
            navigate('/')
        }
    }, [slug, navigate])
  return post ? (
    <div className='py-8'>
        <Container>
            <PostForm post={post} />
        </Container>
    </div>
  ) : null
}

export default EditPost