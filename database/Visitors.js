class Visitors {
    constructor(id, fullname, address_, dateofvisit, timein, timeout, relationship, telephone, prisoner){
       this.id = id;
       this.fullname = fullname;
       this.address_ = address_;
       this.dateofvisit = dateofvisit;
       this.timein = timein;
       this.timeout = timeout;
       this.relationship = relationship;
       this.telephone = telephone;
       this.prisoner = prisoner;
    }
}

module.exports = Visitors;