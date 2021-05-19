import { useState, useEffect } from 'react';
import { Row, Col, Container, Image, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { getCurrentUser, getUserByUsername } from '../../api/user';
import LayoutWithNavTab from '../../layouts/LayoutWithNavTab';

const txt1 = {
  fontSize: '2em',
};

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const ViewProfileScreen = () => {
  const query = useQuery();
  const username = query.get('username');
  const [user, setUser] = useState();
  const [notFound, setNotFound] = useState(false);
  const [auth, setAuth] = useState();
  const authSelector = useSelector((state) => state.auth);

  useEffect(() => {
    const fetchAuthUser = async () => {
      const auth = await authSelector;
      setAuth(auth);

      if (username && username !== auth?.user?.username) {
        // do fetch user here
        getUserByUsername(username).then((res) => {
          console.log(res.data);
          if (res.data) {
            setUser(res.data);
          } else {
            setNotFound(true);
          }
        });
      } else {
        getCurrentUser().then((res) => {
          setUser(res.data);
        });
      }
    };
    fetchAuthUser();
  }, [authSelector]);

  const renderOccupationInformation = () => {
    if (user?.role === 'worker') {
      return (
        <Col>
          <Row>
            <Col className="">
              <h5>Qualification</h5>
              <p className="mt-2" style={{ fontSize: 14 }}>
                {user?.worker?.qualification ?? '-'}
              </p>
            </Col>
          </Row>
          <Row>
            <Col className="mt-2">
              <h5>Experience</h5>
              <p className="mt-2" style={{ fontSize: 14 }}>
                {user?.worker?.experience ?? '-'}
              </p>
            </Col>
          </Row>
          <Row>
            <Col className="mt-2">
              <h5>Phone</h5>
              <p className="mt-2" style={{ fontSize: 14 }}>
                {user?.worker?.phone_number ?? '-'}
              </p>
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
              <p className="mt-2" style={{ fontSize: 14 }}>
                {user?.company?.company_name ?? '-'}
              </p>
            </Col>
          </Row>
          <Row>
            <Col className="mt-2">
              <h5>Company description</h5>
              <p className="mt-2" style={{ fontSize: 14 }}>
                {user?.company?.company_description ?? '-'}
              </p>
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
        {notFound ? (
          <h2>Not found username : {`${username}`}</h2>
        ) : (
          <>
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h2 style={txt1}>
                {username && username !== auth?.user?.username ? username : 'My account'}
              </h2>
              {!username || username === auth?.user?.username ? (
                <LinkContainer to={`/profile/edit`}>
                  <Button variant="outline-dark">Edit my profile</Button>
                </LinkContainer>
              ) : (
                <></>
              )}
            </div>
            <Row>
              <Col md={3}>
                <Image
                  src={!!user?.profile_img ? user.profile_img : '/user-placeholder.png'}
                  className="w-100 h-auto mb-4"
                  style={{ maxWidth: 180, maxHeight: 180 }}
                  roundedCircle
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
                    <p className="mt-2" style={{ fontSize: 14 }}>
                      {user?.bio}
                    </p>
                  </Col>
                </Row>
              </Col>
              {renderOccupationInformation()}
            </Row>
          </>
        )}
        <hr />
      </Container>
    </LayoutWithNavTab>
  );
};

export default ViewProfileScreen;
