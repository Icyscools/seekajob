import { LinkContainer } from 'react-router-bootstrap';

const container = {
  width: '90%',
  border: '4px solid #F7F7F7',
  borderRadius: '20px',
  backgroundColor: '#FCFCFC',
  padding: '30px',
};

const JobCard = ({ job }) => {
  return (
    <LinkContainer to={`/job/${job.id}`} style={{ cursor: 'pointer' }}>
      <div style={container}>
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
