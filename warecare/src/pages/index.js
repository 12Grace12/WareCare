import Head from 'next/head'
import Image from 'next/image'
import Dashboard from '../components/Dashboard'
import styles from '../styles/Home.module.css'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

export default function Home() {
  return (
    
    <> 
    <NavBar></NavBar>
    <h1>Dashboard:</h1>
    <Dashboard></Dashboard>
    <Dashboard></Dashboard>
    <Footer></Footer>
    </>
  );
}


