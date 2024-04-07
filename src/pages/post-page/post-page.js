import { BlockWithReactions, Icon } from "../../components";
import { useParams, useNavigate } from "react-router-dom";
import { selectPosts } from "../../selectors";
import { useSelector } from "react-redux";
import styled from "styled-components";

const PostPageContainer = ({ className }) => {
    const { id } = useParams();
    const posts = useSelector(selectPosts);
    const post = posts.find((post) => Number(id) === post.id);
    const navigate = useNavigate();

    const handleReturnBack = () => {
        navigate(-1);
    };

    return (
        <div className={className}>
            <div className="post-page-header">
                <div className="return-back-button" onClick={handleReturnBack}>
                    <Icon
                        id="fa-long-arrow-left"
                        margin="0 8px 0 0"
                        color="black"
                        size="28px"
                        transform="scale(1)"
                        hooverColor="black"
                    />
                    <p>Вернуться к статьям</p>
                </div>
                <BlockWithReactions postId={post.id} negativeReactionCount={post.negativeReactionCount} positiveReactionCount={post.positiveReactionCount} reactionStatus={post.reactionStatus} />
            </div>
            <div className="post-page-body">
                <p className="post-page-body__title">{post.title}</p>
                <img alt="img" src="https://placehold.co/848x477" />
                <div className="post-page-body__text-frame">{post.body}</div>
            </div>
        </div>
    );
};

export const PostPage = styled(PostPageContainer)`
    min-width: 1140px;
    padding: 64px 0;

    & .post-page-body__text-frame {
        width: 848px;
        height: 156px;
        font: 400 20px/28px Roboto, sans-serif;
    }

    & .post-page-body {
        min-width: 1140px;
        height: 777px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 48px;
    }

    & .return-back-button {
        display: flex;
        cursor: pointer;
        align-items: center;
        font: 400 24px/32px Roboto, sans-serif;
    }

    & .post-page-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        min-width: 1140px;
        height: 64px;
    }

    & .post-page-body__title {
        font: 700 40px/48px Roboto, sans-serif;
        min-height: 48px;
        width: 1288px;
        text-align: center;
    }

    & img {
        width: 848px;
        height: 477px;
    }
`;