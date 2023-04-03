import { useLocation, useNavigate } from 'react-router-dom'

function FinishPage() {

    const location = useLocation();
    const navigate = useNavigate();


    const handleSubmit = () => {
        navigate('/options', { state });
        window.location.reload()
    }

    let content = ''
    let cost;

    const { online, storage, profile, state } = location.state;

    let value = 0;
    let text;
    let total = 0;

    if (state.checked) {
        value = parseInt(state.btn) * 10;
        text = `$${value * 1}/yr`
        cost = <><p>{online ? `$${online * 10}/yr` : ''}</p>
            <p>{storage ? `$${storage * 10}/yr` : ''}</p>
            <p>{profile ? `$${profile * 10}/yr` : ''}</p>
        </>
        total = value * 1 + (online ? online * 10 : 0) + (storage ? storage * 10 : 0) + (profile ? profile * 10 : 0);
    } else {
        value = parseInt(state.btn);
        text = `$${value}/mo`;
        cost = <><p>{online ? `$${online}/mo` : ''}</p>
            <p>{storage ? `$${storage}/mo` : ''}</p>
            <p>{profile ? `$${profile}/mo` : ''}</p>
        </>
        total = value + (online ? online * 1 : 0) + (storage ? storage * 1 : 0) + (profile ? profile * 1 : 0);
    }
    if (state.btn === 9) {
        content = `Arcade(${state.checked ? 'Yearly' : 'Monthly'})`
    } else if (state.btn === 12) {
        content = `Advanced(${state.checked ? 'Yearly' : 'Monthly'})`
    } else if (state.btn === 15) {
        content = `Pro(${state.checked ? 'Yearly' : 'Monthly'})`
    }


    return <div className="d-flex flex-column  w-75">
        <h1 className="pt-4">Finishing up</h1>
        <p className="text-muted">Double-check everything looks OK before confirming.</p>
        <div className="row pb-3  mx-0 ">
            <div className="rounded-2 px-3 pt-3 bg-my">

                <div className="d-flex flex-row">
                    <div>
                        <p className="fw-bold pb-0 mb-0">
                            {content}
                        </p>

                        <a href="/select">Change</a>
                    </div>
                    <p className="ms-auto fw-bold mt-auto">
                        {text}
                    </p>
                </div>
                <hr className="card-text" />

                <div className="d-flex flex-row">
                    <div> <p className="text-muted">
                        {online ? 'Online service' : ''}  </p>
                        <p className="text-muted">  {storage ? 'Larger storage' : ''}</p>
                        <p className="text-muted"> {profile ? 'Customizable profile' : ''} </p></div>
                    <div className="ms-auto">
                        {cost}</div>
                </div>
            </div>
        </div>


        <div className="d-flex flex-row  px-3 pt-3">
            <p className="text-muted">
                Total({state.checked ? 'per year' : 'per month'})
            </p>
            <p className="ms-auto fw-bold fs-5 text-primary">
                {state.checked ? `$${total}/yr` : `$${total}/mo`}
            </p>

        </div>

        <div className="row py-3 mt-auto  mx-0 px-0">
            <div className="col d-flex justify-content-start px-0">
                <button className="btn btn-light border-0" onClick={handleSubmit}>Go back</button>
            </div>
            <div className="col d-flex justify-content-end px-0">
                <a href="/thankYou" className="nextStep btn btn-primary">Confirm</a>
            </div>
        </div>

    </div>
}
export default FinishPage;