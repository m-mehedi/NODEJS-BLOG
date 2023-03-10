const createComment = async (req, res) => {
  try {
    res.json({
      status: 'Success',
      data: 'comment created'
    })
  } catch (error) {
    res.json(error.message);
  }
};

const getComment = async (req, res) => {
  try {
    res.json({
      status: 'Success',
      data: 'Comment route'
    })
  } catch (error) {
    res.json(error.message);
  }
};

const deleteComment = async (req, res) => {
  try {
    res.json({
      status: 'Success',
      data: 'Comment delete route'
    })
  } catch (error) {
    res.json(error.message);
  }
};

const updateComment = async (req, res) => {
  try {
    res.json({
      status: 'Success',
      data: 'Update comment route'
    })
  } catch (error) {
    res.json(error.message);
  }
};

module.exports = {
  createComment,
  getComment,
  deleteComment,
  updateComment
}