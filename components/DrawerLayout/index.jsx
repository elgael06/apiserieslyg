import React, { Fragment } from 'react'
import { SwipeableDrawer, List, Link, ListItem, ListItemAvatar, ListItemText, Divider, ListItemIcon } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { ArrowRight,People, Laptop } from '@material-ui/icons';
import { useRouter } from 'next/router';

const accesos = [
    {icon:<People />, url:'/usuarios'},
    {icon:<Laptop />, url:'/series'},
]

const DrawerLayout = ({settoggleDrawer,toggleDrawer})=>{
    const { usuario } = useSelector(state => state);
    const history = useRouter();
    const handleToggleDrawer = (open) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
        settoggleDrawer(open);
    }
    const redirect = url =>{
        history.push(url)
    }
    return(<SwipeableDrawer 
        anchor={'left'} 
        open={toggleDrawer} 
        onOpen={handleToggleDrawer(true)}
        onClose={handleToggleDrawer(false)}>
        <div className='jss276' style={{height:64}}>
            <List  className='user_drawer-bar'>
                <ListItem button onClick={()=>redirect('/')}>
                    <ListItemAvatar>
                        <img 
                            src={'https://upload.wikimedia.org/wikipedia/commons/a/ab/Logo_TV_2015.png'} 
                            alt='Avatar' 
                            height='36'
                        />
                    </ListItemAvatar>
                        <ListItemText primary='Logo de App' />
                </ListItem>
            </List>            
        </div>
        <Divider />
        <div            
            role="presentation"
            style={{
                width: 250,
            }}
            onClick={handleToggleDrawer(false)}>                
            <List>  
            <ListItem>
                <ListItemIcon >
                    <ArrowRight />
                </ListItemIcon>
                <ListItemText primary='Menu' />
            </ListItem>
            <Divider />
                { usuario.id ? accesos
                .filter(e=>e.icon!=null).map(e=><Fragment key={e.url}>
                    <ListItem  button onClick={()=>redirect(e.url)}>
                        <ListItemIcon >
                            {e.icon}
                        </ListItemIcon>
                        <ListItemText primary={e.url}/>
                    </ListItem>
                </Fragment>) :  <ListItem>
                    <ListItemText primary='No Tiene accesos!' secondary='Pida Acceso o inicie sesion.' />
                </ListItem>}
            </List>
        </div>
    </SwipeableDrawer>);
}

export default DrawerLayout;