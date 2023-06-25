'use client'



import socket from "@/services/socket.io";
import { useRef, useState } from "react";



export default function CommentSection() {
    const [cmts, setCmts] = useState([]);
    const cmtDisplay = [];

    // giá trị từ server trả về là 1 mảng chứa các message
    socket.on('message', rs => {
        var key = 1;
        rs.forEach(mess => {
            cmtDisplay.push(<CmtDisplay cmts={mess} key={key++} />)
        });
        setCmts(cmtDisplay);
    })
    return (
        <div className="flex flex-col">
            <CmtForm />

            {/* Hiển thị danh sách comment  */}
            {cmts}
        </div>
    );
}


function CmtDisplay({ cmts }) {
    return (
        <div className={"py-4 cmtInput"}>
            {cmts}

        </div>
    )
}

function CmtForm() {
    const [isValid, setIsValid] = useState(false);
    const [message, setMessage] = useState('');
    const submitHandle = (e) => {
        e.preventDefault();
        try {
            setIsValid(true)
            if (message) {
                socket.emit('message', message);
                setIsValid(false)
            }
        }
        catch (err) {
            console.log('_________________ mes Er: ', err);
        }
        setMessage('')
    }

    return (
        <>
            <h2 className="text-bold">Viết bình luận:</h2>
            <form onSubmit={submitHandle}>
                <input className="rounded-lg border cmtInput"
                    name="message"
                    onChange={e => setMessage(e.target.value)}
                    value={message}
                />
            </form>
            {(isValid && message === '') ? <span>Bình luận không được rỗng</span> : []}
        </>
    )
}