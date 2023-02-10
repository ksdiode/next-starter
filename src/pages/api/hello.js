// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// export default function handler(req, res) {
//   res.status(200).json({ name: 'John Doe' });
// }

import createHandler from '../../middleware';

const app = createHandler();

app.get('/api/hello', async (req, res) => {
  try {
    // console.log(req.params);
    return res.status(200).json({ _id: req.query });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});

app.get('/api/hello2', async (req, res) => {
  try {
    console.log(req.query);
    return res.status(200).json({ _id: req.query });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});

export default app;
