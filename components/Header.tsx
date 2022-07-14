import Link from "next/link"

export default function Header() {
    

    return (
        <>
           <div className="navbar bg-black text-primary-content">
                <div className="flex-1">
                    <Link href="/users" className="btn btn-ghost normal-case text-xl">Robos</Link>
                </div>
                <div className="flex-none gap-2">
                    <div className="form-control">
                    <input type="text" placeholder="Search" className="input input-bordered text-black" />
                    </div>
                    <div className="dropdown dropdown-end">
                    <label tab-index="0" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                        <img src="https://api.lorem.space/image/face?hash=33791" />
                        </div>
                    </label>
                    <ul tab-index="0" className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                        <li>
                        <a className="justify-between">
                            Profile
                            <span className="badge">New</span>
                        </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
