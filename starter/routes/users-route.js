const express = require('express');

const router = express.Router();

router.route('/api/v1/users').get(getAllUsers).post(addNewUser);
router
  .route('/api/v1/users/:id')
  .get(getUser)
  .delete(deleteUser)
  .patch(updateUser);
