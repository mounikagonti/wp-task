import { useRef, useState, useEffect } from "react";
import { CiHeart, CiShare2 } from "react-icons/ci";
import { BiChevronsLeft, BiChevronsRight } from "react-icons/bi";
import { SlEye } from "react-icons/sl";
import { BsArrowRight } from "react-icons/bs";
import { FiChevronLeft } from "react-icons/fi";
import { useWindowSize } from "../../hooks/useWindowSize";

const Banner = () => {
  const { windowSize } = useWindowSize();
  const [isToggled, setIsToggled] = useState(false);
  const sidebarRef = useRef<any>();

  const iconArray = [
    {
      id: "1",
      icon: <CiHeart />,
      count: 0,
    },
    {
      id: "2",
      icon: <CiShare2 />,
      count: 120,
    },
    {
      id: "3",
      icon: <SlEye />,
      count: 27,
    },
  ];

  useEffect(() => {
    if (windowSize < 768) {
      setIsToggled(true);
    } else {
      setIsToggled(false);
    }
  }, [windowSize]);

  const handleOnClick = () => {
    sidebarRef.current.classList.toggle("toggleSidebar");
    setIsToggled((prev) => !prev);
  };
  return (
    <div className="container">
      <div className="banner">
        <div className="banner_left" ref={sidebarRef}>
          <div className="chevron_icon" onClick={handleOnClick}>
            <FiChevronLeft />
          </div>
          <div className="banner_left_heading">
            MAITREYA BUDDHA IN GESTURE OF FEARLESSNESS (ABHAYA MUDRA)
          </div>
          <div className="banner_left_icon_wrapper">
            {iconArray.map((item: any) => (
              <div className="icon_container">
                <div className="like">{item?.icon}</div>
                <div className="count">{item?.count}</div>
              </div>
            ))}
          </div>
          <div className="product_details">
            <div className="P_text">Dynasty : Ahichchhatra</div>
            <div className="P_text">Period : 200 CE</div>
            <div className="P_text">Material : Sandstone</div>
            <div className="P_text">Location : National Museum</div>
          </div>
          <div className="product_description">
            <div className="P_heading">Description:</div>
            <p className="P_description">
              Maitreya, the future Buddha to be, resides in the Tushita heaven
              as a bodhisattva waiting to redeem humanity. In Buddhism, Maitreya
              is the eighth Buddha, a successor of the seven historical Buddhas
              (sapta-manushi Buddhas). The Digha Nikaya mentions, Maitreya
              Buddha will be born in ketumati, in present-day Varanasi, Uttar
              Pradesh. As a bodhisattva, Maitreya wears a heavily adorned with
              earrings, wristlets, necklaces, and an amulet. The
            </p>
          </div>
          <div className="read_more_btn_wrapper">
            <BsArrowRight className="arrow" />
            <a href="#" className="read_more_btn">
              Read More
            </a>
          </div>
          <div className="btn_wrapper">
            <button className="collection_btn">ADD TO COLLECTIONS</button>
            <button className="souvenir_btn">SOUVENIR</button>
          </div>
        </div>
        <div className="banner_right">
          <img
            src="https://images.pexels.com/photos/6307227/pexels-photo-6307227.jpeg"
            alt="buddhaImg"
          />
          <div className="chevron_icon" onClick={handleOnClick}>
            {!isToggled ? <BiChevronsLeft /> : <BiChevronsRight />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
