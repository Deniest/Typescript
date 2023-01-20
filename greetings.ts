@@ -0,0 +1,126 @@
const { constant } = require('lodash')

let arrayLength = 0
const arr1 = new Array(arrayLength)

const array1 = [42] //böyle yazarsam sadece 1 elemanlı array oluşur. içindeki 42
//ama şöyle bir örnek yaparsam :
const array2 = new Array(42) //burada ise sıfır elemanlı ama uzunluğu 42 olan
//bir array elde etmiş olurum.
//yani şöyle desek daha açıklayıcı :
//array1.length propertysini çağırırsam elde edeceğim çıktı : 1
//array2.length propertysini çağırırsam elde edeceğim çıktı : 42
//anlayacağımız üzere array2 de eleman değil sadece range'ini ayarlıyoruz.
//deneyelim :
console.log(array1.length) //çıktı 1
console.log(array2.length) //çıktı 42

//bir başka örnek deneyelim range belirtirken :
// const array3 = new Array(6.6)
//burada hata alacağız çünkü bir arrayın range'i ondalıklı sayı olamaz.

//Array.of metodu ile tek elemanlı bir listede oluşturabiliriz :
const wisenArray = Array.of(9.5)
//bunu diyerek tek elemanlı bir liste oluşturduk ve içeriği number tipinde 9.5
//ondan sonra tekrardan eleman ekleyebiliriz.
wisenArray.push(34) // anlayacağımız üzere bir kez oluşturduktan sonra klasik
//array metodlarımız bize gelmiş oluyor.
//ayrıca arraylerin propertylerine başka bir yoldanda erişebiliriz
//bir obje gibi davranabilirler :
let getLength = wisenArray['length']
console.log(getLength) //çıktı : 2

//populating array - elemanları çoğaltmak :
//bu örnekte ise boş bir array oluşturacağım ve index vererek bunların
//eleman sayılarını artıracağım.
const employees = []
employees[0] = 'can'
employees[1] = 'utah'
console.log(employees) //çıktı can , utah

//mesela indexe tam sayı değilde ondalıklı bir sayı girersek bu eleman oluşturulur
//fakat bu bir eleman gibi değilde object gibi davranacaktır.
//bir örnekte deneyelim, tekrar employees arrayini kullanacagım örnekte.
employees[3.3] = 'Amsterdam'
console.log(employees) //çıktımız : '3.3' : 'Amsterdam'
//hatta bunu bir mantıksal işlemle var mı yok mu diye kontrol edelim.
console.log(Object.hasOwn(employees, 3.3)) //Object nesnesinin içindeki hasOwn()
//functionunu kullanarak içinde var mı yok mu diye kontrol ettik ve true çıktı.

//Hatta bir arrayi illa boş açmak zorunda değiliz. Oluştururkende içinde objeler veya
//nesneler yaratarak kullanabiliriz.
const filledWith = new Array('can', 'utah', 'amsterdam', true)
console.log(filledWith) // çıktı : 'can', 'utah', 'amsterdam' , true

/* 
Ufak bir not : array.length propertysi her zaman pozitif bir değer döner çünkü 
ayrıca her zaman indexin aksine toplam sayıdan + 1 olarak döner ve üzerine matematiksel olarak ekler
mesela bir array açtık ve 3 elemanı var array[0],[1],[2] burada son indeximiz 2 
fakat biz bu arrayın uzunluğunu istediğimidze array.length ile çağırdığımız zaman
toplam index sayısına + 1 daha ekler ve gerçek uzunluğu bize verir.
Çünkü bütün indexler 0 dan başlar.
*/

//iterating over arrays : bütün listeyi gezmek
/* Mesela bir liste oluşturalım ve bu listedeki bütün elemanları gezelim.*/
const cats = ['cat1', 'cat2', 'cat3', 'cat4', 'cat5']
for (const iterator of cats) {
  //burada verdiğimiz iterator takma isim gibi düşünelim her bir elemanı ekrana yazdırmak için sürekli döner ve o isimi alır.
  console.log(iterator)
}

//farklı bir yoldan daha yazdırabiliriz bunların çok yolları var :
cats.forEach((cats) => console.log(cats))
//çıktılar : cat1 , cat2 ,cat3 ,cat4 ,cat5

//kısaca array methodları :
//mesela concat metodu kümeleri birleştirir gibi düşünelim.
//a kümesi ile b kümesini birleştireceğiz.
const a = [1, 2, 3, 4, 5, 6]
const b = [7, 8, 9, 10]
let result = a.concat(b)
console.log(result) //1 den 10 a kadar sayacaktır çünkü iki arrayi birleştirdik

//join metodu :
let joinedWith = a.join(' - ')
console.log(joinedWith)

//push metodu :
//arrayin sonuna yeni bir eleman ekler.
result.push(11)

//pop ise arrayin son elemanını siler.
result.pop() //11 eklemiştik az önce ve 11 silindi.

//shift ise arrayin başındaki elemanı siler
result.shift() //yani 1 elemanını sildik artık yeni eleman 2 den baslayacak.

//unshift ise arrayin başındakini silmez oraya yeni bir eleman ekler
result.unshift(44) //artık arrayin en başında 44 var.

//every metodu : geriye bir callback döndürür mesela arrayin içindeki bütün elemanlar
//number ise true döner bir tane bile ekstradan baska tip olursa false dönecektir.

function isNumber(value) {
  return typeof value === 'number'
}

let sonuc = a.every(isNumber)
console.log(sonuc) //burada true dönecek çünkü a arrayininin içindeki bütün elemanlar number

//karışık bir liste yapalım :
const mixedList = [2, 3, 4, 5, 'a', 'can', false]
let sonuc1 = mixedList.every(isNumber)
console.log(sonuc1) //bize false dönecektir çünkü her şey birbirine karışık tiplerde

//Some metodu :  bunda ise en azından bir tane şart sağlansa bile true dönecektir.
//yani az önce bir true sonuç dönmemiz için listedeki bütün elemanların aynı türde olması gerekirdi bir tane farklı tip olsa bile
//bize false dönüyordu.+++++++

//Örnekte görelim
//tekrar functionumuzu kullanacağım.

const mixedList2 = [2, 'can', 'mert', false]
let sonuc3 = mixedList2.some(isNumber)
console.log(sonuc3) //burada true dönüyor çünkü listenin içinde 1 tane bile number türünde eleman var.
++++++