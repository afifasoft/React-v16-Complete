import axios from 'axios';

export default axios.create({
  baseURL:'https://api.unsplash.com',
  headers: {
     Authorization: 'Client-ID ac0797ec2b357b441ec458b9fadbc841ffce80f90b53ba437db9a93ad5fe6558'
  }
})
