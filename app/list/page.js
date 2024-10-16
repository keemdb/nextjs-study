import { ObjectId } from "mongodb";
import { connectDB } from "@/util/database";
import Link from "next/link";

export default async function List(props) {

	const db = (await connectDB).db('forum');
	let result = await db.collection('post').find().toArray();

	let list = result.map((item, idx)=>{
		return (
			<div className="list-item" key={idx}>
				<h4><Link href={`detail/${item._id}`}>{item.title}</Link></h4>
				<p>{item.content}</p>
			</div>
		)
	})

	return (
	  <div className="list-bg">
		{list}
	  </div>
	)
  } 
  