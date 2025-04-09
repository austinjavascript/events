import SlQrCode from "@shoelace-style/shoelace/dist/react/qr-code/index.js";

const Splash = () => {
  return (
    <section>
      <div className="quadrants">
        <div className="quadrant">
          <div className="quadrant-content">
            <img src="/logo.png" />
            <h1>
              Welcome to
              <br />
              Austin JavaScript
            </h1>
            <p>we’re glad you’re here :)</p>
          </div>
        </div>
        <div className="quadrant">
          <div className="quadrant-content">
            <SlQrCode
              value="https://discord.gg/SrRUFMXw3c"
              label="Scan this QR code to join the Austin JavaScript Discord!"
              size={300}
            ></SlQrCode>

            <h2 style={{ marginTop: "1rem" }}>
              Join us on{" "}
              <img
                src="/discord-mark-black.png"
                style={{ margin: "-5px 0", height: 30 }}
              />{" "}
              Discord
            </h2>
          </div>
        </div>
        <div className="quadrant">
          <div className="quadrant-content">
            <SlQrCode
              value="https://opencollective.com/austin-javascript/donate/profile?interval=oneTime&amount=25"
              label="Scan this QR code to contribute to the Austin JavaScript Open Collective, shirts are $25"
              size={300}
            ></SlQrCode>
            <h2 style={{ marginTop: "1rem" }}>
              Austin JavaScript Shirts are $25
            </h2>
          </div>
        </div>
        <div className="quadrant">
          <div className="quadrant-content">
            <h2>Sponsored by</h2>
            <img src="/cloudflare.png" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Splash;
