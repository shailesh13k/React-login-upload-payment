import axios from "axios";
import UploadFiles from "./UploadFiles";
const Home = () => {
  const paymentHandler = async (e) => {
    const API_URL = "http://localhost:8080/";
    e.preventDefault();
    const orderUrl = `${API_URL}order`;
    const response = await axios.get(orderUrl);
    const { data } = response;
    const options = {
      key: "rzp_test_yCo3fI0ejcuEAC",
      name: "Uway Software Solutions",
      description: "Buy new products",
      amount: "50000",
      order_id: data.id,
      handler: async (response) => {
        try {
          const paymentId = response.razorpay_payment_id;
          const url = `${API_URL}capture/${paymentId}`;
          const captureResponse = await axios.post(url, {});
          console.log(captureResponse.data);
        } catch (err) {
          console.log(err);
        }
      },
      theme: {
        color: "#686CFD",
      },
    };
    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  return (
    <main id="main">
      <section id="breadcrumbs" className="breadcrumbs">
        <div className="container">
          <ol>
            <li>
              <a href="/">Home</a>
            </li>
            <li>Upload</li>
          </ol>
        </div>
      </section>
      <section className="inner-page">
        <div className="container">
          <div className="form-login">
            <h1 className="fw-light">Upload Files</h1>
            <UploadFiles />
            <div>
              <button className="btn btn-primary my-2" onClick={paymentHandler}>
                Pay Now
              </button>
              <div className="uplod-files">
                <a href="/" className="btn btn-primary my-2">
                  Logout
                </a>
              </div>
            </div>
            <br />
            <br />
            <br />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
