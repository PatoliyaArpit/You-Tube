const asyncHendler=(requestHandler)=>{
(req,res,next)=>{
    Promise.resolve(requestHandler(req,res,next)).catch((err)=>next(err))
}
}
export default asyncHendler;



// const asyncHendler=(fn)=>async (req,res,next)=>{
//     try{
//         await fn(res,req,next)

//     }catch(error){
//         res.status(err.code||500).json({
//             success:false,
//             massage:err.massage
//         })
//     }
// }

