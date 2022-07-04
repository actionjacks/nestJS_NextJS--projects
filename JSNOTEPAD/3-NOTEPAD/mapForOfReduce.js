const arr = [23, 2332, 323, 23]
function sumOfAllNumbers(numbers = []) {
	let sum = 0
	numbers.map((number) => (sum += number))
	return sum
}
console.log(sumOfAllNumbers(arr))

const arr2 = [23, 2332, 323, 23]
function sumOfAllNumbers2(numbers = []) {
	let sum = 0
	for (const number of numbers) {
		sum += number
	}
	return sum
}
console.log(sumOfAllNumbers2(arr2))

const addScope = (a, b) => {
	let sum = 0
	for (; a <= b; a++) {
		sum += a
	}
	return sum
}
console.log(addScope(2, 10))

const arr3 = [23, 2332, 323, 23]
function sumOfAllNumbers3(numbers = []) {
	return numbers.reduce((prev, next) => {
		return prev + next
	})
}
console.log(sumOfAllNumbers3(arr3))

const arrayToReduce = [12.2, 32, 432, 23.2, 233]
// pierwszy elemnet, drogi element,index elementu w tablicy,
// array to cala tablica jaka poddajemy redyce
arrayToReduce.reduce((total, amount, index, array) => {
	total += amount //suma elementow
	if (index === array.length - 1) return total / array.length
	//jak dojdzie do ostatniego podziel sume przez ilosc wyjdzie srednia
	return total
})

const arrayToReduce2 = [11, 11, 32, 3, 4, 2, 1, 1, 2, 2]
//zwracaj nowa tablice bez duplikatow
const foo = arrayToReduce2.reduce((total, member) => {
	if (total.indexOf(member) === -1) total.push(member)
	return total
}, [])
console.log(foo)

const arrays = [
	[1.2, 23, 32, 23],
	[12, 3, 4],
]
arrays.reduce((total, arr) => total.concat(arr)) //polaczy 2 tablice

//taki mam
const formData = {
	name: 'jacek',
	billing_address_city: 'kopydlowo',
	billing_address_street: 'zakupki 12',
	shipping_address_city: 'sraka',
	shipping_address_street: 'wiesniakowa 2222',
}

Object.keys(formData).reduce((result, key) => {
	if (!key.match('_')) {
		result[key] = formData[key]
	} else {
		const newKey = key.split(/_([^_]*)$/)
		if (!result[newKey[0]]) result[newKey[0]] = {}
		result[(newKey[0][newKey[1]] = formData[key])]
	}
	return result
}, {})

//taki chce
// eslint-disable-next-line no-unused-vars
const result = {
	name: 'jacek',
	billing_address_city: { city: 'kopydlowo', street: 'zakupki 12' },
	shipping_address_street: { city: 'sraka', street: 'wiesniakowa 2222' },
}

//redyce
const items = [
	{ name: 'jacke', price: 5 },
	{ name: 'jacke2', price: 35 },
	{ name: 'jacke3', price: 335 },
	{ name: 'jacke4', price: 52 },
	{ name: 'jacke5', price: 15 },
]
const totalPrice = items.reduce((total, item) => {
	return total + item.price
}, 0)
console.log(totalPrice, 'total')

const groupedPeople = items.reduce((groupPeople, person) => {
	const price = person.price

	if (groupPeople[price] == null) {
		groupPeople[price] = []
	}
	groupPeople[price].push(person.name)
	return groupPeople
}, {})
console.log(groupedPeople)

const items2 = [
	{ name: 'jacke', price: 5, color: 'blue' },
	{ name: 'jacke2', price: 35, color: 'blue' },
	{ name: 'jacke3', price: 335, color: 'blue' },
	{ name: 'jacke4', price: 52, color: 'red' },
	{ name: 'jacke5', price: 15, color: 'red' },
]

const colorsCounter = items2.reduce((acc, cur) => {
	const color = cur.color
	if (acc[color]) {
		acc[color]++
	} else {
		acc[color] = 1
	}
	return acc
}, {})
console.log('==>', colorsCounter)

const dupa = [2, 2, 2, 2, 2].reduce((a, d) => a += d)
console.log(dupa)
