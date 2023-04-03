import { useState } from 'react';
function CheckboxComponent({ checkbox, children, value, name, title }) {
    const [checked, setChecked] = useState(false);
    const myClassChecked = "row my-addons rounded-2 mb-3 mx-0 px-0";
    const myClassUnChecked = "row addons rounded-2 mb-3 mx-0 px-0";
    const handleChange = () => {
        setChecked(!checked)
    }
    return <div className={checked ? myClassChecked : myClassUnChecked}  >
        <div className="col d-flex align-items-center justify-content-center">
            <input className="total" type="checkbox" value={value} id={name} name={name} onChange={handleChange} />
        </div>
        <div className="col-10 col-md-11">

            <div className="row "> <label className="form-check-label d-flex flex-row align-items-center py-2 m-0 px-0" htmlFor={name}>
                <div className="col-10 p-0 m-0">
                    <p className="p-0 m-0 fw-bold">
                        {title}
                    </p>
                    <p className="py-0 my-0 text-muted">{children}</p>
                </div>

                <div className="col-2 d-flex align-items-center justify-content-center">
                    <p className="my-auto myPrice">
                        {checkbox ? `$${value * 10}/yr` : `${value}/mo`}
                    </p>
                </div>
            </label>
            </div>

        </div>
    </div>
}
export default CheckboxComponent