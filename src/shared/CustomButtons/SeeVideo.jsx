import { useParams } from 'react-router';

export default function SeeVideo() {
  let { id } = useParams();

  return <div>See vedio {id}</div>;
}
