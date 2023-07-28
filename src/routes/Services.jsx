import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Trip from "../components/Trip";

function Services() {
  return (
    <>
      <Navbar />
      <Hero
        class="hero-mid"
        heroImg="https://images.unsplash.com/photo-1488085061387-422e29b40080?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1031&q=80"
        title="Your Journey Your Story"
        url="/"
        btnClass="hide"
      />
      <Trip />
      <Footer />
    </>
  );
}

export default Services;
