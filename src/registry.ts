type User = { id: number; name: string }
 
export class Registry {
  private users = new Map<number, User>()
 
  addUser(user: User): void {
    if (!this.users.has(user.id)) {
      this.users.set(user.id, user)
    }
  }
 
  getUser(id: number): User | undefined {
    return this.users.get(id)
  }
}
