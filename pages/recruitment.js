class Recruitment {
    get downloadButton(){
        return $('.oxd-table-cell-actions button:nth-of-type(3)')
    }
}

class Candidates extends Recruitment {

} 

class Vacancies extends Recruitment {

}

const recruitment = {
    recruitment: new Recruitment(),
    candidates: new Candidates(),
    vacancies: new Vacancies()
};

module.exports = recruitment;