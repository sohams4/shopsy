import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Footer, Header, OrdersTable, PageTitle } from '../components';

// Example static data
const staticCustomer = {
  _id: '123',
  fullName: 'soham-shendre',
  email: '@example.com',
  phone: '123-456-7890',
  address: {
    street: '1234 Elm St',
    city: 'nagpur',
    state: 'State',
    pincode: '12345',
    country: 'Country'
  },
  profilePicture: 'https://via.placeholder.com/150'
};

const staticOrders = [
  { id: 1, product: 'Product 1', quantity: 2, date: '2023-04-01' },
  { id: 2, product: 'Product 2', quantity: 1, date: '2023-04-02' }
];

const Profile = ({ user, isAuthenticated }) => {
  const navigate = useNavigate();
  const [customer, setCustomer] = useState({});
  const [myOrders, setMyOrders] = useState([]);

  useEffect(() => {
    // Check if user is authenticated
    if (isAuthenticated) {
      // Simulating fetching data by setting static data
      setCustomer(staticCustomer);
      setMyOrders(staticOrders);
    } else {
      // Redirect to login if not authenticated
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);

  return (
    <>
      <Header />
      <PageTitle title={'Profile'} />
      <section className='container-fluid mt-3 p-0'>
        <div className="d-flex flex-wrap gap-3 my-3">
          <div className="card">
            <div className="card-body p-4">
              <img className='profile-picture rounded-circle object-fit-cover'
                src={customer.profilePicture}
                alt="Profile Picture" />
            </div>
          </div>

          <div className="card flex-grow-1">
            <div className="p-5">
              <h3 className="card-headin font-color fs-1">
                {customer.fullName}
              </h3>
              <p className="card-text bag fs-6">
                <span className="bag">Email: </span> {customer.email} <br />
                <span className="bag">Phone: </span> {customer.phone} <br />
                <span className="bag">Address: </span>
                  {customer.address.street} {customer.address.city} {customer.address.state} {customer.address.pincode} {customer.address.country}
              </p>
            </div>
          </div>
        </div>
        <div className="row g-3">
          <div className="col-sm-12">
            <OrdersTable orders={myOrders} />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Profile;
