class Data{
    constructor(peso,dates,notes){
        this.peso = peso
        this.dates = dates
        this.notes = notes
    }
}

class ToShow{
    addList(data){
        const tablalist = document.getElementById('tabla-list')
        const div = document.createElement('div')
        div.innerHTML = `
        <div class="list-group mb-4">
            <a href="#!" class="list-group-item list-group-item-action active">
                <div class="d-flex w-100 justify-content-between">
                    <h4 class="mb-1">Peso: ${data.peso}Kg</h4>
                    <small>fecha: ${data.dates}</small>
                    <button type="button" class="btn btn-danger" name="delete">Delete</button>
                </div>
                <p class="mb-1">Notas: ${data.notes}</p>
            </a>
        </div>
        `
        tablalist.appendChild(div)
    }
    
    deleteList(div){
        if(div.name === 'delete'){
            div.parentElement.parentElement.parentElement.remove()
        }
    }

    resetForm(){
        document.getElementById('data-list').reset()
    }
}



/* Dom Events */
document.getElementById('data-list').addEventListener('submit', (e) =>{
    const peso = document.getElementById('peso').value
    const dates = document.getElementById('dates').value
    const notes = document.getElementById('notes').value
    
    const data = new Data(peso,dates,notes)
    const toshow = new ToShow()


    // Save data
    toshow.addList(data)
    toshow.resetForm()

    e.preventDefault()
})

document.getElementById('tabla-list').addEventListener('click', (e) =>{
    const toshow = new ToShow()
    toshow.deleteList(e.target)
    e.preventDefault()
})