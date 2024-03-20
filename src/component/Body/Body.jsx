import { data } from "../../api/data";
import CardComponent from "../CardComponent/CardComponent";
import Header from "../Header/Header";
import { v4 as uuidv4 } from "uuid";

// import cardImg from "../../assets/images";
// import { cardImg2 } from "../../assets/images";

const Body = () => {
  return (
    <>
      <Header />
      {data.map((e) => {
        return (
          <CardComponent
            key={uuidv4()}
            title={e.title}
            rating={e.rating}
            address={e.address}
            image_url={e.image_url}
          />
        );
      })}

      {/* <CardComponent title={"KFC"} rating={"3.5"} address={"jlh"} />
      <CardComponent title={"KFC"} rating={"3.5"} address={"jlh"} />
      <CardComponent title={"KFC"} rating={"3.5"} address={"jlh"} />
      <CardComponent title={"KFC"} rating={"3.5"} address={"jlh"} /> */}
    </>
  );
};

export default Body