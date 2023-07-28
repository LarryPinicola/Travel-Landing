import DestinationData from "./DestinationData";
import "./DestinationStyles.css";

const Destination = () => {
  return (
    <div className="destination">
      <h1 className="">Popular Destinations</h1>
      <p className="">
        Tours give you opportunity to see a lot, within a time frame.
      </p>
      <DestinationData
        className="first-des"
        heading="Taal Volcano, Batangas"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            provident laborum, ratione dolorem odio ab at voluptates temporibus
            animi quod quisquam obcaecati. Explicabo quaerat consectetur aut
            voluptatum libero doloremque nostrum?"
        imgOne="https://images.unsplash.com/photo-1531201890865-fb64780d16e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
        imgTwo="https://images.unsplash.com/photo-1525849306000-cc26ceb5c1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fHRyYXZlbCUyMGRlc2t0b3B8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
      />

      {/* Second Destination */}
      <DestinationData
        className="second-des"
        heading="Mt.Daguldul"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            provident laborum, ratione dolorem odio ab at voluptates temporibus
            animi quod quisquam obcaecati. Explicabo quaerat consectetur aut
            voluptatum libero doloremque nostrum?"
        imgOne="https://images.unsplash.com/photo-1500835556837-99ac94a94552?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhdmVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
        imgTwo="https://images.unsplash.com/photo-1519074025331-81dcc0c0ee6a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80"
      />

      {/* <div className="first-des">
        <div className="des-text">
          <h2>Taal Volcano, Batangas</h2>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            provident laborum, ratione dolorem odio ab at voluptates temporibus
            animi quod quisquam obcaecati. Explicabo quaerat consectetur aut
            voluptatum libero doloremque nostrum?
          </p>
        </div>

        <div className="image">
          <img
            src="https://images.unsplash.com/photo-1531201890865-fb64780d16e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
            alt="img"
            className=""
          />
          <img
            src="https://images.unsplash.com/photo-1525849306000-cc26ceb5c1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fHRyYXZlbCUyMGRlc2t0b3B8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
            alt="img"
            className=""
          />
        </div>
      </div> */}
    </div>
  );
};

export default Destination;
