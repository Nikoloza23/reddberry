import {useParams} from 'react-router-dom';
import { useState, useEffect } from 'react';
import ExamplePageComponent from './ExamplePageComponent';
import FriendLists from './FriendLists';


//Fetch User sources
const url = 'http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/';

const Example = () => {
    const params = useParams(); 
    console.log(params);

    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            const response = await fetch(`http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${params.id}`);
            const data = await response.json();
            
            const userData = {
                id: data.id,
                email: data.email,
                city: data.address.city,
                country: data.address.country,
                state: data.address.state,
                streetAddress: data.address.streetAddress,
                zip: data.address.zipCode,
                image: data.imageUrl,
                jobType: data.jobType,
                jobArea: data.jobArea,
                ip: data.ip,
                name: data.name,
                lastName: data.lastName,
                title: data.title,
                prefix: data.prefix,
                companyName: data.company.name,
                companySuffix: data.company.suffix
            };

            setData(userData);
        };

        fetchUser();
    }, [params.id])

    return  (<>
        {data ? <ExamplePageComponent { ...data} /> : null};  
        {data && <FriendLists userId={data.id}/>}
    </> )
 

} 

export default Example;


