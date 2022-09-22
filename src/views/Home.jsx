import torta from "../img/torta.png";

const Home = () => {
  return (
    <>
      <section className="p-4 text-center">
        <h1>
          Bienvenidos a <strong>Happy Cake!</strong>
        </h1>
        <h6>El lugar de los pasteles felices</h6>
        <img src={torta} alt="imagen de una torta"></img>
      </section>
    </>
  );
};

export default Home;
