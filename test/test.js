const { expect } = require("chai")
const {
    sum,
    difference,
    product,
    quotient
} = require("../index")

describe("JavaScript Operators", () => {
    it("sum should be equal to 20", () => {
        expect(sum).to.equal(20)
    })
    it("difference should be equal to 5", () => {
        expect(difference).to.equal(5)
    })
    it("product should be equal to 16", () => {
        expect(product).to.equal(16)
    })
    it("quotient should be equal to 3", () => {
        expect(quotient).to.equal(2)
    })
})