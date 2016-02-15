//myAddStudentsFn
var myAddStudentsFn = function(student, year) {
    roster.year = student;
    return roster;
};




//for testing
var School = function() {
    var rosterList = {};
    this.roster = function() {
        return rosterList;
    };
    this.add = function(student, year) {
        if(!rosterList[year]){
            rosterList[year] = [];
        }
        rosterList[year].push(student);
        rosterList[year].sort();
    };
    this.grade = function(year) {
        if (rosterList[year] === undefined) {
            return [];
        }
        return rosterList[year].sort();
    };
};

module.exports = School;