import React, {useEffect, useState} from 'react';
import {useSelector,useDispatch} from "react-redux";
import {getActions} from "../redux/actions/actionsAction";
import ActionItem from "./ActionItem";

const Home = () => {
    const messages = useSelector((state)=> state.workflow.messages);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getActions());
        console.log(messages[0]);
    },[messages]);

    return (
        <div>
            <ul className='collection with-header'>
                <li className='collection-header'>
                    <h4 className='center'>Actions</h4>
                </li>
                {messages.length === 0 ?
                    <p>No Actions</p>:
                    (
                        messages.map((message) =>
                            <ActionItem id={Math.random()} message={message} subject={message.email.subject} meeting={message.meeting.meeting} remainder={message.remainder.reminder} date={message.date} />
                        )
                    )
                }
            </ul>
        </div>
    );
};

export default Home;
