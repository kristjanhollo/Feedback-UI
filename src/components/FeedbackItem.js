import Card from "./shared/Card";
import PropTypes from "prop-types";
import {useState} from "react";


function FeedbackItem({item}) {


    // import { useState } from "react";
    const [rating, setRating] = useState(7);
    const [light, setColor] = useState(true);

    const handleClick = () => {
        if (light === true) {
            setColor(false)
        } else {
            setColor(true)
        }
    }

    // const [text, setText] = useState('This is an example of a feedback item');

    // const handleClick = () => {
    //     // setRating(2);
    //     setRating((prev) => {
    //         return prev + 1;
    //     })
    // }


    return (
        <Card reverse={light}>
            <div className="num-display">{item.rating}</div>
            <div className="text-display">{item.text}</div>
            {/*<button onClick={handleClick}>Click</button>*/}
            <button onClick={handleClick}>Click</button>
        </Card>
    )

}

FeedbackItem.propTypes = {
    item: PropTypes.object.isRequired,
}

export default FeedbackItem
