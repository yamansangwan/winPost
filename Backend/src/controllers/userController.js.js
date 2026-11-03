const userModel = require('../models/user.model');

const createUser = async (req,res) => {
      try {
        const user = await userModel.create(req.body);
        res.status(201).json({
            message : "User Created Successfully",
            user : user
        })
      } catch(err){
        res.status(500).json({
            message : err.message
        })
      }
}

const getUsers = async (req, res) => {
    try {
        const users = await userModel.find();
        res.status(200).json({
            users : users
        })
    } catch(err){
        res.status(500).json({
            message : err.message
        })
    }
}

const getUser = async (req,res) => {
    try {
        const user = await userModel.findById(req.params.id);
        
        if(!user) {
            return res.status(404).json({
                message : "user not found"
            })
        }

        res.status(200).json({
            user : user
        })
    } catch(err) {
        res.status(500).json({
            message : err.message
        });
}}


const updateUser = async (req, res) => {
    try {
        const user = await userModel.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new : true,
                runValidators : true
            }
        )
        if (!user){
            return res.status(404).json({
                message : "user not found"
            })
        }

        res.status(200).json({
            message : "user updated",
            user : user
        })
    } catch(err){
        res.status(500).json({
            message : err.message

        })
    }
}

const deleteUser = async (req, res) => {
    try {
        const user = await userModel.findByIdAndDelete(req.params.id);

        if (!user) {
            return res.status(404).json({
                message: "user not found"
            });
        }

        res.status(200).json({
            message: "user deleted",
            data: user
        });

    } catch(err) {
        res.status(500).json({
            message: err.message
        });
    }
};

module.exports = {
    createUser, getUsers, getUser, updateUser, deleteUser
};


