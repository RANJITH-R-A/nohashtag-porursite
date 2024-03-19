import React from "react";
import "../../App.css";

//
//
const Home = () => {
  return (
    <>
      <section className="image_bg object-cover">
        <div className="text-textColor flex justify-between items-center p-[1.5rem]">
          <div className="text  text-[30px] lg:text-[48px]">
            <h1 className="text1 font-[600] ">
              Porur's premier software <br />
            </h1>
            <h1 className="text2 text-babyPinkColor font-[600]">
              training institute!
            </h1>
            <p className="text3  text-[13px] lg:text-[16px]">
              BITA Academy, where professionals flourish
              <br /> and achieve success effortlessly. Your journey to mastery
              starts here!
              {/* <br /> Explore the exclusive collection of <br /> */}
              {/* <span className="text2 text-babyPinkColor font-[600]">
                {" "}
                college students!
              </span> */}
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
