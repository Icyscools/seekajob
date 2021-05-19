import { LinkContainer } from 'react-router-bootstrap';

const cardStyle = {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  border: '4px solid #F4F4F4',
  borderRadius: '20px',
  backgroundColor: '#FEFEFE',
  padding: 24,
};

const JobCard = ({ job }) => {
  return (
    <LinkContainer
      to={`/job/${job.id}`}
      style={{ cursor: 'pointer', ...cardStyle }}
      className="my-3"
    >
      <div style={cardStyle}>
        <h4>{job?.title ?? '-'}</h4>
        <h5>Salary: {job?.salary ?? '-'} THB</h5>
        {/* <p style={{ textAlign: 'right', position: 'absolute', top: '30px', right: '30px' }}>
          Approved Status: Waiting
        </p> */}
        <p style={{ textAlign: 'right' }}>{job?.company?.company_name}</p>
      </div>
    </LinkContainer>
  );
};

export default JobCard;
