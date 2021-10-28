import "./managerhome.css";

export default function ManagerHome() {
  return (
    <div className="ManagerHome">
      <section className="managerheader">
        <div className="text-box">
          <h1>Hi Manager!</h1>
          <p>Scroll Down To Perform Specific CRUD</p>
        </div>
      </section>
      <section className="service">
        <h1>Please select from the options below.</h1>
        <div className="row">
          <div className="service-col">
            <h3>
              <a className="btn btn-link" href="/manager_building_crud">
                Register Buildings
              </a>
            </h3>
          </div>
          <div className="service-col">
            <h3>
              <a href="/manager_owner_crud">
                Register Apartment & it's Owner
              </a>
            </h3>
          </div>
          <div className="service-col" id="validate">
            <h3>
              <a href="/manager_garden">
                Register/Manage Garden, Plants and Pools
              </a>
            </h3>
          </div>
          <div className="service-col" id="validate">
            <h3>
              <a href="/manager_visitor">
                Register/Manage Visitor
              </a>
            </h3>
          </div>
        </div>
      </section>
    </div>
  );
}
