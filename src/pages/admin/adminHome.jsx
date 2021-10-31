import "./adminHome.css";

export default function AdminHome() {
  return (
    <div className="AdminHome">
      <section className="adminheader">
        <div className="text-box">
          <h1>Hi Admin!</h1>
          <p>Scroll Down To Perform Specific CRUD</p>
        </div>
      </section>
      <section className="service">
        <h1>Please select from the options below.</h1>
        <div className="row">
          <div className="service-col">
            <h3>
              <a className="btn btn-link" href="/admin_building_crud">
                Register Buildings
              </a>
            </h3>
          </div>
          <div className="service-col">
            <h3>
              <a href="/admin_owner_crud">
                Register Apartment & it's Owner
              </a>
            </h3>
          </div>
          <div className="service-col" id="validate">
            <h3>
              <a href="/admin_garden_crud">
                Register/Manage Garden, Plants and Pools
              </a>
            </h3>
          </div>
          <div className="service-col" id="validate">
            <h3>
              <a href="/admin_visitor_crud">
                Register/Manage Visitor
              </a>
            </h3>
          </div>
        </div>
      </section>
    </div>
  );
}
