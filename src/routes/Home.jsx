import Destination from "../components/Destination";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Trip from "../components/Trip";

function Home() {
  return (
    <>
      <Navbar />
      <Hero
        class="hero"
        heroImg="https://images.unsplash.com/photo-1484976063837-eab657a7aca7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80\"
        title="Your Journey Your Story"
        text="Choose Your favorite destination."
        url="/"
        btnClass="show"
        btnText="Travel Plan"
      />
      <Destination />
      <Trip />
      <Footer/>
    </>
  );
}

export default Home;
