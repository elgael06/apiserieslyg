

import { defaultDB } from ".";
import { makeDb } from "./mysql/config";

export default async ()=>({
    db: await defaultDB(),
    async updateUsuario(
        id:number,
        nombre: String,
        apPaterno:String,
        apMaterno: String,
        puesto: number
    ){
        const db = makeDb();
        try{
            await db.query(`UPDATE Usuarios 
                set nombre=?, 
                apPaterno=?, 
                apMaterno=?, 
                puesto=?
            where id=?`, [nombre,apPaterno,apMaterno,puesto,id]);
            db.close();
            return {
                status:true,
                message:`Exito: se actualizo el usuario # ${id} correctamente.`
            };
        }catch(err){
            db.close();
            return {
                status:false,
                message:`Error al actualizar usuario # ${id}.`,
                error:err
            };
        }
        
    },
    async updateSesion(
        idUsuario:number,
        password:string,
    ){
        const db = makeDb();
        try{
            await db.query(`UPDATE loginUser
                set password =? 
            where idUsuario=?`,
                [password,idUsuario]);
                db.close();
            return { status:true,message:'Actualizacion de pasword correcta.'}
        }catch(error){
            return {status:false,message:'Error al actualizar.',error};
        }        
    },
    async serie(id:number,nombre:string,portada:string){
        const db = makeDb();
        try{await db.query(` UPDATE series
            set nombre=?,
            portada=?
        where id =?`,[nombre,portada,id]);
            return {message:`serie id=${id} actualizada`}
        }catch(error){
            return {message:'error al actualizar',error:error}
        }
    },
    async capitulo(idSerie:number,id:number,url:string,desc:string){
        try{
            const db = makeDb();
            await db.query(`UPDATE capitulos 
                set uri=?,
                descripcion=?                
                where idSerie=? and id=? `,[url,desc,idSerie,id]);
            db.close();
            return {message:`capitulo id=${id} actualizada`}
        }catch(error){
            return {message:'error al actualizar',error:error}
        }
    },
    async contraseniaSesion(email:string,password:string,newPass:string){
        const db = makeDb();
        try{
            await db.query(` UPDATE 
            login 
            SET contrasenia=? 
        WHERE email=? and contrasenia=?;`,[newPass,email,password]) || [];
            return true;
        }catch(e){
            return false;
        }
    },
    async updatePassword(email:string,passw:string){
        const db = makeDb();
        try{
            const newPassw = await db.query(`call update_password(?,?);`,[email,passw]);
            await db.close();
            return newPassw;
        }
        catch(e){
            return {message:'error',error:e}
        }
    },
    async recoveryPassword(email:string){
        const letras = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
        const mayusculas = letras.map(e=> e.toUpperCase());
        const numeros = ['1','2','3','4','5','6','7','8','9','0'];
        const simbols = ['!','%','@','&','?','=','*'];
        const Arreglos = [letras,mayusculas,numeros,simbols];

        let password:string = '';
        let orden = [];

        for (let i = 0; i<8; i++){
            orden.push(Arreglos[getRandomInt(0,Arreglos.length)]);
        }

        for(let dato of orden){
            password += dato[getRandomInt(0,dato.length)].toString();
        }

        console.log('password=>',password);
        
        const resp =  await this.updatePassword(email,password);

        const pass_new = resp[1] || null;
        const {res} = pass_new ? pass_new['0'] :{res:null};
        sendEmail(email,res);
        return {res};
        function getRandomInt(min:number, max:number) {
            return Math.floor(Math.random() * (max - min)) + min;
        }
    }
});

const sendEmail = (email:string,password:string)=>{

    const user = "series_mya@outlook.com";
    const pass = 'Algn1121';

    //let testAccount = await mailer.createTestAccount();
    // Use Smtp Protocol to send Email
    // const send = require('gmail-send')({
    //     user: "series_mya@outlook.com",
    //     pass: 'Algn1121',
    //     to:   email,        
    //     subject: "Send Email recovery password this app.",
    //     text: "Recovery password ",
    //     html: `you new password is:
    //     <b> ${pass}</b>
    //     `
    //   });

    //   try {
    //     const {result} = await  send({text:'send recovery password'});
    //     console.log(result);
    //   } catch(error) {
    //     console.error('ERROR', error);
    //   }

    // var smtpTransport = mailer.createTransport("SMTP",{
    //     service: "Gmail",
    //     auth: {
    //         user,
    //         pass
    //     }
    // });

    // var mail = {
    //     from: `MYA APP<${user}>`,
    //     to: email,
    //     subject: "Send Email recovery password this app.",
    //     text: "Recovery password.",
    //     html: `you new password is:
    //     <b> ${password}</b>
    //     `
    // }

    // const info = await smtpTransport.sendMail(mail);
    // console.log(info.messageId);

    var nodeoutlook = require('nodejs-nodemailer-outlook')
    nodeoutlook.sendEmail({
        auth: {
            user,
            pass
        },
        from: `MYA APP<${user}>`,
        to: email,
        subject: "Send Email recovery password this app.",
        html:  `you new password is:
            <b> ${password}</b>
            <br />

            <small>thank you for see serie and use mya app.</small>
            `,
        text: "Recovery password.",
        onError: (e:any) => console.log(e),
        onSuccess: (i:any) => console.log(i)
    });
}
