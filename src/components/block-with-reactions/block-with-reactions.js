import { useDispatch } from "react-redux";
import { setPostReaction } from "../../actions";
import { Icon } from "../icon/icon";
import { useState } from "react";
import styled from "styled-components";

const BlockWithReactionsContainer = ({
    className,
    postId,
    positiveReactionCount,
    negativeReactionCount,
    reactionStatus,
}) => {
    const dispatch = useDispatch();

    const [positiveReactionClicked, setPositiveReactionClicked] = useState(reactionStatus === "positive");
    const [negativeReactionClicked, setNegativeReactionClicked] = useState(reactionStatus === "negative");

    const handleReaction = (type) => {
        const isPositive = type === "positive";
        const isClicked = isPositive ? positiveReactionClicked : negativeReactionClicked;

        if (!isClicked) {
            dispatch(setPostReaction(postId, type));
            if (isPositive) {
                setPositiveReactionClicked(true);
            } else {
                setNegativeReactionClicked(true);
            }
        } else {
            dispatch(setPostReaction(postId, isPositive ? "removePositive" : "removeNegative"));
            if (isPositive) {
                setPositiveReactionClicked(false);
            } else {
                setNegativeReactionClicked(false);
            }
        }
    };

    return (
        <div className={className}>
            <Icon
                id="fa-thumbs-o-up"
                margin="0 0 4px 7px "
                color={positiveReactionClicked ? "green" : "black"}
                size="30px"
                hooverColor="green"
                onClick={() => handleReaction("positive")}
            />
            <div className="positive-reactions-counter">{positiveReactionCount}</div>
            <Icon
                id="fa-thumbs-o-down"
                margin="0 0 4px 7px "
                color={negativeReactionClicked ? "red" : "black"}
                size="30px"
                hooverColor="red"
                onClick={() => handleReaction("negative")}
            />
            <div className="negative-reactions-counter">{negativeReactionCount}</div>
        </div>
    );
};

export const BlockWithReactions = styled(BlockWithReactionsContainer)`
  display: flex;
  flex-direction: row;
  place-items: center;
  
  .negative-reactions-counter,
  .positive-reactions-counter {
    font-size: 18px;
    margin: 10px 16px 12px 7px;
  }
`;