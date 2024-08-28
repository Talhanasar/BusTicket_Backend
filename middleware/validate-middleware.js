const validate = (schema) => async (req, res, next) => {
    try {
      const parseBody = await schema.parseAsync(req.body);
      return next();
    } catch (err) {
      const status = 422;
      const message = "Fill the input properly";
      const extraDetails = err.issues.map((curElem) => curElem.message);
  
      const error = {
        status,
        message,
        extraDetails,
      };
  
      next(error);
    }
  };

module.exports = validate;