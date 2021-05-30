
class Todo{
  constructor(data){
    this.description = data && data.description || "";
    this.completed = data && data.completed || false;
    this.date = data && data.date? Date.now(data.date): Date.now();
  }
}

module.exports = Todo;