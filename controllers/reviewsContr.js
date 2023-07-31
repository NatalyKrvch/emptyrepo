const { HttpError, ctrlWrapper } = require("../helpers");
const { Review } = require("../models/review");

const addReview = async (req, res) => {
  const lastDate = Date.now();
  const answer = await Review.create({ ...req.body, lastDate: lastDate });
  res.status(201).json(answer);
};

const getAllReviews = async (_, res) => {
  const answer = await Review.find({});
  res.json(answer);
};

module.exports = {
  addReview: ctrlWrapper(addReview),
  getAllReviews: ctrlWrapper(getAllReviews),
};
