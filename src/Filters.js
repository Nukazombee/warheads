import React, { useState } from 'react';
import Cards_block from './Cards_block';
import FilterButton from './FilterButton';
import Header from './Header.js'

function Filters (props) {
  const [filterClan, setFilterClan] = useState(null);

  function handleFilterButtonClick(clan) {
    if (clan === filterClan) {
      setFilterClan(null);
    } else {
      setFilterClan(clan);
    }
  }

  const filteredCards = filterClan ? props.cards.filter(card => card.clan === filterClan) : props.cards;

  const scavengersImage = filterClan === 'Scavengers' ? '../images/scavs2.png' : '../images/scavs.png';
  const mercsImage = filterClan === 'Mercs' ? '../images/mercs2.png' : '../images/mercs.png';
  const brainiacsImage = filterClan === 'Brainiacs' ? '../images/brainiacs2.png' : '../images/brainiacs.png';
  const eatersImage = filterClan === 'Eaters' ? '../images/eaters2.png' : '../images/eaters.png';

  return (
    <div>
      <div className='headerdiv'>
      <Header />
      </div>
    <div className="filters">
      <div className="clans">
        <FilterButton className="filterButton" image={scavengersImage}  clicked={() => handleFilterButtonClick('Scavengers')} />
        <FilterButton className="filterButton" image={mercsImage} clicked={() => handleFilterButtonClick('Mercs')} />
        <FilterButton className="filterButton" image={brainiacsImage} clicked={() => handleFilterButtonClick('Brainiacs')} />
        <FilterButton className="filterButton" image={eatersImage} clicked={() => handleFilterButtonClick('Eaters')} />
        </div>
      
      
      
    </div>
      <div>
        <Cards_block cards={filteredCards} />
      </div>
    </div>
  );
}
export default Filters
