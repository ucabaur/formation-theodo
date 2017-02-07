const todo = [
  {
    priority: 2,
    due_date: '08/02/2017',
    item: 'Faire la formation'
  },
  {
    priority: 1,
    due_date: '13/02/2017',
    item: 'Faire du done'
  },
  {
    priority: 0,
    due_date: '12/02/2017',
    item: 'Passer ma todo en prod'
  }
];

class TodoApi {
  static getAllItems() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], todo));
      }, 0);
    });
  }
}

export default TodoApi;
