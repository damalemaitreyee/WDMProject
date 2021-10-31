import "./residentHome.css";

export default function ResidentHome() {
  return (
    <div className="ResidentHome">
      <section className="residentheader">
        <div className="text-box">
          <h1>Hi Resident!</h1>
          <p>Scroll Down to see available options</p>
        </div>
      </section>
      <section className="service">
        <h1>Please select from the options below.</h1>
        <div className="row">
          <div className="service-col">
            <h3>
              <a className="btn btn-link" href="/resident_request_service">
                Request A Service
              </a>
            </h3>
          </div>
          <div className="service-col">
            <h3>
              <a href="/resident_service_details">
                Service Details
              </a>
            </h3>
          </div>
          <div className="service-col" id="validate">
            <h3>
              <a href="/resident_inquiry">
                Make an Inquiry
              </a>
            </h3>
          </div>
        </div>
      </section>
    </div>
  );
}
