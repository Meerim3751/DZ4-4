import styles from './postList.module.css'
import Post from '../post/post'
import { useState } from 'react'

function PostList() {
    const [isButtonDisabled, setButtonDisabled] = useState(true)
    const [isInputDisabled, setInputDisabled] = useState(false)


    const posts = [
        {id: 1, title: "Login:",  longread: false},
        {id: 2, title: "Email:", longread: true}
    ]

    const addPost = (e) => {

    }

    const checkCheckbox = (e) => {
        if(e.target.checked){
            setButtonDisabled(false)
            setInputDisabled(true)
        }else {
            setButtonDisabled(true)
            setInputDisabled(false)
        }
    }

    return (
        <div className={styles.container}>
             <div className="posts">
                {posts.map( p => 
                    <Post key={p.id} post={p} />
                )}
            </div>
            <form className={styles.postForm}>
                <input disabled= {isInputDisabled} type="text" name="title" placeholder='login'/>
                <input disabled= {isInputDisabled} type="text" name="title" placeholder='@email.com'/>
                <label onClick={checkCheckbox}>I agree<input type="checkbox" name="longpost" /></label>
                <button disabled={isButtonDisabled}>Sing in</button>
            </form>

           
        </div>
    )
}

export default PostList;