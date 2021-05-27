# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Review.create([
    {customer_name: "Mary", content: "Example Text", date: "4/26/2021"}
])

Service.create([{
    name: "installation", description: "installed equipment", cost: 120
}])

# add more seed data for services. HArd code all the services since we're not adding a new one.