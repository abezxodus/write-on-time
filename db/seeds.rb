# # This file should contain all the record creation needed to seed the database with its default values.
# # The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
# #
# # Examples:
# #
# #   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
# #   Character.create(name: 'Luke', movie: movies.first)

# user5 = User.create!(first_name: "John", 
#                     last_name: "Smith", 
#                     username: "jsm456", 
#                     email: "testingwriteontime@gmail.com", 
#                     password: "Markdown3Spell!",
#                     streak_count: 0,
#                     total_projects: 1,
#                     total_assignments: 5,
#                     total_on_time: 4,
#                     total_late: 1,
#                     word_count: 2500,
#                     page_count: 5)

# project1 = Project.create!(name: "My Novel", description: "Finally getting around to writing my story.", user: user5, closeable: false)
# project2 = Project.create!(name: "Book of Poems", description: "A poem every week until I've got a book.", user: user5, closeable: false)
# project3 = Project.create!(name: "Weekly Blog", description: "Journaling, but online", open: false, user: user5)

# assignment1 = Assignment.create!(name: "Outline", due_date: "2022-11-01T00:00:00.000Z", note: "Figuring out the plot", email_reminder: true, text_reminder: true, open: false, past_due: true, project: project1)
# assignment2 = Assignment.create!(name: "Character Triangle", due_date: "2022-11-08T00:00:00.000Z", note: "Focus on surprising combination of character traits.", email_reminder: true, open: false, project: project1)
# assignment3 = Assignment.create!(name: "Chapter 1", due_date: "2022-11-15T00:00:00.000Z", note: "Want to focus on establishing a strong setting", page_count_req: "10", word_count_req: "5000", past_due: true, project: project1)
# assignment4 = Assignment.create!(name: "First Poem", due_date: "2022-11-08T00:00:00.000Z", open: false, project: project2)
# assignment5 = Assignment.create!(name: "Second Poem", due_date: "2022-11-15T00:00:00.000Z", open: false, project: project2)
# assignment6 = Assignment.create!(name: "Third Poem", due_date: "2022-12-22T00:00:00.000Z", project: project2)
# assignment7 = Assignment.create!(name: "First Blog", due_date: "2022-11-15T00:00:00.000Z", page_count_req: "5", word_count_req: "2500", open: false, project: project3)

# stat1 = Stat.first

# wordcounttimeline1 = WordCountTimeline.create!(submission_date: "2022-11-01T00:00:00.000Z", start_count: 0, new_word_count: 0, end_count: 0, stat: stat1)
# wordcounttimeline2 = WordCountTimeline.create!(submission_date: "2022-11-08T00:00:00.000Z", start_count: 0, new_word_count: 0, end_count: 0, stat: stat1)
# wordcounttimeline3 = WordCountTimeline.create!(submission_date: "2022-11-15T00:00:00.000Z", start_count: 0, new_word_count: 5000, end_count: 5000, stat: stat1)
# wordcounttimeline4 = WordCountTimeline.create!(submission_date: "2022-11-26T00:00:00.000Z", start_count: 5000, new_word_count: 0, end_count: 5000, stat: stat1)
# wordcounttimeline5 = WordCountTimeline.create!(submission_date: "2022-11-26T00:00:00.000Z", start_count: 5000, new_word_count: 0, end_count: 5000, stat: stat1)
# wordcounttimeline6 = WordCountTimeline.create!(submission_date: "2022-11-26T00:00:00.000Z", start_count: 5000, new_word_count: 0, end_count: 5000, stat: stat1)
# wordcounttimeline7 = WordCountTimeline.create!(submission_date: "2022-11-26T00:00:00.000Z", start_count: 5000, new_word_count: 0, end_count: 5000, stat: stat1)
# wordcounttimeline8 = WordCountTimeline.create!(submission_date: "2022-11-27T00:00:00.000Z", start_count: 5000, new_word_count: 400, end_count: 5400, stat: stat1)
# wordcounttimeline9 = WordCountTimeline.create!(submission_date: "2022-11-27T00:00:00.000Z", start_count: 5400, new_word_count: 5000, end_count: 10400, stat: stat1)
# wordcounttimeline10 = WordCountTimeline.create!(submission_date: "2022-11-27T00:00:00.000Z", start_count: 10400, new_word_count: 0, end_count: 10400, stat: stat1)
# wordcounttimeline11 = WordCountTimeline.create!(submission_date: "2022-11-27T00:00:00.000Z", start_count: 10400, new_word_count: 0, end_count: 10400, stat: stat1)
# wordcounttimeline12 = WordCountTimeline.create!(submission_date: "2022-11-27T00:00:00.000Z", start_count: 10400, new_word_count: 0, end_count: 10400, stat: stat1)
# wordcounttimeline13 = WordCountTimeline.create!(submission_date: "2022-11-29T00:00:00.000Z", start_count: 10400, new_word_count: 0, end_count: 10400, stat: stat1)
# wordcounttimeline14 = WordCountTimeline.create!(submission_date: "2022-11-29T00:00:00.000Z", start_count: 10400, new_word_count: 0, end_count: 10400, stat: stat1)
# wordcounttimeline15 = WordCountTimeline.create!(submission_date: "2022-11-29T00:00:00.000Z", start_count: 10400, new_word_count: 500, end_count: 10900, stat: stat1)
# wordcounttimeline16 = WordCountTimeline.create!(submission_date: "2022-11-29T00:00:00.000Z", start_count: 10900, new_word_count: 0, end_count: 10900, stat: stat1)
# wordcounttimeline17 = WordCountTimeline.create!(submission_date: "2022-11-29T00:00:00.000Z", start_count: 10900, new_word_count: 0, end_count: 10900, stat: stat1)
# wordcounttimeline18 = WordCountTimeline.create!(submission_date: "2022-11-29T00:00:00.000Z", start_count: 10900, new_word_count: 0, end_count: 10900, stat: stat1)
# wordcounttimeline19 = WordCountTimeline.create!(submission_date: "2022-11-29T00:00:00.000Z", start_count: 10900, new_word_count: 0, end_count: 10900, stat: stat1)
# wordcounttimeline20 = WordCountTimeline.create!(submission_date: "2022-11-29T00:00:00.000Z", start_count: 10900, new_word_count: 0, end_count: 10900, stat: stat1)
# wordcounttimeline21 = WordCountTimeline.create!(submission_date: "2022-11-29T00:00:00.000Z", start_count: 10900, new_word_count: 0, end_count: 10900, stat: stat1)
# wordcounttimeline22 = WordCountTimeline.create!(submission_date: "2022-11-30T00:00:00.000Z", start_count: 10900, new_word_count: 0, end_count: 10900, stat: stat1)
# wordcounttimeline23 = WordCountTimeline.create!(submission_date: "2022-11-30T00:00:00.000Z", start_count: 10900, new_word_count: 0, end_count: 10900, stat: stat1)
# wordcounttimeline24 = WordCountTimeline.create!(submission_date: "2022-11-30T00:00:00.000Z", start_count: 10900, new_word_count: 0, end_count: 10900, stat: stat1)
# wordcounttimeline25 = WordCountTimeline.create!(submission_date: "2022-11-30T00:00:00.000Z", start_count: 10900, new_word_count: 0, end_count: 10900, stat: stat1)
# wordcounttimeline26 = WordCountTimeline.create!(submission_date: "2022-11-30T00:00:00.000Z", start_count: 10900, new_word_count: 300, end_count: 11200, stat: stat1)
# wordcounttimeline27 = WordCountTimeline.create!(submission_date: "2022-11-30T00:00:00.000Z", start_count: 11200, new_word_count: 1000, end_count: 12200, stat: stat1)
# wordcounttimeline28 = WordCountTimeline.create!(submission_date: "2022-11-30T00:00:00.000Z", start_count: 12200, new_word_count: 140, end_count: 12340, stat: stat1)
# wordcounttimeline29 = WordCountTimeline.create!(submission_date: "2022-11-30T00:00:00.000Z", start_count: 12340, new_word_count: 600, end_count: 12940, stat: stat1)
# wordcounttimeline30 = WordCountTimeline.create!(submission_date: "2022-12-02T00:00:00.000Z", start_count: 12940, new_word_count: 100, end_count: 13040, stat: stat1)
# wordcounttimeline31 = WordCountTimeline.create!(submission_date: "2022-12-05T00:00:00.000Z", start_count: 13040, new_word_count: 0, end_count: 13040, stat: stat1)
# wordcounttimeline32 = WordCountTimeline.create!(submission_date: "2022-12-08T00:00:00.000Z", start_count: 13040, new_word_count: 2500, end_count: 15540, stat: stat1)
# wordcounttimeline33 = WordCountTimeline.create!(submission_date: "2022-12-09T00:00:00.000Z", start_count: 15540, new_word_count: 0, end_count: 15540, stat: stat1)
# wordcounttimeline34 = WordCountTimeline.create!(submission_date: "2022-12-13T00:00:00.000Z", start_count: 15540, new_word_count: 0, end_count: 15540, stat: stat1)
# wordcounttimeline35 = WordCountTimeline.create!(submission_date: "2022-12-14T00:00:00.000Z", start_count: 15540, new_word_count: 0, end_count: 15540, stat: stat1)
# wordcounttimeline36 = WordCountTimeline.create!(submission_date: "2022-12-23T00:00:00.000Z", start_count: 15540, new_word_count: 0, end_count: 15540, stat: stat1)
# pagecounttimeline1 = PageCountTimeline.create!(submission_date: "2022-11-01T00:00:00.000Z", start_count: 0, new_page_count: 0, end_count: 0, stat: stat1)
# pagecounttimeline2 = PageCountTimeline.create!(submission_date: "2022-11-08T00:00:00.000Z", start_count: 0, new_page_count: 0, end_count: 0, stat: stat1)
# pagecounttimeline3 = PageCountTimeline.create!(submission_date: "2022-11-15T00:00:00.000Z", start_count: 0, new_page_count: 10, end_count: 10, stat: stat1)
# pagecounttimeline4 = PageCountTimeline.create!(submission_date: "2022-11-26T00:00:00.000Z", start_count: 10, new_page_count: 0, end_count: 10, stat: stat1)
# pagecounttimeline5 = PageCountTimeline.create!(submission_date: "2022-11-26T00:00:00.000Z", start_count: 10, new_page_count: 0, end_count: 10, stat: stat1)
# pagecounttimeline6 = PageCountTimeline.create!(submission_date: "2022-11-26T00:00:00.000Z", start_count: 10, new_page_count: 0, end_count: 10, stat: stat1)
# pagecounttimeline7 = PageCountTimeline.create!(submission_date: "2022-11-26T00:00:00.000Z", start_count: 10, new_page_count: 0, end_count: 10, stat: stat1)
# pagecounttimeline8 = PageCountTimeline.create!(submission_date: "2022-11-27T00:00:00.000Z", start_count: 10, new_page_count: 1, end_count: 11, stat: stat1)
# pagecounttimeline9 = PageCountTimeline.create!(submission_date: "2022-11-27T00:00:00.000Z", start_count: 11, new_page_count: 10, end_count: 21, stat: stat1)
# pagecounttimeline10 = PageCountTimeline.create!(submission_date: "2022-11-27T00:00:00.000Z", start_count: 21, new_page_count: 0, end_count: 21, stat: stat1)
# pagecounttimeline11 = PageCountTimeline.create!(submission_date: "2022-11-27T00:00:00.000Z", start_count: 21, new_page_count: 0, end_count: 21, stat: stat1)
# pagecounttimeline12 = PageCountTimeline.create!(submission_date: "2022-11-27T00:00:00.000Z", start_count: 21, new_page_count: 0, end_count: 21, stat: stat1)
# pagecounttimeline13 = PageCountTimeline.create!(submission_date: "2022-11-29T00:00:00.000Z", start_count: 21, new_page_count: 120, end_count: 141, stat: stat1)
# pagecounttimeline14 = PageCountTimeline.create!(submission_date: "2022-11-29T00:00:00.000Z", start_count: 141, new_page_count: 0, end_count: 141, stat: stat1)
# pagecounttimeline15 = PageCountTimeline.create!(submission_date: "2022-11-29T00:00:00.000Z", start_count: 141, new_page_count: 1, end_count: 142, stat: stat1)
# pagecounttimeline16 = PageCountTimeline.create!(submission_date: "2022-11-29T00:00:00.000Z", start_count: 142, new_page_count: 0, end_count: 142, stat: stat1)
# pagecounttimeline17 = PageCountTimeline.create!(submission_date: "2022-11-29T00:00:00.000Z", start_count: 142, new_page_count: 0, end_count: 142, stat: stat1)
# pagecounttimeline18 = PageCountTimeline.create!(submission_date: "2022-11-29T00:00:00.000Z", start_count: 142, new_page_count: 0, end_count: 142, stat: stat1)
# pagecounttimeline19 = PageCountTimeline.create!(submission_date: "2022-11-29T00:00:00.000Z", start_count: 142, new_page_count: 0, end_count: 142, stat: stat1)
# pagecounttimeline20 = PageCountTimeline.create!(submission_date: "2022-11-29T00:00:00.000Z", start_count: 142, new_page_count: 0, end_count: 142, stat: stat1)
# pagecounttimeline21 = PageCountTimeline.create!(submission_date: "2022-11-29T00:00:00.000Z", start_count: 142, new_page_count: 0, end_count: 142, stat: stat1)
# pagecounttimeline22 = PageCountTimeline.create!(submission_date: "2022-11-30T00:00:00.000Z", start_count: 142, new_page_count: 0, end_count: 142, stat: stat1)
# pagecounttimeline23 = PageCountTimeline.create!(submission_date: "2022-11-30T00:00:00.000Z", start_count: 142, new_page_count: 0, end_count: 142, stat: stat1)
# pagecounttimeline24 = PageCountTimeline.create!(submission_date: "2022-11-30T00:00:00.000Z", start_count: 142, new_page_count: 0, end_count: 142, stat: stat1)
# pagecounttimeline25 = PageCountTimeline.create!(submission_date: "2022-11-30T00:00:00.000Z", start_count: 142, new_page_count: 0, end_count: 142, stat: stat1)
# pagecounttimeline26 = PageCountTimeline.create!(submission_date: "2022-11-30T00:00:00.000Z", start_count: 142, new_page_count: 1, end_count: 143, stat: stat1)
# pagecounttimeline27 = PageCountTimeline.create!(submission_date: "2022-11-30T00:00:00.000Z", start_count: 143, new_page_count: 2, end_count: 145, stat: stat1)
# pagecounttimeline28 = PageCountTimeline.create!(submission_date: "2022-11-30T00:00:00.000Z", start_count: 145, new_page_count: 1, end_count: 146, stat: stat1)
# pagecounttimeline29 = PageCountTimeline.create!(submission_date: "2022-11-30T00:00:00.000Z", start_count: 146, new_page_count: 1, end_count: 147, stat: stat1)
# pagecounttimeline30 = PageCountTimeline.create!(submission_date: "2022-12-02T00:00:00.000Z", start_count: 147, new_page_count: 2, end_count: 149, stat: stat1)
# pagecounttimeline31 = PageCountTimeline.create!(submission_date: "2022-12-05T00:00:00.000Z", start_count: 149, new_page_count: 1, end_count: 150, stat: stat1)
# pagecounttimeline32 = PageCountTimeline.create!(submission_date: "2022-12-08T00:00:00.000Z", start_count: 150, new_page_count: 5, end_count: 155, stat: stat1)
# pagecounttimeline33 = PageCountTimeline.create!(submission_date: "2022-12-09T00:00:00.000Z", start_count: 155, new_page_count: 0, end_count: 155, stat: stat1)
# pagecounttimeline34 = PageCountTimeline.create!(submission_date: "2022-12-13T00:00:00.000Z", start_count: 155, new_page_count: 0, end_count: 155, stat: stat1)
# pagecounttimeline35 = PageCountTimeline.create!(submission_date: "2022-12-14T00:00:00.000Z", start_count: 155, new_page_count: 0, end_count: 155, stat: stat1)
# pagecounttimeline36 = PageCountTimeline.create!(submission_date: "2022-12-23T00:00:00.000Z", start_count: 155, new_page_count: 0, end_count: 155, stat: stat1)
# submissionstreaktimeline1 = SubmissionStreakTimeline.create!(submission_date: "2022-11-01T00:00:00.000Z", start_count: 0, new_submission: true, end_count: 1, stat: stat1)
# submissionstreaktimeline2 = SubmissionStreakTimeline.create!(submission_date: "2022-11-08T00:00:00.000Z", start_count: 1, new_submission: true, end_count: 2, stat: stat1)
# submissionstreaktimeline3 = SubmissionStreakTimeline.create!(submission_date: "2022-11-15T00:00:00.000Z", start_count: 2, new_submission: true, end_count: 3, stat: stat1)
# submissionstreaktimeline4 = SubmissionStreakTimeline.create!(submission_date: "2022-11-26T00:00:00.000Z", start_count: 3, new_submission: true, end_count: 4, stat: stat1)
# submissionstreaktimeline5 = SubmissionStreakTimeline.create!(submission_date: "2022-11-26T00:00:00.000Z", start_count: 4, new_submission: true, end_count: 5, stat: stat1)
# submissionstreaktimeline6 = SubmissionStreakTimeline.create!(submission_date: "2022-11-26T00:00:00.000Z", start_count: 5, new_submission: true, end_count: 6, stat: stat1)
# submissionstreaktimeline7 = SubmissionStreakTimeline.create!(submission_date: "2022-11-26T00:00:00.000Z", start_count: 6, new_submission: true, end_count: 7, stat: stat1)
# submissionstreaktimeline8 = SubmissionStreakTimeline.create!(submission_date: "2022-11-27T00:00:00.000Z", start_count: 7, new_submission: true, end_count: 8, stat: stat1)
# submissionstreaktimeline9 = SubmissionStreakTimeline.create!(submission_date: "2022-11-27T00:00:00.000Z", start_count: 8, new_submission: true, end_count: 9, stat: stat1)
# submissionstreaktimeline10 = SubmissionStreakTimeline.create!(submission_date: "2022-11-27T00:00:00.000Z", start_count: 9, new_submission: true, end_count: 10, stat: stat1)
# submissionstreaktimeline11 = SubmissionStreakTimeline.create!(submission_date: "2022-11-27T00:00:00.000Z", start_count: 10, new_submission: true, end_count: 11, stat: stat1)
# submissionstreaktimeline12 = SubmissionStreakTimeline.create!(submission_date: "2022-11-27T00:00:00.000Z", start_count: 11, new_submission: true, end_count: 12, stat: stat1)
# submissionstreaktimeline13 = SubmissionStreakTimeline.create!(submission_date: "2022-11-29T00:00:00.000Z", start_count: 12, new_submission: true, end_count: 13, stat: stat1)
# submissionstreaktimeline14 = SubmissionStreakTimeline.create!(submission_date: "2022-11-29T00:00:00.000Z", start_count: 13, new_submission: true, end_count: 14, stat: stat1)
# submissionstreaktimeline15 = SubmissionStreakTimeline.create!(submission_date: "2022-11-29T00:00:00.000Z", start_count: 14, new_submission: true, end_count: 15, stat: stat1)
# submissionstreaktimeline16 = SubmissionStreakTimeline.create!(submission_date: "2022-11-29T00:00:00.000Z", start_count: 15, new_submission: true, end_count: 16, stat: stat1)
# submissionstreaktimeline17 = SubmissionStreakTimeline.create!(submission_date: "2022-11-29T00:00:00.000Z", start_count: 16, new_submission: false, end_count: 17, stat: stat1)
# submissionstreaktimeline18 = SubmissionStreakTimeline.create!(submission_date: "2022-11-29T00:00:00.000Z", start_count: 17, new_submission: true, end_count: 18, stat: stat1)
# submissionstreaktimeline19 = SubmissionStreakTimeline.create!(submission_date: "2022-11-29T00:00:00.000Z", start_count: 18, new_submission: true, end_count: 19, stat: stat1)
# submissionstreaktimeline20 = SubmissionStreakTimeline.create!(submission_date: "2022-11-29T00:00:00.000Z", start_count: 19, new_submission: true, end_count: 20, stat: stat1)
# submissionstreaktimeline21 = SubmissionStreakTimeline.create!(submission_date: "2022-11-29T00:00:00.000Z", start_count: 20, new_submission: true, end_count: 21, stat: stat1)
# submissionstreaktimeline22 = SubmissionStreakTimeline.create!(submission_date: "2022-11-30T00:00:00.000Z", start_count: 21, new_submission: true, end_count: 22, stat: stat1)
# submissionstreaktimeline23 = SubmissionStreakTimeline.create!(submission_date: "2022-11-30T00:00:00.000Z", start_count: 22, new_submission: true, end_count: 23, stat: stat1)
# submissionstreaktimeline24 = SubmissionStreakTimeline.create!(submission_date: "2022-11-30T00:00:00.000Z", start_count: 23, new_submission: true, end_count: 24, stat: stat1)
# submissionstreaktimeline25 = SubmissionStreakTimeline.create!(submission_date: "2022-11-30T00:00:00.000Z", start_count: 24, new_submission: true, end_count: 25, stat: stat1)
# submissionstreaktimeline26 = SubmissionStreakTimeline.create!(submission_date: "2022-11-30T00:00:00.000Z", start_count: 25, new_submission: true, end_count: 26, stat: stat1)
# submissionstreaktimeline27 = SubmissionStreakTimeline.create!(submission_date: "2022-11-30T00:00:00.000Z", start_count: 26, new_submission: true, end_count: 27, stat: stat1)
# submissionstreaktimeline28 = SubmissionStreakTimeline.create!(submission_date: "2022-11-30T00:00:00.000Z", start_count: 27, new_submission: true, end_count: 28, stat: stat1)
# submissionstreaktimeline29 = SubmissionStreakTimeline.create!(submission_date: "2022-11-30T00:00:00.000Z", start_count: 28, new_submission: true, end_count: 29, stat: stat1)
# submissionstreaktimeline30 = SubmissionStreakTimeline.create!(submission_date: "2022-12-02T00:00:00.000Z", start_count: 29, new_submission: true, end_count: 30, stat: stat1)
# submissionstreaktimeline31 = SubmissionStreakTimeline.create!(submission_date: "2022-12-05T00:00:00.000Z", start_count: 30, new_submission: false, end_count: 31, stat: stat1)
# submissionstreaktimeline32 = SubmissionStreakTimeline.create!(submission_date: "2022-12-08T00:00:00.000Z", start_count: 31, new_submission: true, end_count: 32, stat: stat1)
# submissionstreaktimeline33 = SubmissionStreakTimeline.create!(submission_date: "2022-12-09T00:00:00.000Z", start_count: 32, new_submission: true, end_count: 33, stat: stat1)
# submissionstreaktimeline34 = SubmissionStreakTimeline.create!(submission_date: "2022-12-13T00:00:00.000Z", start_count: 33, new_submission: true, end_count: 34, stat: stat1)
# submissionstreaktimeline35 = SubmissionStreakTimeline.create!(submission_date: "2022-12-14T00:00:00.000Z", start_count: 34, new_submission: true, end_count: 35, stat: stat1)
# submissionstreaktimeline36 = SubmissionStreakTimeline.create!(submission_date: "2022-12-23T00:00:00.000Z", start_count: 35, new_submission: true, end_count: 36, stat: stat1)