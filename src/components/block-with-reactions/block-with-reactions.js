import { Icon } from "../icon/icon"
import styled from "styled-components"



const BlockWithReactionsContainer = ({ className, postId, positiveReactionCount, negativeReactionCount }) => {

    return (
        <div className={className}>
            <Icon
                id="fa-thumbs-o-up"
                margin="0 0 4px 7px "
                color="black"

            />
            <div className="positive-reactions-counter">{positiveReactionCount
            }</div>
            <Icon
                id="fa-thumbs-o-down"
                margin="0 0 4px 7px "
                color="black"

            />
            <div className="negative-reactions-counter">{negativeReactionCount
            }</div>

        </div>
    );
};

export const BlockWithReactions = styled(BlockWithReactionsContainer)`
    display: flex;
    flex-direction: row;
  `;