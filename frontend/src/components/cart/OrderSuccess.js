export default function OrderSuccess(){
    return(
        <div className="row justify-content-center">
        <div className="col-6 mt-5 text-center">
            <img className="my-5 img-fluid d-block mx-auto" src="/images/products/success.gif" alt="Order Success" width="320" height="320" />

            <h2>Your Order has been placed successfully.</h2>

            <a href="/orders">Go to Orders</a>
        </div>

    </div>
    )
}