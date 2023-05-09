const fs = require('fs');
const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
);

///2)Route handlers
exports.getAllTours = (req, res) => {
  res
    .status(200)
    .json({ status: 'Success', results: tours.length, data: { tours } });
};
exports.addNewTour = (req, res) => {
  console.log(req.body);

  const newId = tours[tours.length - 1].id + 1;
  const newTour = { ...req.body, id: newId };

  tours.push(newTour);

  fs.writeFile(
    `${__dirname}/dev-data/data/tours-simple.json`,
    JSON.stringify(tours),
    (err) => {
      res.status(201).json({ status: 'Success', data: { tour: newTour } });
    }
  );
};
exports.updateTour = (req, res) => {
  if (req.params.id * 1 < tours.length) {
    res.status(200).json({ status: 'succes', data: { tour: req.body } });
  } else {
    res.status(404).json({ status: 'fail', message: 'Invalid ID' });
  }
};
exports.getTour = (req, res) => {
  const tour = tours.find((val) => {
    return val.id == req.params.id;
  });
  if (tour) {
    res.status(200).json({ status: 'Succes', data: { tour } });
  } else {
    res.status(404).json({ status: 'fail', message: 'Invalid ID' });
  }
};
exports.deleteTour = (req, res) => {
  console.log(req.requestTime);
  if (req.params.id * 1 < tours.length) {
    res.status(204).json({ status: 'success', data: null });
  } else {
    res.status(404).json({ status: 'fail', message: 'Invalid ID' });
  }
};
