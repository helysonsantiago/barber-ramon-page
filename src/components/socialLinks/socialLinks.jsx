import { SocialLinks1 } from "./social.links";
import { BsInstagram, BsWhatsapp } from "react-icons/bs";
import Fade from "react-reveal";

const SocialLinks = () => {
  return (
    <>
        <SocialLinks1>
      <Fade top>
          <BsWhatsapp />
          <BsInstagram />
      </Fade>
        </SocialLinks1>
    </>
  );
};

export default SocialLinks;
