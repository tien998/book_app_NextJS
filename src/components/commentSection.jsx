'use client'

import { useEffect, useState } from "react";
import socket from "@/services/socket.io";

export function CmtDisplay({ cmts }) {
    return (
        <div className={"py-4 cmtInput"}>
            {cmts}
        </div>
    )
}

export function CmtForm({ book_id }) {
    const [isValid, setIsValid] = useState(false);
    const [message, setMessage] = useState('');
    const submitHandle = (e) => {
        e.preventDefault();
        try {
            setIsValid(true)
            if (message) {
                var mess = {
                    book_id: book_id,
                    message: message
                }
                socket.emit('message', mess);
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

export function CmtDisplay_IO({ book_id }) {
    const [cmtsDisplay_IO, setCmts_IO] = useState([]);

    socket.on('message', rs => {
        var cmtArr = [];
        rs.forEach(i => {
            if (i.book_id = book_id) {
                cmtArr.unshift(<CmtDisplay cmts={i.message} />);
            }
        });
        setCmts_IO(cmtArr);

    })
    useEffect(() => {
        socket.emit('message', {})
    },[])

    return (
        <div>
            {cmtsDisplay_IO}

        </div>
    )
}