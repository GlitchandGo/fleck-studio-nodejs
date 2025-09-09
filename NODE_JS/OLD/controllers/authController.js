exports.signup = (req, res) => {
  const { username } = req.body;
  res.status(201).json({ message: 'Signup successful', user: { username } });
};

exports.signin = (req, res) => {
  const { username } = req.body;
  res.status(200).json({ message: `Welcome back, ${username}` });
};
