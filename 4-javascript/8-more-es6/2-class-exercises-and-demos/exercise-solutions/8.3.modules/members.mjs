const members = [];

export class Member {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
}

export const addMember = member => {
  members.push(member);
  console.log('Member added to the list.');
};

export const showMembers = () => {
  console.log('Member list');

  let slNo = 1;
  members.forEach(({ name, email }) => {
    console.log(`(${slNo++}) Name: ${name}, Email: ${email}`);
  });
}
