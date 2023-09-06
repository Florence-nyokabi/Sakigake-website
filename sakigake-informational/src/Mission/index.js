import React from "react";
import { RiSchoolLine } from 'react-icons/ri';
import {BsPeople} from 'react-icons/bs';
import './styles.css'


let info =[
    {icons:<RiSchoolLine/>,title:"Empowering Schools for Holistic Learning",
     content:"Empower schools with streamlined assignment management and parent communication. Our app facilitates efficient sharing of assignments, schedules, and announcements, strengthening the school community."},
    {icons:<BsPeople/>,title:"Facilitating Teacher-Parent Collaboration",
     content:"Support teachers in providing a holistic learning experience. MzaziConnect enables teachers to easily share assignments, resources, and progress updates with parents, fostering collaboration and engagement."},
    {icons:<BsPeople/>,title:"Empowering Parents for Active Engagement",
    content:"Engage parents as active partners in their child's education journey. With our app, parents can access assignments, track progress, and discover nearby shops for required materials, nurturing a supportive learning environment."}
    
]
function Mission(){
    return(
    <section id="mission-section">
        <div id="circle">
            </div>
            <div id="circle2">
            </div>
        <div id="mission-header">
            <h1>MzaziConnect is your partner in ensuring every child's success</h1>
           <p>Our mission is to create an inclusive education system where schools,teachers and parents collaborate for students' success.</p> 
        </div>
        
        <div id="content" >
            {
                 info.map((item,index)=>(
                    <div key={index} id="blueContainer">
                        <i id="icon">{item.icons}</i>
                        <h2>{item.title}</h2>
                        <p>{item.content}</p>
                </div>
                ))
            }   
        </div>
    </section>
    );
}
export default Mission;