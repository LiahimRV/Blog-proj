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
}) => {
    const dispatch = useDispatch();

    const [positiveReactionClicked, setPositiveReactionClicked] = useState(false);
    const [negativeReactionClicked, setNegativeReactionClicked] = useState(false);

    const handlePositiveReaction = () => {
        if (!positiveReactionClicked) {
            dispatch(setPostReaction(postId, "positive"));
            setPositiveReactionClicked(true);
        } else {
            dispatch(setPostReaction(postId, "removePositive"));
            setPositiveReactionClicked(false);
        }
    };

    const handleNegativeReaction = () => {
        if (!negativeReactionClicked) {
            dispatch(setPostReaction(postId, "negative"));
            setNegativeReactionClicked(true);
        } else {
            dispatch(setPostReaction(postId, "removeNegative"));
            setNegativeReactionClicked(false);
        }
    };

    return (
        <div className={className}>
            <Icon
                id="fa-thumbs-o-up"
                margin="0 0 4px 7px "
                color={positiveReactionClicked ? "green" : "black"}
                hooverColor="green"
                onClick={handlePositiveReaction}
            />
            <div className="positive-reactions-counter">{positiveReactionCount}</div>
            <Icon
                id="fa-thumbs-o-down"
                margin="0 0 4px 7px "
                color={negativeReactionClicked ? "red" : "black"}
                hooverColor="red"
                onClick={handleNegativeReaction}
            />
            <div className="negative-reactions-counter">{negativeReactionCount}</div>
        </div>
    );
};

export const BlockWithReactions = styled(BlockWithReactionsContainer)`
  display: flex;
  flex-direction: row;
`;
