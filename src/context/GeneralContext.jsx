import { createContext, useState } from "react";
import image1 from "../assets/1.webp"
import image2 from "../assets/2.webp"
import image3 from "../assets/3.webp"
import image4 from "../assets/4.webp"
import image5 from "../assets/5.webp"
import image6 from "../assets/6.webp"
import image7 from "../assets/7.webp"
import image8 from "../assets/8.webp"
import image9 from "../assets/9.webp"
import image10 from "../assets/10.webp"
import image11 from "../assets/11.webp"
import image12 from "../assets/12.webp"
import image13 from "../assets/13.webp"
import image14 from "../assets/14.webp"
import image15 from "../assets/15.webp"
import image16 from "../assets/16.webp"
import image17 from "../assets/17.webp"
import image18 from "../assets/18.webp"
import image19 from "../assets/19.webp"
import image20 from "../assets/20.webp"
import image21 from "../assets/21.webp"
import image22 from "../assets/22.webp"
import image23 from "../assets/23.webp"
import image24 from "../assets/24.webp"
import image25 from "../assets/25.webp"
import image26 from "../assets/26.webp"
import image27 from "../assets/27.webp"
import image28 from "../assets/28.webp"
import image29 from "../assets/29.webp"
import image30 from "../assets/30.webp"
import image31 from "../assets/31.webp"
import image32 from "../assets/32.webp"
import image33 from "../assets/33.webp"
import image34 from "../assets/34.webp"
import image35 from "../assets/35.webp"
import image36 from "../assets/36.webp"

const GeneralContext = createContext();
function Provider({ children }) {
  const [toggleNav, setToggleNav] = useState(false);

  const valueToShare = {
    toggleNav,
    changeToggleNav: () => {
      setToggleNav(!toggleNav);
    },

    imageArray: [
      image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13, image14, image15, image16, image17, image18, image19, image20, image21, image22, image23, image24, image25, image26, image27, image28, image29, image30, image31, image32, image33, image34, image35, image36
    ],

    teamImages: {

    },

    locationImage: image12,
    contactImage: image13,
  }

  return <GeneralContext.Provider value={valueToShare}>
    {children}
  </GeneralContext.Provider>
}

export { Provider };
export default GeneralContext;