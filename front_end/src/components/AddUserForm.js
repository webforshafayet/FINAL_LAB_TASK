import {useState} from 'react';
import './AddUserForm.css';

const AddUserForm = ({addUser})=> {


        const [newUser, setNewUser] = useState({
            id: '',
            experience: '',
            thought: '',
            feeling: '',
            comment: '',
        });


        const changeUser = (e)=>{
            const attar = e.target.name;
            const value = e.target.value;
            //console.log(attar+ "|"+value);
            const user = {...newUser, [attar] : value}; 
            setNewUser(user);
        }


    const formSubmit=(e)=>{
        e.preventDefault();
        //  const id = e.target[0].value
        // const name = e.target[1].value
        // const dept = e.target[2].value
        // const email = e.target[3].value
        // const newUser = {id: id, name: name, dept: dept, email:email}
        addUser(newUser);

        setNewUser({
            id: '',
            experience: '',
            thought: '',
            feeling: '',
            comment: '',
        })
        
    }

    return (
        <div className="form">

            <form onSubmit={formSubmit}>
         
                    <table>
                        <thead></thead>
                        <tbody>
                        <tr>
                            <td>ID</td>
                            <td>
                                <input type="number" name="id" value={newUser.id} onChange={changeUser}/> 
                            </td>
                        </tr>
                        <tr>
                            <td>Experience</td>
                            <td>
                                <input type="text" name="experience" value={newUser.experience} onChange={changeUser}/> 
                            </td>
                        </tr>
                        <tr>
                            <td>Thought</td>
                            <td>
                                <input type="text" name="thought" value={newUser.thought} onChange={changeUser} /> 
                            </td>
                        </tr>
                        <tr>
                            <td>Feeling</td>
                            <td>
                                <input type="email" name="feeling" value={newUser.feeling} onChange={changeUser}/> 
                            </td>
                        </tr>

                        <tr>
                            <td>Comment</td>
                            <td>
                                <input type="email" name="comment" value={newUser.comment} onChange={changeUser}/> 
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>
                                <button type="submit">Add</button>
                            </td>
                        </tr>
                    </tbody>
                    </table>
                </form>
                </div>
            
    );
}

export default AddUserForm; 