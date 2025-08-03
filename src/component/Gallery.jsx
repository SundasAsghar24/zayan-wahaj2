export default function Gallery() {
  return (
    <div>
          <div ClassName="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://www.kfcpakistan.com/images/a097a760-29b8-11f0-9db8-39b23a0bbeb5-WebBannercopy_desktop_image-2025-05-05135539.jpg" class="d-block w-100" alt="first photo"/>
                    </div>
                    <div className="carousel-item">
                        <img src="https://www.kfcpakistan.com/images/a097a760-29b8-11f0-9db8-39b23a0bbeb5-WebBannercopy_desktop_image-2025-05-05135539.jpg" class="d-block w-100" alt="second img"/>
                    </div>
                    <div className="carousel-item">
                        <img src="https://www.kfcpakistan.com/images/24dcb5a0-3469-11f0-9d7f-7f02ac4de3b0-Web-Banner_desktop_image-2025-05-19042424.jpg" class="d-block w-100" alt="third img"/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
          </div>
          <span >
              <div className="d-grid gap-2 col-6 mx-auto">
                  <btn className="btn" type="button">Recoder</btn>

              </div>
          </span>
    </div>
  )
}
