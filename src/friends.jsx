import { use } from "react"

export default function Friends ({friednsPromise}) {

    const friends = use(friednsPromise)

    console.log(friends);
    

    return(
        <div className="card">
            <h3>Friends: {friends.length}</h3>
            {
                friends.map()
            }
        </div>
    )
}