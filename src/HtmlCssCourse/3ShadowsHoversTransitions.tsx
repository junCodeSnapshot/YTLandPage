import './styles/buttons.css';
import './styles/buttonsExcersice.css'
import './styles/Intermedium3.css'

export const ShadowsHoversTransitions = () => {
    return (
        <div>
            <button className="btn youtubeBtn">SUBSCRIBE</button>
            <button className='btn joinBtn'>JOIN</button>
            <button className='btn tweetBtn'>Tweet</button>
            <br />
            <h2>Excersice Homework</h2>
            <hr />
            <a href='https://www.amazon.com/'>Back to Amazon</a>
            <h3>Nike Black Running Shoes</h3>
            <p className='price'>$39 - in stock.</p>
            <p>Free delivery tomorrow.</p>
            <button className='btn addBtn'>Add to the cart</button>
            <button className='btn buyBtn'>Buy now</button>
            <hr />
            <p>Pagination Excercise</p>
            <button className='paginationBtn'>Back</button>
            <a className="pagination" href="https::/google.com/">1</a>
            <a className="pagination" href="https::/google.com/">2</a>
            <a className="pagination" href="https::/google.com/">3</a>
            <a className="pagination" href="https::/google.com/">4</a>
            <button className='paginationBtn'>Next</button>
            <hr />
            <p>Stretch Excercise</p>
            <button className='stretch basicGreenBtn'>Stretch</button>
            <hr />
            <p>3D Click</p>
            <button className='dddBtn basicGreenBtn'>Shadow</button>
            <hr />
            <p>Margin and padding together</p>
            <button className='basicGreenBtn btn expandibleBtn'>One</button>
            <button className='basicGreenBtn btn expandibleBtn'>Two</button>
            <button className='basicGreenBtn btn expandibleBtn'>Three</button>
        </div>
    )
}

