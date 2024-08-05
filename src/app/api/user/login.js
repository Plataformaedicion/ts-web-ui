// pages/api/login.js
import { withIronSessionApiRoute } from 'iron-session/next';
import { sessionOptions } from '../../../lib/ironSession';

async function loginRoute(req, res) {
  const { username, password } = req.body;
  if (username === 'user' && password === 'pass') {
    req.session.user = { username };
    await req.session.save();
    res.send({ ok: true });
  } else {
    res.status(401).send({ error: 'Invalid credentials' });
  }
}

export default withIronSessionApiRoute(loginRoute, sessionOptions);
