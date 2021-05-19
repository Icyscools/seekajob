import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import CardsTabCorousel from '../components/CardsTabCorousel';
import LayoutWithNavTab from '../layouts/LayoutWithNavTab';
import { getJobs } from '../api/jobs';

const texth1 = {
  fontSize: 64,
  color: 'white',
};
const texth2 = {
  fontSize: 64,
};
const span = {
  fontSize: '80px',
  textAlign: 'center',
  padding: 20,
  margin: 'auto',
};

const HomeScreen = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    getJobs().then((res) => {
      setJobs(res.data);
    });
  }, []);

  return (
    <LayoutWithNavTab>
      <div
        style={{
          backgroundImage: 'url(/w3.jpg)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          width: '100%',
          height: '250px',
        }}
      >
        <div style={span}>
          <span style={texth1}>Seeka</span>
          <span style={texth2}>job</span>
        </div>
      </div>
      <Container className="my-3">
        <CardsTabCorousel
          title={'Jobs'}
          items={jobs?.map((job) => {
            return {
              id: job.id,
              title: job.title,
              description: job?.company?.company_name ?? '',
              endline: `${job.salary} THB`,
              goto: `/job/${job.id}`,
            };
          })}
        />
      </Container>
    </LayoutWithNavTab>
  );
};
export default HomeScreen;
