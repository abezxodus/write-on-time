# # This file should contain all the record creation needed to seed the database with its default values.
# # The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
# #
# # Examples:
# #
# #   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
# #   Character.create(name: 'Luke', movie: movies.first)



user4 = User.create!(first_name: "John", 
                    last_name: "Smith", 
                    username: "jsm456", 
                    email: "writeontimereminder@gmail.com", 
                    password: "Explorer96!",
                    streak_count: 0,
                    total_projects: 1,
                    total_assignments: 5,
                    total_on_time: 4,
                    total_late: 1,
                    word_count: 2500,
                    page_count: 5)

project1 = Project.create!(name: "My Novel", description: "Finally getting around to writing my story.", user: user4)
project2 = Project.create!(name: "Book of Poems", description: "A poem every week until I've got a book.", user: user4)
project3 = Project.create!(name: "Weekly Blog", description: "Journaling, but online", open: false, user: user4)

assignment1 = Assignment.create!(name: "Outline", due_date: "2022-11-01T00:00:00.000Z", note: "Figuring out the plot", email_reminder: true, text_reminder: true, open: false, past_due: true, project: project1)
assignment2 = Assignment.create!(name: "Character Triangle", due_date: "2022-11-08T00:00:00.000Z", note: "Focus on surprising combination of character traits.", email_reminder: true, open: false, project: project1)
assignment3 = Assignment.create!(name: "Chapter 1", due_date: "2022-11-15T00:00:00.000Z", note: "Want to focus on establishing a strong setting", page_count_req: "10", word_count_req: "5000", past_due: true, project: project1)
assignment4 = Assignment.create!(name: "First Poem", due_date: "2022-11-08T00:00:00.000Z", open: false, project: project2)
assignment5 = Assignment.create!(name: "Second Poem", due_date: "2022-11-15T00:00:00.000Z", open: false, project: project2)
assignment6 = Assignment.create!(name: "Third Poem", due_date: "2022-12-22T00:00:00.000Z", project: project2)
assignment7 = Assignment.create!(name: "First Blog", due_date: "2022-11-15T00:00:00.000Z", page_count_req: "5", word_count_req: "2500", open: false, project: project3)