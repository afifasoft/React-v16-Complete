import React from 'react';


const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter';
  } else {
    return lat > 0 ? 'winter' : 'summer';
  }
}

const SeasonDisplay = (props) => {
  console.log('inside SeasonDisplay');
  console.log(props.lat);
  const season = getSeason(props.lat, new Date().getMonth());
  console.log(season);
  const text = season === 'winter' ? 'Burr, it is chilly' : 'Lets hit the beach!';
  const icon = season === 'winter' ? 'snowflake' : 'sun';
  return (
    <div>
      <i className={`${icon} icon`} />
      <h1>{text}</h1>
      <i className={`${icon} icon`} />
    </div>
  );
};

export default SeasonDisplay;
