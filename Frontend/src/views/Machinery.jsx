import { Row } from "react-bootstrap"
import Layout from "../components/Layout"
import TableMachinery from "../pages/table/TableMachinery"
import { useEffect, useState } from "react"
import axios from "axios"
import FormMachinery from "../pages/form/FormMachinery"

function Machinery() {
    const apiMachinery = "https://proalarmepp.onrender.com/api/machinery/"
    const [machineries, setMachineries] = useState([])
    const [machinerySelect, setMachinerySelect] = useState(false)
    const [listAddMachinery, setListAddMachinery] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(apiMachinery)
                setMachineries(response.data)
                console.log(response.data)
            }
            catch (e) {
            }
        }
        fetchData()
    }, [listAddMachinery])

    const componentNew = (select) => {
        setListAddMachinery(select)
    }

    const deleteMachinery = (idMachinery) => {
        const rpt = window.confirm('Desea eliminar la imagen?')
        if (rpt) {
            axios.delete(`${apiMachinery + idMachinery}/`)
                .then((response) => {
                    var temp = machineries.filter((machinery) => machinery.id !== idMachinery)
                    setMachineries(temp)
                })
                .catch((error) => {
                    console.log(error)
                })
        }
    }

    const editMachinery = (idMachinery) => {
        const machinery = machineries.find((machinery) => machinery.id === idMachinery)
        setMachinerySelect(machinery)
        setListAddMachinery(true)
    }

    const addUpdateMachinery = (idMachinery, data) => {
        const url = idMachinery ? `${apiMachinery} ${idMachinery}/` : apiMachinery;

        const request = idMachinery
            ? axios.put(url, data)
            : axios.post(url, data);

        request
            .then((response) => {
                const updatedMachinery = response.data;
                const machineryIndex = machineries.findIndex(
                    (machinery) => machinery.id === updatedMachinery.id
                );

                const updatedMachineries = [...machineries];
                if (machineryIndex !== -1) {
                    updatedMachineries[machineryIndex] = updatedMachinery;
                } else {
                    updatedMachineries.push(updatedMachinery);
                }

                setMachineries(updatedMachineries);
                setMachinerySelect(null);
                setListAddMachinery(null);
            })
            .catch((error) => {
                console.log(error);
            });
    };


    return (
        <Row className="justify-content-center">
            {
                listAddMachinery ?
                    <FormMachinery
                        machinery={machinerySelect}
                        onSubmit={addUpdateMachinery}
                        onCancel={() => (setMachinerySelect(null), setListAddMachinery(null))}
                    />
                    :
                    <TableMachinery
                        machineries={machineries}
                        componentNew={componentNew}
                        edit={editMachinery}
                        deleted={deleteMachinery}
                    />
            }

        </Row>
    )
}

export default Machinery