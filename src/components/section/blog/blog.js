// import Styles from '../../../styles/section.module.css';
import building from '../../../media/image 4.png';
import building1 from "../../../media/Frame 586.png";
import building2 from '../../../media/image 5.png';
import './blog.scss';

function Blog() {
    return (
        <section className="MainBlog">
            <div className="secCont"> 
                <div className="BlogWrap">
                    <div>
                        <img src={building} alt='dsd' />
                    </div>
                    <div>
                        <img src={building1} alt='dd' />
                    </div>
                    <div>
                        <img src={building2} alt='dd' />
                    </div>
                </div>
                <div className="BlogText">
                    <h2>Unlocking Opportunities: The Ultimate Guide to India's Top 10 Future-Proof Careers in 2024</h2>
                </div>
                <div className="BlogBtn">
                    <button>Read More</button>
                </div>
            </div>
        </section>
    );
}

export default Blog;
