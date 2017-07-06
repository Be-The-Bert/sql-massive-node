module.exports = {
  create: ( req, res, next ) => {
    const dbInstance = req.app.get('db');
    const { name, description, price, imageurl } = req.body;
    db.createProduct([name, description, price, imageurl])
    .then( () => res.status(200).send() )
    .catch( () => res.status(500).send() );
  },

  getOne: ( req, res, next ) => {
    const db = req.app.get('db');
    db.readProduct([req.params.id])
    .then( product => res.status(200).send(product))
    .catch( () => res.status(500).send() );
  },

  getAll: ( req, res, next ) => {
    const db = req.app.get('db');
    db.readProducts()
    .then( products => res.send(200).send(products))
    .catch( () => res.status(500).send() );
  },

  update: ( req, res, next ) => {
    const db = req.app.get('db');
    db.updateProduct([req.params.id, req.query.desc])
    .then( () => res.status(200).send() )
    .catch( () => res.status(500).send() );
  },

  delete: ( req, res, next ) => {
    const db = req.app.get('db');
    db.deleteProduct(req.params.id)
    .then( () => res.status(200).send() )
    .catch( () => res.status(500).send() );
  }
};