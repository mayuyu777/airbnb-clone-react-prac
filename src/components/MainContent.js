import photogrid from '../images/photo-grid.png';
import Card from './Card';
import { data } from '../data';


function PhotoGrid() {
    return (
        <div>
            <img className='photogrid' src={photogrid} alt="photogrid"/>
        </div>
    );
}

function Slogan() {
    return (
        <div className='slogan-cont'>
            <h1>Online Experiences</h1>
            <p>Join unique interactive activities led by one-of-a-kind hosts-all without leaving home.</p>
        </div>
    );
}

export default function MainContent() {

    
    const cardList = data.map((item) => (
            <Card key = {item.id} 
                  {...item}/>
    ));
    
    return(
        <div>
            <PhotoGrid />
            <Slogan />
            <div className='main-card-cont'>
               {cardList}
            </div>
            
        </div>
    );
}
