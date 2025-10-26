import React from 'react'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'


const App = () => {
  const users = [
    {
      img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=688',
      intro: 'Prime customers, that have access to bank credit and are satisfied with the current product',
      color:'royalblue',
      tag: 'Satisfied',
    },
    {
      img: 'https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHdvcmtpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600',
      intro: 'Prime customers, that have access to bank credit and are not satisfied with the current service',
      color:'lightseagreen',
      tag: 'Underserved',
    },
    {
      img: 'https://images.unsplash.com/photo-1498758536662-35b82cd15e29?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=688',
      intro: 'Customer from near-prime and sub-prime segments with no access to bank credit',
      color:'orange',
      tag: 'Underbanked',
    },
    {
      img: 'https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687',
      intro: 'Students and young professionals needing small-ticket personal loans',
      color:'pink',
      tag: 'Youth Segment',
    },
    {
      img: 'https://images.unsplash.com/flagged/photo-1575227057258-50cb9bffb1af?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687',
      intro: 'Self-employed individuals looking for working capital and flexible repayment options',
      color:'lightseagreen',
      tag: 'Self-Employed',
    },
    {
      img: 'https://images.unsplash.com/photo-1600275669439-14e40452d20b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687',
      intro: 'Urban customers seeking better interest rates and fast loan disbursals',
      color:'blue',
      tag: 'Urban Professionals',
    }
  ];

  return (
    <>
      <Section1 users={users} />
      {/* <Section2 /> */}
    </>
  )
}

export default App