import React, { useEffect, useState } from 'react';
import MainPageData from './MainPageData';

const MainPage = () => {

    const [data, setData] = useState([]);

  useEffect(() => {
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
  .then(data => setData(data))
  },[])

    return (
        <div>
            <h1 className='text-4xl mt-6'>Welcome to the Connection Builder App</h1>
            <h2 className="text-2xl mt-3">Let's build your first connection!</h2>
            <div className="overflow-x-auto mt-6 lg:mx-40">
  <table className="table w-full">
    <thead>
      <tr>
        <th>Company Name</th>
        <th>Name</th>
        <th>City</th>
        <th>Username</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
    {
                data.map(people => <MainPageData key={people.id} people={people}></MainPageData>)
            }
    </tbody>
  </table>
</div>
        
        </div>
    );
};

export default MainPage;