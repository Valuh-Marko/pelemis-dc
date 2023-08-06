import { createContext, useState } from "react";
import image1 from "../assets/image1.jpg"
import image2 from "../assets/image2.jpg"
import image3 from "../assets/image3.jpg"
import image4 from "../assets/image4.jpg"
import image5 from "../assets/image5.jpg"
import image6 from "../assets/image6.jpg"
import image7 from "../assets/image7.jpg"
import image8 from "../assets/image8.jpg"
import image9 from "../assets/image9.jpg"
import image10 from "../assets/image10.jpg"
import image11 from "../assets/image11.jpg"
import image12 from "../assets/image12.jpg"

const GeneralContext = createContext();
function Provider({ children }) {
  const [toggleNav, setToggleNav] = useState(false);

  const valueToShare = {
    toggleNav,
    changeToggleNav: () => {
      setToggleNav(!toggleNav);
    },

    imageArray: [
      image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12
    ]
  }

  return <GeneralContext.Provider value={valueToShare}>
    {children}
  </GeneralContext.Provider>
}

export { Provider };
export default GeneralContext;