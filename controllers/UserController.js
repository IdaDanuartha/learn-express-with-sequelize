const model = require('../models/index')

class UserController {
    static async all(req, res, next) {
        try {
          const users = await model.users.findAll({});
          if (users.length !== 0) {
            res.json({
              'status': 'OK',
              'messages': '',
              'data': users
            })
          } else {
            res.json({
              'status': 'ERROR',
              'messages': 'EMPTY',
              'data': {}
            })
          }
        } catch (err) {
          res.json({
            'status': 'ERROR',
            'messages': err.message,
            'data': {}
          })
        }
    }

    static async detail(req, res, next) {
        try {
          const user = await model.users.findOne({
            where: {
              id: req.params.id
            }
          });
      
          if (user.length !== 0) {
            res.json({
              'status': 'OK',
              'messages': '',
              'data': user
            })
          } else {
            res.json({
              'status': 'ERROR',
              'messages': 'EMPTY',
              'data': {}
            })
          }
        } catch (err) {
          res.json({
            'status': 'ERROR',
            'messages': err.message,
            'data': {}
          })
        }
    }

    static async store(req, res, next) {
        try {
          // const {
          //   name,
          //   email,
          //   gender,
          //   phone
          // } = req.body;
          // const users = await model.users.create({
          //   name,
          //   email,
          //   gender,
          //   phone
          // });
      
          const users = await model.users.create({...req.body})
      
          if (users) {
            res.status(201).json({
              'status': 'OK',
              'messages': 'User berhasil ditambahkan',
              'data': users,
            })
          }
       } catch (err) {
         res.status(400).json({
           'status': 'ERROR',
           'messages': err.message,
           'data': {},
         })
       }
    }

    static async update(req, res, next) {
        try {
          const usersId = req.params.id;
          // const {
          //   name,
          //   email,
          //   gender,
          //   phone
          // } = req.body;
          const users = await model.users.update({
            ...req.body
          }, {
            where: {
              id: usersId
            }
          });
          if (users) {
            res.json({
              'status': 'OK',
              'messages': 'User berhasil diupdate',
              'data': users,
            })
          }
        } catch (err) {
          res.status(400).json({
            'status': 'ERROR',
            'messages': err.message,
            'data': {},
          })
        }
    }

    static async delete(req, res, next) {
        try {
          const usersId = req.params.id;
          const users = await model.users.destroy({ where: {
            id: usersId
          }})
          if (users) {
            res.json({
              'status': 'OK',
              'messages': 'User berhasil dihapus',
              'data': users,
            })
          }
        } catch (err) {
          res.status(400).json({
            'status': 'ERROR',
            'messages': err.message,
            'data': {},
          })
        }
    }
}

module.exports = UserController