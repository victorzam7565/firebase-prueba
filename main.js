import './style.css'
import { savePost, loadPosts } from './models/POst.js';
import {uploadImage, getImageURL  } from './storage';
import {GoogleAuthProvider,signInWithPopup} from 'firebase/auth';
import {auth} from './firebase';
import { async } from '@firebase/util';


window.addEventListener('DOMContentLoaded', async () => {
const posts = await loadPosts()
const postsList = document.getElementById('posts')

posts.forEach(post => {
    postsList.innerHTML +=`
    <li>
     ${post.content}
<img src=" ${post.image ? post.image : ''}" alt="" style=" width: 10rem" />
    </li>
    
    `
    
})


})

const postForm = document.getElementById(`postForm`);

postForm.addEventListener("submit", async (e)=> {
    e.preventDefault();
    savePost(postForm["content"].value);
    
    const inputFile = document.getElementById('image');

    let post={
      content: postForm["content"].value,

    }

    
      if(inputFile.files[0]){
        console.log(inputFile.files[0]);
        const result = await uploadImage(inputFile.files[0])
        const url = await getImageURL(result.ref)
        console.log(url)
        post.image =url;
      }
      savePost(post);
      
      
});

const googleLogin = document.getElementById('googleLogin') 
googleLogin.addEventListener('click',async () => {
      const provider = new GoogleAuthProvider()
      const result = await signInWithPopup(auth, provider)
      console.log(result);
}) 
  

