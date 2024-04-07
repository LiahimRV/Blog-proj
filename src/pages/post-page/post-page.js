import { BlockWithReactions } from "../../components"
import { useParams } from "react-router-dom"
import { selectPosts } from "../../selectors";
import { useSelector } from "react-redux"
import styled from "styled-components"

const PostPageContainer = ({ className}) => {
    const { id } = useParams();
    console.log(id)
    const posts = useSelector(selectPosts)
    const post = posts.find(post => Number(id) === post.id)
    console.log(post.negativeReactionCount)

    return (
        <div className={className}>
            <div className="post-page-header">
                <div className="return-back-button"> Return back</div>
                <BlockWithReactions postId={post.id} negativeReactionCount={post.negativeReactionCount} positiveReactionCount={post.positiveReactionCount} />
            </div>
            <div className="post-page-body">
                <p className="post-page-body__title">
                    {post.title}
                </p>
                <img alt="img" src="https://placehold.co/848x477" />
            </div>
        </div>

    )
}


export const PostPage = styled(PostPageContainer)`
min-width: 1140px;

& .post-page-body {
    min-width:1140px;
    height:777px;
}

& .post-page-header {
    display:flex;
    justify-content: space-between;
    min-width: 1140px;
    height: 64px;
    padding: 16px 0px 16px 0px;}


    
`