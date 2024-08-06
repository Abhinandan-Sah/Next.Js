import Image from "next/image";
import axios from "axios";

async function getUserDetails() {
  await new Promise((r)=>setTimeout(r,5000));
  const response = await axios.get("http://localhost:3000/api/user")
  return response.data;
}

// async component
export default async function Home() {
  const userDetails = await getUserDetails();
  return (
    <div className="flex justify-center">
      <div className="border p-8 rounded">
      <div>
        Name: {userDetails?.name}
      </div>
      Email: {userDetails?.email}
      </div>
    </div>
  );
}
