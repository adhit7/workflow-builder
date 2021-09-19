import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {updateAction} from "../redux/actions/actionsAction";

const Edit_Action = () => {
    const [name,setname] = useState('');
    const [email, setemail] = useState({
        from: '',
        to: [],
        subject: '',
        body: ''
    });
    const [meeting, setmeeting] = useState({
        from: '',
        to: [],
        meeting: ''
    });
    const [remainder, setremainder] = useState({
        from: '',
        to: '',
        reminder: ''
    })
    const dispatch = useDispatch();
    const current = useSelector(state => state.workflow.current);

    useEffect(()=>{
        if(current.length !== 0){
            setname(current.name);
            setemail({
                from: current.email.from,
                to: current.email.to,
                subject: current.email.subject,
                body: current.email.body
            });
            setmeeting({
                from: current.meeting.from,
                to: current.meeting.to,
                meeting: current.meeting.meeting
            });
            setremainder({
                from: current.remainder.from,
                to: current.remainder.to,
                reminder: current.remainder.reminder
            });
        }
    },[current]);

    const onSubmit = () => {
        const update = {
            name,
            email,
            meeting,
            remainder,
            date:new Date(),
            id : current.id,
        }

        dispatch(updateAction(update));


        setname('');
        setemail({
            from: '',
            to: [],
            subject: '',
            body: ''
        });

        setmeeting({
            from: '',
            to: [],
            meeting: ''
        });

        setremainder({
            from: '',
            to: '',
            reminder: ''
        });

    }

    return (
        <div id="edit-log-modal" className="modal" style={modalStyle}>
            <div className="modal-content">
                <h4>Action</h4>
                <div className="row">
                    <div className="col s12 m12">
                        <div className="input-field">
                            <input type="text" name="message" value={name} onChange={e => setname(e.target.value)}/>
                            <label htmlFor="message" className="active">Name</label>
                        </div>
                        <div className="card">
                            <div className="card-content">
                                <span className="card-title">Email</span>
                                <div className="input-field">
                                    <input type="text" name="message" value={email.from} onChange={e => setemail({from:e.target.value})}/>
                                    <label htmlFor="message" className="active">From</label>
                                </div>
                                <div className="input-field">
                                    <input type="text" name="message" value={email.to} onChange={e => setemail({...email,to:e.target.value})}/>
                                    <label htmlFor="message" className="active">To</label>
                                </div>
                                <div className="input-field">
                                    <input type="text" name="message" value={email.subject} onChange={e => setemail({...email,subject:e.target.value})}/>
                                    <label htmlFor="message" className="active">Subject</label>
                                </div>
                                <div className="input-field">
                                    <textarea id="icon_prefix2" className="materialize-textarea" value={email.body} onChange={e => setemail({...email,body:e.target.value})}/>
                                    <label htmlFor="message" className="active">Body</label>
                                </div>
                            </div>
                            <div className="card-action center-align modal-close">
                                <a href="#" onClick={onSubmit}>Send</a>
                            </div>
                        </div>
                    </div>
                    <div className="col s12 m12">
                        <div className="card">
                            <div className="card-content">
                                <span className="card-title">Meeting</span>
                                <div className="input-field">
                                    <input type="text" name="message" value={meeting.from} onChange={e => setmeeting({from:e.target.value})}/>
                                    <label htmlFor="message" className="active">From</label>
                                </div>
                                <div className="input-field">
                                    <input type="text" name="message" value={meeting.to} onChange={e => setmeeting({...meeting,to:e.target.value})}/>
                                    <label htmlFor="message" className="active">To</label>
                                </div>
                                <div className="input-field">
                                    <input type="text" name="message" value={meeting.meeting} onChange={e => setmeeting({...meeting,meeting:e.target.value})}/>
                                    <label htmlFor="message" className="active">Location</label>
                                </div>
                            </div>
                            <div className="card-action center-align modal-close">
                                <a href="#" onClick={onSubmit}>Send</a>
                            </div>
                        </div>
                    </div>
                    <div className="col s12 m12">
                        <div className="card">
                            <div className="card-content">
                                <span className="card-title">Remainder</span>
                                <div className="input-field">
                                    <input type="text" name="message" value={remainder.from} onChange={e => setremainder({from:e.target.value})}/>
                                    <label htmlFor="message" className="active">From</label>
                                </div>
                                <div className="input-field">
                                    <input type="text" name="message" value={remainder.to} onChange={e => setremainder({...remainder,to:e.target.value})}/>
                                    <label htmlFor="message" className="active">To</label>
                                </div>
                                <div className="input-field">
                                    <input type="text" name="message" value={remainder.remainder} onChange={e => setremainder({...remainder,remainder:e.target.value})}/>
                                    <label htmlFor="message" className="active">Remainder</label>
                                </div>
                            </div>
                            <div className="card-action center-align modal-close">
                                <a href="#" onClick={onSubmit}>Send</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal-footer">
                <a href="#!" onClick={onSubmit} className="modal-close waves-effect blue waves-light btn">Enter</a>
            </div>
        </div>

    );
};

const modalStyle = {
    width:'50%',
    height:'75%'
}

export default Edit_Action;
