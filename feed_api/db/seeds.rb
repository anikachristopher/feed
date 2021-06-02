# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Review.create([
    {item_name: "Installation", customer_name: "Mary", content: "Example Text", date: "4/26/2021"}
])

Service.create([
    {name: "Equipment Installation", description: "Need it installed? We have the tools to complete your intallation qucikly, professionally, and less than our competitor!"},
    {name: "Customer Service", description: "We aim to provide the best in class customer service experience for our clients."},
    {name: "Repair Service", description: "We offer comprehensive repair services for all your equipment offerings"}
])

# add more seed data for services. HArd code all the services since we're not adding a new one.