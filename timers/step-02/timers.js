const fullName = {
    name: 'Adi',
    last_name: 'Dan',
    fname: function () {
        console.log('my Full name: ', this.name, this.last_name);
    },
};

fullName.fname();
fullName.fname('app.js');
export default fullName;