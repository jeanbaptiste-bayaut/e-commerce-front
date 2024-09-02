import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Login.scss';

function Login() {
  const handleSwitchLogin = () => {
    const login = document.querySelector('.login');
    const signin = document.querySelector('.signin');

    login?.classList.remove('inactive');
    signin?.classList.add('inactive');
  };

  const handleSwitchSignin = () => {
    const login = document.querySelector('.login');
    const signin = document.querySelector('.signin');

    login?.classList.add('inactive');
    signin?.classList.remove('inactive');
  };

  return (
    <>
      <section className="login">
        <Form>
          <p>
            <span className="login-signin-button-selector btn-active">
              Login
            </span>
            <span
              className="login-signin-button-selector"
              onClick={() => handleSwitchSignin()}
            >
              Signin
            </span>
          </p>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button variant="secondary" type="submit">
            Submit
          </Button>
        </Form>
      </section>
      <section className="signin inactive">
        <Form>
          <p>
            <span
              className="login-signin-button-selector"
              onClick={() => handleSwitchLogin()}
            >
              Login
            </span>
            <span className="login-signin-button-selector btn-active">
              Signin
            </span>
          </p>
          <div className="signin-container">
            <section className="signin-left">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formConfirmPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
            </section>
            <section className="signin-right">
              <Form.Group className="mb-3" controlId="formFirstname">
                <Form.Label>Firstname</Form.Label>
                <Form.Control type="text" placeholder="Firstname" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formLastname">
                <Form.Label>Lastname</Form.Label>
                <Form.Control type="text" placeholder="Lastname" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formformAddress">
                <Form.Label>Address</Form.Label>
                <Form.Control type="text" placeholder="Address" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formformPhone">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type="text" placeholder="Phone Number" />
              </Form.Group>
            </section>
          </div>
          <Button variant="secondary" type="submit">
            Submit
          </Button>
        </Form>
      </section>
    </>
  );
}

export default Login;
