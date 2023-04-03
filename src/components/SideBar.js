

function SideBar() {

    return <nav className="navbar-nav d-flex flex-lg-column flex-row justify-content-center justify-content-lg-start">

        <div className="d-flex flex-md-row mt-3 pe-3 ps-md-4">
            <div className="circleDiv d-flex align-items-center mt-0 mt-md-1" id="first">
                <div className="">1</div>
            </div>
            <div className="step px-3 d-none d-md-flex flex-column">
                <div className="h-50 py-0 my-0 ">
                    <p className="mt-0 p-0 stepOne">STEP 1</p>
                </div>
                <div className="h-50 d-none d-md-inline">
                    <p className="m-0 p-0 info">YOUR INFO</p>
                </div>

            </div>
        </div>
        <div className="d-flex flex-md-row mt-3 pe-3 ps-md-4">
            <div className="circleDiv d-flex align-items-center mt-md-1" id="second">
                <div className="">2</div>
            </div>
            <div className="step px-3 d-none d-md-flex flex-column">
                <div className="h-50 py-0 my-0 ">
                    <p className="mt-0 p-0 stepOne">STEP 2</p>
                </div>
                <div className="h-50 d-none d-md-inline">
                    <p className="m-0 p-0 info">SELECT PLAN</p>
                </div>

            </div>
        </div>
        <div className="d-flex flex-md-row mt-3 pe-3 ps-md-4">
            <div className="circleDiv d-flex align-items-center mt-md-1" id="third">
                <div className="">3</div>
            </div>
            <div className="step px-3 d-none d-md-flex flex-column">
                <div className="h-50 py-0 my-0 ">
                    <p className="mt-0 p-0 stepOne">STEP 3</p>
                </div>
                <div className="h-50 d-none d-md-inline">
                    <p className="m-0 p-0 info">ADD-ONS</p>
                </div>

            </div>
        </div>
        <div className="d-flex flex-row mt-3 ps-md-4">
            <div className="circleDiv d-flex align-items-center mt-md-1" id="forth">
                <div className="">4</div>
            </div>
            <div className="step px-3 d-none d-md-flex flex-column">
                <div className="h-50 py-0 my-0 ">
                    <p className="mt-0 p-0 stepOne">STEP 4</p>
                </div>
                <div className="h-50  d-none d-md-inline">
                    <p className="m-0 p-0 info">SUMMARY</p>
                </div>

            </div>
        </div>

    </nav>
}
export default SideBar;