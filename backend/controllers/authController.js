const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
require('dotenv').config(); 


exports.register = async(req,res)=>{

    const { email,password} = req.body;
    console.log(req.body);

    try {
        const hashPassword = await bcrypt.hash(password, 10);

        const user = new User({email, password: hashPassword});
        await user.save();

        res.status(201).json({message: 'User registered successfully'});
    } catch (error) {
        console.log(error);
       res.status(500).json({message: 'Server Error'}); 
    }

}

exports.login = async (req, res) => {
    const { email, password } = req.body;
  
    try {

    const user = await User.findOne({email});
    if(!user){
        return res.status(401).json({message: 'Invalid Credential'});
    }
    const passwordMatch = await bcrypt.compare(password, user.password);
    if(!passwordMatch){
        return res.status(401).json({message: 'Invalid Credential'});
    }
  
    user.lastLogin = new Date();
    await user.save();

    const token = jwt.sign({userId: user._id}, process.env.JWT_SECRET, { expiresIn:'1 h'});

      res.status(200).json({token: token, email:email});
    } catch (err) {
      res.status(500).json({ message: 'Server error' });
    }
  };
  
  exports.logout = async (req, res) => {
    const { email } = req.body;
  
    try {
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      user.lastLogout = new Date();
      await user.save();
  
      res.status(200).json({ message: 'Logout successful' });
    } catch (err) {
      res.status(500).json({ message: 'Server error' });
    }
  };
