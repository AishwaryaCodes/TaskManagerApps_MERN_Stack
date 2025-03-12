import jwt from 'jsonwebtoken';

//use user id to generate token 
const generateToken = (id) => {
    //token must be returned as a string 
    return jwt.sign({id}, process.env.JWT_SECRET, {
        expiresIn: '30d',
    });
};

export default generateToken;