import './Feed.css';
import {Avatar} from "@material-tailwind/react";
import avatar from "../assets/63457.png";
function Feed() {
  return (
    <div className="flex flex-col items-center">
        <div className="flex flex-col py-4 w-full bg-white rounded-3xl shadow-lg">
            <div className="flex items-center border-b-2 border-gray-500 pb-4 pl-4 w-full">
                <Avatar 
                size="sm"
                variant="circular"
                src={avatar}
                alt="avatar">
                </Avatar>
                <form className="w-full">
                    <div className="flex justify-between items-center">
                        <div className="w-full ml-4">
                            <input 
                            type="text"
                            name="text"
                            className="outline-none w-full bg-white rounded-md">

                            </input>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
  );
}

export default Feed;