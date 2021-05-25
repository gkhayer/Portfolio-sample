const Cards = (props) => {

  const {id, thumbnailUrl, title} = props.data
    return (
        <>
            <div className="col-10 col-md-4 mt-5" key={id}>
                <div className="card" style={{ width: "16rem" }}>
                  <img
                    className="card-img-top"
                    src={thumbnailUrl}
                    alt="Card cap"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">
                      {props.data.body}
                    </p>
                    <a href="/" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
        </>
    )
}

export default Cards
