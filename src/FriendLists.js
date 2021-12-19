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
            const target = entries[0];
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
        const observer = new IntersectionObserver(handleObserver, option);
        if (loader.current) observer.observe(loader.current);
    }, [handleObserver]);

    useEffect(()=>{
        try{
            setLoading(true)
            axios
            .get(`http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${userId}/friends/${pageNumber}/20`)
            .then((response) => {
                setListData((prev)=>[...prev, ...response.data.list])
                setLoading(false)
            })
        } catch {
            setError(true)
        }
    }, [userId, pageNumber]) 
 

    return (
        <div className="friends">
           <h1 className="friends_title">Friends:</h1>
            <Content>
                {listData && listData.map((item)=>{
                    return  <ListItem key={item.id + Math.random()} data={item} />
                })}
                {loading && <p>Loading...</p>}
                {error && <p>Error!</p>}
                {<div ref={loader} />}
            </Content> 
        </div>
    )
}

export default FriendLists;
