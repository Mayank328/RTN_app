import "./Card.css";
import Heart from "./img2/heart.svg";
import HeartFilled from "./img2/heartFilled.svg";
import Comment from "./img2/comment.svg";
import Share from "./img2/share.svg";
import Info from "./img2/info.svg";
import { useState } from "react";


// const Card = ({post,socket,user}) => {
//     const [liked,setLiked] = useState(false);

//     const handleNotification = (type) =>{
//         setLiked(true)
//         socket?.emit("sendNotification",{
//             senderName: user,
//             receiverName: post.username,
//             type,
//         });
//     };
//     return (
//         <div className="card">
//             <div className ="info">
//                 <img src={post.userImg} alt = "" className="userImg"/>
//                 <span>{post.fullname}</span>
//             </div>
//             <img src={post.postImg} alt="" className="postImg" />
//         <div className = "interaction">
//             {liked ? (<img src={HeartFilled} alt="" className="cardIcon" />): (<img src = { Heart } alt = "" className = "cardIcon" 
//             onClick = {()=>handleNotification(1)}/>)}
//                 <img src={Comment} alt="" className="cardIcon" onClick={() => handleNotification(2)}/>
//                 <img src={Share} alt="" className="cardIcon" onClick={() => handleNotification(3)} />
//                 <img src={Info} alt="" className="cardIcon"/>
//         </div>
//         </div>
//     );
// };
// export default Card
const Card = ({ post, socket, user }) => {
    const [liked, setLiked] = useState(false);

    const handleNotification = (type) => {
        type === 1 && setLiked(true);
        socket?.emit("sendNotification", {
            senderName: user,
            receiverName: post.username,
            type,
        });
    };

    return (
        <div className="card">
            <div className="info">
                <img src={post.userImg} alt="" className="userImg" />
                <span>{post.fullname}</span>
            </div>
            <img src={post.postImg} alt="" className="postImg" />
            <div className="interaction">
                {liked ? (
                    <img src={HeartFilled} alt="" className="cardIcon" />
                ) : (
                    <img
                        src={Heart}
                        alt=""
                        className="cardIcon"
                        onClick={() => handleNotification(1)}
                    />
                )}
                <img
                    src={Comment}
                    alt=""
                    className="cardIcon"
                    onClick={() => handleNotification(2)}
                />
                <img
                    src={Share}
                    alt=""
                    className="cardIcon"
                    onClick={() => handleNotification(3)}
                />
                <img src={Info} alt="" className="cardIcon infoIcon" />
            </div>
        </div>
    );
};

export default Card;