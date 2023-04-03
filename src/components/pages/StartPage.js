
import { useEffect } from "react";
import { Validation } from "../../validation";
function StartPage() {
    useEffect(() => {
        Validation();
    })

    return <form action="/select" className="needs-validation d-flex flex-column " noValidate >
        <div className="row">

            <h1 className="pt-3">Personal info</h1>
            <p className="text-muted">Please provide your name, email address, and phone number</p>
            <div className="mb-3">
                <label className="form-label" htmlFor="username">Name</label>

                <input className="form-control order-2" type="text" id="username" name="username" required autoFocus />
                <div className="valid-feedback" >
                    Looks good!
                </div>
                <div className="invalid-feedback order-1">
                    This field is required
                </div>
            </div>
            <div className="mb-3">
                <label className="form-label" htmlFor="email">Email Address</label>

                <input className="form-control" type="email" id="email" name="email" required
                    placeholder="e.g.stephenking@lorem.com" />
                <div className="valid-feedback">
                    Looks good!
                </div>
                <div className="invalid-feedback">
                    This field is required
                </div>
            </div>
            <div className="mb-3">
                <div className="d-flex flex-row myFeedBack"> <label className="form-label" htmlFor="phone">Phone
                    number</label>

                </div>

                <input className="form-control" type="text" id="phone" name="phone" required
                    placeholder="e.g.+1 234 567 890" />
                <div className="invalid-feedback">
                    This field is required
                </div>
                <div className="valid-feedback" type="valid">
                    Looks good!
                </div>


            </div>

        </div>

        <div className="row mt-auto">
            <div className="col d-flex justify-content-end">
                <button className="nextStep btn btn-primary px-4 py-2" type="submit">Next Step</button>
            </div>
        </div>

    </form>

}
export default StartPage;