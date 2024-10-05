import toast from "react-hot-toast"

export const getItems = (name) => {
    const storedItems = localStorage.getItem(name)
    if (storedItems) {
        return JSON.parse(storedItems)
    }
    return []
}
export const savedItems = (name, book) => {
    const getBooks = getItems(name)
    const duplicate = getBooks.find(b => b.id === book.id)
    if(name==='wish'){
        const getReadBooks = getItems('read')
        if(getReadBooks.find(b=>b.id===book.id)){
            return toast.error('exists in read')
        }
        else if (duplicate) {
            return toast.error('Already exists')
        }
        else {
            getBooks.push(book)
            localStorage.setItem(name, JSON.stringify(getBooks))
            return toast.success('successful')
        }
    }
    else if (duplicate) {
        return toast.error('Already exists')
    }
    else {
        getBooks.push(book)
        localStorage.setItem(name, JSON.stringify(getBooks))
        return toast.success('successful')
    }


}
export const sortBy=(value,books)=>{
    if(value==='rating'){
        books.sort((a, b) => a.rating - b.rating);
    }
    else if(value==='pages'){
        books.sort((a, b) => a.progress - b.progress);
    }
    else{
        books.sort((a, b) => a.year_of_publishing - b.year_of_publishing);
    }
    
    return books
}