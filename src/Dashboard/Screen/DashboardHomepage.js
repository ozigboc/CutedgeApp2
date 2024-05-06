import React from 'react';
// import '../App.css';
import Sidebar from '../Components/Sidebar';
import { TbBooks } from "react-icons/tb";
// import { IoIosSettings } from "react-icons/io";
import { Link } from 'react-router-dom';
// import Header2 from '../Components/Header2';

const DashboardHomepage = () => {

  const Cards = [

    {
      text: 'Employees',
      icon: TbBooks,
      link: '/employees'
    
    },
    {
      text: 'Departments',
      icon: TbBooks,
      link: '/departments'
    
    },
    {
      text: 'Projects',
      icon: TbBooks,
      link: '/projects'
      
    },
    {
      text: 'Roles',
      icon: TbBooks,
      link: '/roles'
     
    },
    
    {
      text: 'Skills',
      icon: TbBooks,
      link: '/skills'
      
    },


   

  ];


  return (
    <div className='dashb'>


      <section className='dashboard'>

        <Sidebar />

        <main>
          {/* <Header2 /> */}

          <section className='left'>

            

            <div className='cards-container'>

              {Cards && Cards.map(({ icon, text, background, link }, index) => {
                return (

                  <Link to={link} className="cardss">
                    <div className='card1'>
                      <div className='icon-card' style={{ backgroundColor: background }}>

                        <i className='icons'>{React.createElement(icon)}</i>

                      </div>

                      <div className='card-text'>
                        <p>{text}</p>
                      </div>
                    </div>

                  </Link>


                )
              })}



            </div>
          </section>

        </main>

      </section>
    </div>
  )
}

export default DashboardHomepage