# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
puts "Seeding People..."

Person.create!([
    {
        name: "David",
        nickname: "Databrains",
        date_of_birth: "1955-08-07",
        email: "",
        zipcode: 76248,
        spouse: "Rebecca",
        password: "123"
    }
])