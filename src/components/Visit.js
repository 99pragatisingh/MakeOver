import React from 'react';

const Visit = () => {
  return (
    <div>
      <section className="visit" id="visit">

        <h1 className="heading"> Feedback</h1>

        <div className="row">

          <form action="">
            <h3>Your Feedback is very valuable to us</h3>
            <div className="inputBox">
              <input type="text" placeholder="Your name" />
            </div>
            <div className="inputBox">
              <input type="email" placeholder="Your e-mail" />
            </div>
            <div className="inputBox">
              <input type="text" placeholder="Subject" />
            </div>
            <div className="inputBox">
              <input type="text" placeholder="Message" />
            </div>

            <input type="submit" value="Send A Message" className="btn" />
          </form>

          <div className="image">
            <img src="images/contact.png" alt="" />
          </div>

        </div>

      </section>
    </div>
  );
};

export default Visit;
