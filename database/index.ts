import sqlite  from 'sqlite';

export const dirDB = './database.sqlite';
export const defaultDB = async ()=> await sqlite.open(dirDB);

export  { default as  insert } from './insert';
export  { default as  select } from './select';
export  { default as  update } from './update';
export  { default as  borrar } from './borrar';
    

