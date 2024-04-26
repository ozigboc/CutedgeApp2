import React, { useState,useEffect } from 'react';
import Sidebar from '../Components/Sidebar';
import Modal from "react-modal";
import Header2 from '../Components/Header2';
import axios from 'axios';

const Assignments = () => {
    const [assignments, setAssignments] = useState([]);
    const [formData, setFormData] = useState({
        name: '',
        description: ''
    });
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalOpen1, setIsModalOpen1] = useState(false);
    const [selectedAssignments, setSelectedAssignments] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:3003/assignments')
            .then(response => setAssignments(response.data))
            .catch(error => console.error('Error fetching roles:', error));
    }, []);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    const toggleModal1 = (project) => {
        setSelectedAssignments(project);
        setIsModalOpen1(!isModalOpen1);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3003/roles', formData)
            .then(response => {
                setAssignments([...assignments, response.data]);
                setFormData({
                    name: '',
                    description: '',
                });
                toggleModal();
            })
            .catch(error => console.error('Error adding project:', error));
    };

    return (
        <div className='dashb'>
            <section className='dashboard'>
                <Sidebar />
                <main>
                    <Header2 />
                    <div className='add'>
                        <h2>assignments</h2>
                        <button onClick={toggleModal}>Add Assignments</button>
                    </div>

                    <table>
                        
                            <tr className='heading'>
                                <th>Name</th>
                                <th>Duration</th>
                                <th className='dt'></th>
                            </tr>
                       
                            {assignments.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.name}</td>
                                    <td>{item.description}</td>

                                    <td className='dt'><button onClick={() => toggleModal1(item)}>See Details</button></td>
                                </tr>
                            ))}
                        
                    </table>
                </main>
            </section>

          {/* FIRST MODAL */}
            <Modal
                isOpen={isModalOpen}
                onRequestClose={toggleModal}
                contentLabel="Example Modal"
                className={`bg-transparnt`}
                style={{
                    overlay: {
                        position: "fixed",
                        top: "0",
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: "hsla(0, 0%, 0%, .8)",
                        zIndex: 100000,
                    },
                }}
            >
                <div className='modal1'>
                    <div className='modal1-content'>
                        <div className='close'>
                            <button onClick={() => setIsModalOpen(false)} style={{ cursor: 'pointer' }}>X</button>
                        </div>
                        <form className='product-form' onSubmit={handleSubmit}>
                            <div>
                                <p>Name</p>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                            </div>
                           
                            <div>
                                <p>Description</p>
                                <input
                                       type="text"
                                       name="description"
                                       value={formData.description}
                                       onChange={handleChange}
                                />
                            </div>
                            <div>
                                <button type="submit">SEND</button>
                            </div>
                        </form>
                    </div>
                </div>
            </Modal>

            {/* SECOND MODAL */}
            <Modal
                isOpen={isModalOpen1}
                onRequestClose={() => setIsModalOpen1(false)}
                contentLabel="Example Modal"
                className={`bg-transparnt`}
                style={{
                    overlay: {
                        position: "fixed",
                        top: "0",
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: "hsla(0, 0%, 0%, .8)",
                        zIndex: 100000,
                    },
                }}
            >
                <div className='modal1'>
                    <div className='modal1-content'>
                        <div className='close'>
                            <button onClick={() => setIsModalOpen1(false)} style={{ cursor: 'pointer' }}>X</button>
                        </div>
                        {selectedAssignments && (
                            <section className='roject-info'>
                            
                                <div className='others'>
                                    <p>Name: <span>{selectedAssignments.name}</span></p>
                                    <p>Description: <span>{selectedAssignments.description}</span></p>
                                    {/* Render other product details here */}
                                </div>
                            </section>
                        )}
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default Assignments;
