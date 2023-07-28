import TripData from "./TripData";
import "./TripStyles.css";

function Trip() {
  return (
    <div className="trip">
      <h1 className="">Recent Trip</h1>
      <p className="">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae,
        iure.
      </p>
      <div className="tripCard">
        <TripData
          image="https://images.unsplash.com/photo-1501179691627-eeaa65ea017c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
          heading="Trip in Indonesia"
          text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae asperiores sunt ducimus ut magni deleniti in. Corporis deleniti autem eum?Molestiae asperiores sunt ducimus ut magni deleniti."
        />

        <TripData
          image="https://images.unsplash.com/photo-1492571350019-22de08371fd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=753&q=80"
          heading="Trip in Japan"
          text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae asperiores sunt ducimus ut magni deleniti in. Corporis deleniti autem eum?Molestiae asperiores sunt ducimus ut magni deleniti."
        />

        <TripData
          image="https://images.unsplash.com/photo-1528918387630-6b575e9fe5f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=890&q=80"
          heading="Trip in Netherlands"
          text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae asperiores sunt ducimus ut magni deleniti in. Corporis deleniti autem eum?Molestiae asperiores sunt ducimus ut magni deleniti."
        />
      </div>
    </div>
  );
}

export default Trip;
