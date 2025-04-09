const Splash = () => {
  return (
    <section>
      <div className="quadrants">
        <div className="quadrant">
          <div className="quadrant-content">
            <img src="/logo.png" />
            <h1>Welcome to<br/>Austin JavaScript</h1>
            <p>we’re glad you’re here :)</p>
          </div>
        </div>
        <div className="quadrant">
          <div className="quadrant-content">
            <img src="/discord-qr.png" width="300" />
            <h2>Join us on <img src="/discord-mark-black.png" style={ { margin: '-5px 0', height: 30 } }/> Discord</h2>
          </div>
        </div>
        <div className="quadrant">
          <div className="quadrant-content">
            <img src="/shirt-qr.png" width="300" />
            <h2>Austin JavaScript Shirts are $25</h2>
          </div>
        </div>
        <div className="quadrant">
          <div className="quadrant-content">
            <h2>Sponsored by</h2>
            <img src="/cloudflare.png"/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Splash
