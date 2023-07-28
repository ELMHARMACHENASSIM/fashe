import React from "react";
import Footer from "../footer/Footer";
import abt from "../.././assets/images/abt.jpg";
import "./_about.scss"
const About = () => {
  return (
    <>
      <div className="about">
        <div className="container">
          <div className="image">
            <img src={abt} alt="" srcset="" />
          </div>
          <div className="description">
          <h3>OUR STORY</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur
              ea neque sed, labore reiciendis sapiente. Consectetur ea, enim
              expedita inventore et corporis saepe repellat earum cumque, quos,
              sit iure aut? Quae recusandae architecto quia dignissimos veniam,
              facere pariatur temporibus. Nobis mollitia quia, minima repellat
              officia id modi est et iusto quaerat. Et ipsam distinctio repellat
              quo eveniet architecto, voluptatibus obcaecati? Dicta est deleniti
              reprehenderit, suscipit quos tempore distinctio cum eligendi
              aperiam eaque nobis ipsum molestias molestiae vitae? Doloribus
              accusamus aspernatur ex voluptas commodi, totam reprehenderit
              omnis necessitatibus fugit ut ratione? Accusantium eaque provident
              ex, ad ab natus delectus in totam cumque facere aspernatur vero
              perferendis placeat. Error laudantium velit quis, sapiente quod
              qui nam similique eaque cupiditate asperiores commodi voluptates.
            </p>
            <p className="bor">
            accusamus aspernatur ex voluptas commodi, totam reprehenderit
              omnis necessitatibus fugit ut ratione? Accusantium eaque provident
              ex, ad ab natus delectus in totam cumque facere aspernatur vero
              perferendis placeat. Error laudantium velit quis, sapiente quod
       
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default About;
