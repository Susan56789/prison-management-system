class Prisoners {
    constructor(id, Fullname, DOB, datein, dateout, Address_,
         County, Gender, Education, MaritalStatus, Offence, Sentence, File_num, prison){
        this.id = id;
        this.Fullname = Fullname;
        this.DOB = DOB;
        this.datein = datein;
        this.dateout = dateout;
        this.Address_ = Address_;
        this.County = County;
        this.Gender = Gender;
        this.Education = Education;
        this.MaritalStatus = MaritalStatus;
        this.Offence = Offence;
        this.Sentence = Sentence;
        this.File_num = File_num;
        this.prison = prison;
    }
}

module.exports = Prisoners;