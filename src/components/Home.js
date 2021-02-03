import UploadFiles from "./UploadFiles";
const Home = () => {

  return (
    <div>
      <UploadFiles />
      <div>
      <form><script src="https://checkout.razorpay.com/v1/payment-button.js" data-payment_button_id="pl_GWZthbz4doFptZ" async> </script> </form>
      <div className="uplod-files">
      <a href="/" className="btn btn-primary my-2">
        Logout
      </a>
      </div>
      </div>
      <br/><br/><br/>
    </div>
  );
};

export default Home;
