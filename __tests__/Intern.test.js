const { TestWatcher } = require("jest");
const Employee = require("../lib/Employee");
const Intern = require("../lib/Intern");

test("create intern object", () =>{
    const school = "UT";
    const employee = new Intern("Ron", 4, "ron@email.com", "intern", school);
    expect(employee.school).toBe(school)
})

test("return correct school", ()=>{
    const school = "UT";
    const employee = new Intern("Ron", 4, "ron@gmail.com", "intern", school)
    expect(employee.getSchool()).toBe(school);
})