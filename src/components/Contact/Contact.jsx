import React,{useState, useEffect} from 'react'
import "./Contact.css"
const Contact = ({isadminauthenticated}) => {
    const [data, setdata] = useState([])
    const backendapi = import.meta.env.VITE_BACKEND_API;
    // const getdata=()=>{
    //     fetch(backendapi+"/profile/attendancebydateevents",{
    //         method:"GET",
    //         headers:{
    //           "Content-Type":"application/json",
    //         },
    //         credentials:"include",
    //       })
    //       .then(res=>res.json())
    //       .then(data=>{
    //         setdata(data)
    //         console.log(data)
    //         if(data.ok){
    //           // console.log(data.data,"calorie intake item deleted successfully")
    //         //   toast.success("calorie intake item deleted successfully")
    //           console.log("data",data)
    //         }
    //         else{
    //         //   toast.error("error in deleting calorie intake")
    //         console.log("error",data)
    //         }
    //       })
    //       .catch(err=>{
    //         // toast.error("error in deleting calorie intake");
    //         console.log(err);
    //     })
    // }
    // useEffect(()=>{
    //     getdata();
    //     console.log(data)
    // },[])
  return (
    <div>
        {/* vhjuhgvbhjkuhg */}
        {/* <ul>
            {
                data?.contact?.map((each)=>{
                    return (
                    <div className='mainbox'>
                        <div className="namemail">
                            name: {each.name}<br/>
                            email: {each.email}<br/>
                        </div>
                        <div className="month">
                            message: {each.message}
                        </div>
                    </div>
                    // {console.log("here",each)}
                    )
                })
            }
        </ul> */}
        {isadminauthenticated?
            // <div className="message">
            //     <div className="each">Abc Xyz@yahoo.com 3141592653 Trial contact us</div>
            //     <div className="each">Ishita Ishita@yahoo.com 1234567890 This is a message</div>
            // </div>
            <div className="thisdiv">
            <strong>People who contacted</strong>
            <ol className="ol alternating-colors">
                <li className='li'>
                    <strong>Abc</strong>
                    <div className="ps"><p className="mailid">Xyz@yahoo.com</p><p> 3141592653</p></div><p>Trial contact us</p>
                </li>
                <li className='li'>
                    <strong>Ananya</strong>
                    <div className="ps"><p className="mailid">Anan@abc.com</p><p> 1029384756</p></div><p>Attempt #2 contact</p>
                </li>
                <li className='li'>
                    <strong>Ishita</strong>
                    <div className="ps"><p className="mailid">Ishita@yahoo.com</p><p> 1234567890</p></div><p>This is a message</p>
                </li>
            </ol>
            </div>
            :<p className="notmailid">log in first</p>}
    </div>
  )
}

export default Contact