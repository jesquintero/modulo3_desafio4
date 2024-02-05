
let nombreArchivo = document.location.href.split("/").slice(-1)[0]

const smoke_green = '<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>'
const smoke_red = '<p class="text-danger"><i class="fas fa-smoking-ban" aria-hidden="true"></i> No se permite fumar</p>'
const pets_green = '<p class="text-success"><i class="fas fa-paw" aria-hidden="true"></i> Mascotas permitidas</p>'
const pets_red = '<p class="text-danger"><i class="fa-solid fa-ban" aria-hidden="true"></i> No se permiten mascotas</p>'


if (nombreArchivo == 'index.html') {

    let ventas_row = document.getElementById('ventas_row')
    let alquiler_row = document.getElementById('alquiler_row')

    let venta_html = ""
    let alquiler_html = ""
    let cont_v = 0
    let cont_a = 0
    for (const prop of propiedades_venta) {

        if(cont_v < 3){
            let smoke = (prop.smoke) ? smoke_green : smoke_red;
            let pets = (prop.pets) ? pets_green : pets_red
            venta_html += `
            <div class="col-md-4 mb-4">
                <div class="card">
                <img
                    src=${prop.src}
                    class="card-img-top"
                    alt="Imagen del departamento"
                />
                <div class="card-body">
                    <h5 class="card-title">${prop.nombre}</h5>
                    <p class="card-text">
                    ${prop.descripcion}
                    </p>
                    <p>
                    <i class="fas fa-map-marker-alt"></i> ${prop.ubicacion}
                    </p>
                    <p>
                    <i class="fas fa-bed"></i> ${prop.habitaciones} Habitaciones 
                    </p>
                    <p><i class="fas fa-dollar-sign"></i> ${prop.costo}</p>
                    ${smoke}
                    ${pets}
                </div>
                </div>
            </div>
            `
            cont_v++
        } else {
            break
        }
    }

    for (const prop of propiedades_alquiler) {
        if(cont_a < 3){
            let smoke = (prop.smoke) ? smoke_green : smoke_red;
            let pets = (prop.pets) ? pets_green : pets_red
            alquiler_html += `
            <div class="col-md-4 mb-4">
                <div class="card">
                <img
                    src=${prop.src}
                    class="card-img-top"
                    alt="Imagen del departamento"
                />
                <div class="card-body">
                    <h5 class="card-title">${prop.nombre}</h5>
                    <p class="card-text">
                    ${prop.descripcion}
                    </p>
                    <p>
                    <i class="fas fa-map-marker-alt"></i> ${prop.ubicacion}
                    </p>
                    <p>
                    <i class="fas fa-bed"></i> ${prop.habitaciones} Habitaciones 
                    </p>
                    <p><i class="fas fa-dollar-sign"></i> ${prop.costo}</p>
                    ${smoke}
                    ${pets}
                </div>
                </div>
            </div>
            `
            cont_a++
        } else {
            break
        }
    }

    ventas_row.innerHTML = venta_html
    alquiler_row.innerHTML = alquiler_html
}


if (nombreArchivo == 'propiedades_venta.html') {
    let ventas_row_page = document.getElementById('ventas_row_page')
    let venta_html_page = ""

    for (const prop of propiedades_venta) {
        let smoke = (prop.smoke) ? smoke_green : smoke_red;
        let pets = (prop.pets) ? pets_green : pets_red
        venta_html_page += `
        <div class="col-md-4 mb-4">
            <div class="card">
            <img
                src=${prop.src}
                class="card-img-top"
                alt="Imagen del departamento"
            />
            <div class="card-body">
                <h5 class="card-title">${prop.nombre}</h5>
                <p class="card-text">
                ${prop.descripcion}
                </p>
                <p>
                <i class="fas fa-map-marker-alt"></i> ${prop.ubicacion}
                </p>
                <p>
                <i class="fas fa-bed"></i> ${prop.habitaciones} Habitaciones 
                </p>
                <p><i class="fas fa-dollar-sign"></i> ${prop.costo}</p>
                ${smoke}
                ${pets}
            </div>
            </div>
        </div>
        `
    }
    
    ventas_row_page.innerHTML = venta_html_page
    
} 

if (nombreArchivo == 'propiedades_alquiler.html') {
    let alquiler_row_page = document.getElementById('alquiler_row_page')
    let alquiler_html_page = ""

    for (const prop of propiedades_alquiler) {
        let smoke = (prop.smoke) ? smoke_green : smoke_red;
        let pets = (prop.pets) ? pets_green : pets_red
        alquiler_html_page += `
        <div class="col-md-4 mb-4">
            <div class="card">
            <img
                src=${prop.src}
                class="card-img-top"
                alt="Imagen del departamento"
            />
            <div class="card-body">
                <h5 class="card-title">${prop.nombre}</h5>
                <p class="card-text">
                ${prop.descripcion}
                </p>
                <p>
                <i class="fas fa-map-marker-alt"></i> ${prop.ubicacion}
                </p>
                <p>
                <i class="fas fa-bed"></i> ${prop.habitaciones} Habitaciones 
    
                </p>
                <p><i class="fas fa-dollar-sign"></i> ${prop.costo}</p>
                ${smoke}
                ${pets}
            </div>
            </div>
        </div>
        `
    }
    
    alquiler_row_page.innerHTML = alquiler_html_page
}