# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Answer.destroy_all
Question.destroy_all
User.destroy_all

# Create User

user1 = User.create(username: 'Lavy', email: 'lavy@test.com', password_digest: 'Lavy123', is_admin: true)

puts "#{User.count} users created"

# Create Question

question1 = Question.create(post: 'What are ruby datatypes?', user: user1)

puts "#{Question.count} questions created"


#Create Answer

answer1 = Answer.create(comment: 'Numbers, Strings, Symbols, Hashes, Arrays, Booleans', user: user1, question: question1)

puts "#{Answer.count} answers created"