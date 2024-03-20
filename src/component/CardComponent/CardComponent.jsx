/* eslint-disable react/prop-types */
const CardComponent = (props) => {
  console.log(props);
  return (
    <>
      <img src={props.image_url} alt="cardImg" className="image" />
      <p>{props.title}</p>
      <p>{props.rating}</p>
      <p>{props.address}</p>
    </>
  );
};

export default CardComponent