import React, { useState } from 'react';
import { Box, Modal, Typography } from '@mui/material';

const ModalComponent = ({ isModalOpen, data }: any) => {
  const [open, setOpen] = useState(isModalOpen);
  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
  };

  const handleClose = () => setOpen(false);

  return (
    <Modal open={open} onClose={handleClose} aria-labelledby='modal-modal-title'>
      <>
        <Box sx={style} key='Additional Information'>
          {data.map((info: any, index: number) => {
            return (
              <>
                <Typography id={`modal-modal-title-${index}`} variant='subtitle1' component='h5'>
                  {info.title}
                </Typography>
                <Typography id={`modal-modal-description-${index}`} sx={{ mt: 2 }}>
                  {info.description}
                </Typography>
              </>
            );
          })}
        </Box>
      </>
    </Modal>
  );
};

export default ModalComponent;
