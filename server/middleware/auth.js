import jwt from "jsonwebtoken";

const secret = 'test';

const auth = async (req, res, next) => {
  try {
    // get token from front end, token is on first position in the array
    const token = req.headers.authorization.split(" ")[1];
    // google Oauth is over 500 length
    const isCustomAuth = token.length < 500;

    // data we get from token in decodedData
    let decodedData;

    if (token && isCustomAuth) {      
      decodedData = jwt.verify(token, secret);

      req.userId = decodedData?.id;
    } else {
      // for google Oauth
      decodedData = jwt.decode(token);

      req.userId = decodedData?.sub;
    }    

    next();
  } catch (error) {
    console.log(error);
  }
};

export default auth;