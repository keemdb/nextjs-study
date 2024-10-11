import { connectDB } from "@/util/database";

export default async function List() {

	const db = (await connectDB).db('forum');
	let result = await db.collection('post').find().toArray();

	let list = result.map((item, idx)=>{
		return (
			<div className="list-item" key={idx}>
				<h4>{item.title}</h4>
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
  