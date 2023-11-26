import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { ADD_RECORD, UPDATE_RECORD, EDIT_RECORD, DELETE_RECORD } from './action/action';
import { useNavigate } from 'react-router-dom';

const Notes = () => {

    const dispatch = useDispatch();
    let record = useSelector(state => state.Crud.users);
    let singlerecord = useSelector(state => state.Crud.user);
    const [editid, setEditId] = useState("");
    const [alldata, setAllData] = useState(record)

    let navigate = useNavigate();
    const [input, setInput] = useState({
        name: '',
    })
    const handleChange = (e) => {
        const { name, value } = e.target;
        setInput({
            ...input, [name]: value
        })
    }
    const handleSubmit = () => {

        if (editid) {
            let obj = {
                id: editid,
                name: input.name,
            }
            dispatch(UPDATE_RECORD(obj));
            alert("Record successfully Edit");
            setEditId("");
        } else {
            let obj = {
                id: Math.floor(Math.random() * 100000),
                name: input.name,
            }
            dispatch(ADD_RECORD(obj));
            alert("Record successfully insert");
            console.log(obj);
        }
        setInput({
            name: '',
        })
    }

    useEffect(() => {
        setInput({
            name: singlerecord.name,
        })
        setEditId(singlerecord.id)
    }, [singlerecord])

    useEffect(()=>{
        let admin = JSON.parse(localStorage.getItem('login'));
        if(!admin){
            navigate('/')
        }
    },[])

    return (
        <div className='body'>
            <h1 className="mb-5">welcome to notes</h1>
            <div className="box bg-light p-4 w-100">
                <h6 className="fs-4 mb-4">Add a Notes</h6>
                <div className="input-box">
                    <input className="p-5 fs-4" name='name' onChange={handleChange} value={input.name}></input>
                </div>
                {
                    editid ? (<button class="btn btn-primary bg-primary mt-3" onClick={() => handleSubmit()}>Edit Note</button>) : (<button class="btn btn-primary bg-primary mt-3" onClick={() => handleSubmit()}>Add Note</button>)
                }
            </div>
            <h2 className="mt-5">Your Notes</h2>
            <hr></hr>
            <table>
                <tbody>
                    {
                        record.map((val) => {
                            return (
                                <div className='d-flex'>
                                    <div className='note-box bg-white p-5 mb-3'>
                                        <h5>{val.name}</h5>
                                        <button class="btn btn-primary bg-primary mt-3 me-3" onClick={() => dispatch(EDIT_RECORD(val.id))}>Edit Note</button>
                                        <button class="btn btn-primary bg-primary mt-3" onClick={() => dispatch(DELETE_RECORD(val.id))}>Delete Note</button>
                                    </div>
                                </div>
                            )
                        })

                    }
                </tbody>
            </table>
        </div>
    )
}

export default Notes;


