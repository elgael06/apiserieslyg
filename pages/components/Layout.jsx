
import React, { useState } from 'react';
import {AppBar,Toolbar,Link,Typography,Button,Card} from '@material-ui/core';
import DrawerLayout from './DrawerLayout';
import TopAppBar from './TpoAppBar';

export default ({children})=>{

    const [toggleDrawer, settoggleDrawer] = useState(false);

    return(<div className='layout'>
        <AppBar position='fixed' >
            <Toolbar >

            <Typography variant="h5" style={{marginRight:20}} > Accesos : </Typography>
            <u  style={{color:'#FFF'}}>
                <li style={{display:'inline-block',padding:'0 5px'}}>
                    <Typography variant="h6" >
                        <Link href='/' color="inherit">Inicio </Link>
                    </Typography>
                </li>
                <li style={{display:'inline-block',padding:'0 5px'}}>
                    <Typography variant="h6" >
                        <Link href='/usuarios'  color="inherit">Usuarios</Link>
                    </Typography>
                </li>
                
            </u>
            </Toolbar> 
            <DrawerLayout
                settoggleDrawer={settoggleDrawer}
                toggleDrawer={toggleDrawer}
            />
        </AppBar>

        <TopAppBar 
            onClick={()=>settoggleDrawer(true)}
        />
        <div style={{textAlign:'center',margin:'90px 30px'}}>
            <Card elevation={10} style={{padding:15,minHeight:450}}>
                {children}
            </Card>
        </div>
            
    </div>);
}

