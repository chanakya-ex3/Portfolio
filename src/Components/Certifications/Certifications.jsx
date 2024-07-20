import React from 'react'
import CP from '../../assets/certifications/AWSCP.png'
import SAA from '../../assets/certifications/AWSAA.png'
import DVA from '../../assets/certifications/AWSDVA.png'


const Certifications = () => {
  const certifications= [
    {name: 'AWS Certified Developer - Associate', icon: DVA, date:"June 2024 - June 2027", url:"https://www.credly.com/badges/10c85d3d-10b8-46a6-a0c5-a91653ce1186/public_url"},
    {name: 'AWS Certified Solutions Architect - Associate', icon: SAA, date:"Jan 2024 - Jan 2027", url:"https://www.credly.com/badges/25b17ff5-f1a9-46c9-856f-d10f83778c33/public_url"},
    {name: 'AWS Certified Cloud Practitioner', icon: CP, date:"Nov 2023 - June 2027", url:"https://www.credly.com/badges/a53f7448-b1d9-48cc-9b0b-c4d95d566956/public_url"},
  ]
  return (
    <div className=" pivot-point w-full h-screen flex items-center justify-center flex-col  ">
      <p className="h-[20px] md:h-[120px]"></p>
      <h2 className="text-primary-light dark:text-primary-dark text-center text-3xl sm:text-4xl md:text-5xl">
        Certitications
      </h2>
      <div className="flex flex-col sm:flex-row sm:w-[80vw] h-full items-center justify-between">
        {certifications.map((cert) => (
          <div
            key={cert.name}
            className="m-5 flex flex-col gap-2 items-center justify-center">
            <img
              src={cert.icon}
              className="rounded-3xl w-[40%] sm:w-[348px]"
              alt={cert.name}
            />
            <a className='text-primary-light dark:text-primary-dark font-bold text-xl text-center hover:text-blue-dark ' href={cert.url} target='_blank'>{cert.name}</a>
            <p className='text-primary-light dark:text-primary-dark text-base font-medium text-center'>{cert.date}</p>
            </div>
          ))
        }
        </div>
    </div>
  )
}

export default Certifications