import "./residentHome.css";

export default function ResidentRequestService() {
    return (
<div class="inquiry">
    <span className="inquiryTitle">Request A Service</span>
                   <form class="inquiryform">
                   <label class="inquirylabel" for="">Apartment #</label>
                    <input class="inquiryTextArea" type="text" id= "apartment-number" required/>
                    
                    <label class="inquirylabel" for="">Full Name</label>
                    <input class="inquiryTextArea" type="text" id= "name" required/>
                    
                    <label class="inquirylabel" for="">Service Needed</label>
                    <input class="inquiryTextArea" type="text" id= "service-req" required/>
                   
                    <label class="inquirylabel" for="">Choose a Date</label>
                    <input class="inquiryTextArea" type="date" id= "date" required/>
                
                    <label class="inquirylabel" for="message">Any Incident You Want To Report?</label>
                    <textarea class="inquiryTextArea" id="message" rows="8"></textarea>
                    
                <button class="inquirybutton" type="submit" onclick="requestSubmitted()">SUBMIT</button>
            </form>
            
    </div>
);
}