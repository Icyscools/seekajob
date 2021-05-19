import { useState, useEffect, useCallback } from 'react';
import { Row, Col, Container, Image, Button, Form } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getCurrentUser, updateCurrentProfile } from '../../api/user';
import LayoutWithNavTab from '../../layouts/LayoutWithNavTab';

const txt1 = {
  fontSize: '2em',
};

const wrappedSquareImageStyle = {
  paddingBottom: 'min(100%, 180px)',
  overflow: 'hidden',
  position: 'relative',
};

const EditProfileScreen = () => {
  const history = useHistory();
  const [user, setUser] = useState();
  const [changeImage, setChangeImage] = useState();
  const [auth, setAuth] = useState();
  const [error, setError] = useState(false);
  const authSelector = useSelector((state) => state.auth);

  useEffect(() => {
    const fetchAuthUser = async () => {
      const auth = await authSelector;
      setAuth(auth);

      getCurrentUser().then((res) => {
        setUser(res.data);
      });
    };
    fetchAuthUser();
  }, [authSelector]);

  const handleChangeValue = useCallback(
    (key, value) => {
      setUser({
        ...user,
        [key]: value,
      });
    },
    [user],
  );

  const handleChangeProfileImage = (evt) => {
    const file = evt.target.files[0];
    const imgURL = URL.createObjectURL(file);
    setChangeImage(imgURL);
    handleChangeValue('profile_img', file);
  };

  const handleUpdateProfile = (evt) => {
    evt.preventDefault();
    const { bio, role, worker, company, profile_img } = user;
    if (role === 'worker') {
      const { qualification, experience, phone_number } = worker;
      updateCurrentProfile({
        bio,
        role,
        profile_img,
        qualification,
        experience,
        phone_number,
      })
        .then((res) => {
          const { data, status } = res;
          if (data && status === 200) {
            history.replace('/profile');
          }
        })
        .catch((err) => {
          console.error(err);
          const { data } = err.response;
          setError(data.message ?? 'Something went wrong');
        });
    } else if (role === 'company') {
      const { company_name, company_description } = company;
      updateCurrentProfile({ bio, role, profile_img, company_name, company_description })
        .then((res) => {
          const { data, status } = res;
          if (data && status === 200) {
            history.replace('/profile');
          }
        })
        .catch((err) => {
          console.error(err);
          const { data } = err.response;
          setError(data.message ?? 'Something went wrong');
        });
    }
  };

  const renderOccupationInformation = () => {
    if (user?.role === 'worker') {
      return (
        <Col>
          <Row>
            <Col className="">
              <h5>Qualification</h5>
              <Form.Group>
                <Form.Control
                  as="textarea"
                  rows={2}
                  placeholder="qualification"
                  name="qualification"
                  className="mt-2"
                  value={user.worker.qualification}
                  style={{ fontSize: 14 }}
                  onChange={(evt) => handleChangeValue('qualification', evt.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col className="mt-2">
              <h5>Experience</h5>
              <Form.Group>
                <Form.Control
                  as="textarea"
                  rows={2}
                  placeholder="Experience"
                  name="experience"
                  className="mt-2"
                  value={user.worker.experience}
                  style={{ fontSize: 14 }}
                  onChange={(evt) => handleChangeValue('experience', evt.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col className="mt-2">
              <h5>Phone</h5>
              <Form.Group>
                <Form.Control
                  as="textarea"
                  rows={2}
                  placeholder="Phone number"
                  name="phone_number"
                  className="mt-2"
                  value={user.worker.phone_number}
                  style={{ fontSize: 14 }}
                  onChange={(evt) => handleChangeValue('phone_number', evt.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>
        </Col>
      );
    } else if (user?.role === 'company') {
      return (
        <Col>
          <Row>
            <Col className="">
              <h5>Company name</h5>
              <Form.Group>
                <Form.Control
                  type="text"
                  placeholder="Company name"
                  name="company_name"
                  className="mt-2"
                  value={user.company.company_name}
                  style={{ fontSize: 14 }}
                  onChange={(evt) => handleChangeValue('company_name', evt.target.value)}
                  required
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col className="mt-2">
              <h5>Company description</h5>
              <Form.Group>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Company description"
                  name="company_description"
                  className="mt-2"
                  style={{ fontSize: 14 }}
                  onChange={(evt) => handleChangeValue('company_description', evt.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>
        </Col>
      );
    }

    return <></>;
  };

  return (
    <LayoutWithNavTab>
      <Container className="my-3">
        <Form onSubmit={handleUpdateProfile}>
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2 style={txt1}>Edit my account</h2>
          </div>
          <Row>
            <Col md={3}>
              <div style={wrappedSquareImageStyle}>
                <Image
                  src={
                    changeImage
                      ? changeImage
                      : !!user?.profile_img
                      ? user.profile_img
                      : '/user-placeholder.png'
                  }
                  className="img img-responsive w-100 h-100"
                  style={{ maxWidth: 180, maxHeight: 180, position: 'absolute' }}
                  roundedCircle
                />
              </div>
              <Form.File
                id="profile_img"
                accept="image/gif, image/jpeg, image/png"
                className="my-3"
                onChange={handleChangeProfileImage}
              />
            </Col>
            <Col>
              <Row>
                <Col className="">
                  <h5>Account</h5>
                  <p className="mt-2" style={{ fontSize: 14 }}>
                    {user?.username}
                  </p>
                </Col>
              </Row>
              <Row>
                <Col className="mt-2">
                  <h5>Email</h5>
                  <p className="mt-2" style={{ fontSize: 14 }}>
                    {user?.email}
                  </p>
                </Col>
              </Row>
              <Row>
                <Col className="mt-2">
                  <h5>Bio</h5>
                  <Form.Group>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      placeholder="Bio"
                      name="bio"
                      value={user?.bio}
                      className="mt-2"
                      style={{ fontSize: 14 }}
                      onChange={(evt) => handleChangeValue('bio', evt.target.value)}
                    />
                  </Form.Group>
                </Col>
              </Row>
            </Col>
            {renderOccupationInformation()}
            <hr />
          </Row>
          {error ? (
            <p>
              <small className="text-danger">{error}</small>
            </p>
          ) : (
            ''
          )}
          <Button
            variant={error ? 'outline-danger' : 'outline-primary'}
            type="submit"
            className="mt-3"
          >
            Update profile
          </Button>
        </Form>
      </Container>
    </LayoutWithNavTab>
  );
};

export default EditProfileScreen;
