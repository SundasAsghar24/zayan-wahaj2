import LoginBtn from "./LoginBtn"
export default function Navbar({ counter }) {
    return (
        <div>
            <nav className=" nav navbar navbar-expand-lg ">
                <div className="container-fluid">
                    <a className=" a navbar-brand" href="#">KFC</a>
                    <div>
                        <button type="button" className=" btn button2 ">DELIVERY</button>
                        <button type="button" className=" btn button3  ">PICKED</button>
                    </div>
                </div>
                <span>
                    <div className="relative cursor-pointer my-2 ">
                        <svg width="18" height="18" viewBox="0 0 14 14" fill="none" img="https://toppng.com/uploads/preview/kfc-clipart-chiken-kfc-bucket-of-fried-chicke-11563214770ygcbg1wwr5.png">
                            <path d="M.583.583h2.333l1.564 7.81a1.17 1.17 0 0 0 1.166.94h5.67a1.17 1.17 0 0 0 1.167-.94l.933-4.893H3.5m2.333 8.75a.583.583 0 1 1-1.167 0 .583.583 0 0 1 1.167 0m6.417 0a.583.583 0 1 1-1.167 0 .583.583 0 0 1 1.167 0" stroke="#615fff" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <button className="basket absolute -top-2 -right-3 text-xs text-white  w-[18px] h-[18px] rounded-full" href="#">{counter}</button>
                    </div>
                </span>
                <LoginBtn />
            </nav>
        </div>
    )
}
