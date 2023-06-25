'use client'



import socket from "@/services/socket.io";
import { useRef, useState } from "react";



export default function CommentSection() {
    const [cmts, setCmts] = useState([]);
    const cmtDisplay = [];

    // giá trị từ server trả về là 1 mảng chứa các message
    socket.on('message', rs => {
        rs.forEach(mess => {
            cmtDisplay.push(<CmtDisplay cmts={mess} />)
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
    const [hiddenCmt, setHiddenCmt] = useState(true);
    var cmtID = 1;
    var spanCls = hiddenCmt ? 'cmtInput' : 'cmtInputExpand'
    return (
        <div className={"py-4 " + spanCls}>
            {cmts}

        </div>
    )
}

function CmtForm() {
    const formRef = useRef();
    const submitHandle = (e) => {
        e.preventDefault();
        try {
            const mes = e.target.elements.message.value;
            socket.emit('message', mes);
            console.log('_________________ mes: ', mes);
        }
        catch (err) {
            console.log('_________________ mes Er: ', err);
        }
        formRef.current.reset();
    }

    return (
        <>
            <h2 className="text-bold">Viết bình luận:</h2>
            <form ref={formRef} onSubmit={submitHandle}>
                <input className="rounded-lg border cmtInput"
                    name="message"
                />
            </form>
        </>
    )
}