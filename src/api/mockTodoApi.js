const todo = [
  {
    id: 'cory-house',
    item: 'Faire la formation'
  },
  {
    id: 'scott-allen',
    item: 'Faire du done'
  },
  {
    id: 'dan-wahlin',
    item: ''
  }
];

class TodoApi {
  static getAllItems() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], todo));
      }, 300);
    });
  }
}

export default TodoApi;
