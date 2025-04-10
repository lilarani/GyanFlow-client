import { useParams } from "react-router"

export default function SeeVideo() {
    let { id } = useParams();
    console.log(id)
    return (
        <div>
            See vedio {id}
        </div>
    )
}
