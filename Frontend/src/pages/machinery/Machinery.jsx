import { Row } from "react-bootstrap"
import Layout from "../../components/Layout"
import TableMachinery from "./table/TableMachinery"
import { useEffect, useState } from "react"
import axios from "axios"
import FormMachinery from "./form/FormMachinery"

function Machinery(){
    const apiMachinery = "https://proalarmepp.onrender.com/api/machinery/"
    const [machineries, setMachineries] = useState([])
    const [machinerySelect, setMachinerySelect] = useState("Mundo")
    const [listAddMachinery, setListAddMachinery] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await axios.get(apiMachinery)
                setMachineries(response.data)
                console.log(response.data)
            }
            catch(e){

            }
        }

        fetchData()
    }, [])

    const componentNew = (select) => {
        setListAddMachinery(select)
    }

    return (
        <Layout>
            <Row className="justify-content-center">
                {
                    listAddMachinery? <FormMachinery/> : <TableMachinery machineries={machineries} machinerySelect={machinerySelect} componentNew={componentNew}/>
                }
            
            </Row>
        </Layout>
    )
}

export default Machinery