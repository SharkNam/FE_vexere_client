import React, { Component } from "react";
import { Parallax } from "react-parallax";
import ParallaxImg from "../../assets/images/banner-main-vi.jpg";
import { TripBookingContainer } from "./styled";
import BookingForm from "./BookingForm/BookingForm";

class TripBooking extends Component {
  render() {
    console.log("run tripBooking");
    return (
      <div>
        <section className="trip-booking">
          <Parallax
            bgImage={ParallaxImg}
            // blur={10}
            strength={500}
            bgImageAlt="trip booking"
          >
            <TripBookingContainer>
              <div className="booking-form">
                <BookingForm atHome />
              </div>
            </TripBookingContainer>
          </Parallax>
        </section>
      </div>
    );
  }
}

export default TripBooking;
