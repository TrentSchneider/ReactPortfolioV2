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
                <div className="col-md-4"></div>
                <div className="col-md-8 d-flex">
                  <div className="card-body ">
                    <div className="card-text ">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nullam in sollicitudin justo. Morbi pharetra risus eget
                        velit sagittis faucibus. Maecenas mauris lectus, porta
                        quis vehicula et, porttitor eget quam. Integer sagittis
                        risus non ipsum facilisis tempor. Donec luctus vel dui
                        in porttitor. Donec convallis et quam vel pharetra.
                        Pellentesque et dolor et turpis consectetur accumsan ac
                        convallis neque. Maecenas gravida blandit orci, at
                        sollicitudin eros laoreet sit amet. Suspendisse sit amet
                        commodo nibh, ut mollis dolor. Maecenas dapibus turpis
                        consectetur, tempor diam eu, volutpat lectus. In viverra
                        ut sapien eu convallis. Aenean vitae placerat erat.
                        Fusce dictum hendrerit turpis eget suscipit. Sed maximus
                        tortor eget sem vehicula laoreet.
                      </p>
                      <p>
                        Aenean fringilla, sem id laoreet faucibus, nibh lacus
                        commodo turpis, in commodo risus arcu nec orci.
                        Phasellus volutpat posuere massa ut mollis. Praesent
                        interdum massa vel nulla sagittis sollicitudin. Nunc
                        tincidunt ligula suscipit magna dictum, vitae maximus
                        nulla mattis. Pellentesque a rutrum nisl. In in
                        efficitur nisl. Duis congue dui ut tempor placerat. Orci
                        varius natoque penatibus et magnis dis parturient
                        montes, nascetur ridiculus mus. In dignissim libero in
                        dui congue volutpat ut ac velit. Quisque lacinia lacinia
                        dolor, nec pharetra nisl accumsan id.
                      </p>
                      <p>
                        Cras dignissim erat velit, ut vehicula metus ornare id.
                        Pellentesque at dolor non mi mollis imperdiet. Sed
                        volutpat sapien neque, vel efficitur massa consectetur
                        et. Morbi velit urna, tincidunt eu fringilla eget,
                        rhoncus a quam. Duis interdum dui semper sem condimentum
                        posuere. Etiam orci velit, tincidunt nec suscipit at,
                        ullamcorper quis quam. Sed vestibulum in nulla vel
                        varius.
                      </p>
                    </div>
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
