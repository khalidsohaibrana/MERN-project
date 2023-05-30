// import React from 'react';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';

// const AddListingForm = () => {
//   // Define validation schema using Yup
//   const validationSchema = Yup.object().shape({
//     image1: Yup.string().url('Invalid URL').required('Image URL is required'),
//     image2: Yup.string().url('Invalid URL').required('Image URL is required'),
//     title: Yup.string().required('Title is required'),
//     description: Yup.string().required('Description is required'),
//     price: Yup.number().typeError('Price must be a number').required('Price is required'),
//   });

//   // Handle form submission
//   const handleSubmit = (values, { resetForm }) => {
//     // Perform submit logic here
//     console.log(values);

//     // Reset form after submission
//     resetForm();
//   };

//   return (
//     <div>
//       <h1>Add Listing</h1>
//       <Formik
//         initialValues={{
//           image1: '',
//           image2: '',
//           title: '',
//           description: '',
//           price: '',
//         }}
//         validationSchema={validationSchema}
//         onSubmit={handleSubmit}
//       >
//         <Form>
//           <div>
//             <label htmlFor="image1">Image URL 1</label>
//             <Field type="text" id="image1" name="image1" />
//             <ErrorMessage name="image1" component="div" className="error" />
//           </div>

//           <div>
//             <label htmlFor="image2">Image URL 2</label>
//             <Field type="text" id="image2" name="image2" />
//             <ErrorMessage name="image2" component="div" className="error" />
//           </div>

//           <div>
//             <label htmlFor="title">Title</label>
//             <Field type="text" id="title" name="title" />
//             <ErrorMessage name="title" component="div" className="error" />
//           </div>

//           <div>
//             <label htmlFor="description">Description</label>
//             <Field as="textarea" id="description" name="description" />
//             <ErrorMessage name="description" component="div" className="error" />
//           </div>

//           <div>
//             <label htmlFor="price">Price</label>
//             <Field type="number" id="price" name="price" />
//             <ErrorMessage name="price" component="div" className="error" />
//           </div>

//           <button type="submit">Submit</button>
//         </Form>
//       </Formik>
//     </div>
//   );
// };

// export default AddListingForm;