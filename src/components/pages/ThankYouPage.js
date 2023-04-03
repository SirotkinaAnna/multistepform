import imgMy from '../../assets/images/icon-thank-you.svg'
function ThankYouPage() {
    return <div class="card my-5 w-75">
        <img src={imgMy} class="img-fluid mx-auto" style={{ width: "80px" }} alt="" />

        <div class="card-body">
            <h1 class="card-title text-center">Thank you</h1>

            <p class="card-text text-center text-muted">Thanks for confirming your subscription! We hope you have fun
                using our
                platform. If
                you
                ever need support, please feel free to email us at support@loremgaming.com.</p>
        </div>
    </div>
}
export default ThankYouPage;