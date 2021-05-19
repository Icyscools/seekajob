import { useState, useEffect, useCallback } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import LayoutWithNavTab from '../../layouts/LayoutWithNavTab';
import { getApplicationById } from '../../api/application';
import { createInterview, updateInterview } from '../../api/interview';

const ApplicationAppointmentScreen = () => {
  const history = useHistory();
  const { id } = useParams();
  const [application, setApplication] = useState();
  const [interview, setInterview] = useState({
    applicationId: id,
  });
  const [isFirstInterview, setIsFirstInterview] = useState(true);
  const [error, setError] = useState(false);
  const [auth, setAuth] = useState();
  const authSelector = useSelector((state) => state.auth);

  useEffect(() => {
    const fetchAuthUser = async () => {
      const auth = await authSelector;
      setAuth(auth);

      if (auth?.user?.role !== 'company') {
        history.replace(`/application/${id}`);
      }
      // handleChangeValue('workerId', auth?.user?.worker?.id);

      getApplicationById(id).then((res) => {
        const app = res.data;
        if (app.job.company.user.id !== auth?.user?.id) {
          history.replace(`/application/${id}`);
        }

        if (app?.interview) {
          const { datetime, description, id } = app.interview;
          setIsFirstInterview(false);
          setInterview({
            ...interview,
            id,
            datetime: convertDateTimeToFormDate(datetime),
            description,
          });
        }

        setApplication(app);
      });
    };
    fetchAuthUser();
  }, [authSelector]);

  const convertDateTimeToFormDate = (dt) => {
    const datetime = new Date(dt);
    const fy = `${datetime.getFullYear()}`;
    const m = `${datetime.getMonth() + 1}`.padStart(2, '0');
    const d = `${datetime.getDate()}`.padStart(2, '0');
    const hh = `${datetime.getHours()}`.padStart(2, '0');
    const mm = `${datetime.getMinutes()}`.padStart(2, '0');
    return `${fy}-${m}-${d}T${hh}:${mm}`;
  };

  const convertFormDateToDateTime = (dt) => {
    const datetime = dt;
    const [date, time] = datetime.split('T');
    const [hours, minutes] = time.split(':');
    const appointDate = new Date(date);
    appointDate.setHours(hours);
    appointDate.setMinutes(minutes);
    return appointDate.toISOString();
  };

  const handleChangeValue = useCallback(
    (key, value) => {
      setInterview({
        ...interview,
        [key]: value,
      });
    },
    [interview],
  );

  const handlerMakeAppointment = (evt) => {
    evt.preventDefault();
    if (interview.datetime) {
      const datetime = convertFormDateToDateTime(interview.datetime);
      if (isFirstInterview) {
        createInterview({ ...interview, datetime })
          .then((result) => {
            const { data, status } = result;
            if (data && status === 201) {
              history.replace(`/application/${id}`);
            }
          })
          .catch((err) => {
            console.error(err);
            const { data } = err.response;
            setError(data.message ?? 'Something went wrong');
          });
      } else {
        updateInterview({ ...interview, datetime })
          .then((result) => {
            const { data, status } = result;
            if (data && status === 200) {
              history.replace(`/application/${id}`);
            }
          })
          .catch((err) => {
            console.error(err);
            const { data } = err.response;
            setError(data.message ?? 'Something went wrong');
          });
      }
    } else {
      setError('Please select appointment date and time');
    }
  };

  return (
    <LayoutWithNavTab>
      <div
        style={{
          backgroundImage: 'url(/aa.jpg)',
          backgroundSize: 'cover',
          width: '100%',
          height: '200px',
          resizeMode: 'stretch',
        }}
        className="py-5 pl-3"
      >
        <Container className="my-3 text-center">
          <h1>Make a appointment</h1>
          <h3>{application?.job?.title}</h3>
          <h5>{application?.worker?.user?.username}</h5>
        </Container>
      </div>
      <Form onSubmit={handlerMakeAppointment}>
        <Container className="my-3 text-left w-50">
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Appointment time</Form.Label>
            <Form.Control
              type="datetime-local"
              value={interview?.datetime}
              onChange={(evt) => handleChangeValue('datetime', evt.target.value)}
              required={isFirstInterview}
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput2">
            <Form.Label>Appointment Description</Form.Label>
            <Form.Control
              as="textarea"
              value={interview?.description}
              rows={3}
              onChange={(evt) => handleChangeValue('description', evt.target.value)}
            />
          </Form.Group>
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
            className="my-3"
          >
            Make appointment
          </Button>
        </Container>
      </Form>
    </LayoutWithNavTab>
  );
};

export default ApplicationAppointmentScreen;
