// import item router
const { Item } = require('../models');

module.exports = {
    // get all items
    async getAllItems(req, res) {
        const items = await Item.find();
        return res.json(items);
      },
    // create an item
    async saveItem({ user, body }, res) {
        console.log(user);
        const item = await Item.create(body)
        .then(({ _id }) => User.findOneAndUpdate(
            { _id: user._id },
            { $addToSet: { items: _id } },
            { new: true }))
        res.json(item);
    }
}

// app.post("/submit", ({ body }, res) => {
//     db.Note.create(body)
//       .then(({ _id }) => db.User.findOneAndUpdate({}, { $push: { notes: _id } }, { new: true }))
//       .then(dbUser => {
//         res.json(dbUser);
//       })
//       .catch(err => {
//         res.json(err);
//       });
//   });

//   async saveBook({ user, body }, res) {
//     console.log(user);
//     try {
//       const updatedUser = await User.findOneAndUpdate(
//         { _id: user._id },
//         { $addToSet: { savedBooks: body } },
//         { new: true, runValidators: true }
//       );
//       return res.json(updatedUser);
//     } catch (err) {
//       console.log(err);
//       return res.status(400).json(err);
//     }
//   },