import { useSelector } from "react-redux"
import Banner from "../../components/banner/Banner";


export default function Home() {

  // when we can use information from store , we need useSelector , 
  // which contain a function 

  let {user} = useSelector((state)=>state.authUser);
  console.log(user)
  return (
    <div>
     <Banner/>
    </div>
  )
}

