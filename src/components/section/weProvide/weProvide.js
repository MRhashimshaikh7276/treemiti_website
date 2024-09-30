import './weProvide.scss';

function WeProvide({ img, text }) {
  return (
    <>
      <div className="repetCard">
        <div className="card">
          <div className="weImgWrap">
            <img src={img} alt="dsjss" />
          </div>
        </div>
        <div className="weBtn">
          <h2>{text}</h2>
        </div>
      </div>
    </>
  );
}

export default WeProvide;
