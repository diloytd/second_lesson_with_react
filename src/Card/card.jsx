import file from  '../Date/file.json';
//import '../Date/file.json'
import '../Card/card.css';
console.log(file)
import Rating from '../Rating/rating';

export function Card() {
    //const [count, setCount] = useState(0)
  return (
      <>
        <div className="container_card">
        {file.map((info, index) => (
          <div key={index} className="container_card_info">
            <h2>{info.name}</h2>
            <p><b>Вселенная:</b> {info.universe}</p>
            <p><b>Альтер эго</b>: {info.alterego}</p>
            <p><b>Род деятельности</b>: {info.occupation}</p>
            <p><b>Друзья</b>: {info.friends}</p>
            <p><b>Суперсилы</b>: {info.superpowers}</p>
            <img src={info.url} className='container_card_img'></img>
            <p> {info.info}</p>
            <Rating/>
            </div>
          
        ))}
       </div>
      </>
    )
  }

  //export default Card