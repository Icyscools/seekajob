import { useState, useEffect } from 'react';
import { Row, Col, Container, Image, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import LayoutWithNavTab from '../../layouts/LayoutWithNavTab';
import { getApplicationById, updateApplication } from '../../api/application';

const txt1 = {
  fontSize: '2em',
};

const wrappedSquareImageStyle = {
  paddingBottom: '100%',
  overflow: 'hidden',
  position: 'relative',
};

const ApplicationDetailScreen = () => {
  const { id } = useParams();
  const [application, setApplication] = useState();
  const [auth, setAuth] = useState();
  const authSelector = useSelector((state) => state.auth);

  useEffect(() => {
    const fetchAuthUser = async () => {
      const auth = await authSelector;
      setAuth(auth);

      getApplicationById(id).then((res) => {
        setApplication(res.data);
      });
    };
    fetchAuthUser();
  }, [authSelector]);

  const renderApprovedStatus = (status) => {
    if (status === 1) {
      return 'Approved';
    } else if (status === 2) {
      return 'Reject';
    }
    return 'Waiting';
  };

  const handleChangeApprovedStatus = (status) => {
    const approved_status = status === application?.approved_status ? 0 : status;
    updateApplication({ id: id, approved_status }).then((res) => {
      setApplication({
        ...application,
        approved_status,
      });
    });
  };

  return (
    <LayoutWithNavTab>
      <Container className="my-3">
        <h2 style={txt1} className="mb-3">
          {application?.job?.title}
        </h2>
        <Row>
          <Col md={3}>
            <div style={wrappedSquareImageStyle}>
              <Image
                src={
                  !!application?.worker?.user?.profile_img
                    ? application.worker.user.profile_img
                    : '/user-placeholder.png'
                }
                className="img img-responsive w-100 h-100"
                style={{ maxWidth: 180, maxHeight: 180, position: 'absolute' }}
                roundedCircle
              />
            </div>
          </Col>
          <Col>
            <Row>
              <Col className="">Account</Col>
              <Col className="">Qualification</Col>
            </Row>
            <Row>
              <Col className="mt-2" style={{ fontSize: 14 }}>
                {application?.worker?.user?.username}
              </Col>
              <Col className="mt-2" style={{ fontSize: 14 }}>
                {application?.worker?.qualification ?? '-'}
              </Col>
            </Row>

            <Row>
              <Col className="mt-2">Email</Col>
              <Col className="mt-2">Experience</Col>
            </Row>
            <Row>
              <Col className="mt-2" style={{ fontSize: 14 }}>
                {application?.worker?.user?.email}
              </Col>
              <Col className="mt-2" style={{ fontSize: 14 }}>
                {application?.worker?.experience ?? '-'}
              </Col>
            </Row>
            <Row>
              <Col className="mt-2">Phone</Col>
              <Col className="mt-2">Resume</Col>
            </Row>
            <Row>
              <Col className="mt-2" style={{ fontSize: 14 }}>
                {application?.worker?.phone_number ?? '-'}
              </Col>
              <Col className="mt-2" style={{ fontSize: 14 }}>
                {application?.resume ? (
                  <a href={application?.resume} target="_blank">
                    Download
                  </a>
                ) : (
                  '-'
                )}
              </Col>
            </Row>
            <Row>
              <Col className="mt-2">Bio</Col>
              <Col className="mt-2"></Col>
            </Row>
            <Row>
              <Col className="mt-2" style={{ fontSize: 14 }}>
                {application?.worker?.user?.bio ?? '-'}
              </Col>
              <Col className="mt-2"></Col>
            </Row>
            <Row>
              <Col className="mt-2">
                Approved status
                <p style={{ fontSize: 14 }} className="mt-2">
                  {renderApprovedStatus(application?.approved_status ?? 0)}
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
        {auth?.user?.role === 'company' ? (
          <Row className="align-items-center">
            <Col className="d-flex flex-wrap mt-3" style={{ gap: 10 }}>
              <Button
                variant={application?.approved_status === 2 ? 'primary' : 'outlined-dark'}
                onClick={() => handleChangeApprovedStatus(2)}
              >
                Rejected
              </Button>
              <Button
                variant={application?.approved_status === 1 ? 'primary' : 'outlined-dark'}
                onClick={() => handleChangeApprovedStatus(1)}
              >
                Approved
              </Button>
              <LinkContainer to={`/application/${id}/appointment`}>
                <Button variant="outlined-dark">
                  {application?.interview ? 'Edit Appointment' : 'Make Appointment'}
                </Button>
              </LinkContainer>
            </Col>
          </Row>
        ) : (
          <></>
        )}
        <hr />
        {application?.interview ? (
          <>
            <h2 style={txt1} className="mb-3">
              Appointment
            </h2>
            <Row>
              <Col>
                <h5>Date & Time</h5>
                <p>
                  {application?.interview?.datetime
                    ? new Date(application?.interview?.datetime).toLocaleString()
                    : '-'}
                </p>
              </Col>
            </Row>
            <Row>
              <Col>
                <h5>Description</h5>
                <p>{application?.interview?.description ?? '-'}</p>
              </Col>
            </Row>
          </>
        ) : (
          <></>
        )}
      </Container>
    </LayoutWithNavTab>
  );
};

export default ApplicationDetailScreen;
