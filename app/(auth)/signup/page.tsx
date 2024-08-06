import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen w-full flex justify-center items-center flex-col">
        <form className="p-6 w-5/12 m-auto border border-black">
            <h1>Sign up</h1>
            <label htmlFor="username">Usernamme</label>
            <input type="text" className="p-2 px-4 b" placeholder="Enter Username" />
            <label htmlFor="Password">Password</label>
            <input type="password" placeholder="Enter Password" />
            <button type="submit">Sign in</button>
        </form>
    </div>
  );
}