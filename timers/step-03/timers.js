function fullName() {
    this.name = 'moshe';
    this.last_name = 'rabenu';

    this.fname = function () {
        console.log('full name', this.name, this.last_name);
    }
}
export default fullName;