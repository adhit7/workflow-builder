import React, {useEffect} from 'react';
import {useSelector,useDispatch} from "react-redux";
import {getActions} from "../redux/actions/actionsAction";
import ActionItem from "./ActionItem";

const Home = () => {
    const messages = useSelector((state)=> state.workflow.messages);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getActions());
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
                        messages.map((messages) =>
                            <ActionItem key={messages.id} uid={messages.id} message={messages} name={messages.name} subject={messages.email.subject} meeting={messages.meeting.meeting} remainder={messages.remainder.remainder} date={messages.date} />
                        )
                    )
                }
            </ul>
        </div>
    );
};

export default Home;
