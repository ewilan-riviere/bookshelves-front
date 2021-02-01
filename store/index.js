export const state = () => ({
  sidebarOpened: false,
  layerVisible: false,
  books: [],
  booksView: 'grid',
  navigation: [
    // { label: 'Home', icon: 'home', route: 'home' },
    { label: 'Books', icon: 'book-open', route: 'books' },
    { label: 'Series', icon: 'book-open', route: 'series' },
    { label: 'Authors', icon: 'annotation', route: 'authors' },
    { label: 'Guides', icon: 'annotation', route: 'guides' },
  ],
  booksNavigation: [
    { label: 'Books', icon: 'home', route: 'books' },
    { label: 'Series', icon: 'book-open', route: 'series' },
    { label: 'Authors', icon: 'annotation', route: 'authors' },
  ],
  design: ['bibliophile', 'book-lover', 'bookmark'],
})

export const mutations = {
  toggleSidebar(state, data) {
    state.sidebarOpened = !state.sidebarOpened
  },
  setBooksView(state, data) {
    state.booksView = data
  },
  setSidebar(state, data) {
    state.sidebarOpened = data
  },
  setLayer(state, data) {
    state.layerVisible = data
  },
  setBooks(state, data) {
    state.books = data
  },
  initializeStore() {
    // const bookView = localStorage.getItem('books-view')
    // console.log(bookView)
    // if (bookView) {
    //   state.bookView = 'grid'
    // }
  },
}