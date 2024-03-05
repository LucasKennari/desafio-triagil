const msg404 = {
       msgPaginaNaoEncontrada: {Error: "PÁGINA NÃO ENCONTRADA."},
       msgPokemonNaoEncontrado: { Mensagem: "POKEMON INFORMADO NÃO ENCONTRADO." },
       msgUserNaoEncontrado: { Mensagem: "USER INFORMADO NÃO ENCONTRADO" },
       msgTimeNaoEncontrado: { Mensagem: "NÃO POSSUI NENHUM TIME CADASTRADO." },
       msgPokemonNaoEncontrado: {Mensagem: "POKEMON NÃO ENCONTRADO"}
}
const msg400 = {
       msgCampoIncorreto: {Mensagem : "INSIRA O CAMPO POKEMONS DENTRO DE []."},
       msgCampos: { Mensagem: "VERIFIQUE SE TODOS OS CAMPOS FORAM PREENCHIDOS." },
       msgErrorAoAddPokemon: {Mensagem: "NÃO FOI POSSIVEL ADICIONAR OS POKEMONS" }
}


const errorMsg = {
       200: "OK",
       400: msg400,
       404: msg404,
       500: "ERROR INTERNO DO SERVIDOR."
}


module.exports = errorMsg