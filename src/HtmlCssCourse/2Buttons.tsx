import './styles/buttons.css';
import './styles/buttonsExcersice.css'

export const Buttons = () => {
    return (
        <div>
            <button className="btn youtubeBtn">SUBSCRIBE</button>
            <button className='btn joinBtn'>JOIN</button>
            <button className='btn tweetBtn'>Tweet</button>
            <br/>
            <h2>Excersice Homework</h2>
            <hr/>
            <a href='https://www.amazon.com/'>Back to Amazon</a>
            <h3>Nike Black Running Shoes</h3>
            <p className='price'>$39 - in stock.</p>
            <p>Free delivery tomorrow.</p>
            <button className='btn addBtn'>Add to the cart</button>
            <button className='btn buyBtn'>Buy now</button>
        </div>
    )
}
