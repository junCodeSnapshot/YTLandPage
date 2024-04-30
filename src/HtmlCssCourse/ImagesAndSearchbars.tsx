import './styles/imagesAndSearchbars.css';

export const ImagesAndSearchbars = () => {
    return (
        <>
            <h1>Homework</h1>
            <p className='instructions'>load image and set it to 200px and rounded corners</p>
            <img className="rounded homeworkImg"src="./assets/thumbnail-1.webp" alt="homework" />
            <br />
            <p className='instructions'>make the image square, center the image within the square</p>
            <img className="square homeworkImg" src="./assets/thumbnail-1.webp" alt="homework" />
            <br />
            <p className='instructions'>make the image a circle</p>
            <img className="circle homeworkImg"src="./assets/thumbnail-1.webp" alt="homework" />
            <br />
            <h2>TextsBoxses homework</h2>
            <hr />
            <br />
            <p className='instructions'>Rounded corners</p>
            <input className='rounded hinput' type="text" placeholder='Search'/>
            <br />

            <p className='instructions'>With a shadow and no border</p>
            <input className='googleSB' type="text" placeholder='Search Google or type a URL' />
            <br />

            <p className='instructions'>Linkedin Sign up</p>
            <p className='LinkedinLabels'>Email</p>
            <input className='LinkedinBox'type="email" />
            <p className='LinkedinLabels'>By clicking Agree & Join, you agree to the Privacy Policy.</p>
            <button className='LinkedinBtn'>Agree & Join</button>
            <br />

            <p className='instructions'>Twitter textbox</p>
            <img  className='circle twitterImg' src="./assets/thumbnail-1.webp" alt="homework" />
            <input className='twitterTbox' type="text" placeholder="What's happening?"/>
            <button className='tweetBtn'>Tweet</button>
            <br />
        </>
    )
}
