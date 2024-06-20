const controller = {};

controller.list = (req, res) => {
    req.getConnection((error,conn) =>{
        conn.query('select *from Medicos',(err,Medicos) =>{
            if(err){
                res.json(err);
            }
            res.json(Medicos);
        });

    });

};

controller.save = (req,res) =>{
    const data = req.body;
   req.getConnection((err,conn)=> {
       conn.query('insert into Medicos set?', [data], (err,Medicos) => {
        res.json(Medicos);
       });
   })
};

controller.edit = (req, res) => {

    const {med_cod}= req.params;
   
    req.getConnection((err,conn) =>{
        conn.query('select *from Medicos where med_cod=?', [med_cod], (err,Medicos) => {
            res.json(Medicos[0]);

        });

    });

};



controller.update = (req,res) =>{

    const {med_cod}= req.params;
    const nuevo_medicos = req.body;
  
    req.getConnection((err, conn) => {
        conn.query('update Medicos set ? where med_cod =?', [nuevo_medicos, med_cod], (err,rows) =>{ 
            res.json({ message: "Registro Actualizado" }); 

        });
    });
};

controller.delete = (req,res) =>{
    const {med_cod}= req.params; 
  req.getConnection((err,conn) => {
      conn.query('update Medicos set estado="Inactivo" where med_cod =?', [med_cod], (err, rows) => {
        res.json({ message: "Registro Eliminado" }); 
      });
  })
};

module.exports =controller;
