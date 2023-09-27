type Student = {
  name: string;
  class: string;
  branch: string;
  rollNo: number;
  location: string;
  address: { village: string; pincode: number };
};

const student1: Student = {
  name: "ashishk",
  class: "b.tech",
  branch: "cs",
  rollNo: 1234,
  location: "sonebhadra",
  address: {
    village: "Muirpur",
    pincode: 11111111,
  },
};
const student2: Student = {
  name: "nitin",
  class: "b.tech",
  branch: "cs",
  rollNo: 12340,
  location: "sonebhadra",
  address: {
    village: "Muirpur",
    pincode: 22222222,
  },
};
const student3: Student = {
  name: "anju",
  class: "b.tech",
  branch: "cs",
  rollNo: 12343,
  location: "sonebhadra",
  address: {
    village: "Muirpur",
    pincode: 3333333,
  },
};
const student4: Student = {
  name: "ashishk",
  class: "b.tech",
  branch: "cs",
  rollNo: 12344,
  location: "sonebhadra",
  address: {
    village: "Muirpur",
    pincode: 4444444,
  },
};
const student5: Student = {
  name: "ashishk",
  class: "b.tech",
  branch: "cs",
  rollNo: 12345,
  location: "sonebhadra",
  address: {
    village: "Muirpur",
    pincode: 5555555,
  },
};
const p = student1.address.pincode;
console.log(p);
