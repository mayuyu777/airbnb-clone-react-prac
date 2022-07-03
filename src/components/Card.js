import starImage from '../images/star.png';

export default function Card(prop) {

   let badgeText
   if(prop.openSpots === 0){
      badgeText = "SOLD OUT"
   }else if (prop.location === "Online"){
      badgeText = "ONLINE"
   }

   return (
      <div className='card-cont' key={prop.id}>
               <div className='card-photo-cont'>
                 {badgeText && <div className='card-status'>{badgeText}</div>}
                <img className='card-photo' src={require(`../images/${prop.coverImg}`)} alt="cardphoto"/>
             </div>
             <div className='card-rate-cont'>
                <img className='star' src={starImage} alt="star"/>
                <span>{prop.stats.rating}</span>
                <span style={{color:"gray"}}> ({prop.stats.reviewCount})•</span>
                <span style={{color:"gray"}}>{prop.location}</span>
             </div>
             <p>{prop.title}</p>
             <p><span style={{fontWeight:"bold"}}>From ${prop.price}</span> / person</p>
         </div>
   );
 }