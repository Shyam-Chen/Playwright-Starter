import { Router } from 'express';
import mongoose, { Schema } from 'mongoose';

const router = Router();

const listSchema = Schema({
  text: {
    type: String,
    required: true,
  },
});

export const List = mongoose.model('List', listSchema);

/**
 * @name list - get a list
 * @param {string} [_id] - get a item by ID
 * @param {string} [text] - search for text in list
 * @return {Array<List>}
 *
 * @example GET /api/text-list
 * @example GET /api/text-list?_id=${_id}
 * @example GET /api/text-list?text=${text}
 */
router.get('/', async (req, res, next) => {
  try {
    const { _id, text } = req.query;

    const find = {};

    if (_id) find._id = { _id };
    if (text) find.text = { $regex: text, $options: 'i' };

    const data = await List.find(find).exec();

    res.json(data);
  } catch (err) {
    next(err);
  }
});

/**
 * @name create - create a item
 * @return {Object<{ message: string }>}
 *
 * @example POST /api/text-list { text: ${text} }
 */
router.post('/', async (req, res, next) => {
  try {
    if (!req.body.text) {
      res.status(400)
        .json({ message: 'Please pass text.' });
    }

    const list = await new List(req.body);
    const message = await list.save().then(() => 'List saved');

    res.json({ message });
  } catch (err) {
    next(err);
  }
});

/**
 * @name update - update a item
 * @return {Object<{ message: string }>}
 *
 * @example PUT /api/text-list/${id}
 */
router.put('/:id', async (req, res, next) => {
  try {
    const message = await List
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(() => 'List updated');

    res.json({ message });
  } catch (err) {
    next(err);
  }
});

/**
 * @name delete - remove a item
 * @return {Object<{ message: string }>}
 *
 * @example DELETE /api/text-list/${id}
 */
router.delete('/:id', async (req, res, next) => {
  try {
    const message = await List
      .findByIdAndRemove(req.params.id)
      .then(() => 'List deleted');

    res.json({ message });
  } catch (err) {
    next(err);
  }
});

export default router;
