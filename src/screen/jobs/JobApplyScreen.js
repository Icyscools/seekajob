import { useState, useEffect, useCallback } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import LayoutWithNavTab from '../../layouts/LayoutWithNavTab';
import { applyJob } from '../../api/application';
import { getJobById } from '../../api/jobs';

const JobApplyScreen = () => {
  const history = useHistory();
  const { id } = useParams();
  const [jobTitle, setJobTitle] = useState();
  const [application, setApplication] = useState({
    jobId: id,
  });
  const [error, setError] = useState(false);
  const [auth, setAuth] = useState();
  const authSelector = useSelector((state) => state.auth);

  useEffect(() => {
    const fetchAuthUser = async () => {
      const auth = await authSelector;
      setAuth(auth);

      if (auth?.user?.role !== 'worker') {
        history.replace(`/job/${id}`);
      }
      handleChangeValue('workerId', auth?.user?.worker?.id);

      getJobById(id).then((res) => {
        if (res.data) {
          setJobTitle(res.data.title ?? 'Untitled');
        } else {
          history.replace(`/jobs`);
        }
      });
    };
    fetchAuthUser();
  }, [authSelector]);

  const handleChangeValue = useCallback((key, value) => {
    setApplication({
      ...application,
      [key]: value,
    });
  });

  const handleAddResume = (evt) => {
    if (evt.target.files) {
      handleChangeValue('resume', evt.target.files[0]);
    }
  };

  const handleApplyJobForm = (evt) => {
    evt.preventDefault();

    if (application.resume) {
      applyJob(application)
        .then((result) => {
          const { data, status } = result;
          if (data && status === 201) {
            history.replace('/applications');
          }
        })
        .catch((err) => {
          console.error(err);
          const { data } = err.response;
          setError(data.message ?? 'Something went wrong');
        });
    } else {
      setError('Please add your resume');
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
          <h1>Apply a job</h1>
          <h3>{jobTitle}</h3>
        </Container>
      </div>
      <Form onSubmit={handleApplyJobForm}>
        <Container className="my-3 text-center">
          <Form.File
            id="resume"
            label={!!application?.resume ? `${application.resume?.name}` : 'Add resume'}
            custom
            className="my-3"
            onChange={handleAddResume}
          />
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
            Apply job
          </Button>
        </Container>
      </Form>
    </LayoutWithNavTab>
  );
};

export default JobApplyScreen;
