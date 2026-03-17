import SlQrCode from "@shoelace-style/shoelace/dist/react/qr-code/index.js";

const Splash = () => {
  return (
    <section>
      <div className="quadrants">
        <div className="quadrant">
          <div className="quadrant-content">
            <h1>We want to learn from you!</h1>
            <p>sign up for a presentation :)</p>
          </div>
        </div>
        <div className="quadrant">
          <div className="quadrant-content">
            <SlQrCode
              value="https://forms.gle/ary1W5Ly3mivoHwh8"
              label="Scan this QR code to sign up for a main presentation!"
              size={300}
            ></SlQrCode>
            <h2 style={{ marginTop: "1rem" }}>Come and give a talk!</h2>
          </div>
        </div>
        <div className="quadrant">
          <div className="quadrant-content">
            <div style={{ position: "relative" }}>
              <SlQrCode
                value="https://forms.gle/dXD7XVScujFH2MhV6"
                label="Scan this QR code to sign up for a lightning talk!"
                size={300}
              ></SlQrCode>
              <h2 style={{ marginTop: "1rem" }}>Give a lightning talk!</h2>
            </div>
          </div>
        </div>
        <div className="quadrant">
          <div className="quadrant-content">
            <SlQrCode
              value="https://forms.gle/rVFLEGsTmk4Tzere6"
              label="Scan this QR code to sign up for a battledeck!"
              size={300}
            ></SlQrCode>
            <h2 style={{ marginTop: "1rem" }}>Present a battledeck!</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Splash;
