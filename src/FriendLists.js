import { useState, useEffect, useRef, useCallback } from "react";

import axios from 'axios'
import { Content } from './App.styles';
import ListItem from './ListItem'
//User Friends

function FriendLists({userId}) {
    const loader = useRef(null);

    const [listData, setListData]=useState([])
    const [pageNumber, setPageNumber]=useState(1)
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    
    const handleObserver = useCallback(
        (entries) => {
            // IntersectionObserverდან იღებს arrays რომლის პირველ წევრს აქვს isIntersecting რომელიც იღებს boolean მნიშვნელობას
            const target = entries[0];
            // თუ ის კომპონენტი(div) გადაიკვეთება მაშინ განაახლებს გვერდის stateს
            if (target.isIntersecting) {
                setPageNumber((prev) => prev + 1);
            }
        },
        [setPageNumber]
    );

    useEffect(() => {
        const option = {
            root: null,
            rootMargin: "20px",
            threshold: 1,
        };
        // თუ არსებობს კომპონენტი რეფერენსით "loader" მაშინ აკვირდება მაგ კომპონენტს და უშვებს "handleObserver".
        const observer = new IntersectionObserver(handleObserver, option);
        if (loader.current) observer.observe(loader.current);
    }, [handleObserver]);

    useEffect(()=>{
        try{
            // თუ არ დაფიქსირდა შეცდომა ქვევით სინტაქს გააკეთებს
            // თავიდან სანამ მონაცემები ჩაიტვირთება ლოადინგს რთავს.
            setLoading(true)
            // axiosით მონაცემებს რომ წამოიღებს მერე ტვირთავს listDataზე და თიშავს loadingს.
            axios
            .get(`http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${userId}/friends/${pageNumber}/20`)
            .then((response) => {
                setListData((prev)=>[...prev, ...response.data.list])
                setLoading(false)
            })
        } catch {
            // თუ tryში რამე შეცდომა დაფიქსირდება გააკეთებს ქვევით {}ში რაც არის
            setError(true)
            setLoading(false)
        }
    }, [userId, pageNumber]) 

    return (
        <div className="friends">
           <h1 className="friends_title">Friends:</h1>
            <Content>
                {/* rest API დან წამოღებულ ინფორმაციას უკეთებს ლუპს */}
                {listData && listData.map((item)=>{
                    return  <ListItem key={item.id + Math.random()} data={item} />
                })}
                {/* თუ loading იქნება true ანუ იარსებებს მაშინ დახატავს "P"ს */}
                {loading && <p>Loading...</p>}
                {/* თუ error იქნება true ანუ იარსებებს მაშინ დახატავს "P"ს */}
                {error && <p>Error!</p>}
                {/* თუ ამ divმდე დაისქროლება მაშინ ჩაიტვირთება ახალი ახალი userების  */}
                {<div ref={loader} />}
            </Content> 
        </div>
    )
}

export default FriendLists;
