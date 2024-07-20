import React from 'react';
import { Modal, Box, Typography, TextField, Button } from '@mui/material';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  referrerName: Yup.string().required('Required'),
  referrerEmail: Yup.string().email('Invalid email format').required('Required'),
  refereeName: Yup.string().required('Required'),
  refereeEmail: Yup.string().email('Invalid email format').required('Required'),
});

const ReferralFormModal = ({ open, handleClose }) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={{ width: 400, margin: 'auto', mt: 10, p: 3, bgcolor: 'background.paper', boxShadow: 24, borderRadius: 1 }}>
        <Typography variant="h6" gutterBottom>Referral Form</Typography>
        <Formik
          initialValues={{ referrerName: '', referrerEmail: '', refereeName: '', refereeEmail: '' }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            console.log(values);
            handleClose();
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <Field as={TextField} fullWidth name="referrerName" label="Your Name" margin="normal" error={touched.referrerName && !!errors.referrerName} helperText={touched.referrerName && errors.referrerName} />
              <Field as={TextField} fullWidth name="referrerEmail" label="Your Email" margin="normal" error={touched.referrerEmail && !!errors.referrerEmail} helperText={touched.referrerEmail && errors.referrerEmail} />
              <Field as={TextField} fullWidth name="refereeName" label="Friend's Name" margin="normal" error={touched.refereeName && !!errors.refereeName} helperText={touched.refereeName && errors.refereeName} />
              <Field as={TextField} fullWidth name="refereeEmail" label="Friend's Email" margin="normal" error={touched.refereeEmail && !!errors.refereeEmail} helperText={touched.refereeEmail && errors.refereeEmail} />
              <Button type="submit" variant="contained" color="primary" fullWidth>Submit</Button>
            </Form>
          )}
        </Formik>
      </Box>
    </Modal>
  );
};

export default ReferralFormModal;
