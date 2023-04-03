

import { useLocation, useNavigate } from 'react-router-dom'

import CheckboxComponent from '../CheckboxComponent';
function AddonsPage() {

    const navigate = useNavigate();
    const { state } = useLocation();


    const handleSubmit = (event) => {
        event.preventDefault();

        navigate('/finish', {
            state: {
                state,
                online: event.target.online.checked ? event.target.online.value : '',
                storage: event.target.storage.checked ? event.target.storage.value : '',
                profile: event.target.profile.checked ? event.target.profile.value : ''
            }
        })
        window.location.reload()
    }


    return <form onSubmit={handleSubmit} className="d-flex flex-column" action="/finish" >

        <h1>Pick add-ons </h1>
        <p className="text-muted pb-4">Add-ons help enhance your gaming experience.</p>

        <CheckboxComponent checkbox={state.checked} value={1} name="online" title="Online service">Access to multiplayer games</CheckboxComponent>

        <CheckboxComponent checkbox={state.checked} value={2} name="storage" title="Larger storage">Extra 1TB of cloud save</CheckboxComponent>
        <CheckboxComponent checkbox={state.checked} value={2} name="profile" title="Customizable profile">Custom theme on your profile</CheckboxComponent>



        <div className="row mt-auto mx-0 px-0">
            <div className="col d-flex justify-content-start px-0">
                <a href="/select" className="btn btn-light border-0">Go back</a>
            </div>
            <div className="col d-flex justify-content-end px-0">
                <button className="nextStep btn btn-primary px-4 py-2" type="submit">Next Step</button>
            </div>
        </div>


    </form>
}
export default AddonsPage;