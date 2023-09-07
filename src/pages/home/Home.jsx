import { ContainerHome, BoxInfoHome, TextBackground } from "./home.styled";
import rz from "../../imgs/rz.png";
import SocialLinks from "../../components/socialLinks/socialLinks.jsx";
import Fade from "react-reveal/Fade";

const Home = () => {
  return (
    <ContainerHome>

      <BoxInfoHome>
        
        <Fade left>
          <h1>
            RAMON <span> BARBER</span>
          </h1>
        </Fade>
        
        <button>Agenda </button>
      
        <p>
          <span>*</span> Entre em contato para verificar serviços e produtos
          disponíveis.
        </p>
      
      </BoxInfoHome>
      
      <Fade top>
        <img src={rz} alt="" />
      </Fade>
      
      <TextBackground>
        <Fade right>
          RAMON <span>BARBER</span>
        </Fade>
      </TextBackground>

      <SocialLinks></SocialLinks>
    </ContainerHome>
  );
};

export default Home;
