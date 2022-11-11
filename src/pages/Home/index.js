import React from "react";

function Home(props) {
  const mainFormat = `fillHeight ${props.lightDark.background}`;
  const cardBackground = `card mx-5 ${props.lightDark.background} ${props.lightDark.border}`;
  return (
    <div className={mainFormat}>
      <div className="card text-center m-4">
        <div className={props.lightDark.background}>
          <div className="card-header">
            <h1>Home</h1>
          </div>
          <div className="card-body">
            <div className={cardBackground}>
              <div className="row g-0">
                <div className="col-md-4">
                  {/* <img
                    src={require("../../files/images/SelfImage.jpeg")}
                    className="img-fluid rounded-start"
                    alt="..."
                  /> */}
                </div>
                <div className="col-md-8 d-flex">
                  <div className="card-body ">
                    <p className="card-text textVCenter">Test text</p>
                    {/* <table className="d-flex">
                      <tbody>
                        <tr>
                          <td className="card-text fs-4 align-middle">
                            This is a wider card with supporting text below as a
                            natural lead-in to additional content. This content
                            is a little bit longer.
                          </td>
                        </tr>
                      </tbody>
                    </table> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
