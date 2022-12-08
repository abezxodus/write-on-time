# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_12_08_210253) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "assignments", force: :cascade do |t|
    t.string "name", null: false
    t.string "note"
    t.string "page_count_req", default: "0"
    t.string "word_count_req", default: "0"
    t.boolean "email_reminder", default: false
    t.boolean "text_reminder", default: false
    t.boolean "open", default: true, null: false
    t.boolean "past_due", default: false, null: false
    t.bigint "project_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.date "due_date", default: -> { "CURRENT_TIMESTAMP" }, null: false
    t.boolean "google_calendar", default: false, null: false
    t.index ["project_id"], name: "index_assignments_on_project_id"
  end

  create_table "badges", force: :cascade do |t|
    t.string "word_badge", default: "", null: false
    t.string "page_badge", default: "", null: false
    t.string "streak_badge", default: "", null: false
    t.string "total_assignments_badge", default: "", null: false
    t.string "on_time_assignments_badge", default: "", null: false
    t.bigint "stat_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["stat_id"], name: "index_badges_on_stat_id"
  end

  create_table "page_count_timelines", force: :cascade do |t|
    t.date "submission_date", default: -> { "CURRENT_TIMESTAMP" }, null: false
    t.integer "start_count", default: 0, null: false
    t.integer "new_page_count", default: 0, null: false
    t.integer "end_count", default: 0, null: false
    t.bigint "stat_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["stat_id"], name: "index_page_count_timelines_on_stat_id"
  end

  create_table "project_badges", force: :cascade do |t|
    t.string "word_badge", default: "", null: false
    t.string "page_badge", default: "", null: false
    t.string "streak_badge", default: "", null: false
    t.string "total_assignments_badge", default: "", null: false
    t.string "on_time_assignments_badge", default: "", null: false
    t.bigint "project_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["project_id"], name: "index_project_badges_on_project_id"
  end

  create_table "project_page_count_timelines", force: :cascade do |t|
    t.date "submission_date", default: -> { "CURRENT_TIMESTAMP" }, null: false
    t.integer "start_count", default: 0, null: false
    t.integer "new_page_count", default: 0, null: false
    t.integer "end_count", default: 0, null: false
    t.bigint "project_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["project_id"], name: "index_project_page_count_timelines_on_project_id"
  end

  create_table "project_stats", force: :cascade do |t|
    t.integer "assignments_open_on_track", default: 0, null: false
    t.integer "assignments_open_past_due", default: 0, null: false
    t.integer "assignments_closed_on_time", default: 0, null: false
    t.integer "assignments_closed_late", default: 0, null: false
    t.integer "total_word_count", default: 0, null: false
    t.integer "total_page_count", default: 0, null: false
    t.integer "submission_streak", default: 0, null: false
    t.bigint "project_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["project_id"], name: "index_project_stats_on_project_id"
  end

  create_table "project_submission_streak_timelines", force: :cascade do |t|
    t.date "submission_date", default: -> { "CURRENT_TIMESTAMP" }, null: false
    t.integer "start_count", default: 0, null: false
    t.boolean "new_submission", default: true, null: false
    t.integer "end_count", default: 0, null: false
    t.bigint "project_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["project_id"], name: "index_project_submission_streak_timelines_on_project_id"
  end

  create_table "project_word_count_timelines", force: :cascade do |t|
    t.date "submission_date", default: -> { "CURRENT_TIMESTAMP" }, null: false
    t.integer "start_count", default: 0, null: false
    t.integer "new_word_count", default: 0, null: false
    t.integer "end_count", default: 0, null: false
    t.bigint "project_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["project_id"], name: "index_project_word_count_timelines_on_project_id"
  end

  create_table "projects", force: :cascade do |t|
    t.string "name", null: false
    t.string "description"
    t.boolean "open", default: true, null: false
    t.bigint "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.boolean "closeable", default: false
    t.index ["user_id"], name: "index_projects_on_user_id"
  end

  create_table "stats", force: :cascade do |t|
    t.integer "projects_open", default: 0, null: false
    t.integer "projects_closed", default: 0, null: false
    t.integer "assignments_open_on_track", default: 0, null: false
    t.integer "assignments_open_past_due", default: 0, null: false
    t.integer "assignments_closed_on_time", default: 0, null: false
    t.integer "assignments_closed_late", default: 0, null: false
    t.integer "total_word_count", default: 0, null: false
    t.integer "total_page_count", default: 0, null: false
    t.integer "submission_streak", default: 0, null: false
    t.bigint "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_stats_on_user_id"
  end

  create_table "submission_streak_timelines", force: :cascade do |t|
    t.date "submission_date", default: -> { "CURRENT_TIMESTAMP" }, null: false
    t.integer "start_count", default: 0, null: false
    t.boolean "new_submission", default: true, null: false
    t.integer "end_count", default: 0, null: false
    t.bigint "stat_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["stat_id"], name: "index_submission_streak_timelines_on_stat_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name", default: "", null: false
    t.string "last_name", default: "", null: false
    t.string "username", default: "", null: false
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "phone_number"
    t.string "default_picture", default: "https://write-on-time.s3.amazonaws.com/logos/penIcon.png", null: false
    t.string "profile_picture"
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "streak_count", default: 0, null: false
    t.integer "total_projects", default: 0, null: false
    t.integer "total_assignments", default: 0, null: false
    t.integer "total_on_time", default: 0, null: false
    t.integer "total_late", default: 0, null: false
    t.integer "word_count", default: 0, null: false
    t.integer "page_count", default: 0, null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

  create_table "word_count_timelines", force: :cascade do |t|
    t.date "submission_date", default: -> { "CURRENT_TIMESTAMP" }, null: false
    t.integer "start_count", default: 0, null: false
    t.integer "new_word_count", default: 0, null: false
    t.integer "end_count", default: 0, null: false
    t.bigint "stat_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["stat_id"], name: "index_word_count_timelines_on_stat_id"
  end

end
