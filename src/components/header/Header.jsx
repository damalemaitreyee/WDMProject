import './header.css'
import background from '../../images/background.jpeg'

export default function Header() {
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleSm">Welcome Home</span>
                <span className="headerTitleLg">Living Made Awesome</span>

            </div>
            <img className="headerImg" 
            src={background}></img>
        </div>
    )
}
