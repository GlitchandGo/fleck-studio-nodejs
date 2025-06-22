exports.getUserProfile = (req, res) => {
  const userId = req.params.id;
  res.json({ id: userId, username: 'GlitchFan_42', bio: 'Still recovering from Snap #17' });
};

exports.updateUserProfile = (req, res) => {
  const userId = req.params.id;
  const updates = req.body;
  res.json({ message: 'User updated', id: userId, updates });
};
