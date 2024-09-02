const dd = async () => {
  const newDhaka = await setInterval(() => {
    console.log("Dhaka");
  }, 5000);
  console.log(newDhaka);
  console.log("Hello Dhaka");
};

dd();
