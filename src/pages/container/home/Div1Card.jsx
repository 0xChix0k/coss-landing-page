const Div1Card = ({ icon, title, des }) => {
  return (
    <div className="card">
      {icon}
      <div className="cardTitle">{title}</div>
      <div className="cardDes">{des}</div>
    </div>
  );
};
export default Div1Card;
