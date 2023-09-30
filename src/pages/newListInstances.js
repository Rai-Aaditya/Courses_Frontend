import React, { useState } from 'react';
import axios from 'axios';
import '../styles/listInstances.css';
import OptionSem from '../helpers/optionSem';

function newListInstances() {
    const [loading, setLoading] = useState(false);
    const fetchInstances = async () => {

    }

    return (
        <div className="lsInstContainer">
            <form>
                <input type="number" name="year" />
                <select name="semester">
                    <OptionSem />
                </select>
                <button className="bg-primary button" type="submit">
                    List Instances
                </button>
            </form>
            <table>
                <thead>
                    <tr>
                        <th>Course Title</th>
                        <th>Year-Sem</th>
                        <th>Code</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {loading?(
                       <tr>
                        <td colSpan='4'>Loading instances...</td>
                       </tr> 
                    ):(
                        instances.map((instance)=>(
                            <tr key={instance.id}></tr>
                        ))
                    )
                    }
                </tbody>
            </table>
        </div>
    )

}

export default newListInstances;