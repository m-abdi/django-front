import { connectToDatabase } from "../../lib/mongodb";

export default function activateUser(props: any) {
  return (
    <div>activated</div>
  )
}


export async function getServerSideProps(context: any) {
  const params = context.query
  const { db } = await connectToDatabase();
  const usersCollection = db.collection("users");
  await usersCollection.updateOne({_id: params.id}, {$set: {status: "active"}})
  return {
    props:  {
      userId: params.id
    }
  }
  
}
