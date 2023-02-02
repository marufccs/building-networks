import React from 'react';

const MainPageData = ({people}) => {

    const {company, name, address, username} = people;

    console.log(people);

    return (
      <tr className="hover">
        <td>{company.name}</td>
        <td>{name}</td>
        <td>{address.city}</td>
        <td>{username}</td>
        <td>Details</td>

      </tr> 
    );
};

export default MainPageData;