import React from 'react';
import Moment from "react-moment";
import {useDispatch} from "react-redux";
import {deleteAction, setCurrent} from "../redux/actions/actionsAction";

const ActionItem = ({uid,name,subject,meeting,remainder,date,message}) => {

    const dispatch = useDispatch();

    const onDelete = () => {
        dispatch(deleteAction(uid));
    }

    return (
        <li className="collection-item">
            <div>
                <a href='#edit-log-modal' onClick={() => dispatch(setCurrent(message))} className={'modal-trigger blue-text'}>{name}</a><br/>
                <span className='grey-text'>
                    <span>
                        {subject === ''? 'No Mail  ' : `Mailed about ${subject}  `}
                    </span>

                    <span>
                        {meeting === ''? '& No Meeting  ' : '& Meeting Abroad '}
                    </span>

                    <span>
                        {remainder === ''? '& No Remainder ' : '& Remainder Fixed '}
                    </span>

                    <span className='black-text'>is created on</span> on <Moment format='MMMM Do YYYY, h:mm:ss a'>{date}</Moment>
                </span>
                <a href="#" onClick={onDelete} className="secondary-content">
                    <i className="material-icons grey-text">delete</i>
                </a>
            </div>
        </li>
    );
};

export default ActionItem;
