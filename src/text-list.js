import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.status(200).json({
    data: [
      { label: 'ECMAScript', value: 'ECMAScript' },
      { label: 'HTML5', value: 'HTML5' },
      { label: 'Node.js', value: 'Node.js' },
      { label: 'Docker', value: 'Docker' },
    ],
  });
});

export default router;
