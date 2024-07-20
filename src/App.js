import React, { useState } from 'react';
import HeroSection from './components/HeroSection';
import ReferralFormModal from './components/ReferralFormModal';

const App = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <HeroSection handleOpen={handleOpen} />
      <ReferralFormModal open={open} handleClose={handleClose} />
    </div>
  );
};

export default App;
