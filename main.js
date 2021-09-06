$(document).ready(function () {

    $.ajax({
        type: 'GET',
        url: "https://www.feriadosapp.com/api/holidays.json",
        dataType: 'json',
        success: data => {
            let datos = data.data
            render(data.data)

            // console.log(data.data);
            // console.log(data.data[1].title);

            // for(let i in datos) {
            //     console.log(datos[i].title);
            //     document.writeln(`
            //     ${datos[i].date} - 
            //     ${datos[i].title} -
            //     ${datos[i].extra}
            //     `)
            // }


            // let txtHead = `
            //     <tr>
            //         <th scope="col">#</th>
            //         <th scope="col">Fecha</th>
            //         <th scope="col">Titulo</th>
            //         <th scope="col">Extra</th>
            //     </tr>           
            // `
            // console.log(txtHead);
            // $('#table__head').append(`${txtHead}`)










        }
    })


    let render = data => {
        let txtHead;
        let txtBody;
        let cont = 1;

        txtHead = `
        <tr>
            <th scope="col">#</th>
            
            <th scope="col">Mes</th>
            <th scope="col">Día</th>
            <th scope="col">Festividad</th>
            <th scope="col">Tipo</th>
            <th scope="col">Ley</th>
        </tr>`

        // let dateNew = fecha(data[0].date)
        for (let i in data) {

            let arregloFecha = data[i].date.split("-");
            let anio = arregloFecha[0];
            let mes = mesNombre(arregloFecha[1]-1);
            let dia = arregloFecha[2];

            // let dateNew = fecha(data[i].date)
            txtBody += `<
            <tr>
                <th scope="row">${cont}</th>
                
                <td>${mes}</td>
                <td>${dia}</td>
                <td>${data[i].title}</td>
                <td>${data[i].extra}</td>
                <td>${data[i].law}</td>
            </tr>`
            cont++
        }


        $('#table__head').append(txtHead)
        $('#table__body').append(txtBody)


    }

    let mesNombre = valor => {
        let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

        for(let i in meses) {
            if( i == valor){
                return meses[i]
            }
        }
    }

    let fecha = fecha => {

        let arregloFecha = fecha.split("-");
        let anio = arregloFecha[0];
        let mes = arregloFecha[1] - 1;
        let dia = arregloFecha[2];

        let fechaNew = new Date(anio, mes, dia);
        fechaNew = [fechaNew.getMonth() + 1]
        // let fechaNew = `${dia} - ${mes}`
        console.log(dia);
        console.log(mes);
        console.log(anio);
        console.log(fechaNew);

        return fechaNew

    }













}) // End document.ready