function Grid() {
    return(
        <div className="grid grid-cols-12">
            <div className="col-span-1 bg-red-300 h-screen">Servidores</div>
            
            <div className="col-span-3 bg-blue-300 h-screen">Canais</div>

            <div className="col-span-6 bg-orange-300 h-screen">Feed de Mensagens</div>
            
            <div className="col-span-2 bg-green-300 h-screen">Area de Memes</div>
        </div>
    )
}

export default Grid