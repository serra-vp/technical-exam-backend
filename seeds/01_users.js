/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("users").del();
  await knex("users").insert([
    {
      first_name: "John",
      last_name: "Doe",
      address: "Taguig City",
      post_code: "1081",
      contact_phone_number: "123",
      email: "johndoe@gmail.com",
      username: "johndoe",
      password: "$argon2id$v=19$m=65536,t=3,p=4$0tUgCVLOirA4dGI6Uwz9Dw$SoKGLQC4rLwFhjhr73EVqMINBO22ZwfgWrxR1o/yT+I",
    },
    {
      first_name: "Vincent Paul",
      last_name: "Serra",
      address: "Makati City",
      post_code: "1082",
      contact_phone_number: "123",
      email: "vpserra@gmail.com",
      username: "vpserra",
      password: "$argon2id$v=19$m=65536,t=3,p=4$0tUgCVLOirA4dGI6Uwz9Dw$SoKGLQC4rLwFhjhr73EVqMINBO22ZwfgWrxR1o/yT+I",
    },
  ]);
};
