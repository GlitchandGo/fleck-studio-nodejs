exports.getAllVideos = (req, res) => {
  res.json([
    { id: 1, title: 'Glitch Origins' },
    { id: 2, title: 'Chaos Theory: Behind the Snap' }
  ]);
};

exports.uploadVideo = (req, res) => {
  const newVideo = req.body;
  res.status(201).json({ message: 'Video uploaded', video: newVideo });
};
