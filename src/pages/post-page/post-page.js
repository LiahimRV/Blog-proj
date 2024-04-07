import styled from "styled-components"
import { BlockWithReactions } from "../../components"

const PostPageContainer = ({ className, negReact, posReact, postId }) => {
    return (
        <div className={className}>
            <div className="post-page__header">
                <div className="return-back-button"> Return back</div>
                <BlockWithReactions postId={postId} negativeReactionCount={negReact} positiveReactionCount={posReact} />

            </div>
            <div className="post-page__body"></div>
        </div>

    )
}


export const PostPage = styled(PostPageContainer)`
min-width: 1140px;

& .post-page__header {
    display:flex;
    justify-content: space-between;
    min-width: 1140px;
    height: 64px;
    padding: 16px 0px 16px 0px;}

`