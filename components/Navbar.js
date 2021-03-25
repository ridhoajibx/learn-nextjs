import Link from 'next/link';

function Navbar() {
    return (
        <div className="bg-blue-600">
            <div className="container">
                <div className="flex items-center justify-between">
                    <div>
                        <Link href="/">
                            <a className="text-blue-200 hover:text-white uppercase" >
                                {process.env.appName}
                            </a>
                        </Link>
                    </div>
                    <div className="flex items-center">
                        <Link href="/posts">
                            <a className="text-blue-200 hover:text-white py-5 px-2">
                                Posts
                            </a>
                        </Link>

                        <Link href="/about">
                            <a className="text-blue-200 hover:text-white py-5 px-2">
                                About
                            </a>
                        </Link>

                        <Link href="/login">
                            <a className="text-blue-200 hover:text-white py-5 px-2">
                                Login
                            </a>
                        </Link>

                        <Link href="/register">
                            <a className="text-blue-200 hover:text-white py-5 px-2">
                                Register
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
