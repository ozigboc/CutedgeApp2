import React, { useState, useEffect } from 'react';
import Sidebar from '../Components/Sidebar';
import Modal from "react-modal";

import axios from 'axios';



const Skills = () => {
  const [departments, setDepartments] = useState([]);
 const [formData, setFormData] = useState({
     skillId: '',
     skillName: '',
 });
 const [isModalOpen, setIsModalOpen] = useState(false);
 const [isModalOpen1, setIsModalOpen1] = useState(false);
 const [selectedSkill, setSelectedSkill] = useState(null);

 useEffect(() => {
     axios.get('http://localhost:3003/skills')
         .then(response => setDepartments(response.data))
         .catch(error => console.error('Error fetching departments:', error));
 }, []);

 const toggleModal = () => {
     setIsModalOpen(!isModalOpen);
 };

 const toggleModal1 = (project) => {
     setSelectedSkill(project);
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
     axios.post('http://localhost:3003/skills', formData)
         .then(response => {
             setDepartments([...departments, response.data]);
             setFormData({
                 skillId: '',
                 skillName: '',
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
               
                 <div className='add'>
                     <h2>skills</h2>
                     <button onClick={toggleModal}>Add Skill</button>
                 </div>

                 <table>
                     {/* <thead className='heading'> */}
                         <tr className='heading'>
                             <th>skillId</th>
                             <th>SkillName</th>
                             <th className='dt'></th>
                         </tr>
                     {/* </thead> */}
                     {/* <tbody> */}
                         {departments.map((item, index) => (
                             <tr key={index}>
                                 <td>{item.skillId}</td>
                                 <td>{item.skillName}</td>
                                 <td className='dt'><button onClick={() => toggleModal1(item)}>See Details</button></td>
                             </tr>
                         ))}
                     {/* </tbody> */}
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
                             <p>Skill Id</p>
                             <input
                                 type="text"
                                 name="skillId"
                                 value={formData.skillId}
                                 onChange={handleChange}
                             />
                         </div>
                         <div>
                             <p>Skill Name</p>
                             <input
                                 type="text"
                                 name="skillName"
                                 value={formData.skillName}
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
                     {selectedSkill && (
                         <section className='roject-info'>
                         
                             <div className='others'>
                                 <p>Skill ID: <span>{selectedSkill.skillId}</span></p>
                                 <p>Skill Name: <span>{selectedSkill.skillName}</span></p>
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


export default Skills;
