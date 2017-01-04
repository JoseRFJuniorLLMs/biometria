"use strict";
var Leitor = (function () {
    function Leitor(id, organograma_fk, macaddress, num_serie_leitor, setor, telefone, responsavel_matricula, nome_responsavel, status, licenca) {
        this.id = id;
        this.organograma_fk = organograma_fk;
        this.macaddress = macaddress;
        this.num_serie_leitor = num_serie_leitor;
        this.setor = setor;
        this.telefone = telefone;
        this.responsavel_matricula = responsavel_matricula;
        this.nome_responsavel = nome_responsavel;
        this.status = status;
        this.licenca = licenca;
    }
    return Leitor;
}());
exports.Leitor = Leitor;
//# sourceMappingURL=leitor.js.map