import React, { useState } from 'react';
import { Box, Modal, Typography } from '@mui/material';

const ModalComponent = ({ isModalOpen, data }: any) => {
  const [open, setOpen] = useState(isModalOpen);
  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 1000,
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
                <Typography
                  id={`modal-modal-title-${index}`}
                  variant='subtitle2'
                  component='h5'
                  sx={{ mt: 2 }}
                >
                  {info.title}
                </Typography>
                <Typography
                  variant='body2'
                  component='p'
                  id={`modal-modal-description-${index}`}
                  sx={{ whiteSpace: 'pre-line' }}
                >
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
