import { CardColumns, Card } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const JobApplicationCardDeck = ({ jobs }) => {
  const renderApprovedStatus = (status) => {
    if (status === 1) {
      return 'Approved';
    } else if (status === 2) {
      return 'Reject';
    }
    return 'Waiting';
  };

  const renderCardApplication = (application) => {
    return (
      <LinkContainer to={`/application/${application.id}`} style={{ cursor: 'pointer' }}>
        <Card className="card" key={application?.id}>
          <Card.Body>
            <Card.Title>{application?.worker?.user?.username}</Card.Title>
            <Card.Text>{application?.worker?.user?.email}</Card.Text>
            <Card.Text>
              Approved status : {renderApprovedStatus(application?.approved_status)}
            </Card.Text>
          </Card.Body>
        </Card>
      </LinkContainer>
    );
  };

  const renderJobSection = (job) => {
    return (
      <div className="py-3">
        <h2>{job.title}</h2>
        <small>{job.applications.length} Applications for this job</small>
        <CardColumns>
          {job.applications.map((application) => renderCardApplication(application))}
        </CardColumns>
      </div>
    );
  };

  return <>{jobs.map((job) => renderJobSection(job))}</>;
};

export default JobApplicationCardDeck;
