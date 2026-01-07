const studentDetails = () => {
  console.log("Student Info");
  setTimeout(() => {
    let rollNo = [1, 2, 3, 4];
    console.log(rollNo);
    setTimeout(
      (rollNoo) => {
        const data = {
          name: "Pavan",
          qualification: "btech",
        };
        console.log(`name is ${data.name} qualification is ${data.qualification}
        rollNo ${rollNoo} `);
      },
      2000,
      rollNo[1]
    );
  }, 2000);
};
studentDetails();
