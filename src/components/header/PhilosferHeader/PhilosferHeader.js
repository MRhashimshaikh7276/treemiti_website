// import styles from '../..//../styles/header.module.css';
import lion from '../../../media/pngwing.com (13) 2.png';
import './philosferHeader.scss';

export default function PhilosferHeader() {
    return (
        <header className="PhilosferMain">
            <div className="row">
                <div className="left">
                    <div className="lion">
                        <img src={lion} alt='dnsn'/>
                    </div>
                </div>
                <div className="right">
                    <div className="text1">
                        <h1>Creating Professionals</h1>
                    </div>
                    <div className="text2">
                        <p>When your basics are clear, you can comfortably fit yourself with evolving technology</p>
                    </div>
                    <div className="text3">
                        <p>For instance, if you know how to drive a manual car, you won’t need any time to learn the automatic car</p>
                    </div>
                </div>
            </div>
        </header>
    )
}
