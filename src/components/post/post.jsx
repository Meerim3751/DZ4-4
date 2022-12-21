import classes from './post.module.css'

function Post({post}) {
    return (
        <p className={classes.p}>
            {post.title}
        </p>
    )
}

export default Post;