import './SocialCard.css'
import Location from './Location'
import Phone from './Phone'

//User Info
const SocialCard = ({userData}) =>{
   return(
       <div className="card">
           <div className="card_title">{userData.name.first} {userData.name.last}</div>
           <div className="card_body">
               <Location location={userData.location} />
               <Phone number={userData.phone} type="Home" />
               <Phone number={userData.cell} type="Home"/>
               <div className="card_image"><img src={userData.picture.medium} alt="/" /></div>
           </div>
       </div>
   )
}

export default SocialCard;