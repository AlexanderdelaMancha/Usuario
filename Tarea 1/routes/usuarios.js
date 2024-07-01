const ruta=require("express").Router();


ruta.get("/", (req, res)=>{
    res.render("inicio");
});

ruta.get("/ventas", (req, res)=>{
    res.render("ventas");
});

//Los : es para indicar que sigue una variable
ruta.get("/acerca-de/:numero/:nombre" ,(req, res)=>{
   console.log(req.params)
   res.render("acerca-de",req.params);
}); // Esto es para acceder a la raiz, desde el navegador //

ruta.get("/datosNuevo/:nombre/:celular/:correo" ,(req, res)=>{
   console.log(req.params)
   res.render("datosNuevo",req.params);
}); // Esto es para acceder a la raiz, desde el navegador //

ruta.get("/formulario", (req, res)=>{
   res.render("formulario");
});

ruta.post("/datosAlumno", (req, res)=>{
   res.render("datosAlumno",req.body);
});

ruta.post("/datosNuevo", (req, res)=>{
   res.render("datosNuevo",req.body);
});
 module.exports=ruta;