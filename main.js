// const displayBook = document.querySelector('#container')
// const btn = document.querySelector('#submit')

// const myLibrary = [
//   {
//     title: 'Solo Leveling',
//     author: 'John Cena',
//     pageNumber: 179,
//     isRead: true,
//   },
//   {
//     title: 'Nano Machine',
//     author: 'Redhair Shanks',
//     pageNumber: 249,
//     isRead: true,
//   },
//   { title: 'Berserk', author: 'Gamachiftu', pageNumber: 599, isRead: false },
// ]

// function Book(title, author, pageNumber, isRead) {
//   this.title = title
//   this.author = author
//   this.pageNumber = pageNumber
//   this.isRead = isRead
// }

// const book1 = new Book('One Piece', 'Echie Oda', 1139, true)

// function showBooks() {
//   console.table(myLibrary)
//   displayBook.textContent = ''
//   for (let i = 0; i < myLibrary.length; i++) {
//     let newFeaturedDiv = document.createElement('div')
//     let newTitle = document.createElement('h2')
//     let newAuthor = document.createElement('h2')
//     let newPageNumber = document.createElement('h2')
//     let newIsRead = document.createElement('input')
//     newIsRead.type = 'checkbox'

//     let currentTitle = myLibrary[i].title
//     let currentAuthor = myLibrary[i].author
//     let currentPageNumber = myLibrary[i].pageNumber
//     let currentIsRead = myLibrary[i].isRead
//     newIsRead.checked = currentIsRead

//     newFeaturedDiv.classList.add('card')
//     newTitle.classList.add('book-title')
//     newAuthor.classList.add('book-author')
//     newPageNumber.classList.add('book-page-number')
//     if (currentIsRead) {
//       newIsRead.classList.add('book-is-Read')
//     }
//     // newIsRead.classList.add('book-is-Read')

//     newTitle.innerHTML = currentTitle
//     newAuthor.innerHTML = currentAuthor
//     newPageNumber.innerHTML = currentPageNumber
//     newIsRead.innerHTML = currentIsRead

//     newFeaturedDiv.appendChild(newTitle)
//     newFeaturedDiv.appendChild(newAuthor)
//     newFeaturedDiv.appendChild(newPageNumber)
//     newFeaturedDiv.appendChild(newIsRead)

//     // I want to append each div structure to the parent element
//     // the parent element is container
//     displayBook.append(newFeaturedDiv)
//   }
// }

// function addBookToLibrary() {
//   const form = document.querySelector('#form')
//   const myBook = new Book(
//     form[0].value,
//     form[1].value,
//     form[2].value,
//     form[3].checked
//   )

//   // console.log(myBook)
//   myLibrary.push(myBook)
//   // console.log(myLibrary)
// }

// btn.addEventListener('click', (e) => {
//   e.preventDefault()

//   addBookToLibrary()
//   showBooks()
// })

// showBooks()

// // console.table(myLibrary)

// const displayBook = document.querySelector('#container')
const rows = document.getElementById('rows')
const btn = document.querySelector('#submit')
const totalBooks = document.querySelector('#total-books')
const booksRead = document.querySelector('#books-read')
const booksUnread = document.querySelector('#books-unread')
const deleteAllBtn = document.querySelector('#deleteAllBtn')

let myLibrary = [
  {
    title: 'Solo Leveling',
    author: 'John Cena',
    pageNumber: 179,
    isRead: true,
  },
  {
    title: 'Nano Machine',
    author: 'Redhair Shanks',
    pageNumber: 249,
    isRead: true,
  },
  { title: 'Berserk', author: 'Gamachiftu', pageNumber: 599, isRead: false },
]

console.log(myLibrary.length)

function Book(title, author, pageNumber, isRead) {
  this.title = title
  this.author = author
  this.pageNumber = pageNumber
  this.isRead = isRead
}

const book1 = new Book('One Piece', 'Echie Oda', 1139, true)

function showBooks() {
  console.table(myLibrary)
  rows.textContent = ''
  for (let i = 0; i < myLibrary.length; i++) {
    let newRow = document.createElement('tr')
    let titleCell = document.createElement('td')
    let authorCell = document.createElement('td')
    let pageNumberCell = document.createElement('td')
    let isReadCell = document.createElement('td')
    let deleteBook = document.createElement('td')

    let currentTitle = myLibrary[i].title
    let currentAuthor = myLibrary[i].author
    let currentPageNumber = myLibrary[i].pageNumber
    let currentIsRead = myLibrary[i].isRead

    isReadCell.addEventListener('click', (e) => {
      e.preventDefault()
      if (currentIsRead) {
        currentIsRead = false
        myLibrary[i].isRead = currentIsRead
      } else {
        currentIsRead = true
        myLibrary[i].isRead = currentIsRead
      }
      bookReadChecker(myLibrary)
      showBooks()
    })

    deleteBook.addEventListener('click', (e) => {
      e.preventDefault()
      //deletes 1 item at index i
      myLibrary.splice(i, 1)
      bookReadChecker(myLibrary)
      showBooks()
    })

    titleCell.classList.add('book-title')
    authorCell.classList.add('book-author')
    pageNumberCell.classList.add('book-page-number')
    if (currentIsRead) {
      isReadCell.classList.add('book-is-Read')
    } else {
      isReadCell.classList.add('book-is-Unread')
    }
    deleteBook.classList.add('delete-book')

    titleCell.innerHTML = currentTitle
    authorCell.innerHTML = currentAuthor
    pageNumberCell.innerHTML = currentPageNumber
    isReadCell.textContent = ''
    deleteBook.textContent = ''

    newRow.append(titleCell)
    newRow.append(authorCell)
    newRow.append(pageNumberCell)
    newRow.append(isReadCell)
    newRow.append(deleteBook)

    rows.appendChild(newRow)
  }
}

function addBookToLibrary() {
  const form = document.querySelector('#form')
  const myBook = new Book(
    form[0].value,
    form[1].value,
    form[2].value,
    form[3].checked
  )

  myLibrary.push(myBook)
  bookReadChecker(myLibrary)

  form[0].value = ''
  form[1].value = ''
  form[2].value = ''
  form[3].checked = ''
}

btn.addEventListener('click', (e) => {
  e.preventDefault()

  addBookToLibrary()
  showBooks()
})

showBooks()

// need to have a to a count for each read and unread books in the array and then display it in the DOM

function bookReadChecker(arr) {
  let bookCountRead = 0
  let bookCountUnread = 0
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i].isRead)
    if (arr[i].isRead) {
      bookCountRead++
    } else {
      bookCountUnread++
    }
  }

  booksRead.textContent = bookCountRead
  booksUnread.textContent = bookCountUnread
  totalBooks.textContent = myLibrary.length
}

bookReadChecker(myLibrary)

deleteAllBtn.addEventListener('click', (e) => {
  e.preventDefault()
  console.log('delete All')
  myLibrary = []

  bookReadChecker(myLibrary)
  showBooks()
})
