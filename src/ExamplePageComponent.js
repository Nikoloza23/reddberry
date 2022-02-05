import React from 'react'

//aq momaq mati source rasac vazlev style da valamzeb
function ExamplePageComponent({id, companySuffix, companyName, prefix, title, lastName, name, email, city, country, state, streetAddress, zip, image, jobType, jobArea, ip}) {

    console.log("image",image)

    return (
        <div className="main_cont">
            <div className="cont">
                <img className="src" src={`${image}?q=${id}`} alt="user" />
                <div className="info_cont">
                    <div className="info_title">Info</div>
                     <div><b>{prefix} {name} {lastName}</b></div> 
                    <div><em>{title}</em></div>
                    <br></br>
                    <div><u>Email:</u> {email}</div>
                    <div><u>Ip Address:</u> {ip}</div>
                    <div><u>Ip Address:</u> {ip}</div>
                    <div><u>Job Area:</u> {jobArea}</div>
                    <div><u>Job Type:</u> {jobType}</div>
                </div>
                <div className="address_cont">
                    <div className="address_title">Address</div>
                    <div><b>{companyName} {companySuffix}</b></div>
                    <div><u>City:</u> {city}</div>
                    <div><u>Country:</u> {country}</div>
                    <div><u>State:</u> {state}</div>
                    <div><u>State Address:</u> {streetAddress}</div>
                    <div><u>ZIP:</u> {zip}</div>
                </div>
            </div>
         
        </div>
    )
}

export default ExamplePageComponent
