import Company from './compay.model.js'
import Exceljs from 'exceljs'

const excel=async()=>{
    try{
         const companys=await Company.find()
         const book=new Exceljs.Workbook()
         const sheet=book.addWorksheet('Companys')

         sheet.columns=[
            {header: 'Name',key:'name',width:50},
            {header: 'Description',key:'description',width:50},
            {header: 'Email',key:'email',width:50},
            {header: 'Phone',key:'phone',width:50},
            {header: 'Address', key:'address',width:50},
            {header: 'Category', key:'category',width:50},
            {header: 'Trajectory',key:'trajectory',width:50},
            {header: 'Impact', key:'impact',width:50},
         ]
         companys.forEach(company=>{
            sheet.addRow(
                {
                    name: company.name,
                    description: company.description,
                    email: company.email,
                    phone: company.phone,
                    address: company.address,
                    category: company.category,
                    trajectory: company.trajectory,
                    impact: company.impact
                }
            )
         })
         await book.xlsx.writeFile('companies.xlsx')
         console.log('Excel file up to date')
    }catch(err){
        console.error(err)
        return res.status(500).send('Internal Server error',err)
    }
}


export const add = async (req,res)=>{
    try{
        const data=req.body
        const company= new Company(data)
        await company.save()
        await excel()
        return res.status(200).send(
            {
                success:true,
                message:'Company saved successfully',
                company
            }
        )
    }catch(err){
        console.error(err)
        return res.status(500).send({message:'Internal server error',err})
    }
}

export const listByYear=async(req,res)=>{
    try{
        const {limit,skip}=req.query
        const {experience}=req.params
        const companies=await Company.find({trajectory:experience})
            .skip(skip)
            .limit(limit)
        if(companies.length===0){
            return res.status(404).send(
                {
                    success:false,
                    message:'Companies not found'
                }
            )
        }
        return res.send(
            {
                success:true,
                message:'Companies found',
                result: companies.length,
                companies
            }
        )
    }catch(err){
        console.error(err)
        return res.status(500).send({message:'Internal server error',err})
    }
}

export const listByCategory=async(req,res)=>{
    try{
        const {limit,skip}=req.query
        let {categoryName}=req.params
        const companies=await Company.find({category:categoryName})
            .skip(skip)
            .limit(limit)
        if(companies.length===0){
            return res.status(404).send(
                {
                    success:false,
                    message:'Companies not found'
                }
            )
        }
        return res.status(200).send(
            {
                success:true,
                message:'Companies found',
                result: companies.length,
                companies
            }
        )
    }catch(err){
        console.error(err)
        return res.status(500).send({message:'Internal server error',err})
    }
}

export const listFromAZ=async(req,res)=>{
    try{
        const{limit,skip}=req.query
        const companies=await Company.find()
            .skip(skip)
            .limit(limit)
            .sort(
                {
                    name:1
                }
            )
        if(companies.length===0){
            return res.status(404).send(
                {
                    success:false,
                    message:'Campanies not found'
                }
            )
        }
        return res.status(200).send(
            {
                success:true,
                message:'Companies found',
                result: companies.length,
                companies
            }
        )
    }catch(err){
        console.error(err)
        return res.status(500).send({message:'Internal server error',err})
    }
}

export const listFromZA=async(req,res)=>{
    try{
        const{limit,skip}=req.query
        const companies=await Company.find()
            .skip(skip)
            .limit(limit)
            .sort(
                {
                    name:-1
                }
            )
        if(companies.length===0){
            return res.status(404).send(
                {
                    success:false,
                    message:'Campanies not found'
                }
            )
        }
        return res.status(200).send(
            {
                success:true,
                message:'Companies found',
                result: companies.length,
                companies
            }
        )
    }catch(err){
        console.error(err)
        return res.status(500).send({message:'Internal server error',err})
    }
}

export const update=async(req,res)=>{
    try{
        const {id}=req.params
        const data=req.body
        await excel()
        const updatedCompany= await Company.findByIdAndUpdate(id,data,{new:true})
        if(!updatedCompany){
            return res.status(404).send(
                {
                    success:false,
                    message:'Company not found'
                }
            )
        }
        return res.status(200).send(
            {
                success:true,
                message:'Company updated successfully',
                updatedCompany
            }
        )
    }catch(err){
        console.error(err)
        return res.status(500).send({message:'Internal server error'})
    }
}
