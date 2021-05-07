import React from 'react';

import { EmployeeList } from './employee/List';
import { Heading } from './Heading';

export const Home = () => {
  return (
    <React.Fragment>
      <div className="container mx-auto">
        <h3 className="text-center text-3xl mt-5 text-base leading-8 text-black font-bold tracking-wide uppercase">
          Employees
        </h3>
        <Heading />
        <EmployeeList />
      </div>
    </React.Fragment>
  );
};
