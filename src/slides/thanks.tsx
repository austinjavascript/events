import SlQrCode from "@shoelace-style/shoelace/dist/react/qr-code/index.js";
import { Sponsors } from "../components/Sponsors";

const Splash = () => {
  return (
    <section>
      <div className="quadrants">
        <div className="quadrant">
          <div className="quadrant-content">
            <h1>Thank you for joining!</h1>
            <p>we’ll see you next month :)</p>
          </div>
        </div>
        <div className="quadrant">
          <div className="quadrant-content">
            <SlQrCode
              value="https://forms.gle/BEsMjyE3cxDUvVmq7"
              label="Scan this QR code to give feedback!"
              size={300}
            ></SlQrCode>
            <h2 style={{ marginTop: "1rem" }}>We want your feedback!</h2>
          </div>
        </div>
        <div className="quadrant">
          <div className="quadrant-content">
            <div style={{ position: "relative" }}>
              <img width={500} src="/zilker-directions.png" />
              <h3
                style={{
                  marginTop: "1rem",
                  position: "absolute",
                  bottom: "4rem",
                  right: "4rem",
                  textWrap: "balance",
                  background: "white",
                  padding: ".5em",
                }}
              >
                Meet us at Zilker Brewing!
              </h3>
            </div>
          </div>
        </div>
        <div className="quadrant">
          <div className="quadrant-content">
            <Sponsors />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Splash;
