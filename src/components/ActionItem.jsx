import React from 'react';
import Moment from "react-moment";
import {useDispatch} from "react-redux";
import {deleteAction, setCurrent} from "../redux/actions/actionsAction";

const ActionItem = ({subject,meeting,remainder,date,message,id}) => {

    const dispatch = useDispatch();

    const onDelete = () => {
        dispatch(deleteAction(id));
    }

    return (
        <li className="collection-item">
            <div>
                <a href='#edit-log-modal' onClick={() => dispatch(setCurrent(message))} className={'modal-trigger blue-text'}>{subject}</a>
                <span className='grey-text'>
                    <span>
                        {subject === ''? 'No Mail  ' : `Mailed about ${subject}  `}
                    </span>

                    <span>
                        {meeting === ''? 'No Meeting  ' : 'Meeting Abroad '}
                    </span>

                    <span>
                        {remainder === ''? 'No Remainder ' : 'Remainded '}
                    </span>

                    <span className='black-text'>Action created</span> on <Moment format='MMMM Do YYYY, h:mm:ss a'>{date}</Moment>
                </span>
                <a href="" onClick={onDelete} className="secondary-content">
                    <i className="material-icons grey-text">delete</i>
                </a>
            </div>
        </li>
    );
};

export default ActionItem;
