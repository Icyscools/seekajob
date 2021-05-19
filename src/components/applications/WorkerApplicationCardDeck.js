import { CardColumns, Card } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const WorkerApplicationCardDeck = ({ applications }) => {
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
            <Card.Title>{application?.job.title}</Card.Title>
            <Card.Text>{application?.job.company.company_name}</Card.Text>
            <Card.Text>
              Approved status : {renderApprovedStatus(application?.approved_status)}
            </Card.Text>
          </Card.Body>
        </Card>
      </LinkContainer>
    );
  };

  return (
    <CardColumns>
      {applications.map((application) => renderCardApplication(application))}
    </CardColumns>
  );
};

export default WorkerApplicationCardDeck;
