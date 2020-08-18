import { useEffect } from "react";
import { useRouter } from "next/router";
import { useState } from "react";


export default ()=>{
    const history = useRouter();
    const [link,setLink] = useState('');

    useEffect(()=>{
        const url =history.query['id'];
        console.log(url);
        fetchPage(url);

    },[]);

    async  function fetchPage (id){
        try{
            const res = await (await fetch(`/api/series/capitulos?buscar=${id}`)).json();
            const div = document.createElement('div');
            console.log('Capitulo => ',res[0]);
            div.innerHTML = res[0].html;
            console.log(div);
            const boton = div.querySelector('.input.popsok');
            console.log('url video',boton.href); 
            setLink(boton.href);           
        }catch(e){
            console.log(e);
        }
    }

    return  (<div 
        style={{
            position:'fixed',
            display:'flex',
            top: '-137px', 
            left: '0px', 
            right:' 0px', 
            bottom: '0px',
            zIndex:9999,
            background:'#000000'
        }}>
            {link!="" ?  <>
            {/* <iframe 
                width="640%" 
                height="360%" 
                frameborder="0" 
                src={link} 
                allowfullscreen ></iframe> */}

                <video width='100%' height='100%'
                    controls about={'dfgh'} >
                        <source src={link} />
                </video> 
           </>:   null}
        </div>);
}




